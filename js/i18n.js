/**
 * TripStay 多語言國際化配置字典 (zh-TW / zh-CN / en)
 */
const I18N_RESOURCES = {
    "zh-TW": {
        // 導航與通用
        nav_currency: "HKD (港幣 HK$)",
        nav_user: "個人中心",
        nav_lang: "語言 / Language",

        // index.html 前測問卷
        survey_header_title: "請繼續以下問卷內容",
        submit_btn_text: "提交並進入酒店預訂平台",
        submitting_text: "正在分析偏好並分配模式...",

        // Q1
        q1_title: "1. 本次旅程中，您偏好哪種住宿安排與預算風格？",
        q1_opt_economy: "經濟",
        q1_opt_refined: "舒適",
        q1_opt_upscale: "高檔",
        q1_opt_luxury: "奢華",

        // Q2
        q2_title: "2. 翻閱其他住客的體驗評價時，您通常的標準是？",
        q2_opt_80: "大致好評",
        q2_opt_85: "多數肯定",
        q2_opt_90: "廣泛盛讚",
        q2_opt_95: "近乎完美",

        // Q3
        q3_title: "3. 你重視酒店要有以下設施嗎？",
        q3_optional_badge: "(選填，可不選或選多項)",
        q3_fac_breakfast: "含免費早餐",
        q3_fac_bath: "配備浴缸",
        q3_fac_pool: "室外泳池",
        q3_fac_cancel: "限時免費取消政策",
        q3_fac_gym: "健身中心/水療SPA",
        q3_fac_shuttle: "穿梭巴士/機場接送",
        q3_fac_parking: "免費住客泊車位",
        q3_clear_btn: "清除第 3 題選擇 (保持不選)",

        // Q4
        q4_title: "4. 你喜歡住在哪個區域？",
        q4_reg_tst: "尖沙咀",
        q4_reg_mk: "旺角",
        q4_reg_central: "中環",
        q4_reg_tw: "荃灣",
        q4_reg_disney: "香港迪士尼樂園",
        q4_reg_st: "沙田",
        q4_reg_np: "北角",
        q4_reg_cwb: "銅鑼灣",
        q4_reg_vic: "維多利亞港",
        q4_reg_kt: "啟德體育園",

        // Q5
        q5_title: "5. 針對酒店周邊的地理位置，您是否有特定的偏好？",
        q5_optional_badge: "(選填，可不選或選 1 項)",
        q5_tag_transport: "機場/高鐵站",
        q5_tag_metro: "地鐵站",
        q5_tag_business: "商業區",
        q5_tag_venue: "演出場館",
        q5_clear_btn: "清除第 5 題選擇 (保持不選)",

        // Q6 ~ Q8 7點量表
        q6_title: "6. 我總是對他人保持友善與謙遜有禮。",
        q7_title: "7. 我始終對人禮貌，且處處為他人著想。",
        q8_title: "8. 對我來說，公開向他人承認自己的錯誤是很困難的。",
        likert_7_1: "非常不同意",
        likert_7_2: "不同意",
        likert_7_3: "有點不同意",
        likert_7_4: "中立",
        likert_7_5: "有點同意",
        likert_7_6: "同意",
        likert_7_7: "非常同意",

        // booking_page.html 頂部搜索欄
        hero_title: "探索中國香港精選酒店與品質住宿",
        hero_subtitle: "覆蓋香港核心地段，提供多元星級與靈活配套選擇",
        search_lbl_dest: "目的地 / 酒店名稱",
        search_ph_dest: "輸入城市、商圈或酒店名稱",
        search_lbl_date: "入住 — 退房日期",
        search_val_date: "2027年8月20日 - 8月22日 (共2晚)",
        search_lbl_guest: "客房及入住人數",
        search_val_guest: "1 間客房, 2 位成人",
        btn_search_text: "搜尋酒店",

        // 左側篩選面板
        filter_heading: "條件篩選",
        filter_reset_btn: "重置所有",
        filter_max_price: "每晚預算上限",
        filter_highest: "最高",
        filter_area_title: "所在地區",
        filter_star_title: "酒店星級",
        filter_star_5: "五星級奢華",
        filter_star_4: "四星級高檔",
        filter_star_3: "三星級舒適",
        filter_star_2: "經濟級實惠",
        filter_location_title: "地理位置特色",
        filter_rating_title: "住客綜合評分 (精確分數)",
        filter_rating_95: "9.5 分 (超棒極佳)",
        filter_rating_90: "9.0 分 (優質好評)",
        filter_rating_85: "8.5 分 (很棒體驗)",
        filter_rating_80: "8.0 分 (良好推薦)",
        filter_amenity_title: "客房服務與設施偏好",

        // 列表排序與資訊
        sort_label: "排序方式：",
        sort_popular: "熱門推薦",
        sort_price_asc: "價格：低至高",
        sort_price_desc: "價格：高至低",
        sort_rating: "評分最高",
        results_found_prefix: "搜尋結果：",
        results_found_suffix: " 間香港精選酒店",
        btn_view_rooms: "查看房型",
        btn_view_promo_rooms: "查看主推房型",
        tax_service_included: "包含稅費與服務附加費",
        per_night_suffix: " /每晚起",
        reviews_count_suffix: " 則真實住客評價",
        sustainable_heading: "可持續發展與環保認證：",
        instant_confirm: "即時出票確認 • 無跨境交易手續費",

        // 推薦彈窗
        rec_crown_badge: "今日特別尊享主推",
        rec_modal_title_prefix: "為您精心甄選：",
        rec_modal_subtitle_prefix: "坐落核心地段 • ",
        rec_btn_view: "立即查看該推薦酒店房型",
        rec_btn_skip: "略過推薦，瀏覽全部酒店",
        rec_countdown_prefix: "推薦瀏覽中 (",
        rec_float_title: "平台主推特選",
        rec_float_btn: "立即查看主推房型",

        // 房型彈窗
        room_modal_pick: "選擇您的入住客房與配置",
        room_meta_size: "面積：",
        room_meta_bed: "床型：",
        room_meta_bath: "浴室：",
        room_meta_breakfast: "早餐禮遇：",
        room_meta_wifi: "高速 Wi-Fi：",
        room_meta_free: "免費提供",
        room_meta_region: "地區：",
        room_late_checkout: "視房態可享延遲至下午 14:00 退房",
        room_total_two_nights: "2晚總價 (含稅費)",
        btn_book_now: "立即預訂",

        // 結帳彈窗
        checkout_title: "安全預訂與訂單確認",
        checkout_guest_sec: "主要入住人資料",
        checkout_name_lbl: "住客姓名 (中文 / 英文)",
        checkout_email_lbl: "電子郵件 (用於接收確認函與憑證)",
        checkout_phone_lbl: "聯絡電話",
        checkout_pay_sec: "支付方式 (模擬)",
        checkout_nights_text: "2027年8月20日 - 8月22日 (2晚)",
        checkout_base_price: "客房總額 (2 晚)",
        checkout_tax_service: "政府稅項與服務費 (10%)",
        checkout_final_total: "實付總額 (含稅)",
        btn_confirm_pay: "確認並模擬支付",
        checkout_simulation_note: "此頁面為實驗模擬環境，不會產生任何真實銀行扣款。",

        // 完成彈窗
        success_title: "模擬預訂已成功完成",
        success_warn_title: "【重要警告】必須完成以下核驗步驟",
        success_warn_step1: "1. 請務必點擊下方按鈕<strong>複製您的專屬個人 ID</strong>。",
        success_warn_step2: "2. 請<strong>自行切換回原本的問卷主頁分頁</strong>，在相應題目中<strong>貼上此 ID</strong> 繼續完成作答。",
        success_warn_notice: "特別聲明：若未在問卷中貼上正確 ID，系統將無法核驗您的實驗記錄，本次作答將被視為無效，且絕不會發放任何相關報酬或實驗獎勵！",
        success_pid_lbl: "您的 32 位個人識別碼 (Participant ID)：",
        btn_copy_pid: "複製ID",
        btn_copied_pid: "已成功複製!",
        copy_tip_not_copied: "* 尚未複製：請先點擊上方藍色「複製ID」按鈕",
        copy_tip_success: "✓ 已成功複製到剪貼簿！請現在切換回問卷主頁分頁貼上。",
        summary_final_hotel: "最終選定酒店：",
        summary_final_room: "所選客房類型：",
        summary_final_ref: "訂單確認編號：",
        summary_final_paid: "模擬實付金額：",
        return_guide_note: "已複製 ID 後，請在瀏覽器上方切換回<strong>問卷主頁標籤頁</strong>繼續作答。"
    },

    "zh-CN": {
        // 导航与通用
        nav_currency: "HKD (港币 HK$)",
        nav_user: "个人中心",
        nav_lang: "语言 / Language",

        // index.html 前测问卷
        survey_header_title: "请继续以下问卷内容",
        submit_btn_text: "提交并进入酒店预订平台",
        submitting_text: "正在分析偏好并分配模式...",

        // Q1
        q1_title: "1. 本次旅程中，您偏好哪种住宿安排与预算风格？",
        q1_opt_economy: "经济",
        q1_opt_refined: "舒适",
        q1_opt_upscale: "高档",
        q1_opt_luxury: "奢华",

        // Q2
        q2_title: "2. 翻阅其他住客的体验评价时，您通常的标准是？",
        q2_opt_80: "大致好评",
        q2_opt_85: "多数肯定",
        q2_opt_90: "广泛盛赞",
        q2_opt_95: "近乎完美",

        // Q3
        q3_title: "3. 你重视酒店要有以下设施吗？",
        q3_optional_badge: "(选填，可不选或选多项)",
        q3_fac_breakfast: "含免费早餐",
        q3_fac_bath: "配备浴缸",
        q3_fac_pool: "室外泳池",
        q3_fac_cancel: "限时免费取消政策",
        q3_fac_gym: "健身中心/水疗SPA",
        q3_fac_shuttle: "穿梭巴士/机场接送",
        q3_fac_parking: "免费住客泊车位",
        q3_clear_btn: "清除第 3 题选择 (保持不选)",

        // Q4
        q4_title: "4. 你喜欢住在哪个区域？",
        q4_reg_tst: "尖沙咀",
        q4_reg_mk: "旺角",
        q4_reg_central: "中环",
        q4_reg_tw: "荃湾",
        q4_reg_disney: "香港迪士尼乐园",
        q4_reg_st: "沙田",
        q4_reg_np: "北角",
        q4_reg_cwb: "铜锣湾",
        q4_reg_vic: "维多利亚港",
        q4_reg_kt: "启德体育园",

        // Q5
        q5_title: "5. 针对酒店周边的地理位置，您是否有特定的偏好？",
        q5_optional_badge: "(选填，可不选或选 1 项)",
        q5_tag_transport: "机场/高铁站",
        q5_tag_metro: "地铁站",
        q5_tag_business: "商业区",
        q5_tag_venue: "演出场馆",
        q5_clear_btn: "清除第 5 题选择 (保持不选)",

        // Q6 ~ Q8 7点量表
        q6_title: "6. 我总是对他人保持友善与谦逊有礼。",
        q7_title: "7. 我始终对人礼貌，且处处为他人着想。",
        q8_title: "8. 对我来说，公开向他人承认自己的错误是很困难的。",
        likert_7_1: "非常不同意",
        likert_7_2: "不同意",
        likert_7_3: "有点不同意",
        likert_7_4: "中立",
        likert_7_5: "有点同意",
        likert_7_6: "同意",
        likert_7_7: "非常同意",

        // booking_page.html 顶部搜索栏
        hero_title: "探索中国香港精选酒店与品质住宿",
        hero_subtitle: "覆盖香港核心地段，提供多元星级与灵活配套选择",
        search_lbl_dest: "目的地 / 酒店名称",
        search_ph_dest: "输入城市、商圈或酒店名称",
        search_lbl_date: "入住 — 退房日期",
        search_val_date: "2027年8月20日 - 8月22日 (共2晚)",
        search_lbl_guest: "客房及入住人数",
        search_val_guest: "1 间客房, 2 位成人",
        btn_search_text: "搜索酒店",

        // 左侧筛选面板
        filter_heading: "条件筛选",
        filter_reset_btn: "重置所有",
        filter_max_price: "每晚预算上限",
        filter_highest: "最高",
        filter_area_title: "所在地区",
        filter_star_title: "酒店星级",
        filter_star_5: "五星级奢华",
        filter_star_4: "四星级高档",
        filter_star_3: "三星级舒适",
        filter_star_2: "经济级实惠",
        filter_location_title: "地理位置特色",
        filter_rating_title: "住客综合评分 (精确分数)",
        filter_rating_95: "9.5 分 (超棒极佳)",
        filter_rating_90: "9.0 分 (优质好评)",
        filter_rating_85: "8.5 分 (很棒体验)",
        filter_rating_80: "8.0 分 (良好推荐)",
        filter_amenity_title: "客房服务与设施偏好",

        // 列表排序与信息
        sort_label: "排序方式：",
        sort_popular: "热门推荐",
        sort_price_asc: "价格：低至高",
        sort_price_desc: "价格：高至低",
        sort_rating: "评分最高",
        results_found_prefix: "搜索结果：",
        results_found_suffix: " 间香港精选酒店",
        btn_view_rooms: "查看房型",
        btn_view_promo_rooms: "查看主推房型",
        tax_service_included: "包含税费与服务附加费",
        per_night_suffix: " /每晚起",
        reviews_count_suffix: " 条真实住客评价",
        sustainable_heading: "可持续发展与环保认证：",
        instant_confirm: "即时出票确认 • 无跨境交易手续费",

        // 推荐弹窗
        rec_crown_badge: "今日特别尊享主推",
        rec_modal_title_prefix: "为您精心甄选：",
        rec_modal_subtitle_prefix: "坐落核心地段 • ",
        rec_btn_view: "立即查看该推荐酒店房型",
        rec_btn_skip: "略过推荐，浏览全部酒店",
        rec_countdown_prefix: "推荐浏览中 (",
        rec_float_title: "平台主推特选",
        rec_float_btn: "立即查看主推房型",

        // 房型弹窗
        room_modal_pick: "选择您的入住客房与配置",
        room_meta_size: "面积：",
        room_meta_bed: "床型：",
        room_meta_bath: "浴室：",
        room_meta_breakfast: "早餐礼遇：",
        room_meta_wifi: "高速 Wi-Fi：",
        room_meta_free: "免费提供",
        room_meta_region: "地区：",
        room_late_checkout: "视房态可享延迟至下午 14:00 退房",
        room_total_two_nights: "2晚总价 (含税费)",
        btn_book_now: "立即预订",

        // 结账弹窗
        checkout_title: "安全预订与订单确认",
        checkout_guest_sec: "主要入住人信息",
        checkout_name_lbl: "住客姓名 (中文 / 英文)",
        checkout_email_lbl: "电子邮箱 (用于接收确认函与凭证)",
        checkout_phone_lbl: "联系电话",
        checkout_pay_sec: "支付方式 (模拟)",
        checkout_nights_text: "2027年8月20日 - 8月22日 (2晚)",
        checkout_base_price: "客房总额 (2 晚)",
        checkout_tax_service: "政府税项与服务费 (10%)",
        checkout_final_total: "实付总额 (含税)",
        btn_confirm_pay: "确认并模拟支付",
        checkout_simulation_note: "此页面为实验模拟环境，不会产生任何真实银行扣款。",

        // 完成弹窗
        success_title: "模拟预订已成功完成",
        success_warn_title: "【重要警告】必须完成以下核验步骤",
        success_warn_step1: "1. 请务必点击下方按钮<strong>复制您的专属个人 ID</strong>。",
        success_warn_step2: "2. 请<strong>自行切换回原本的问卷主页分页面</strong>，在相应题目中<strong>贴上此 ID</strong> 继续完成作答。",
        success_warn_notice: "特别声明：若未在问卷中贴上正确 ID，系统将无法核验您的实验记录，本次作答将被视为无效，且绝不会发放任何相关报酬或实验奖励！",
        success_pid_lbl: "您的 32 位个人识别码 (Participant ID)：",
        btn_copy_pid: "复制ID",
        btn_copied_pid: "已成功复制!",
        copy_tip_not_copied: "* 尚未复制：请先点击上方蓝色「复制ID」按钮",
        copy_tip_success: "✓ 已成功复制到剪贴簿！请现在切换回问卷主页分页面贴上。",
        summary_final_hotel: "最终选定酒店：",
        summary_final_room: "所选客房类型：",
        summary_final_ref: "订单确认编号：",
        summary_final_paid: "模拟实付金额：",
        return_guide_note: "已复制 ID 后，请在浏览器上方切换回<strong>问卷主页标签页</strong>继续作答。"
    },

    "en": {
        // Nav & General
        nav_currency: "HKD (Hong Kong Dollar HK$)",
        nav_user: "User Profile",
        nav_lang: "Language",

        // index.html Survey
        survey_header_title: "Please complete the survey below",
        submit_btn_text: "Submit & Enter Booking Platform",
        submitting_text: "Analyzing preferences & assigning condition...",

        // Q1
        q1_title: "1. Which accommodation budget style do you prefer for this trip?",
        q1_opt_economy: "Economy",
        q1_opt_refined: "Comfortable",
        q1_opt_upscale: "Upscale",
        q1_opt_luxury: "Luxury",

        // Q2
        q2_title: "2. When reading guest reviews, what is your typical standard?",
        q2_opt_80: "Generally Good (8.0+)",
        q2_opt_85: "Mostly Positive (8.5+)",
        q2_opt_90: "Widely Praised (9.0+)",
        q2_opt_95: "Near Perfect (9.5+)",

        // Q3
        q3_title: "3. Do you value the following hotel amenities?",
        q3_optional_badge: "(Optional, multiple choices allowed)",
        q3_fac_breakfast: "Free Breakfast",
        q3_fac_bath: "Bathtub equipped",
        q3_fac_pool: "Outdoor Pool",
        q3_fac_cancel: "Free Cancellation Policy",
        q3_fac_gym: "Fitness Center / Spa",
        q3_fac_shuttle: "Shuttle Bus / Airport Transfer",
        q3_fac_parking: "Free Guest Parking",
        q3_clear_btn: "Clear Q3 selection (Keep unselected)",

        // Q4
        q4_title: "4. Which area do you prefer to stay in?",
        q4_reg_tst: "Tsim Sha Tsui",
        q4_reg_mk: "Mong Kok",
        q4_reg_central: "Central",
        q4_reg_tw: "Tsuen Wan",
        q4_reg_disney: "Hong Kong Disneyland",
        q4_reg_st: "Sha Tin",
        q4_reg_np: "North Point",
        q4_reg_cwb: "Causeway Bay",
        q4_reg_vic: "Victoria Harbour",
        q4_reg_kt: "Kai Tak Sports Park",

        // Q5
        q5_title: "5. Do you have specific location feature preferences?",
        q5_optional_badge: "(Optional, choose at most 1)",
        q5_tag_transport: "Airport / High Speed Rail",
        q5_tag_metro: "MTR Station (Close Walk)",
        q5_tag_business: "Commercial District",
        q5_tag_venue: "Performance & Sports Venue",
        q5_clear_btn: "Clear Q5 selection (Keep unselected)",

        // Q6 ~ Q8 Likert
        q6_title: "6. I always stay friendly and courteous with other people.",
        q7_title: "7. I am always polite and considerate of others.",
        q8_title: "8. It is difficult to admit my mistakes openly to others.",
        likert_7_1: "Strongly disagree",
        likert_7_2: "Disagree",
        likert_7_3: "Somewhat disagree",
        likert_7_4: "Neutral",
        likert_7_5: "Somewhat agree",
        likert_7_6: "Agree",
        likert_7_7: "Strongly agree",

        // booking_page.html Hero
        hero_title: "Discover Handpicked Hotels in Hong Kong",
        hero_subtitle: "Covering prime locations with diverse star ratings and flexible amenities",
        search_lbl_dest: "Destination / Hotel Name",
        search_ph_dest: "Enter city, district or hotel name",
        search_lbl_date: "Check-in — Check-out",
        search_val_date: "Aug 20, 2027 - Aug 22, 2027 (2 Nights)",
        search_lbl_guest: "Rooms & Guests",
        search_val_guest: "1 Room, 2 Adults",
        btn_search_text: "Search Hotels",

        // Sidebar
        filter_heading: "Filter Results",
        filter_reset_btn: "Reset All",
        filter_max_price: "Max Budget per Night",
        filter_highest: "Up to",
        filter_area_title: "Destinations & Districts",
        filter_star_title: "Hotel Star Rating",
        filter_star_5: "5-Star Luxury",
        filter_star_4: "4-Star Upscale",
        filter_star_3: "3-Star Comfort",
        filter_star_2: "2-Star Economy",
        filter_location_title: "Location Features",
        filter_rating_title: "Guest Review Score",
        filter_rating_95: "9.5+ (Exceptional)",
        filter_rating_90: "9.0+ (Superb)",
        filter_rating_85: "8.5+ (Very Good)",
        filter_rating_80: "8.0+ (Good)",
        filter_amenity_title: "Room Amenities & Perks",

        // Results
        sort_label: "Sort by:",
        sort_popular: "Top Picks",
        sort_price_asc: "Price: Low to High",
        sort_price_desc: "Price: High to Low",
        sort_rating: "Highest Rated",
        results_found_prefix: "Search Results: ",
        results_found_suffix: " hotels found in HK",
        btn_view_rooms: "View Rooms",
        btn_view_promo_rooms: "View Featured Rooms",
        tax_service_included: "Taxes & fees included",
        per_night_suffix: " /night",
        reviews_count_suffix: " verified reviews",
        sustainable_heading: "Sustainability & Eco Certification:",
        instant_confirm: "Instant Confirmation • No Foreign Transaction Fees",

        // Recommend Modal
        rec_crown_badge: "Featured Special Recommendation",
        rec_modal_title_prefix: "Tailored Selection for You: ",
        rec_modal_subtitle_prefix: "Prime location • ",
        rec_btn_view: "Explore Recommended Rooms Now",
        rec_btn_skip: "Skip Recommendation, Browse All Hotels",
        rec_countdown_prefix: "Viewing recommendation (",
        rec_float_title: "Featured Recommendation",
        rec_float_btn: "View Featured Rooms",

        // Room Modal
        room_modal_pick: "Select Your Room & Plan",
        room_meta_size: "Size: ",
        room_meta_bed: "Bed: ",
        room_meta_bath: "Bathroom: ",
        room_meta_breakfast: "Breakfast: ",
        room_meta_wifi: "High-speed Wi-Fi: ",
        room_meta_free: "Free",
        room_meta_region: "District: ",
        room_late_checkout: "Late check-out until 14:00 subject to availability",
        room_total_two_nights: "2-Night Total (Taxes incl.)",
        btn_book_now: "Book Now",

        // Checkout Modal
        checkout_title: "Secure Booking & Order Confirmation",
        checkout_guest_sec: "Primary Guest Information",
        checkout_name_lbl: "Guest Full Name",
        checkout_email_lbl: "Email (for confirmation voucher)",
        checkout_phone_lbl: "Contact Number",
        checkout_pay_sec: "Payment Method (Simulated)",
        checkout_nights_text: "Aug 20, 2027 - Aug 22, 2027 (2 Nights)",
        checkout_base_price: "Room Charges (2 Nights)",
        checkout_tax_service: "Taxes & Service Fees (10%)",
        checkout_final_total: "Total Amount (Taxes incl.)",
        btn_confirm_pay: "Confirm & Simulate Payment",
        checkout_simulation_note: "This is a simulated experiment. No actual bank charges will occur.",

        // Success Modal
        success_title: "Booking Completed Successfully",
        success_warn_title: "[CRITICAL WARNING] Verification Steps Required",
        success_warn_step1: "1. You MUST click the button below to <strong>copy your Participant ID</strong>.",
        success_warn_step2: "2. <strong>Switch back to the survey tab</strong> in your browser and <strong>paste this ID</strong> to finish the questionnaire.",
        success_warn_notice: "Notice: If you fail to paste the valid ID in the survey, the system cannot verify your session and your submission will be invalid without compensation!",
        success_pid_lbl: "Your 32-digit Participant ID:",
        btn_copy_pid: "Copy ID",
        btn_copied_pid: "Copied Successfully!",
        copy_tip_not_copied: "* Not copied yet: Please click the blue 'Copy ID' button above",
        copy_tip_success: "✓ Copied to clipboard! Please switch back to the survey tab now.",
        summary_final_hotel: "Selected Hotel: ",
        summary_final_room: "Selected Room: ",
        summary_final_ref: "Booking Reference: ",
        summary_final_paid: "Simulated Amount: ",
        return_guide_note: "After copying your ID, please switch to the <strong>survey tab</strong> to complete your submission."
    }
};

class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem("tripstay_lang") || "zh-TW";
    }

    t(key) {
        const dict = I18N_RESOURCES[this.currentLang] || I18N_RESOURCES["zh-TW"];
        return dict[key] || key;
    }

    setLanguage(lang) {
        if (!I18N_RESOURCES[lang]) return;
        this.currentLang = lang;
        localStorage.setItem("tripstay_lang", lang);
        this.applyTranslations();

        // 如果頁面上有客製化更新回呼（如動態重新渲染酒店卡片）
        if (typeof window.onLanguageChange === "function") {
            window.onLanguageChange(lang);
        }
    }

    applyTranslations() {
        document.documentElement.lang = this.currentLang;

        // 1. 一般文字元素替換 data-i18n
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            const translation = this.t(key);
            if (translation) {
                el.innerHTML = translation;
            }
        });

        // 2. 輸入框 placeholder 替換 data-i18n-ph
        document.querySelectorAll("[data-i18n-ph]").forEach(el => {
            const key = el.getAttribute("data-i18n-ph");
            const translation = this.t(key);
            if (translation) {
                el.setAttribute("placeholder", translation);
            }
        });

        // 3. 更新語言選單的選中狀態
        const langSelect = document.getElementById("langSwitcher");
        if (langSelect) {
            langSelect.value = this.currentLang;
        }
    }
}

// 實例化全域管理物件
window.i18n = new I18nManager();

document.addEventListener("DOMContentLoaded", () => {
    window.i18n.applyTranslations();
});