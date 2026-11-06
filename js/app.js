// TripStay 平台交互與預訂核心邏輯 app.js (全量兩文三語深度支援版)
const RETURN_SURVEY_URL = "index.html";
const urlParams = new URLSearchParams(window.location.search);

// -----------------------------------------------------------------------------
// 1. 語言同步邏輯 (優先從 URL 參數獲取，其次讀取 localStorage，預設繁體中文 'zh-TW')
// -----------------------------------------------------------------------------
const initialLang = urlParams.get('lang') || localStorage.getItem('tripstay_lang') || 'zh-TW';
if (window.i18n && typeof window.i18n.setLanguage === 'function') {
  window.i18n.setLanguage(initialLang);
}

// 監聽語言切換事件，即時重新渲染介面各區塊
window.onLanguageChange = function(lang) {
  updateFilterCounts();
  renderHotelList(currentHotels);
  populateRecommendationData();
  setupConditionUI();
};

// -----------------------------------------------------------------------------
// 2. 實驗自變量設定與推薦酒店讀取 (2x2 設計)
// -----------------------------------------------------------------------------
const AUTONOMY_MODE = urlParams.get('autonomy') || localStorage.getItem('autonomy_mode') || 'low';
const RECOMMENDATION_MODE = urlParams.get('mode') || localStorage.getItem('recommendation_mode') || 'traditional';

// 預設推薦酒店 ID (若無則取 21: 香港東隅酒店)
let RECOMMENDED_HOTEL_ID = parseInt(urlParams.get('recId'), 10) || parseInt(localStorage.getItem('recommended_hotel_id'), 10) || 21;

let currentHotels = (typeof hotelsData !== 'undefined' && Array.isArray(hotelsData)) ? [...hotelsData] : [];
let recommendedHotelObj = currentHotels.find(h => h.id === RECOMMENDED_HOTEL_ID) || currentHotels.find(h => h.id === 21) || currentHotels[0] || null;

if (recommendedHotelObj) {
  RECOMMENDED_HOTEL_ID = recommendedHotelObj.id;
}

let selectedHotel = null;
let selectedRoom = null;
let countdownTimer = null;

// -----------------------------------------------------------------------------
// 3. 通用輔助函式：翻譯與 32 位 Participant ID 管理
// -----------------------------------------------------------------------------
function t(key, fallback = "") {
  if (window.i18n && typeof window.i18n.t === "function") {
    const val = window.i18n.t(key);
    if (val && val !== key) return val;
  }
  return fallback || key;
}

function getCurLang() {
  return (window.i18n ? window.i18n.currentLang : localStorage.getItem("tripstay_lang")) || "zh-TW";
}

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

// 讀取問卷階段或 AI 推薦生成的 Nudge Text
const AI_NUDGE_TEXT = localStorage.getItem('ai_nudge_text') || "";

// -----------------------------------------------------------------------------
// 4. 推薦彈窗與浮動窗數據填充
// -----------------------------------------------------------------------------
function populateRecommendationData() {
  if (!recommendedHotelObj) return;

  const curLang = getCurLang();
  const hotelName = typeof getHotelI18n === 'function' ? getHotelI18n(recommendedHotelObj, 'name', curLang) : recommendedHotelObj.name;
  const hotelLoc = typeof getHotelI18n === 'function' ? getHotelI18n(recommendedHotelObj, 'location', curLang) : recommendedHotelObj.location;
  const hotelDist = typeof getHotelI18n === 'function' ? getHotelI18n(recommendedHotelObj, 'distance', curLang) : recommendedHotelObj.distance;
  const hotelRegion = typeof getHotelI18n === 'function' ? getHotelI18n(recommendedHotelObj, 'region', curLang) : recommendedHotelObj.region;
  const hotelDistrict = typeof getHotelI18n === 'function' ? getHotelI18n(recommendedHotelObj, 'district', curLang) : recommendedHotelObj.district;
  const hotelVerdict = typeof getHotelI18n === 'function' ? getHotelI18n(recommendedHotelObj, 'verdict', curLang) : recommendedHotelObj.verdict;
  const hotelEco = typeof getHotelI18n === 'function' ? getHotelI18n(recommendedHotelObj, 'eco', curLang) : recommendedHotelObj.eco;

  const starsStr = '⭐'.repeat(recommendedHotelObj.stars || 0);

  // 中央彈窗
  const titleEl = document.getElementById("modalRecHeaderTitle");
  if (titleEl) titleEl.innerText = `${t('rec_modal_title_prefix', '為您精心甄選：')}${hotelName}`;

  const subEl = document.getElementById("modalRecHeaderSubtitle");
  if (subEl) subEl.innerText = `${t('rec_modal_subtitle_prefix', '坐落核心地段 • ')}${hotelDist}`;

  const imgEl = document.getElementById("modalRecHotelImg");
  if (imgEl && recommendedHotelObj.images && recommendedHotelObj.images[0]) {
    imgEl.src = recommendedHotelObj.images[0];
  }

  const starsEl = document.getElementById("modalRecHotelStars");
  if (starsEl) {
    const starLabel = curLang === 'en' ? `${recommendedHotelObj.stars}-Star Hotel` : `${recommendedHotelObj.stars} 星級`;
    starsEl.innerText = `${starsStr} ${starLabel}`;
  }

  const nameEl = document.getElementById("modalRecHotelName");
  if (nameEl) nameEl.innerText = hotelName;

  const locEl = document.getElementById("modalRecHotelLoc");
  if (locEl) locEl.innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${hotelLoc}`;

  const scoreEl = document.getElementById("modalRecHotelScore");
  if (scoreEl) {
    const scoreSuffix = curLang === 'en' ? 'Score' : '分';
    scoreEl.innerText = `${recommendedHotelObj.rating.toFixed(1)} ${scoreSuffix} • ${hotelVerdict}`;
  }

  const priceEl = document.getElementById("modalRecHotelPrice");
  if (priceEl) priceEl.innerText = recommendedHotelObj.price.toLocaleString();

  // Nudge Text
  const nudgeBox = document.getElementById("modalRecNudgeBox");
  const nudgeText = document.getElementById("modalRecNudgeText");
  if (nudgeBox && nudgeText) {
    if (AI_NUDGE_TEXT && AI_NUDGE_TEXT.trim() !== "") {
      nudgeText.innerText = AI_NUDGE_TEXT;
      nudgeBox.style.display = "block";
    } else {
      nudgeBox.style.display = "none";
    }
  }

  // Eco 認證說明
  const ecoBox = document.getElementById("modalRecEcoBox");
  const ecoText = document.getElementById("modalRecEcoText");
  if (ecoBox && ecoText) {
    if (hotelEco && hotelEco.trim() !== "") {
      const ecoHeading = t('sustainable_heading', '可持續發展與環保認證：');
      ecoText.innerHTML = `<strong>${ecoHeading} </strong>${hotelEco}`;
      ecoBox.style.display = "block";
    } else {
      ecoBox.style.display = "none";
    }
  }

  // 右下角懸浮窗
  const floatImg = document.getElementById("floatingRecHotelImg");
  if (floatImg && recommendedHotelObj.images && recommendedHotelObj.images[0]) {
    floatImg.src = recommendedHotelObj.images[0];
  }

  const floatStars = document.getElementById("floatingRecHotelStars");
  if (floatStars) {
    const starShort = curLang === 'en' ? 'Star' : '星';
    floatStars.innerText = `${starsStr} ${recommendedHotelObj.stars}${starShort}`;
  }

  const floatName = document.getElementById("floatingRecHotelName");
  if (floatName) floatName.innerText = hotelName;

  const floatLoc = document.getElementById("floatingRecHotelLoc");
  if (floatLoc) floatLoc.innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${hotelRegion} (${hotelDistrict})`;

  const floatPrice = document.getElementById("floatingRecHotelPrice");
  if (floatPrice) floatPrice.innerText = `HK$ ${recommendedHotelObj.price.toLocaleString()}`;

  const floatScore = document.getElementById("floatingRecHotelScore");
  if (floatScore) {
    const perNight = t('per_night_suffix', ' /每晚起');
    floatScore.innerText = `${perNight} (${recommendedHotelObj.rating.toFixed(1)})`;
  }
}

// -----------------------------------------------------------------------------
// 5. 根據 Autonomy 設定配置 UI (Low vs. High)
// -----------------------------------------------------------------------------
function setupConditionUI() {
  const skipBtn = document.getElementById("btnSkipRecommend");
  const topCloseBtn = document.getElementById("btnRecommendTopClose");
  const countdownText = document.getElementById("recommendCountdownText");
  const floatingCloseBtn = document.getElementById("btnFloatingClose");
  const curLang = getCurLang();

  if (AUTONOMY_MODE === "low") {
    // ================= LOW AUTONOMY =================
    if (skipBtn) skipBtn.style.display = "none";
    if (countdownText) countdownText.style.display = "block";

    if (topCloseBtn) {
      topCloseBtn.className = "recommend-top-close-btn autonomy-low";
      topCloseBtn.style.display = "none";
    }
    if (floatingCloseBtn) {
      floatingCloseBtn.className = "floating-popup-close autonomy-low";
    }

    let timeLeft = 15;
    const updateCountdownMsg = (sec) => {
      if (curLang === 'en') return `Viewing recommendation (${sec}s)`;
      if (curLang === 'zh-CN') return `推荐浏览中 (${sec}s)`;
      return `推薦瀏覽中 (${sec}s)`;
    };

    if (countdownText) countdownText.innerText = updateCountdownMsg(timeLeft);

    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        if (countdownText) countdownText.innerText = updateCountdownMsg(timeLeft);
      } else {
        clearInterval(countdownTimer);
        if (countdownText) countdownText.style.display = "none";
        if (topCloseBtn) topCloseBtn.style.display = "block";
      }
    }, 1000);

  } else {
    // ================= HIGH AUTONOMY =================
    if (countdownTimer) clearInterval(countdownTimer);
    if (countdownText) countdownText.style.display = "none";

    if (skipBtn) {
      skipBtn.style.display = "block";
      skipBtn.disabled = false;
      const totalCount = typeof hotelsData !== 'undefined' ? hotelsData.length : 80;
      if (curLang === 'en') {
        skipBtn.innerText = `Skip recommendation, browse all ${totalCount} hotels`;
      } else if (curLang === 'zh-CN') {
        skipBtn.innerText = `略过推荐，浏览全部 ${totalCount} 间酒店`;
      } else {
        skipBtn.innerText = `略過推薦，瀏覽全部 ${totalCount} 間酒店`;
      }
    }

    if (topCloseBtn) {
      topCloseBtn.className = "recommend-top-close-btn autonomy-high";
      topCloseBtn.style.display = "flex";
    }
    if (floatingCloseBtn) {
      floatingCloseBtn.className = "floating-popup-close autonomy-high";
      floatingCloseBtn.style.display = "flex";
    }
  }
}

// -----------------------------------------------------------------------------
// 6. 更新側邊欄篩選數量統計
// -----------------------------------------------------------------------------
function updateFilterCounts() {
  if (typeof hotelsData === 'undefined' || !hotelsData.length) return;

  let regTST = 0, regMK = 0, regCentral = 0, regTW = 0, regDisney = 0;
  let regST = 0, regNP = 0, regCWB = 0, regVic = 0, regKT = 0;
  let star5 = 0, star4 = 0, star3 = 0, star2 = 0;
  let r95 = 0, r90 = 0, r85 = 0, r80 = 0;
  let bfast = 0, pBath = 0, pool = 0, cancel = 0, gym = 0;
  let shuttle = 0, parking = 0;
  let tagTransport = 0, tagMetro = 0, tagBusiness = 0, tagVenue = 0;

  hotelsData.forEach(hotel => {
    // 10 大區域統計
    const r = hotel.region;
    if (r === "尖沙咀") regTST++;
    else if (r === "旺角") regMK++;
    else if (r === "中环" || r === "中環") regCentral++;
    else if (r === "荃湾" || r === "荃灣") regTW++;
    else if (r === "香港迪士尼乐园" || r === "香港迪士尼樂園") regDisney++;
    else if (r === "沙田") regST++;
    else if (r === "北角") regNP++;
    else if (r === "铜锣湾" || r === "銅鑼灣") regCWB++;
    else if (r === "维多利亚港" || r === "維多利亞港") regVic++;
    else if (r === "启德体育园" || r === "啟德體育園") regKT++;

    // 星級與評分
    if (hotel.stars === 5) star5++;
    else if (hotel.stars === 4) star4++;
    else if (hotel.stars === 3) star3++;
    else if (hotel.stars === 2) star2++;

    if (hotel.rating === 9.5) r95++;
    else if (hotel.rating === 9.0) r90++;
    else if (hotel.rating === 8.5) r85++;
    else if (hotel.rating === 8.0) r80++;

    // 設施
    if (hotel.hasBreakfast) bfast++;
    if (hotel.hasPrivateBath) pBath++;
    if (hotel.hasPool) pool++;
    if (hotel.hasCancel) cancel++;
    if (hotel.hasGym) gym++;
    if (hotel.hasAirportShuttle) shuttle++;
    if (hotel.hasFreeParking) parking++;

    // 地理特色標籤
    if (hotel.locationTags && Array.isArray(hotel.locationTags)) {
      if (hotel.locationTags.includes("机场/高铁站") || hotel.locationTags.includes("機場/高鐵站")) tagTransport++;
      if (hotel.locationTags.includes("地铁站") || hotel.locationTags.includes("地鐵站")) tagMetro++;
      if (hotel.locationTags.includes("商业区") || hotel.locationTags.includes("商業區")) tagBusiness++;
      if (hotel.locationTags.includes("演出场馆") || hotel.locationTags.includes("演出場館")) tagVenue++;
    }
  });

  // 更新區域計數徽章
  if (document.getElementById("count-region-tst")) document.getElementById("count-region-tst").innerText = `(${regTST})`;
  if (document.getElementById("count-region-mk")) document.getElementById("count-region-mk").innerText = `(${regMK})`;
  if (document.getElementById("count-region-central")) document.getElementById("count-region-central").innerText = `(${regCentral})`;
  if (document.getElementById("count-region-tw")) document.getElementById("count-region-tw").innerText = `(${regTW})`;
  if (document.getElementById("count-region-disney")) document.getElementById("count-region-disney").innerText = `(${regDisney})`;
  if (document.getElementById("count-region-st")) document.getElementById("count-region-st").innerText = `(${regST})`;
  if (document.getElementById("count-region-np")) document.getElementById("count-region-np").innerText = `(${regNP})`;
  if (document.getElementById("count-region-cwb")) document.getElementById("count-region-cwb").innerText = `(${regCWB})`;
  if (document.getElementById("count-region-vic")) document.getElementById("count-region-vic").innerText = `(${regVic})`;
  if (document.getElementById("count-region-kt")) document.getElementById("count-region-kt").innerText = `(${regKT})`;

  // 更新星級與評分
  if (document.getElementById("count-star-5")) document.getElementById("count-star-5").innerText = `(${star5})`;
  if (document.getElementById("count-star-4")) document.getElementById("count-star-4").innerText = `(${star4})`;
  if (document.getElementById("count-star-3")) document.getElementById("count-star-3").innerText = `(${star3})`;
  if (document.getElementById("count-star-2")) document.getElementById("count-star-2").innerText = `(${star2})`;

  if (document.getElementById("count-rating-95")) document.getElementById("count-rating-95").innerText = `(${r95})`;
  if (document.getElementById("count-rating-90")) document.getElementById("count-rating-90").innerText = `(${r90})`;
  if (document.getElementById("count-rating-85")) document.getElementById("count-rating-85").innerText = `(${r85})`;
  if (document.getElementById("count-rating-80")) document.getElementById("count-rating-80").innerText = `(${r80})`;

  // 更新設施
  if (document.getElementById("count-breakfast")) document.getElementById("count-breakfast").innerText = `(${bfast})`;
  if (document.getElementById("count-privateBath")) document.getElementById("count-privateBath").innerText = `(${pBath})`;
  if (document.getElementById("count-pool")) document.getElementById("count-pool").innerText = `(${pool})`;
  if (document.getElementById("count-cancel")) document.getElementById("count-cancel").innerText = `(${cancel})`;
  if (document.getElementById("count-gym")) document.getElementById("count-gym").innerText = `(${gym})`;
  if (document.getElementById("count-shuttle")) document.getElementById("count-shuttle").innerText = `(${shuttle})`;
  if (document.getElementById("count-parking")) document.getElementById("count-parking").innerText = `(${parking})`;

  // 更新標籤
  if (document.getElementById("count-tag-transport")) document.getElementById("count-tag-transport").innerText = `(${tagTransport})`;
  if (document.getElementById("count-tag-metro")) document.getElementById("count-tag-metro").innerText = `(${tagMetro})`;
  if (document.getElementById("count-tag-business")) document.getElementById("count-tag-business").innerText = `(${tagBusiness})`;
  if (document.getElementById("count-tag-venue")) document.getElementById("count-tag-venue").innerText = `(${tagVenue})`;
}

// -----------------------------------------------------------------------------
// 7. 渲染酒店列表
// -----------------------------------------------------------------------------
function renderHotelList(hotels) {
  const container = document.getElementById("hotelListContainer");
  const countEl = document.getElementById("hotelCount");
  const curLang = getCurLang();

  if (countEl) countEl.innerText = hotels.length;

  if (hotels.length === 0) {
    const noResultsTitle = curLang === 'en' ? 'No matching hotels found' : (curLang === 'zh-CN' ? '未找到符合当前条件的酒店' : '未找到符合當前條件的酒店');
    const noResultsDesc = curLang === 'en' ? 'Try adjusting price limits or clearing filter conditions' : (curLang === 'zh-CN' ? '请尝试调高价格上限或放宽筛选条件查看更多选项' : '請嘗試調高價格上限或放寬篩選條件查看更多選項');
    const resetBtnText = t('filter_reset_btn', '重置所有篩選條件');

    if (container) {
      container.innerHTML = `
          <div style="background:white; padding:3.5rem 1.5rem; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
            <i class="fa-solid fa-hotel" style="font-size:3rem; color:#cbd5e1; margin-bottom:1rem;"></i>
            <h3 style="font-size:1.15rem; font-weight:700; color:#475569;">${noResultsTitle}</h3>
            <p style="font-size:0.85rem; color:#94a3b8; margin-top:0.4rem;">${noResultsDesc}</p>
            <button class="sort-btn active" style="margin-top:1rem;" onclick="resetFilters()">${resetBtnText}</button>
          </div>
        `;
    }
    return;
  }

  if (!container) return;

  container.innerHTML = hotels.map(hotel => {
    const isTopRecommend = (hotel.id === RECOMMENDED_HOTEL_ID);
    const hotelName = typeof getHotelI18n === 'function' ? getHotelI18n(hotel, 'name', curLang) : (curLang === 'en' && hotel.enName ? hotel.enName : hotel.name);
    const hotelLoc = typeof getHotelI18n === 'function' ? getHotelI18n(hotel, 'location', curLang) : hotel.location;
    const hotelDist = typeof getHotelI18n === 'function' ? getHotelI18n(hotel, 'distance', curLang) : hotel.distance;
    const hotelRegion = typeof getHotelI18n === 'function' ? getHotelI18n(hotel, 'region', curLang) : hotel.region;
    const hotelDistrict = typeof getHotelI18n === 'function' ? getHotelI18n(hotel, 'district', curLang) : hotel.district;
    const hotelVerdict = typeof getHotelI18n === 'function' ? getHotelI18n(hotel, 'verdict', curLang) : hotel.verdict;
    const hotelEco = typeof getHotelI18n === 'function' ? getHotelI18n(hotel, 'eco', curLang) : hotel.eco;

    const hasEco = hotelEco && hotelEco.trim() !== "";
    const locTags = (hotel.i18n && hotel.i18n[curLang] && hotel.i18n[curLang].locationTags)
        ? hotel.i18n[curLang].locationTags
        : (hotel.locationTags || []);

    // 多語言徽章
    const badgeStarLabel = curLang === 'en' ? `${hotel.stars}-Star Hotel • ${hotelRegion} (${hotelDistrict})` : `${hotel.stars} 星級酒店 • ${hotelRegion} (${hotelDistrict})`;
    const topPickBadge = curLang === 'en' ? "Today's Top Choice" : (curLang === 'zh-CN' ? '⭐ 今日主推特选' : '⭐ 今日主推特選');
    const officialRecBadge = curLang === 'en' ? 'Official Top Pick' : (curLang === 'zh-CN' ? '官方主推' : '官方主推');
    const ecoPillLabel = curLang === 'en' ? 'Eco-Certified' : (curLang === 'zh-CN' ? '绿色环保认证' : '綠色環保認證');
    const bathPill = hotel.hasPrivateBath
        ? (curLang === 'en' ? 'Bathtub / En-suite Bath' : (curLang === 'zh-CN' ? '独立卫浴/浴缸' : '獨立衛浴/浴缸'))
        : (curLang === 'en' ? 'Walk-in Shower' : (curLang === 'zh-CN' ? '标准淋浴间' : '標準淋浴間'));
    const bfastPill = curLang === 'en' ? 'Breakfast Included' : (curLang === 'zh-CN' ? '含免费早餐' : '含免費早餐');
    const poolPill = curLang === 'en' ? 'Outdoor Pool' : (curLang === 'zh-CN' ? '室外泳池' : '室外泳池');
    const gymPill = curLang === 'en' ? 'Fitness Center' : (curLang === 'zh-CN' ? '健身中心' : '健身中心');
    const shuttlePill = curLang === 'en' ? 'Shuttle / Airport Transfer' : (curLang === 'zh-CN' ? '机场接送/穿梭巴' : '機場接送/穿梭巴');
    const parkingPill = curLang === 'en' ? 'Free Guest Parking' : (curLang === 'zh-CN' ? '免费泊车' : '免費泊車');

    // 政策特色
    const cancelPerk = hotel.hasCancel
        ? `<i class="fa-solid fa-circle-check"></i> ${curLang === 'en' ? 'Free Cancellation Available' : (curLang === 'zh-CN' ? '提供限时免费取消政策' : '提供限時免費取消政策')}`
        : `<i class="fa-solid fa-circle-info"></i> ${curLang === 'en' ? 'Special Non-Refundable Rate' : (curLang === 'zh-CN' ? '特惠不可退订房型' : '特惠不可退訂房型')}`;
    const instantPerk = t('instant_confirm', '即時出票確認 • 無跨境交易手續費');

    // 價格與評分
    const reviewSuffix = t('reviews_count_suffix', ' 則真實住客評價');
    const taxNote = t('tax_service_included', '包含稅費與服務附加費');
    const perNight = t('per_night_suffix', ' /每晚起');
    const viewRoomsText = isTopRecommend ? t('btn_view_promo_rooms', '查看主推房型') : t('btn_view_rooms', '查看房型');

    return `
      <div class="hotel-card ${isTopRecommend ? 'featured-recommendation' : ''}">
        ${isTopRecommend ? `
          <div class="top-recommend-banner">
            <span><i class="fa-solid fa-crown"></i> ${curLang === 'en' ? "Today's Top Choice • Tailored Match" : (curLang === 'zh-CN' ? '平台今日独家尊享主推 • 专属匹配优选' : '平台今日獨家尊享主推 • 專屬匹配優選')}</span>
            <span><i class="fa-solid fa-fire"></i> ${curLang === 'en' ? '98% Positive Guest Feedback' : '98% 住客選擇並好評'}</span>
          </div>
        ` : ''}

        <div class="hotel-image-col">
          <img src="${hotel.images[0]}" alt="${hotelName}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';">
          ${isTopRecommend ? `
            <div class="tag-deal" style="background:#d97706;">
              ${topPickBadge}
            </div>
          ` : ''}
        </div>

        <div class="hotel-info-col">
          <div class="hotel-header-info">
            <div class="hotel-stars">
              ${'⭐'.repeat(hotel.stars)}
              <span style="font-size:0.75rem; color:#64748b; font-weight:600; margin-left:4px;">${badgeStarLabel}</span>
            </div>
            <h2 class="hotel-title" style="${isTopRecommend ? 'color:#1e3a8a;' : ''}">${hotelName}</h2>
            <div class="hotel-location">
              <i class="fa-solid fa-location-dot"></i>
              <span>${hotelLoc} • <strong style="color:#0284c7;">${hotelDist}</strong></span>
            </div>
          </div>

          <div class="hotel-badges">
            ${isTopRecommend ? `<span class="badge-pill gold-star"><i class="fa-solid fa-crown"></i> ${officialRecBadge}</span>` : '<span class="badge-pill featured"><i class="fa-solid fa-award"></i> TripStay</span>'}
            ${hasEco ? `<span class="badge-pill eco-pill"><i class="fa-solid fa-leaf"></i> ${ecoPillLabel}</span>` : ''}
            ${locTags.map(tag => `<span class="badge-pill loc-pill"><i class="fa-solid fa-map-pin"></i> ${tag}</span>`).join('')}
            <span class="badge-pill"><i class="fa-solid fa-bath"></i> ${bathPill}</span>
            ${hotel.hasBreakfast ? `<span class="badge-pill"><i class="fa-solid fa-utensils"></i> ${bfastPill}</span>` : ''}
            ${hotel.hasPool ? `<span class="badge-pill"><i class="fa-solid fa-person-swimming"></i> ${poolPill}</span>` : ''}
            ${hotel.hasGym ? `<span class="badge-pill"><i class="fa-solid fa-dumbbell"></i> ${gymPill}</span>` : ''}
            ${hotel.hasAirportShuttle ? `<span class="badge-pill"><i class="fa-solid fa-van-shuttle"></i> ${shuttlePill}</span>` : ''}
            ${hotel.hasFreeParking ? `<span class="badge-pill"><i class="fa-solid fa-square-parking"></i> ${parkingPill}</span>` : ''}
          </div>

          ${hasEco ? `
            <div class="hotel-eco-row">
              <i class="fa-solid fa-seedling"></i>
              <div><strong>${t('sustainable_heading', '可持續發展與環保認證：')} </strong>${hotelEco}</div>
            </div>
          ` : ''}

          <div class="hotel-perks">
            <div style="${hotel.hasCancel ? '' : 'color:#64748b;'}">${cancelPerk}</div>
            <div><i class="fa-solid fa-bolt"></i> ${instantPerk}</div>
          </div>
        </div>

        <div class="hotel-pricing-col" style="${isTopRecommend ? 'background:#fffdfa;' : ''}">
          <div class="review-score-box">
            <div class="review-text">
              <div class="review-verdict" style="${isTopRecommend ? 'color:#d97706;' : ''}">${hotelVerdict}</div>
              <div class="review-sub">${hotel.reviewCount.toLocaleString()}${reviewSuffix}</div>
            </div>
            <div class="score-badge ${isTopRecommend ? 'gold-score' : ''}">${hotel.rating.toFixed(1)}</div>
          </div>

          <div class="price-container">
            <div class="original-price">HK$ ${hotel.originalPrice.toLocaleString()}</div>
            <div>
              <span class="currency-symbol">HK$ </span>
              <span class="main-price">${hotel.price.toLocaleString()}</span>
              <span style="font-size:0.8rem; color:#64748b;">${perNight}</span>
            </div>
            <div class="price-note">${taxNote}</div>
          </div>

          <button class="btn-select-room ${isTopRecommend ? 'gold-btn' : ''}" onclick="openRoomModal(${hotel.id})">
            <span>${viewRoomsText}</span>
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
  const modal = document.getElementById("entryRecommendModal");
  if (modal) modal.classList.remove("active");
}

function closeFloatingPopup() {
  const popup = document.getElementById("floatingRecommendPopup");
  if (popup) popup.classList.remove("active");
}

// -----------------------------------------------------------------------------
// 8. 展開房型彈窗 (兩文三語支援)
// -----------------------------------------------------------------------------
function openRoomModal(hotelId) {
  selectedHotel = hotelsData.find(h => h.id === hotelId);
  if (!selectedHotel) return;

  const curLang = getCurLang();
  const hotelName = typeof getHotelI18n === 'function' ? getHotelI18n(selectedHotel, 'name', curLang) : selectedHotel.name;
  const hotelLoc = typeof getHotelI18n === 'function' ? getHotelI18n(selectedHotel, 'location', curLang) : selectedHotel.location;
  const hotelRegion = typeof getHotelI18n === 'function' ? getHotelI18n(selectedHotel, 'region', curLang) : selectedHotel.region;
  const hotelDistrict = typeof getHotelI18n === 'function' ? getHotelI18n(selectedHotel, 'district', curLang) : selectedHotel.district;
  const hotelEco = typeof getHotelI18n === 'function' ? getHotelI18n(selectedHotel, 'eco', curLang) : selectedHotel.eco;

  const titleEl = document.getElementById("modalHotelTitle");
  if (titleEl) titleEl.innerText = hotelName;

  const subtitleEl = document.getElementById("modalHotelSubtitle");
  if (subtitleEl) {
    if (hotelEco && hotelEco.trim() !== "") {
      subtitleEl.innerHTML = `${hotelRegion} (${hotelDistrict}) • ${hotelLoc}<br>
        <span style="display:inline-block; margin-top:4px; color:#047857; font-weight:600;"><i class="fa-solid fa-leaf"></i> ${hotelEco}</span>`;
    } else {
      subtitleEl.innerText = `${hotelRegion} (${hotelDistrict}) • ${hotelLoc}`;
    }
  }

  const hotelImgEl = document.getElementById("modalHotelFeaturedImg");
  if (hotelImgEl && selectedHotel.images && selectedHotel.images[0]) {
    hotelImgEl.src = selectedHotel.images[0];
    hotelImgEl.alt = hotelName;
  }
  const hotelStarsEl = document.getElementById("modalHotelFeaturedStars");
  if (hotelStarsEl) {
    const starLabel = curLang === 'en' ? `${selectedHotel.stars}-Star Hotel` : `${selectedHotel.stars} 星級酒店`;
    hotelStarsEl.innerText = `${'⭐'.repeat(selectedHotel.stars)} ${starLabel}`;
  }
  const hotelNameEl = document.getElementById("modalHotelFeaturedName");
  if (hotelNameEl) hotelNameEl.innerText = hotelName;

  const hotelLocEl = document.getElementById("modalHotelFeaturedLoc");
  if (hotelLocEl) {
    hotelLocEl.innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${hotelLoc}`;
  }

  // 渲染房型列表
  const roomList = document.getElementById("modalRoomList");
  if (roomList) {
    roomList.innerHTML = selectedHotel.rooms.map(room => {
      const roomName = typeof getRoomI18n === 'function' ? getRoomI18n(room, 'name', curLang) : room.name;
      const roomSize = typeof getRoomI18n === 'function' ? getRoomI18n(room, 'size', curLang) : room.size;
      const roomBed = typeof getRoomI18n === 'function' ? getRoomI18n(room, 'bed', curLang) : room.bed;
      const roomBathroom = typeof getRoomI18n === 'function' ? getRoomI18n(room, 'bathroom', curLang) : room.bathroom;
      const roomBreakfast = typeof getRoomI18n === 'function' ? getRoomI18n(room, 'breakfast', curLang) : room.breakfast;
      const roomCancel = typeof getRoomI18n === 'function' ? getRoomI18n(room, 'cancel', curLang) : room.cancel;

      const sizeLbl = t('room_meta_size', '面積：');
      const bedLbl = t('room_meta_bed', '床型：');
      const bathLbl = t('room_meta_bath', '浴室：');
      const bfastLbl = t('room_meta_breakfast', '早餐禮遇：');
      const wifiLbl = t('room_meta_wifi', '高速 Wi-Fi：');
      const freeLbl = t('room_meta_free', '免費提供');
      const regLbl = t('room_meta_region', '地區：');
      const lateCheckOut = t('room_late_checkout', '視房態可享延遲至下午 14:00 退房');
      const twoNightsTotal = t('room_total_two_nights', '2晚總價 (含稅費)');
      const bookNowBtn = t('btn_book_now', '立即預訂');

      return `
        <div class="room-card">
          <div class="room-info-box">
            <div class="room-title">${roomName}</div>

            <div class="room-metadata-grid">
              <div class="room-meta-item">
                <i class="fa-solid fa-vector-square"></i>
                <span>${sizeLbl}<strong>${roomSize}</strong></span>
              </div>
              <div class="room-meta-item">
                <i class="fa-solid fa-bed"></i>
                <span>${bedLbl}<strong>${roomBed}</strong></span>
              </div>
              <div class="room-meta-item" style="grid-column: span 2;">
                <i class="fa-solid fa-bath"></i>
                <span>${bathLbl}<strong>${roomBathroom}</strong></span>
              </div>
              <div class="room-meta-item" style="grid-column: span 2;">
                <i class="fa-solid fa-utensils"></i>
                <span>${bfastLbl}<strong>${roomBreakfast}</strong></span>
              </div>
              <div class="room-meta-item">
                <i class="fa-solid fa-wifi"></i>
                <span>${wifiLbl}<strong>${freeLbl}</strong></span>
              </div>
              <div class="room-meta-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>${regLbl}<strong>${hotelRegion} - ${hotelDistrict}</strong></span>
              </div>
            </div>

            <div class="room-benefits">
              <div class="room-benefit-item"><i class="fa-solid fa-circle-check"></i> ${roomCancel}</div>
              <div class="room-benefit-item muted"><i class="fa-regular fa-clock"></i> ${lateCheckOut}</div>
            </div>
          </div>

          <div class="room-booking-box">
            <div class="room-price-info">
              <span class="room-orig-price">HK$ ${(room.origPrice * 2).toLocaleString()}</span>
              <div>
                <span style="font-size:0.85rem; font-weight:700; color:var(--accent);">HK$ </span>
                <span class="room-now-price">${(room.price * 2).toLocaleString()}</span>
              </div>
              <span style="font-size:0.72rem; color:var(--text-light);">${twoNightsTotal}</span>
            </div>
            <button class="btn-book-room" onclick="openCheckoutModal('${room.id}')">
              ${bookNowBtn} <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  const roomModalEl = document.getElementById("roomModal");
  if (roomModalEl) roomModalEl.classList.add("active");
}

function closeRoomModal() {
  const roomModalEl = document.getElementById("roomModal");
  if (roomModalEl) roomModalEl.classList.remove("active");
}

// -----------------------------------------------------------------------------
// 9. 開啟結帳彈窗
// -----------------------------------------------------------------------------
function openCheckoutModal(roomId) {
  selectedRoom = selectedHotel.rooms.find(r => r.id === roomId);
  if (!selectedRoom) return;

  closeRoomModal();

  const curLang = getCurLang();
  const hotelName = typeof getHotelI18n === 'function' ? getHotelI18n(selectedHotel, 'name', curLang) : selectedHotel.name;
  const roomName = typeof getRoomI18n === 'function' ? getRoomI18n(selectedRoom, 'name', curLang) : selectedRoom.name;
  const roomSize = typeof getRoomI18n === 'function' ? getRoomI18n(selectedRoom, 'size', curLang) : selectedRoom.size;
  const roomBfast = typeof getRoomI18n === 'function' ? getRoomI18n(selectedRoom, 'breakfast', curLang) : selectedRoom.breakfast;

  const hNameEl = document.getElementById("checkoutHotelName");
  if (hNameEl) hNameEl.innerText = hotelName;

  const rNameEl = document.getElementById("checkoutRoomName");
  if (rNameEl) rNameEl.innerText = `${roomName} (${roomSize} | ${roomBfast})`;

  const baseTotal = selectedRoom.price * 2;
  const tax = Math.round(baseTotal * 0.1);

  const baseEl = document.getElementById("checkoutBasePrice");
  if (baseEl) baseEl.innerText = `HK$ ${baseTotal.toLocaleString()}`;

  const taxEl = document.getElementById("checkoutTaxPrice");
  if (taxEl) taxEl.innerText = `HK$ ${tax.toLocaleString()}`;

  const totalEl = document.getElementById("checkoutTotalPrice");
  if (totalEl) totalEl.innerText = `HK$ ${(baseTotal + tax).toLocaleString()}`;

  const chkModalEl = document.getElementById("checkoutModal");
  if (chkModalEl) chkModalEl.classList.add("active");
}

function closeCheckoutModal() {
  const chkModalEl = document.getElementById("checkoutModal");
  if (chkModalEl) chkModalEl.classList.remove("active");
}

// -----------------------------------------------------------------------------
// 10. 複製個人識別碼 Participant ID
// -----------------------------------------------------------------------------
function copyParticipantID() {
  const copyBtn = document.getElementById("btnCopyPID");
  const tip = document.getElementById("copyStatusTip");

  function setSuccessState() {
    hasCopiedPID = true;
    if (copyBtn) {
      copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${t('btn_copied_pid', '已成功複製!')}`;
      copyBtn.classList.add("copied");
    }
    if (tip) {
      tip.style.color = "#047857";
      tip.innerText = t('copy_tip_success', '✓ 已成功複製到剪貼簿！請現在切換回問卷主頁分頁貼上。');
    }
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

// -----------------------------------------------------------------------------
// 11. 確認訂單並寫入 Firebase
// -----------------------------------------------------------------------------
function confirmBooking() {
  const guestName = document.getElementById("guestName").value.trim();
  const guestEmail = document.getElementById("guestEmail").value.trim();
  const guestPhone = document.getElementById("guestPhone").value.trim();
  const curLang = getCurLang();

  if (!guestName || !guestEmail) {
    const alertMsg = curLang === 'en' ? 'Please complete the guest name and email address!' : '請完整填寫住客姓名及電子郵件！';
    alert(alertMsg);
    return;
  }

  if (!selectedHotel || !selectedRoom) {
    const alertMsg = curLang === 'en' ? 'Please select a hotel and room first!' : '請先選擇酒店及客房！';
    alert(alertMsg);
    return;
  }

  closeCheckoutModal();

  const refNumber = "HK-" + Math.floor(100000 + Math.random() * 900000);
  const totalPaidStr = document.getElementById("checkoutTotalPrice").innerText;

  const hotelName = typeof getHotelI18n === 'function' ? getHotelI18n(selectedHotel, 'name', curLang) : selectedHotel.name;
  const roomName = typeof getRoomI18n === 'function' ? getRoomI18n(selectedRoom, 'name', curLang) : selectedRoom.name;

  if (document.getElementById("finalDisplayPID")) document.getElementById("finalDisplayPID").innerText = currentPID;
  if (document.getElementById("successHotel")) document.getElementById("successHotel").innerText = hotelName;
  if (document.getElementById("successRoom")) document.getElementById("successRoom").innerText = roomName;
  if (document.getElementById("successRef")) document.getElementById("successRef").innerText = refNumber;
  if (document.getElementById("successPaid")) document.getElementById("successPaid").innerText = totalPaidStr;

  hasCopiedPID = false;
  const copyBtn = document.getElementById("btnCopyPID");
  if (copyBtn) {
    copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> ${t('btn_copy_pid', '複製ID')}`;
    copyBtn.classList.remove("copied");
  }
  const tip = document.getElementById("copyStatusTip");
  if (tip) {
    tip.style.color = "#dc2626";
    tip.innerText = t('copy_tip_not_copied', '* 尚未複製：請先點擊上方藍色「複製ID」按鈕');
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
        selectedLanguage: curLang,
        createdAt: new Date().toISOString()
      }).catch(err => console.log("Firebase sync skipped:", err));
    }
  } catch(err) {
    console.log("Offline mode, skip db push.", err);
  }

  const successModalEl = document.getElementById("successModal");
  if (successModalEl) successModalEl.classList.add("active");
}

function updatePriceFilter(val) {
  const highestLbl = t('filter_highest', '最高');
  const labelEl = document.getElementById("priceRangeLabel");
  if (labelEl) labelEl.innerText = `${highestLbl} HK$ ${parseInt(val, 10).toLocaleString()}`;
  filterHotels();
}

// -----------------------------------------------------------------------------
// 12. 酒店條件多重篩選
// -----------------------------------------------------------------------------
function filterHotels() {
  const maxPrice = parseInt(document.getElementById("priceRange").value, 10);
  const regionCheckboxes = Array.from(document.querySelectorAll('input[name="region"]:checked')).map(cb => cb.value);
  const starCheckboxes = Array.from(document.querySelectorAll('input[name="star"]:checked')).map(cb => parseInt(cb.value, 10));
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

    // 區域匹配 (支援繁簡英各套地區名稱精準比對)
    if (regionCheckboxes.length > 0) {
      const matchRegion = regionCheckboxes.some(cbVal => {
        return hotel.region === cbVal ||
            (hotel.i18n && Object.values(hotel.i18n).some(langObj => langObj.region === cbVal));
      });
      if (!matchRegion) return false;
    }

    if (starCheckboxes.length > 0 && !starCheckboxes.includes(hotel.stars)) return false;
    if (ratingCheckboxes.length > 0 && !ratingCheckboxes.includes(hotel.rating)) return false;

    // 地理標籤匹配
    if (locationTagCheckboxes.length > 0) {
      const hotelTags = hotel.locationTags || [];
      const allTagsInHotel = [
        ...hotelTags,
        ...(hotel.i18n?.['zh-TW']?.locationTags || []),
        ...(hotel.i18n?.['zh-CN']?.locationTags || []),
        ...(hotel.i18n?.['en']?.locationTags || [])
      ];
      const matchAll = locationTagCheckboxes.every(tag => allTagsInHotel.includes(tag));
      if (!matchAll) return false;
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

function getNudgeTextByLang(curLang) {
  try {
    const raw = localStorage.getItem("ai_nudge_text_multilingual");
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed[curLang] || parsed["zh-CN"] || parsed["zh-TW"] || parsed["en"] || "";
    }
  } catch (e) {}
  return localStorage.getItem("ai_nudge_text") || "";
}

function resetFilters() {
  const priceInput = document.getElementById("priceRange");
  if (priceInput) priceInput.value = 5000;

  const highestLbl = t('filter_highest', '最高');
  const labelEl = document.getElementById("priceRangeLabel");
  if (labelEl) labelEl.innerText = `${highestLbl} HK$ 5,000`;

  document.querySelectorAll('input[name="region"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="star"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="locationTag"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="rating"]').forEach(cb => cb.checked = false);

  if (document.getElementById("filterBreakfast")) document.getElementById("filterBreakfast").checked = false;
  if (document.getElementById("filterPrivateBath")) document.getElementById("filterPrivateBath").checked = false;
  if (document.getElementById("filterPool")) document.getElementById("filterPool").checked = false;
  if (document.getElementById("filterCancel")) document.getElementById("filterCancel").checked = false;
  if (document.getElementById("filterGym")) document.getElementById("filterGym").checked = false;
  if (document.getElementById("filterShuttle")) document.getElementById("filterShuttle").checked = false;
  if (document.getElementById("filterParking")) document.getElementById("filterParking").checked = false;

  currentHotels = (typeof hotelsData !== 'undefined' && Array.isArray(hotelsData)) ? [...hotelsData] : [];
  renderHotelList(currentHotels);
}

function sortHotels(type, btnElement) {
  document.querySelectorAll(".sort-btn").forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

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

// -----------------------------------------------------------------------------
// 13. 頁面初始化
// -----------------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  if (window.i18n && typeof window.i18n.applyTranslations === "function") {
    window.i18n.applyTranslations();
  }
  populateRecommendationData();
  updateFilterCounts();
  renderHotelList(currentHotels);
  setupConditionUI();

  setTimeout(() => {
    const entryModal = document.getElementById("entryRecommendModal");
    if (entryModal) entryModal.classList.add("active");

    const floatPopup = document.getElementById("floatingRecommendPopup");
    if (floatPopup) floatPopup.classList.add("active");
  }, 400);
});