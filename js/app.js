// TripStay 平台交互逻辑 app.js
const RETURN_SURVEY_URL = "index.html";
const urlParams = new URLSearchParams(window.location.search);

// 1. 读取实验自变量
const AUTONOMY_MODE = urlParams.get('autonomy') || localStorage.getItem('autonomy_mode') || 'low';
const RECOMMENDATION_MODE = urlParams.get('mode') || localStorage.getItem('recommendation_mode') || 'traditional';

// 默认传统推荐 4 星 Eco 酒店：香港东隅酒店 (ID: 21)
let RECOMMENDED_HOTEL_ID = parseInt(urlParams.get('recId')) || parseInt(localStorage.getItem('recommended_hotel_id')) || 21;

let currentHotels = typeof hotelsData !== 'undefined' ? [...hotelsData] : [];
let recommendedHotelObj = hotelsData.find(h => h.id === RECOMMENDED_HOTEL_ID) || hotelsData.find(h => h.id === 21) || hotelsData[0];
RECOMMENDED_HOTEL_ID = recommendedHotelObj.id;

let selectedHotel = null;
let selectedRoom = null;
let countdownTimer = null;

// 获取或生成 32 位 Participant ID
function getOrGenerate32PID() {
  let pid = localStorage.getItem("participantID");
  if (!pid || pid.trim().length !== 32) {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const timestamp14 = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    let random18 = '';
    for (let i = 0; i < 18; i++) {
      random18 += Math.floor(Math.random() * 10);
    }
    pid = timestamp14 + random18;
    localStorage.setItem("participantID", pid);
  }
  return pid;
}

const currentPID = getOrGenerate32PID();
let hasCopiedPID = false;

// 渲染中央弹窗与右下角浮动弹窗中的推荐酒店数据
function populateRecommendationData() {
  if (!recommendedHotelObj) return;

  const starsStr = '⭐'.repeat(recommendedHotelObj.stars);

  // 1. 填充中央弹窗基本数据
  document.getElementById("modalRecHeaderTitle").innerText = `为您精心甄选：${recommendedHotelObj.name}`;
  document.getElementById("modalRecHeaderSubtitle").innerText = `坐落${recommendedHotelObj.region}核心地段 • ${recommendedHotelObj.distance}`;
  document.getElementById("modalRecHotelImg").src = recommendedHotelObj.images[0];
  document.getElementById("modalRecHotelStars").innerText = `${starsStr} ${recommendedHotelObj.stars}星级`;
  document.getElementById("modalRecHotelName").innerText = recommendedHotelObj.name;
  document.getElementById("modalRecHotelLoc").innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${recommendedHotelObj.location}`;
  document.getElementById("modalRecHotelScore").innerText = `${recommendedHotelObj.rating.toFixed(1)}分 ${recommendedHotelObj.verdict}`;
  document.getElementById("modalRecHotelPrice").innerText = recommendedHotelObj.price.toLocaleString();

  // 2. 显示并填充推荐酒店的 eco 环保认证信息
  const ecoBox = document.getElementById("modalRecEcoBox");
  const ecoText = document.getElementById("modalRecEcoText");
  if (ecoBox && ecoText) {
    if (recommendedHotelObj.eco && recommendedHotelObj.eco.trim() !== "") {
      ecoText.innerHTML = `<strong>可持续发展与绿色认证：</strong>${recommendedHotelObj.eco}`;
      ecoBox.style.display = "block";
    } else {
      ecoBox.style.display = "none";
    }
  }

  // 3. 填充右下角悬浮窗
  document.getElementById("floatingRecHotelImg").src = recommendedHotelObj.images[0];
  document.getElementById("floatingRecHotelStars").innerText = `${starsStr} ${recommendedHotelObj.stars}星`;
  document.getElementById("floatingRecHotelName").innerText = recommendedHotelObj.name;
  document.getElementById("floatingRecHotelLoc").innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${recommendedHotelObj.region} (${recommendedHotelObj.district})`;
  document.getElementById("floatingRecHotelPrice").innerText = `HK$ ${recommendedHotelObj.price.toLocaleString()}`;
  document.getElementById("floatingRecHotelScore").innerText = `/晚起 (${recommendedHotelObj.rating.toFixed(1)}分)`;
}

// 根据 Autonomy 设定配置 UI (Low vs. High)
function setupConditionUI() {
  const skipBtn = document.getElementById("btnSkipRecommend");
  const topCloseBtn = document.getElementById("btnRecommendTopClose");
  const countdownText = document.getElementById("recommendCountdownText");
  const floatingCloseBtn = document.getElementById("btnFloatingClose");

  if (AUTONOMY_MODE === "low") {
    // ================= LOW AUTONOMY =================
    skipBtn.style.display = "none";
    countdownText.style.display = "block";

    topCloseBtn.className = "recommend-top-close-btn autonomy-low";
    topCloseBtn.style.display = "none";

    floatingCloseBtn.className = "floating-popup-close autonomy-low";

    let timeLeft = 15;
    countdownText.innerText = `推荐浏览中 (${timeLeft}s)`;

    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        countdownText.innerText = `推荐浏览中 (${timeLeft}s)`;
      } else {
        clearInterval(countdownTimer);
        countdownText.style.display = "none";
        topCloseBtn.style.display = "block";
      }
    }, 1000);

  } else {
    // ================= HIGH AUTONOMY =================
    if (countdownTimer) clearInterval(countdownTimer);
    countdownText.style.display = "none";
    skipBtn.style.display = "block";
    skipBtn.disabled = false;
    skipBtn.innerText = `略过推荐，浏览全部 ${hotelsData.length} 间酒店`;

    // 鲜红大圆底叉号，醒目易见
    topCloseBtn.className = "recommend-top-close-btn autonomy-high";
    topCloseBtn.style.display = "flex";

    floatingCloseBtn.className = "floating-popup-close autonomy-high";
    floatingCloseBtn.style.display = "flex";
  }
}

// 更新筛选器侧边栏数量统计
function updateFilterCounts() {
  if (typeof hotelsData === 'undefined' || !hotelsData.length) return;

  let regHK = 0, regKL = 0, regNT = 0;
  let star5 = 0, star4 = 0, star3 = 0, star2 = 0;
  let r95 = 0, r90 = 0, r85 = 0, r80 = 0;
  let bfast = 0, pBath = 0, pool = 0, cancel = 0, gym = 0;
  let shuttle = 0, parking = 0;
  let tagTransport = 0, tagMetro = 0, tagHarbour = 0, tagAttraction = 0;

  hotelsData.forEach(hotel => {
    if (hotel.region === "港岛") regHK++;
    else if (hotel.region === "九龙") regKL++;
    else if (hotel.region === "新界") regNT++;

    if (hotel.stars === 5) star5++;
    else if (hotel.stars === 4) star4++;
    else if (hotel.stars === 3) star3++;
    else if (hotel.stars === 2) star2++;

    if (hotel.rating === 9.5) r95++;
    else if (hotel.rating === 9.0) r90++;
    else if (hotel.rating === 8.5) r85++;
    else if (hotel.rating === 8.0) r80++;

    if (hotel.hasBreakfast) bfast++;
    if (hotel.hasPrivateBath) pBath++;
    if (hotel.hasPool) pool++;
    if (hotel.hasCancel) cancel++;
    if (hotel.hasGym) gym++;
    if (hotel.hasAirportShuttle) shuttle++;
    if (hotel.hasFreeParking) parking++;

    if (hotel.locationTags && Array.isArray(hotel.locationTags)) {
      if (hotel.locationTags.includes("近机场/高铁站")) tagTransport++;
      if (hotel.locationTags.includes("近地铁站")) tagMetro++;
      if (hotel.locationTags.includes("近维港")) tagHarbour++;
      if (hotel.locationTags.includes("近特色景点")) tagAttraction++;
    }
  });

  document.getElementById("count-region-hk").innerText = `(${regHK})`;
  document.getElementById("count-region-kl").innerText = `(${regKL})`;
  document.getElementById("count-region-nt").innerText = `(${regNT})`;

  document.getElementById("count-star-5").innerText = `(${star5})`;
  document.getElementById("count-star-4").innerText = `(${star4})`;
  document.getElementById("count-star-3").innerText = `(${star3})`;
  if (document.getElementById("count-star-2")) {
    document.getElementById("count-star-2").innerText = `(${star2})`;
  }

  document.getElementById("count-rating-95").innerText = `(${r95})`;
  document.getElementById("count-rating-90").innerText = `(${r90})`;
  document.getElementById("count-rating-85").innerText = `(${r85})`;
  document.getElementById("count-rating-80").innerText = `(${r80})`;

  document.getElementById("count-breakfast").innerText = `(${bfast})`;
  document.getElementById("count-privateBath").innerText = `(${pBath})`;
  document.getElementById("count-pool").innerText = `(${pool})`;
  document.getElementById("count-cancel").innerText = `(${cancel})`;
  document.getElementById("count-gym").innerText = `(${gym})`;
  if (document.getElementById("count-shuttle")) {
    document.getElementById("count-shuttle").innerText = `(${shuttle})`;
  }
  if (document.getElementById("count-parking")) {
    document.getElementById("count-parking").innerText = `(${parking})`;
  }

  if (document.getElementById("count-tag-transport")) {
    document.getElementById("count-tag-transport").innerText = `(${tagTransport})`;
  }
  if (document.getElementById("count-tag-metro")) {
    document.getElementById("count-tag-metro").innerText = `(${tagMetro})`;
  }
  if (document.getElementById("count-tag-harbour")) {
    document.getElementById("count-tag-harbour").innerText = `(${tagHarbour})`;
  }
  if (document.getElementById("count-tag-attraction")) {
    document.getElementById("count-tag-attraction").innerText = `(${tagAttraction})`;
  }
}

// 渲染酒店列表 (取消推荐酒店置顶，按当前用户排序顺序列出)
function renderHotelList(hotels) {
  const container = document.getElementById("hotelListContainer");
  document.getElementById("hotelCount").innerText = `${hotels.length} 间香港精选酒店`;

  if (hotels.length === 0) {
    container.innerHTML = `
        <div style="background:white; padding:3.5rem 1.5rem; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
          <i class="fa-solid fa-hotel" style="font-size:3rem; color:#cbd5e1; margin-bottom:1rem;"></i>
          <h3 style="font-size:1.15rem; font-weight:700; color:#475569;">未找到符合当前条件的酒店</h3>
          <p style="font-size:0.85rem; color:#94a3b8; margin-top:0.4rem;">请尝试调高价格上限或放宽筛选条件查看更多选项</p>
          <button class="sort-btn active" style="margin-top:1rem;" onclick="resetFilters()">重置所有筛选条件</button>
        </div>
      `;
    return;
  }

  container.innerHTML = hotels.map(hotel => {
    const isTopRecommend = (hotel.id === RECOMMENDED_HOTEL_ID);
    const hasEco = hotel.eco && hotel.eco.trim() !== "";
    const locTags = hotel.locationTags || [];

    return `
      <div class="hotel-card ${isTopRecommend ? 'featured-recommendation' : ''}">
        ${isTopRecommend ? `
          <div class="top-recommend-banner">
            <span><i class="fa-solid fa-crown"></i> 平台今日独家尊享主推 • 专属匹配优选</span>
            <span><i class="fa-solid fa-fire"></i> 98% 住客选择并好评</span>
          </div>
        ` : ''}

        <div class="hotel-image-col">
          <img src="${hotel.images[0]}" alt="${hotel.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';">
          ${isTopRecommend ? `
            <div class="tag-deal" style="background:#d97706;">
              ⭐ 今日主推特选
            </div>
          ` : ''}
        </div>

        <div class="hotel-info-col">
          <div class="hotel-header-info">
            <div class="hotel-stars">
              ${'⭐'.repeat(hotel.stars)}
              <span style="font-size:0.75rem; color:#64748b; font-weight:600; margin-left:4px;">${hotel.stars} 星级酒店 • ${hotel.region} (${hotel.district})</span>
            </div>
            <h2 class="hotel-title" style="${isTopRecommend ? 'color:#1e3a8a;' : ''}">${hotel.name}</h2>
            <div class="hotel-location">
              <i class="fa-solid fa-location-dot"></i>
              <span>${hotel.location} • <strong style="color:#0284c7;">${hotel.distance}</strong></span>
            </div>
          </div>

          <div class="hotel-badges">
            ${isTopRecommend ? '<span class="badge-pill gold-star"><i class="fa-solid fa-crown"></i> 官方主推</span>' : '<span class="badge-pill featured"><i class="fa-solid fa-award"></i> TripStay 优选</span>'}
            ${hasEco ? '<span class="badge-pill eco-pill"><i class="fa-solid fa-leaf"></i> 绿色环保认证</span>' : ''}
            ${locTags.map(tag => `<span class="badge-pill loc-pill"><i class="fa-solid fa-map-pin"></i> ${tag}</span>`).join('')}
            ${hotel.hasPrivateBath ? '<span class="badge-pill"><i class="fa-solid fa-bath"></i> 独立卫浴/浴缸</span>' : '<span class="badge-pill"><i class="fa-solid fa-shower"></i> 标准淋浴间</span>'}
            ${hotel.hasBreakfast ? '<span class="badge-pill"><i class="fa-solid fa-utensils"></i> 含免费早餐</span>' : ''}
            ${hotel.hasPool ? '<span class="badge-pill"><i class="fa-solid fa-person-swimming"></i> 室外泳池</span>' : ''}
            ${hotel.hasGym ? '<span class="badge-pill"><i class="fa-solid fa-dumbbell"></i> 健身中心</span>' : ''}
            ${hotel.hasAirportShuttle ? '<span class="badge-pill"><i class="fa-solid fa-van-shuttle"></i> 机场接送/穿梭巴</span>' : ''}
            ${hotel.hasFreeParking ? '<span class="badge-pill"><i class="fa-solid fa-square-parking"></i> 免费泊车</span>' : ''}
          </div>

          ${hasEco ? `
            <div class="hotel-eco-row">
              <i class="fa-solid fa-seedling"></i>
              <div><strong>可持续发展与环保：</strong>${hotel.eco}</div>
            </div>
          ` : ''}

          <div class="hotel-perks">
            ${hotel.hasCancel ? '<div><i class="fa-solid fa-circle-check"></i> 提供限时免费取消政策</div>' : '<div style="color:#64748b;"><i class="fa-solid fa-circle-info"></i> 特惠不可退订房型</div>'}
            <div><i class="fa-solid fa-bolt"></i> 即时出票确认 • 无跨境交易手续费</div>
          </div>
        </div>

        <div class="hotel-pricing-col" style="${isTopRecommend ? 'background:#fffdfa;' : ''}">
          <div class="review-score-box">
            <div class="review-text">
              <div class="review-verdict" style="${isTopRecommend ? 'color:#d97706;' : ''}">${hotel.verdict}</div>
              <div class="review-sub">${hotel.reviewCount.toLocaleString()} 条真实住客评价</div>
            </div>
            <div class="score-badge ${isTopRecommend ? 'gold-score' : ''}">${hotel.rating.toFixed(1)}</div>
          </div>

          <div class="price-container">
            <div class="original-price">HK$ ${hotel.originalPrice.toLocaleString()}</div>
            <div>
              <span class="currency-symbol">HK$ </span>
              <span class="main-price">${hotel.price.toLocaleString()}</span>
              <span style="font-size:0.8rem; color:#64748b;"> /每晚起</span>
            </div>
            <div class="price-note">包含税费与服务附加费</div>
          </div>

          <button class="btn-select-room ${isTopRecommend ? 'gold-btn' : ''}" onclick="openRoomModal(${hotel.id})">
            <span>${isTopRecommend ? '查看主推房型' : '查看房型'}</span>
            <i class="fa-solid fa-chevron-right" style="font-size:0.8rem;"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function acceptRecommendation(hotelId) {
  const targetId = hotelId || RECOMMENDED_HOTEL_ID;
  if (countdownTimer) clearInterval(countdownTimer);
  dismissRecommendation();
  closeFloatingPopup();
  openRoomModal(targetId);
}

function dismissRecommendation() {
  if (countdownTimer) clearInterval(countdownTimer);
  document.getElementById("entryRecommendModal").classList.remove("active");
}

function closeFloatingPopup() {
  document.getElementById("floatingRecommendPopup").classList.remove("active");
}

// 展开房型弹窗
function openRoomModal(hotelId) {
  selectedHotel = hotelsData.find(h => h.id === hotelId);
  if (!selectedHotel) return;

  document.getElementById("modalHotelTitle").innerText = selectedHotel.name;

  const subtitleEl = document.getElementById("modalHotelSubtitle");
  if (selectedHotel.eco) {
    subtitleEl.innerHTML = `${selectedHotel.region} (${selectedHotel.district}) • ${selectedHotel.location}<br>
      <span style="display:inline-block; margin-top:4px; color:#047857; font-weight:600;"><i class="fa-solid fa-leaf"></i> ${selectedHotel.eco}</span>`;
  } else {
    subtitleEl.innerText = `${selectedHotel.region} (${selectedHotel.district}) • ${selectedHotel.location}`;
  }

  const hotelImgEl = document.getElementById("modalHotelFeaturedImg");
  if (hotelImgEl) {
    hotelImgEl.src = selectedHotel.images[0];
    hotelImgEl.alt = selectedHotel.name;
  }
  const hotelStarsEl = document.getElementById("modalHotelFeaturedStars");
  if (hotelStarsEl) {
    hotelStarsEl.innerText = `${'⭐'.repeat(selectedHotel.stars)} ${selectedHotel.stars} 星级酒店`;
  }
  const hotelNameEl = document.getElementById("modalHotelFeaturedName");
  if (hotelNameEl) {
    hotelNameEl.innerText = selectedHotel.name;
  }
  const hotelLocEl = document.getElementById("modalHotelFeaturedLoc");
  if (hotelLocEl) {
    hotelLocEl.innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${selectedHotel.location}`;
  }

  const roomList = document.getElementById("modalRoomList");
  roomList.innerHTML = selectedHotel.rooms.map(room => `
      <div class="room-card">
        <div class="room-info-box">
          <div class="room-title">${room.name}</div>

          <div class="room-metadata-grid">
            <div class="room-meta-item">
              <i class="fa-solid fa-vector-square"></i>
              <span>面积：<strong>${room.size}</strong></span>
            </div>
            <div class="room-meta-item">
              <i class="fa-solid fa-bed"></i>
              <span>床型：<strong>${room.bed}</strong></span>
            </div>
            <div class="room-meta-item" style="grid-column: span 2;">
              <i class="fa-solid fa-bath"></i>
              <span>浴室：<strong>${room.bathroom}</strong></span>
            </div>
            <div class="room-meta-item" style="grid-column: span 2;">
              <i class="fa-solid fa-utensils"></i>
              <span>早餐礼遇：<strong>${room.breakfast}</strong></span>
            </div>
            <div class="room-meta-item">
              <i class="fa-solid fa-wifi"></i>
              <span>高速 Wi-Fi：<strong>免费提供</strong></span>
            </div>
            <div class="room-meta-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>地区：<strong>${selectedHotel.region} - ${selectedHotel.district}</strong></span>
            </div>
          </div>

          <div class="room-benefits">
            <div class="room-benefit-item"><i class="fa-solid fa-circle-check"></i> ${room.cancel}</div>
            <div class="room-benefit-item muted"><i class="fa-regular fa-clock"></i> 视房态可享延迟至下午 14:00 退房</div>
          </div>
        </div>

        <div class="room-booking-box">
          <div class="room-price-info">
            <span class="room-orig-price">HK$ ${(room.origPrice * 2).toLocaleString()}</span>
            <div>
              <span style="font-size:0.85rem; font-weight:700; color:var(--accent);">HK$ </span>
              <span class="room-now-price">${(room.price * 2).toLocaleString()}</span>
            </div>
            <span style="font-size:0.72rem; color:var(--text-light);">2晚总价 (含税费)</span>
          </div>
          <button class="btn-book-room" onclick="openCheckoutModal('${room.id}')">
            立即预订 <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');

  document.getElementById("roomModal").classList.add("active");
}

function closeRoomModal() {
  document.getElementById("roomModal").classList.remove("active");
}

function openCheckoutModal(roomId) {
  selectedRoom = selectedHotel.rooms.find(r => r.id === roomId);
  if (!selectedRoom) return;

  closeRoomModal();

  document.getElementById("checkoutHotelName").innerText = selectedHotel.name;
  document.getElementById("checkoutRoomName").innerText = `${selectedRoom.name} (${selectedRoom.size} | ${selectedRoom.breakfast})`;

  const baseTotal = selectedRoom.price * 2;
  const tax = Math.round(baseTotal * 0.1);

  document.getElementById("checkoutBasePrice").innerText = `HK$ ${baseTotal.toLocaleString()}`;
  document.getElementById("checkoutTaxPrice").innerText = `HK$ ${tax.toLocaleString()}`;
  document.getElementById("checkoutTotalPrice").innerText = `HK$ ${(baseTotal + tax).toLocaleString()}`;

  document.getElementById("checkoutModal").classList.add("active");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("active");
}

// 复制个人 ID 功能
function copyParticipantID() {
  const copyBtn = document.getElementById("btnCopyPID");
  const tip = document.getElementById("copyStatusTip");

  function setSuccessState() {
    hasCopiedPID = true;
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> 已成功复制!';
    copyBtn.classList.add("copied");
    tip.style.color = "#047857";
    tip.innerText = "✓ 已成功复制到剪贴簿！请现在切换回问卷主页分页面贴上。";
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(currentPID).then(() => {
      setSuccessState();
    }).catch(() => {
      fallbackCopy();
    });
  } else {
    fallbackCopy();
  }

  function fallbackCopy() {
    const tempInput = document.createElement("input");
    tempInput.value = currentPID;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setSuccessState();
  }
}

// 确认订单并写入 Firebase
function confirmBooking() {
  const guestName = document.getElementById("guestName").value.trim();
  const guestEmail = document.getElementById("guestEmail").value.trim();
  const guestPhone = document.getElementById("guestPhone").value.trim();

  if (!guestName || !guestEmail) {
    alert("请完整填写住客姓名及电子邮箱！");
    return;
  }

  if (!selectedHotel || !selectedRoom) {
    alert("请先选择酒店及客房！");
    return;
  }

  closeCheckoutModal();

  const refNumber = "HK-" + Math.floor(100000 + Math.random() * 900000);
  const totalPaidStr = document.getElementById("checkoutTotalPrice").innerText;

  if (document.getElementById("finalDisplayPID")) document.getElementById("finalDisplayPID").innerText = currentPID;
  if (document.getElementById("successHotel")) document.getElementById("successHotel").innerText = selectedHotel.name;
  if (document.getElementById("successRoom")) document.getElementById("successRoom").innerText = selectedRoom.name;
  if (document.getElementById("successRef")) document.getElementById("successRef").innerText = refNumber;
  if (document.getElementById("successPaid")) document.getElementById("successPaid").innerText = totalPaidStr;

  hasCopiedPID = false;
  const copyBtn = document.getElementById("btnCopyPID");
  if (copyBtn) {
    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> 复制ID';
    copyBtn.classList.remove("copied");
  }
  const tip = document.getElementById("copyStatusTip");
  if (tip) {
    tip.style.color = "#dc2626";
    tip.innerText = "* 尚未复制：请先点击上方蓝色「复制ID」按钮";
  }

  try {
    if (typeof firebase !== 'undefined' && firebase.database) {
      firebase.database().ref('bookings/' + currentPID).set({
        bookingRef: refNumber,
        participantID: currentPID,
        autonomyMode: AUTONOMY_MODE,
        recommendationMode: RECOMMENDATION_MODE,
        recommendedHotelId: RECOMMENDED_HOTEL_ID,
        isRecommendedHotelChosen: (selectedHotel.id === RECOMMENDED_HOTEL_ID),
        hotelId: selectedHotel.id,
        hotelName: selectedHotel.name,
        hotelRegion: selectedHotel.region,
        roomName: selectedRoom.name,
        roomSize: selectedRoom.size,
        bathroom: selectedRoom.bathroom,
        breakfast: selectedRoom.breakfast,
        guestName: guestName,
        guestEmail: guestEmail,
        guestPhone: guestPhone,
        totalPaid: totalPaidStr,
        createdAt: new Date().toISOString()
      }).catch(err => console.log("Firebase sync skipped:", err));
    }
  } catch(err) {
    console.log("Offline mode, skip db push.", err);
  }

  document.getElementById("successModal").classList.add("active");
}

function updatePriceFilter(val) {
  document.getElementById("priceRangeLabel").innerText = `最高 HK$ ${parseInt(val).toLocaleString()}`;
  filterHotels();
}

// 酒店条件多重筛选
function filterHotels() {
  const maxPrice = parseInt(document.getElementById("priceRange").value);
  const regionCheckboxes = Array.from(document.querySelectorAll('input[name="region"]:checked')).map(cb => cb.value);
  const starCheckboxes = Array.from(document.querySelectorAll('input[name="star"]:checked')).map(cb => parseInt(cb.value));
  const locationTagCheckboxes = Array.from(document.querySelectorAll('input[name="locationTag"]:checked')).map(cb => cb.value);
  const ratingCheckboxes = Array.from(document.querySelectorAll('input[name="rating"]:checked')).map(cb => parseFloat(cb.value));

  const filterBreakfast = document.getElementById("filterBreakfast")?.checked;
  const filterPrivateBath = document.getElementById("filterPrivateBath")?.checked;
  const filterPool = document.getElementById("filterPool")?.checked;
  const filterCancel = document.getElementById("filterCancel")?.checked;
  const filterGym = document.getElementById("filterGym")?.checked;
  const filterShuttle = document.getElementById("filterShuttle")?.checked;
  const filterParking = document.getElementById("filterParking")?.checked;

  currentHotels = hotelsData.filter(hotel => {
    if (hotel.price > maxPrice) return false;
    if (regionCheckboxes.length > 0 && !regionCheckboxes.includes(hotel.region)) return false;
    if (starCheckboxes.length > 0 && !starCheckboxes.includes(hotel.stars)) return false;
    if (ratingCheckboxes.length > 0 && !ratingCheckboxes.includes(hotel.rating)) return false;

    if (locationTagCheckboxes.length > 0) {
      const hotelTags = hotel.locationTags || [];
      const hasAllSelectedTags = locationTagCheckboxes.every(tag => hotelTags.includes(tag));
      if (!hasAllSelectedTags) return false;
    }

    if (filterBreakfast && !hotel.hasBreakfast) return false;
    if (filterPrivateBath && !hotel.hasPrivateBath) return false;
    if (filterPool && !hotel.hasPool) return false;
    if (filterCancel && !hotel.hasCancel) return false;
    if (filterGym && !hotel.hasGym) return false;
    if (filterShuttle && !hotel.hasAirportShuttle) return false;
    if (filterParking && !hotel.hasFreeParking) return false;

    return true;
  });

  renderHotelList(currentHotels);
}

function resetFilters() {
  document.getElementById("priceRange").value = 5000;
  document.getElementById("priceRangeLabel").innerText = "最高 HK$ 5,000";
  document.querySelectorAll('input[name="region"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="star"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="locationTag"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="rating"]').forEach(cb => cb.checked = false);
  document.getElementById("filterBreakfast").checked = false;
  document.getElementById("filterPrivateBath").checked = false;
  document.getElementById("filterPool").checked = false;
  document.getElementById("filterCancel").checked = false;
  document.getElementById("filterGym").checked = false;
  if (document.getElementById("filterShuttle")) document.getElementById("filterShuttle").checked = false;
  if (document.getElementById("filterParking")) document.getElementById("filterParking").checked = false;

  currentHotels = [...hotelsData];
  renderHotelList(currentHotels);
}

function sortHotels(type, btnElement) {
  document.querySelectorAll(".sort-btn").forEach(btn => btn.classList.remove("active"));
  btnElement.classList.add("active");

  if (type === 'priceAsc') {
    currentHotels.sort((a, b) => a.price - b.price);
  } else if (type === 'priceDesc') {
    currentHotels.sort((a, b) => b.price - a.price);
  } else if (type === 'rating') {
    currentHotels.sort((a, b) => b.rating - a.rating);
  } else {
    currentHotels.sort((a, b) => a.id - b.id);
  }

  renderHotelList(currentHotels);
}

// 页面初始化
window.addEventListener("DOMContentLoaded", () => {
  populateRecommendationData();
  updateFilterCounts();
  renderHotelList(hotelsData);
  setupConditionUI();

  setTimeout(() => {
    document.getElementById("entryRecommendModal").classList.add("active");
    document.getElementById("floatingRecommendPopup").classList.add("active");
  }, 400);
});
