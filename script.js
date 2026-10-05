// ==================== 1. 初始化與全域設定 ====================
const pageStartTime = Date.now();
const NEXT_PAGE_URL = "post_survey.html"; // 結帳後導向之問卷或下一頁 URL

// ⚠️ 請填入您的 Gemini API Key (若為正式實驗，建議透過後端 Proxy 代理以防 Key 外洩)
const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || "").trim();
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

let selectionSequence = [];
let cart = [];
let currentPID = "";
let clickCount = parseInt(localStorage.getItem('siteClickCount')) || 0;

// 商品清單：30 個 ID (1 ~ 30)
const ALL_ITEMS = Array.from({ length: 30 }, (_, i) => i + 1);

// 取得受試者 ID (PID)
function getPID() {
    let pid = localStorage.getItem("participantID");
    if (!pid || pid.trim() === "") {
        pid = "P_" + Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("participantID", pid);
    }
    return pid.trim();
}

// ==================== 2. Google Gemini AI Nudge 生成 ====================
async function fetchGeminiNudge(cartItems) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_GEMINI_API_KEY" || cartItems.length === 0) {
        return;
    }

    const itemsSummary = cartItems.map(i => `${i.name} (Qty: ${i.quantity})`).join(", ");
    const promptText = `User current cart items: [${itemsSummary}]. Generate a 1-sentence persuasive, subtle e-commerce nudge in Traditional Chinese (繁體中文) to encourage completing checkout or exploring complementary items. Keep it under 30 words.`;

    try {
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }]
            })
        });

        const data = await response.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

        if (aiText) {
            localStorage.setItem('ai_nudge_text', aiText);

            // 若頁面有放置 AI 提示框容器 (如 #ai-nudge-box)，可自動渲染
            const nudgeBox = document.getElementById('ai-nudge-box');
            if (nudgeBox) {
                nudgeBox.innerText = aiText;
                nudgeBox.style.display = 'block';
            }
        }
    } catch (err) {
        console.warn("Gemini API Nudge generation skipped or failed:", err);
    }
}

// ==================== 3. 軌跡追蹤與序列記錄 ====================
function trackAddToCart(product, quantity = 1) {
    const sequenceItem = {
        step: selectionSequence.length + 1,
        productId: product.id,
        productName: product.name,
        quantity: quantity,
        timestamp: new Date().toISOString()
    };
    selectionSequence.push(sequenceItem);
}

function generateItemSequenceMap(seqArray) {
    const itemFirstOrder = {};
    if (Array.isArray(seqArray)) {
        seqArray.forEach((record) => {
            const pId = record.productId || record.id;
            const stepNum = record.step;
            if (pId && !itemFirstOrder.hasOwnProperty(pId)) {
                itemFirstOrder[pId] = stepNum;
            }
        });
    }

    const resultMap = {};
    ALL_ITEMS.forEach(itemId => {
        resultMap[`Seq_Item_${itemId}`] = itemFirstOrder.hasOwnProperty(itemId)
            ? itemFirstOrder[itemId]
            : "";
    });
    return resultMap;
}

// 點擊計數監聽
document.addEventListener('click', function () {
    clickCount++;
    localStorage.setItem('siteClickCount', clickCount);
});

// 停留時間與離開日誌
window.addEventListener('beforeunload', function () {
    const end = Date.now();
    const sec = Math.floor((end - pageStartTime) / 1000);
    const min = Math.floor(sec / 60);
    const s = sec % 60;

    const logObj = {
        participantID: currentPID || getPID(),
        enter: new Date(pageStartTime).toLocaleString(),
        leave: new Date(end).toLocaleString(),
        totalSecond: sec,
        durationFormatted: `${min}分${s}秒`
    };

    if (typeof db !== 'undefined') {
        db.ref('visit_logs').push(logObj);
    }
});

// ==================== 4. 購物車核心功能 ====================
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    updateCart();
    // 觸發 Gemini AI Nudge 更新
    fetchGeminiNudge(cart);
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += delta;
    if (delta > 0) {
        const product = typeof products !== 'undefined' ? products.find(p => p.id === id) : null;
        if (product) trackAddToCart(product, 1);
    }

    if (item.quantity <= 0) {
        removeItem(id);
    } else {
        updateCart();
        fetchGeminiNudge(cart);
    }
}

function removeItem(id) {
    const tempCart = [...cart];
    cart = cart.filter(i => i.id !== id);
    if (cart.length === 0 && tempCart.length > 0) {
        recordAbandon(tempCart);
    }
    updateCart();
}

function recordAbandon(cartData) {
    let sum = 0;
    cartData.forEach(i => sum += i.price * i.quantity);
    const items = cartData.map(i => ({ id: i.id, name: i.name, quantity: i.quantity, price: i.price }));
    const log = {
        participantID: currentPID || getPID(),
        abandonTime: new Date().toLocaleString(),
        cartItems: items,
        cartTotal: sum
    };

    if (typeof db !== 'undefined') {
        db.ref('abandon_carts').push(log);
    }
}

function updateCart() {
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsEl = document.getElementById('cart-items');
    const subTotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');

    let totalNum = 0;
    cart.forEach(i => totalNum += i.quantity);
    if (cartCountEl) cartCountEl.textContent = totalNum;

    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart">購物車目前為空。</p>';
    } else {
        cartItemsEl.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span>${item.name}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <div class="item-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                    <button onclick="removeItem(${item.id})">移除</button>
                </div>
            `;
            cartItemsEl.appendChild(div);
        });
    }

    let sum = 0;
    cart.forEach(i => sum += i.price * i.quantity);
    if (subTotalEl) subTotalEl.textContent = `$${sum.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${sum.toFixed(2)}`;
}

// ==================== 5. 結帳與資料寫入 Firebase ====================
async function handleCheckout() {
    if (cart.length === 0) {
        alert("購物車為空，無法進行結帳！");
        return;
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.innerText = "處理中...";
    }

    const durationInSeconds = Math.floor((Date.now() - pageStartTime) / 1000);
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    const formattedDuration = `${minutes}分 ${seconds}秒 (${durationInSeconds}秒)`;

    let total = 0;
    let featuredCnt = 0;

    const itemsArr = cart.map(item => {
        total += item.price * item.quantity;
        const prod = typeof products !== 'undefined' ? products.find(p => p.id === item.id) : null;
        if (prod && prod.isFeatured) featuredCnt += item.quantity;

        return {
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
        };
    });

    const itemSequenceMap = generateItemSequenceMap(selectionSequence);

    const checkoutFirebaseData = {
        participantID: currentPID || getPID(),
        checkoutTime: new Date().toLocaleString(),
        aiNudgeText: localStorage.getItem('ai_nudge_text') || "",
        durationSeconds: durationInSeconds,
        formattedDuration: formattedDuration,
        clickCount: clickCount,
        finalCartItems: itemsArr,
        selectionSequence: selectionSequence,
        itemSequenceMap: itemSequenceMap,
        featuredProductCount: featuredCnt,
        orderTotal: total
    };

    try {
        if (typeof db !== 'undefined') {
            await db.ref('checkout_records').push(checkoutFirebaseData);
        }
    } catch (error) {
        console.error("Firebase 寫入失敗:", error);
    }

    cart = [];
    selectionSequence = [];
    updateCart();

    if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.innerText = "結帳";
    }

    const completionModal = document.getElementById("checkoutCompletionModal");
    if (completionModal) {
        completionModal.style.display = "flex";
    } else {
        window.location.href = NEXT_PAGE_URL;
    }
}

function handleCheckoutModalConfirm() {
    window.location.href = NEXT_PAGE_URL;
}

// ==================== 6. DOM 事件綁定 ====================
document.addEventListener('DOMContentLoaded', function () {
    currentPID = getPID();

    // 歡迎彈窗關閉按鈕
    document.getElementById('closeModalBtn')?.addEventListener('click', function () {
        const modal = document.getElementById('welcomeModal');
        if (modal) modal.style.display = 'none';
    });

    // 分類篩選
    document.querySelectorAll('.cate-filter').forEach(item => {
        item.addEventListener('click', function () {
            const type = this.dataset.type;
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.display = (type === 'all' || card.dataset.type === type) ? 'block' : 'none';
            });
        });
    });

    // 加入購物車按鈕
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = typeof products !== 'undefined' ? products.find(p => p.id === productId) : null;

            if (product) {
                addToCart(product);
                trackAddToCart(product, 1);
            }
        });
    });

    // 清空購物車按鈕
    document.getElementById('clear-cart')?.addEventListener('click', function () {
        if (cart.length > 0) recordAbandon([...cart]);
        cart = [];
        updateCart();
    });

    // 結帳按鈕綁定
    document.getElementById('checkout-btn')?.addEventListener('click', handleCheckout);

    // 掛載全域函數供 HTML inline 呼叫
    window.changeQty = changeQty;
    window.removeItem = removeItem;
    window.handleCheckoutModalConfirm = handleCheckoutModalConfirm;

    updateCart();
});