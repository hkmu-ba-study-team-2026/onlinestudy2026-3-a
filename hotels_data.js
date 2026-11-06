// 香港 80 間酒店完整正交平衡數據集 (全量兩文三語深度國際化配置)
// 1. 區域分佈：尖沙咀(8) | 旺角(8) | 中環(8) | 荃灣(8) | 香港迪士尼樂園(8) | 沙田(8) | 北角(8) | 銅鑼灣(8) | 維多利亞港(8) | 啟德體育園(8) = 80 間
// 2. 星級分佈：5星(20) | 4星(20) | 3星(20) | 2星(20)
// 3. 評分正交：9.5(20) | 9.0(20) | 8.5(20) | 8.0(20) (每個星級內各評分嚴格佔 5 間)
// 4. 設施平衡：含早餐(40)、獨立衛浴/浴缸(40)、室外泳池(38)、免費取消(40)、健身中心(40)、機場接送(40)、免費泊車(40)
// 5. 兩文三語支援：每間酒店及其所屬客房均內置 i18n 屬性，包含繁體中文 (zh-TW)、簡體中文 (zh-CN) 與 英文 (en) 的地名、街道地址、交通距離、環保認證、房型及禮遇
const hotelsData = [
    {
        "id": 1,
        "name": "香港唯港荟酒店 (Hotel ICON)",
        "enName": "Hotel ICON Hong Kong",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀东部科学馆道17号",
        "distance": "距离尖东站步行约4分钟，近红磡体育馆",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 4280,
        "verdict": "超棒极佳",
        "price": 1480,
        "originalPrice": 1880,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "演出场馆",
            "商业区"
        ],
        "eco": "获颁国际 Green Key 环保钥匙认证，配备 ORCA 厨余有氧分解系统及 100% 纯电动穿梭巴士",
        "images": [
            "https://res.klook.com/klook-hotel/image/upload/w_750,c_fill,q_85/travelapi/5000000/4250000/4247500/4247437/0e0aea1b_z.jpg"
        ],
        "rooms": [
            {
                "id": "icon-101",
                "name": "ICON 36 经典城市客房",
                "size": "36 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立干湿分离卫浴 (带深浸浴缸)",
                "breakfast": "含双人精致自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1480,
                "origPrice": 1880,
                "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "ICON 36 經典城市客房",
                        "size": "36 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "獨立乾濕分離衛浴 (帶深浸浴缸)",
                        "breakfast": "含雙人精緻自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "ICON 36 经典城市客房",
                        "size": "36 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "独立干湿分离卫浴 (带深浸浴缸)",
                        "breakfast": "含双人精致自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "ICON 36 Classic City Room",
                        "size": "36  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower and deep soaking tub",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港唯港荟酒店 (Hotel ICON)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀东部科學館道17號",
                "distance": "距离尖东站步行約4分鐘，近紅磡體育館",
                "verdict": "超棒极佳",
                "locationTags": [
                    "地鐵站",
                    "演出場館",
                    "商業區"
                ],
                "eco": "獲頒國際 Green Key 環保鑰匙認證，配備 ORCA 廚餘有氧分解系統及 100% 純電動穿梭巴士"
            },
            "zh-CN": {
                "name": "香港唯港荟酒店 (Hotel ICON)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀东部科学馆道17号",
                "distance": "距离尖东站步行约4分钟，近红磡体育馆",
                "verdict": "超棒极佳",
                "locationTags": [
                    "地铁站",
                    "演出场馆",
                    "商业区"
                ],
                "eco": "获颁国际 Green Key 环保钥匙认证，配备 ORCA 厨余有氧分解系统及 100% 纯电动穿梭巴士"
            },
            "en": {
                "name": "Hotel ICON Hong Kong",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "17 Science Museum Road, Tsim Sha Tsui East, Kowloon",
                "distance": "Approx. 4-min walk from East Tsim Sha Tsui MTR Station, near Hong Kong Coliseum",
                "verdict": "Exceptional",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue",
                    "Commercial District"
                ],
                "eco": "Awarded international Green Key certification, equipped with an ORCA aerobic food waste digestion system and 100% electric shuttle buses"
            }
        }
    },
    {
        "id": 2,
        "name": "香港半岛酒店 (The Peninsula Hong Kong)",
        "enName": "The Peninsula Hong Kong",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀梳士巴利道22号",
        "distance": "百年传奇地标，临近尖沙咀站与文化中心",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 4800,
        "verdict": "百年传奇",
        "price": 4980,
        "originalPrice": 6280,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "备品采用 99.9% 无石油塑料可回收铝瓶，获 BREEAM 绿色建筑认证",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/884996112.jpg?k=c50bfbce44c0c11cf3c7f9e13c40192389626e9bfc15802907c27e6c423d2832&o="
        ],
        "rooms": [
            {
                "id": "pen-701",
                "name": "豪华特大床客房",
                "size": "43 平方米",
                "bed": "1张豪华特大床",
                "bathroom": "独立大理石卫浴 (配水疗浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 4980,
                "origPrice": 6280,
                "image": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "豪華特大床客房",
                        "size": "43 平方米",
                        "bed": "1張豪華特大床",
                        "bathroom": "獨立大理石衛浴 (配水疗浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "豪华特大床客房",
                        "size": "43 平方米",
                        "bed": "1张豪华特大床",
                        "bathroom": "独立大理石卫浴 (配水疗浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Deluxe King Room",
                        "size": "43  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private marble bathroom with spa soaking bathtub",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港半岛酒店 (The Peninsula Hong Kong)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀梳士巴利道22號",
                "distance": "百年传奇地标，鄰近尖沙咀站与文化中心",
                "verdict": "百年传奇",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": "備品採用 99.9% 無石油塑料可回收鋁瓶，獲 BREEAM 綠色建築認證"
            },
            "zh-CN": {
                "name": "香港半岛酒店 (The Peninsula Hong Kong)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀梳士巴利道22号",
                "distance": "百年传奇地标，临近尖沙咀站与文化中心",
                "verdict": "百年传奇",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": "备品采用 99.9% 无石油塑料可回收铝瓶，获 BREEAM 绿色建筑认证"
            },
            "en": {
                "name": "The Peninsula Hong Kong",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "22 Salisbury Road, Tsim Sha Tsui, Kowloon",
                "distance": "Centennial landmark, steps from Tsim Sha Tsui MTR Station and Cultural Centre",
                "verdict": "Legendary Heritage",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": "In-room amenities packaged in 99.9% petroleum-plastic-free recyclable aluminum bottles; BREEAM certified green building"
            }
        }
    },
    {
        "id": 3,
        "name": "香港康得思酒店 (Cordis, Hong Kong)",
        "enName": "Cordis, Hong Kong",
        "region": "旺角",
        "district": "旺角",
        "location": "九龙旺角上海街555号",
        "distance": "直通朗豪坊商场及旺角地铁站，邻近麦花臣场馆",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 5400,
        "verdict": "地标首选",
        "price": 1480,
        "originalPrice": 1880,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "连续 15 年荣获 EarthCheck Master 最高认证及 ISO 14001 环境管理认证",
        "images": [
            "https://www.cordishotels.com/content/dam/cordishotels/dynamicmedia/global/cordis_global/destinations/cd-destinations-hong-kong-exterior.jpg?wid=700"
        ],
        "rooms": [
            {
                "id": "cd-801",
                "name": "高级城市客房",
                "size": "32 平方米",
                "bed": "1张大床",
                "bathroom": "独立大理石卫浴 (配浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1480,
                "origPrice": 1880,
                "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級城市客房",
                        "size": "32 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立大理石衛浴 (配浴缸)",
                        "breakfast": "含雙人自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "高级城市客房",
                        "size": "32 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立大理石卫浴 (配浴缸)",
                        "breakfast": "含双人自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Superior City Room",
                        "size": "32  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港康得思酒店 (Cordis, Hong Kong)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龍旺角上海街555號",
                "distance": "直通朗豪坊商場及旺角地鐵站，邻近麦花臣场馆",
                "verdict": "地标首选",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": "連續 15 年荣獲 EarthCheck Master 最高認證及 ISO 14001 環境管理認證"
            },
            "zh-CN": {
                "name": "香港康得思酒店 (Cordis, Hong Kong)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龙旺角上海街555号",
                "distance": "直通朗豪坊商场及旺角地铁站，邻近麦花臣场馆",
                "verdict": "地标首选",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": "连续 15 年荣获 EarthCheck Master 最高认证及 ISO 14001 环境管理认证"
            },
            "en": {
                "name": "Cordis, Hong Kong",
                "region": "Mong Kok",
                "district": "Mong Kok",
                "location": "555 Shanghai Street, Mong Kok, Kowloon",
                "distance": "Directly connected to Langham Place and Mong Kok MTR Station, near MacPherson Stadium",
                "verdict": "Iconic Landmark",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": "Consecutive 15-year EarthCheck Master certification and ISO 14001 Environmental Management System accredited"
            }
        }
    },
    {
        "id": 4,
        "name": "香港帝京酒店 (Royal Plaza Hotel)",
        "enName": "Royal Plaza Hotel",
        "region": "旺角",
        "district": "旺角",
        "location": "九龙旺角太子道西193号",
        "distance": "直通新世纪广场与旺角东站",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 4980,
        "verdict": "超棒极佳",
        "price": 1150,
        "originalPrice": 1480,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhRTVnjND05Y2mZAY_gGPOynsM2JOGY6luDqj0pQmCF9DA6MwFTSI3eg&s=10"
        ],
        "rooms": [
            {
                "id": "rpl-401",
                "name": "尊贵双大床房",
                "size": "33 平方米",
                "bed": "2张宽敞大床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1150,
                "origPrice": 1480,
                "image": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "尊貴双大床房",
                        "size": "33 平方米",
                        "bed": "2張寬敞大床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "尊贵双大床房",
                        "size": "33 平方米",
                        "bed": "2张宽敞大床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Grand Plaza Twin-Double Room",
                        "size": "33  sqm",
                        "bed": "2 Double Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港帝京酒店 (Royal Plaza Hotel)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龍旺角太子道西193號",
                "distance": "直通新世紀廣場与旺角东站",
                "verdict": "超棒极佳",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港帝京酒店 (Royal Plaza Hotel)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龙旺角太子道西193号",
                "distance": "直通新世纪广场与旺角东站",
                "verdict": "超棒极佳",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Royal Plaza Hotel",
                "region": "Mong Kok",
                "district": "Mong Kok",
                "location": "193 Prince Edward Road West, Mong Kok, Kowloon",
                "distance": "Directly connected to MOKO Mall and Mong Kok East MTR Station",
                "verdict": "Exceptional",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 5,
        "name": "香港置地文华东方酒店 (The Landmark Mandarin Oriental)",
        "enName": "The Landmark Mandarin Oriental",
        "region": "中环",
        "district": "中环",
        "location": "港岛中环皇后大道中15号",
        "distance": "中环核心金融区，直通中环地铁站与置地广场",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 2190,
        "verdict": "顶级奢华",
        "price": 4500,
        "originalPrice": 5600,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "荣获 EarthCheck 白金级认证，旗下米其林三星餐厅 Amber 推行全素食及低碳排永续高级餐饮",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauIMnWGPkjkpT6ZmvOnMZgifNCrFFbLPMMj0mp4lcWgWEheMBRMjprA&s=10"
        ],
        "rooms": [
            {
                "id": "lmo-301",
                "name": "L600 尊贵客房",
                "size": "56 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立超大圆形浸泡浴缸",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 4500,
                "origPrice": 5600,
                "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "L600 尊貴客房",
                        "size": "56 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "獨立超大圓形浸泡浴缸",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "L600 尊贵客房",
                        "size": "56 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "独立超大圆形浸泡浴缸",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "L600 Premier Room",
                        "size": "56  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower and deep soaking tub",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港置地文华东方酒店 (The Landmark Mandarin Oriental)",
                "region": "中環",
                "district": "中環",
                "location": "港島中環皇后大道中15號",
                "distance": "中環核心金融区，直通中環地鐵站与置地廣場",
                "verdict": "顶级奢华",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "荣獲 EarthCheck 白金級認證，旗下米芝蓮三星餐廳 Amber 推行全素食及低碳排永續高級餐飲"
            },
            "zh-CN": {
                "name": "香港置地文华东方酒店 (The Landmark Mandarin Oriental)",
                "region": "中环",
                "district": "中环",
                "location": "港岛中环皇后大道中15号",
                "distance": "中环核心金融区，直通中环地铁站与置地广场",
                "verdict": "顶级奢华",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "荣获 EarthCheck 白金级认证，旗下米其林三星餐厅 Amber 推行全素食及低碳排永续高级餐饮"
            },
            "en": {
                "name": "The Landmark Mandarin Oriental",
                "region": "Central",
                "district": "Central",
                "location": "15 Queen's Road Central, Central, Hong Kong",
                "distance": "In Central financial district, directly connected to Central MTR and Landmark Mall",
                "verdict": "Ultra Luxury",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "EarthCheck Platinum certified; 3-Michelin-starred Amber champions 100% dairy/gluten-free, low-carbon sustainable fine dining"
            }
        }
    },
    {
        "id": 6,
        "name": "香港美利酒店 (The Murray, Hong Kong)",
        "enName": "The Murray, Hong Kong",
        "region": "中环",
        "district": "中环",
        "location": "港岛中环红棉路22号",
        "distance": "中环CBD政商核心，邻近山顶缆车站与大会堂",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 2760,
        "verdict": "建筑保育典范",
        "price": 2650,
        "originalPrice": 3350,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "商业区",
            "地铁站"
        ],
        "eco": "属于保育中环旗舰活化项目，保留百年古树节果决明，荣获 LEED 金级认证",
        "images": [
            "https://www.gammonconstruction.com/uploaded_files/project/54/606/_DSC7280.JPG"
        ],
        "rooms": [
            {
                "id": "mur-501",
                "name": "N1 Deluxe 豪华客房",
                "size": "47 平方米",
                "bed": "1张特大床",
                "bathroom": "独立云石卫浴 (带浴缸)",
                "breakfast": "含双人半自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 2650,
                "origPrice": 3350,
                "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "N1 Deluxe 豪華客房",
                        "size": "47 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立雲石衛浴 (帶浴缸)",
                        "breakfast": "含雙人半自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "N1 Deluxe 豪华客房",
                        "size": "47 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立云石卫浴 (带浴缸)",
                        "breakfast": "含双人半自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "N1 Deluxe Room",
                        "size": "47  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港美利酒店 (The Murray, Hong Kong)",
                "region": "中環",
                "district": "中環",
                "location": "港島中環紅棉路22號",
                "distance": "中環CBD政商核心，邻近山頂纜車站与大會堂",
                "verdict": "建筑保育典范",
                "locationTags": [
                    "商業區",
                    "地鐵站"
                ],
                "eco": "屬於保育中環旗艦活化項目，保留百年古樹節果決明，荣獲 LEED 金級認證"
            },
            "zh-CN": {
                "name": "香港美利酒店 (The Murray, Hong Kong)",
                "region": "中环",
                "district": "中环",
                "location": "港岛中环红棉路22号",
                "distance": "中环CBD政商核心，邻近山顶缆车站与大会堂",
                "verdict": "建筑保育典范",
                "locationTags": [
                    "商业区",
                    "地铁站"
                ],
                "eco": "属于保育中环旗舰活化项目，保留百年古树节果决明，荣获 LEED 金级认证"
            },
            "en": {
                "name": "The Murray, Hong Kong",
                "region": "Central",
                "district": "Central",
                "location": "22 Cotton Tree Drive, Central, Hong Kong",
                "distance": "Central CBD landmark, close to Peak Tram Lower Terminus and Hong Kong Park",
                "verdict": "Architectural Heritage",
                "locationTags": [
                    "Commercial District",
                    "MTR Station"
                ],
                "eco": "Pioneer in Central architectural conservation, preserving 100-year-old historic Cassia javanica tree; LEED Gold certified"
            }
        }
    },
    {
        "id": 7,
        "name": "香港荃湾西如心酒店 (Nina Hotel Tsuen Wan West)",
        "enName": "Nina Hotel Tsuen Wan West",
        "region": "荃湾",
        "district": "荃湾",
        "location": "新界荃湾杨屋道8号",
        "distance": "直通荃湾西站，蓝巴勒海峡景致",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 6120,
        "verdict": "高空海景",
        "price": 890,
        "originalPrice": 1150,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://cdn.prod.rexby.com/image/47581e1732eb400f87511c68bb866280?format=webp&width=1080&height=1350&quality=80"
        ],
        "rooms": [
            {
                "id": "nina-1401",
                "name": "高空城景房",
                "size": "35 平方米",
                "bed": "1张特大双人床",
                "bathroom": "干湿分离淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 890,
                "origPrice": 1150,
                "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高空城景房",
                        "size": "35 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "乾濕分離淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "高空城景房",
                        "size": "35 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "干湿分离淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "High-Floor City View Room",
                        "size": "35  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港荃灣西如心酒店 (Nina Hotel Tsuen Wan West)",
                "region": "荃灣",
                "district": "荃灣",
                "location": "新界荃灣楊屋道8號",
                "distance": "直通荃灣西站，藍巴勒海峽景致",
                "verdict": "高空海景",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港荃湾西如心酒店 (Nina Hotel Tsuen Wan West)",
                "region": "荃湾",
                "district": "荃湾",
                "location": "新界荃湾杨屋道8号",
                "distance": "直通荃湾西站，蓝巴勒海峡景致",
                "verdict": "高空海景",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Nina Hotel Tsuen Wan West",
                "region": "Tsuen Wan",
                "district": "Tsuen Wan",
                "location": "8 Yeung Uk Road, Tsuen Wan, New Territories",
                "distance": "Directly connected to Tsuen Wan West MTR Station, Rambler Channel views",
                "verdict": "Skyline Harbour View",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 8,
        "name": "香港汀兰居海景酒店 (Bay Bridge Lifestyle Retreat)",
        "enName": "Bay Bridge Lifestyle Retreat",
        "region": "荃湾",
        "district": "荃湾",
        "location": "新界荃湾青山公路汀九段123号",
        "distance": "坐拥汀九桥无敌海景，附穿梭巴士直达荃湾站与机场快线",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 2340,
        "verdict": "海湾休闲",
        "price": 950,
        "originalPrice": 1220,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3-RrdNsqWtcYcwDp65w2c-kWUrPdYhkSLBcCCO8kf0RT3FG-HCw9w0U&s=10"
        ],
        "rooms": [
            {
                "id": "bb-801",
                "name": "汀九海景套房",
                "size": "42 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带全景浴缸)",
                "breakfast": "含海景双人早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 950,
                "origPrice": 1220,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "汀九海景套房",
                        "size": "42 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶全景浴缸)",
                        "breakfast": "含海景雙人早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "汀九海景套房",
                        "size": "42 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带全景浴缸)",
                        "breakfast": "含海景双人早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Ting Kau Sea View Suite",
                        "size": "42  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港汀兰居海景酒店 (Bay Bridge Lifestyle Retreat)",
                "region": "荃灣",
                "district": "荃灣",
                "location": "新界荃灣青山公路汀九段123號",
                "distance": "坐拥汀九橋無敵海景，附穿梭巴士直达荃灣站与机场快线",
                "verdict": "海湾休闲",
                "locationTags": [
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港汀兰居海景酒店 (Bay Bridge Lifestyle Retreat)",
                "region": "荃湾",
                "district": "荃湾",
                "location": "新界荃湾青山公路汀九段123号",
                "distance": "坐拥汀九桥无敌海景，附穿梭巴士直达荃湾站与机场快线",
                "verdict": "海湾休闲",
                "locationTags": [
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Bay Bridge Lifestyle Retreat",
                "region": "Tsuen Wan",
                "district": "Tsuen Wan",
                "location": "123 Castle Peak Road, Ting Kau, Tsuen Wan, New Territories",
                "distance": "Panoramic Ting Kau Bridge sea views, shuttle to Tsuen Wan MTR and Airport Express",
                "verdict": "Coastal Retreat",
                "locationTags": [
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 9,
        "name": "香港迪士尼乐园酒店 (Hong Kong Disneyland Hotel)",
        "enName": "Hong Kong Disneyland Hotel",
        "region": "香港迪士尼乐园",
        "district": "大屿山",
        "location": "新界大屿山香港迪士尼乐园度假区",
        "distance": "海滨维多利亚宫殿式度假胜地，近迪士尼演艺剧场",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 5120,
        "verdict": "维多利亚奇幻",
        "price": 2350,
        "originalPrice": 2980,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://images.trvl-media.com/lodging/2000000/1930000/1926700/1926667/f887dc26.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
        ],
        "rooms": [
            {
                "id": "dlh-2001",
                "name": "标准海景客房",
                "size": "36 平方米",
                "bed": "2张双人床",
                "bathroom": "独立卫浴 (配浴缸)",
                "breakfast": "含翠乐庭双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 2350,
                "origPrice": 2980,
                "image": "https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準海景客房",
                        "size": "36 平方米",
                        "bed": "2張雙人床",
                        "bathroom": "獨立衛浴 (配浴缸)",
                        "breakfast": "含翠乐庭雙人自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "标准海景客房",
                        "size": "36 平方米",
                        "bed": "2张双人床",
                        "bathroom": "独立卫浴 (配浴缸)",
                        "breakfast": "含翠乐庭双人自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Sea View Room",
                        "size": "36  sqm",
                        "bed": "2 Double Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Enchanted Garden Character Buffet Breakfast for 2",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港迪士尼乐园酒店 (Hong Kong Disneyland Hotel)",
                "region": "香港迪士尼乐园",
                "district": "大嶼山",
                "location": "新界大嶼山香港迪士尼乐园度假区",
                "distance": "海濱维多利亚宫殿式度假胜地，近迪士尼演藝劇場",
                "verdict": "维多利亚奇幻",
                "locationTags": [
                    "演出場館",
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港迪士尼乐园酒店 (Hong Kong Disneyland Hotel)",
                "region": "香港迪士尼乐园",
                "district": "大屿山",
                "location": "新界大屿山香港迪士尼乐园度假区",
                "distance": "海滨维多利亚宫殿式度假胜地，近迪士尼演艺剧场",
                "verdict": "维多利亚奇幻",
                "locationTags": [
                    "演出场馆",
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Hong Kong Disneyland Hotel",
                "region": "Hong Kong Disneyland",
                "district": "Lantau Island",
                "location": "Hong Kong Disneyland Resort, Lantau Island, New Territories",
                "distance": "Victorian palace seaside resort with direct shuttle to Disneyland theme park and theater",
                "verdict": "Victorian Wonder",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 10,
        "name": "迪士尼探索家度假酒店 (Disney Explorers Lodge)",
        "enName": "Disney Explorers Lodge",
        "region": "香港迪士尼乐园",
        "district": "大屿山",
        "location": "新界大屿山香港迪士尼乐园度假区神奇道",
        "distance": "园区核心异国探险度假村，专车直达剧场",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 4650,
        "verdict": "自然探索奇趣",
        "price": 2180,
        "originalPrice": 2780,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "机场/高铁站"
        ],
        "eco": "荣获香港环保卓越计划认证，全区采用自然雨水生态灌溉",
        "images": [
            "https://res.klook.com/klook-hotel/image/upload/w_750,c_fill,q_85/travelapi/19000000/18030000/18027700/18027696/0049f84f_z.jpg"
        ],
        "rooms": [
            {
                "id": "del-1001",
                "name": "豪华海景探索客房",
                "size": "36 平方米",
                "bed": "2张双人床",
                "bathroom": "独立干湿分离卫浴",
                "breakfast": "含芊彩餐厅双人早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 2180,
                "origPrice": 2780,
                "image": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "豪華海景探索客房",
                        "size": "36 平方米",
                        "bed": "2張雙人床",
                        "bathroom": "獨立乾濕分離衛浴",
                        "breakfast": "含芊彩餐厅雙人早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "豪华海景探索客房",
                        "size": "36 平方米",
                        "bed": "2张双人床",
                        "bathroom": "独立干湿分离卫浴",
                        "breakfast": "含芊彩餐厅双人早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Deluxe Sea View Explorer Room",
                        "size": "36  sqm",
                        "bed": "2 Double Beds",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Dragon Wind Buffet Breakfast for 2",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "迪士尼探索家度假酒店 (Disney Explorers Lodge)",
                "region": "香港迪士尼乐园",
                "district": "大嶼山",
                "location": "新界大嶼山香港迪士尼乐园度假区神奇道",
                "distance": "園區核心异国探险度假村，专车直达劇場",
                "verdict": "自然探索奇趣",
                "locationTags": [
                    "演出場館",
                    "機場/高鐵站"
                ],
                "eco": "荣獲香港環保卓越計劃認證，全區採用自然雨水生態灌溉"
            },
            "zh-CN": {
                "name": "迪士尼探索家度假酒店 (Disney Explorers Lodge)",
                "region": "香港迪士尼乐园",
                "district": "大屿山",
                "location": "新界大屿山香港迪士尼乐园度假区神奇道",
                "distance": "园区核心异国探险度假村，专车直达剧场",
                "verdict": "自然探索奇趣",
                "locationTags": [
                    "演出场馆",
                    "机场/高铁站"
                ],
                "eco": "荣获香港环保卓越计划认证，全区采用自然雨水生态灌溉"
            },
            "en": {
                "name": "Disney Explorers Lodge",
                "region": "Hong Kong Disneyland",
                "district": "Lantau Island",
                "location": "Magic Road, Hong Kong Disneyland Resort, Lantau Island, New Territories",
                "distance": "Exotic adventure lodge inside the resort, direct shuttle to theme park and theater",
                "verdict": "Nature Explorers",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Airport / High Speed Rail"
                ],
                "eco": "Hong Kong Awards for Environmental Excellence certified, featuring 100% natural rainwater ecological irrigation"
            }
        }
    },
    {
        "id": 11,
        "name": "香港沙田凯悦酒店 (Hyatt Regency Sha Tin)",
        "enName": "Hyatt Regency Hong Kong, Sha Tin",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田泽祥街18号",
        "distance": "临近港铁大学站，依山傍海",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 2800,
        "verdict": "山海度假",
        "price": 1180,
        "originalPrice": 1480,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站"
        ],
        "eco": "",
        "images": [
            "https://images.trvl-media.com/lodging/3000000/2440000/2437300/2437201/14b66c3e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
        ],
        "rooms": [
            {
                "id": "hrs-901",
                "name": "九肚山景客房",
                "size": "38 平方米",
                "bed": "1张特大床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人咖啡厅早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1180,
                "origPrice": 1480,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "九肚山景客房",
                        "size": "38 平方米",
                        "bed": "1張特大床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含雙人咖啡廳早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "九肚山景客房",
                        "size": "38 平方米",
                        "bed": "1张特大床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含双人咖啡厅早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Kau To Shan Mountain View Room",
                        "size": "38  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Café Buffet Breakfast for 2",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港沙田凯悦酒店 (Hyatt Regency Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田澤祥街18號",
                "distance": "鄰近港铁大学站，依山傍海",
                "verdict": "山海度假",
                "locationTags": [
                    "地鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港沙田凯悦酒店 (Hyatt Regency Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田泽祥街18号",
                "distance": "临近港铁大学站，依山傍海",
                "verdict": "山海度假",
                "locationTags": [
                    "地铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Hyatt Regency Hong Kong, Sha Tin",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "18 Chak Cheung Street, Sha Tin, New Territories",
                "distance": "Close to University MTR Station, surrounded by harbour and mountain scenery",
                "verdict": "Mountain & Sea Resort",
                "locationTags": [
                    "MTR Station"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 12,
        "name": "香港沙田帝逸酒店 (ALVA HOTEL BY MONTE ROSA)",
        "enName": "ALVA HOTEL BY MONTE ROSA",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田源康街1号",
        "distance": "城门河畔，步行5分钟至第一城站，近沙田大会堂",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 3520,
        "verdict": "河畔奢华智能",
        "price": 1080,
        "originalPrice": 1380,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "演出场馆"
        ],
        "eco": "荣获 BEAM Plus 绿建环评铂金级最高认证，设全智能节能系统",
        "images": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/26/d1/96/alva-hotel-by-royal-exterior.jpg?w=500&h=-1&s=1"
        ],
        "rooms": [
            {
                "id": "alva-1201",
                "name": "高级绿意客房",
                "size": "32 平方米",
                "bed": "1张特大床",
                "bathroom": "独立云石卫浴 (配浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1080,
                "origPrice": 1380,
                "image": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級绿意客房",
                        "size": "32 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立雲石衛浴 (配浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "高级绿意客房",
                        "size": "32 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立云石卫浴 (配浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Superior Greenery View Room",
                        "size": "32  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港沙田帝逸酒店 (ALVA HOTEL BY MONTE ROSA)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田源康街1號",
                "distance": "城門河畔，步行5分鐘至第一城站，近沙田大會堂",
                "verdict": "河畔奢华智能",
                "locationTags": [
                    "地鐵站",
                    "演出場館"
                ],
                "eco": "荣獲 BEAM Plus 綠建環評铂金級最高認證，設全智能節能系統"
            },
            "zh-CN": {
                "name": "香港沙田帝逸酒店 (ALVA HOTEL BY MONTE ROSA)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田源康街1号",
                "distance": "城门河畔，步行5分钟至第一城站，近沙田大会堂",
                "verdict": "河畔奢华智能",
                "locationTags": [
                    "地铁站",
                    "演出场馆"
                ],
                "eco": "荣获 BEAM Plus 绿建环评铂金级最高认证，设全智能节能系统"
            },
            "en": {
                "name": "ALVA HOTEL BY MONTE ROSA",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "1 Yuen Hong Street, Sha Tin, New Territories",
                "distance": "Shing Mun Riverfront, 5-min walk to City One MTR Station, near Sha Tin Town Hall",
                "verdict": "Riverside Smart Luxury",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue"
                ],
                "eco": "Awarded highest BEAM Plus Platinum green building certification, equipped with integrated smart energy-saving management"
            }
        }
    },
    {
        "id": 13,
        "name": "香港历山酒店 (Hotel Alexandra)",
        "enName": "Hotel Alexandra Hong Kong",
        "region": "北角",
        "district": "北角",
        "location": "港岛北角城市花园道32号",
        "distance": "炮台山地铁站B出口步行2分钟",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 2980,
        "verdict": "宫廷维港海景",
        "price": 1120,
        "originalPrice": 1450,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/25520956.jpg?k=40c6d4cd114c0f20aa92ebef3aaef1ff2628d212a4f5faad5f3abddee4edb1fc&o="
        ],
        "rooms": [
            {
                "id": "alex-1301",
                "name": "维多利亚海景豪华房",
                "size": "30 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立奢华大理石卫浴",
                "breakfast": "含双人维港半自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1120,
                "origPrice": 1450,
                "image": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "维多利亚海景豪華房",
                        "size": "30 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "獨立奢华大理石衛浴",
                        "breakfast": "含雙人維港半自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "维多利亚海景豪华房",
                        "size": "30 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "独立奢华大理石卫浴",
                        "breakfast": "含双人维港半自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Victoria Harbour View Deluxe Room",
                        "size": "30  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港历山酒店 (Hotel Alexandra)",
                "region": "北角",
                "district": "北角",
                "location": "港島北角城市花園道32號",
                "distance": "炮台山地鐵站B出口步行2分鐘",
                "verdict": "宫廷維港海景",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港历山酒店 (Hotel Alexandra)",
                "region": "北角",
                "district": "北角",
                "location": "港岛北角城市花园道32号",
                "distance": "炮台山地铁站B出口步行2分钟",
                "verdict": "宫廷维港海景",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Hotel Alexandra Hong Kong",
                "region": "North Point",
                "district": "North Point",
                "location": "32 City Garden Road, North Point, Hong Kong",
                "distance": "2-min walk from Fortress Hill MTR Station Exit B",
                "verdict": "Palatial Harbour View",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 14,
        "name": "港岛海逸君绰酒店 (Harbour Grand Hong Kong)",
        "enName": "Harbour Grand Hong Kong",
        "region": "北角",
        "district": "北角",
        "location": "港岛北角油街23号",
        "distance": "炮台山地铁站A出口步行2分钟，维港海傍",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 3890,
        "verdict": "奢华海景首选",
        "price": 1580,
        "originalPrice": 1980,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "获颁绿色机构卓越认证，客房设智能节能光感调节",
        "images": [
            "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/145/658/242/Hotel_Driveway_O.jpg?tr=w-1200%2Cfo-auto"
        ],
        "rooms": [
            {
                "id": "hghk-1401",
                "name": "尊贵维港海景房",
                "size": "35 平方米",
                "bed": "1张特大床",
                "bathroom": "独立卫浴 (带圆形大浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1580,
                "origPrice": 1980,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "尊貴維港海景房",
                        "size": "35 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立衛浴 (帶圓形大浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "尊贵维港海景房",
                        "size": "35 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立卫浴 (带圆形大浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Premier Victoria Harbour View Room",
                        "size": "35  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower and deep soaking tub",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "港島海逸君绰酒店 (Harbour Grand Hong Kong)",
                "region": "北角",
                "district": "北角",
                "location": "港島北角油街23號",
                "distance": "炮台山地鐵站A出口步行2分鐘，維港海傍",
                "verdict": "奢华海景首选",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "獲頒綠色機構卓越認證，客房設智能節能光感調節"
            },
            "zh-CN": {
                "name": "港岛海逸君绰酒店 (Harbour Grand Hong Kong)",
                "region": "北角",
                "district": "北角",
                "location": "港岛北角油街23号",
                "distance": "炮台山地铁站A出口步行2分钟，维港海傍",
                "verdict": "奢华海景首选",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "获颁绿色机构卓越认证，客房设智能节能光感调节"
            },
            "en": {
                "name": "Harbour Grand Hong Kong",
                "region": "North Point",
                "district": "North Point",
                "location": "23 Oil Street, North Point, Hong Kong",
                "distance": "2-min walk from Fortress Hill MTR Station Exit A, on Victoria Harbour waterfront",
                "verdict": "Premier Luxury Harbour View",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "Hong Kong Green Organisation Certification awarded; guest rooms feature smart eco-sensing temperature and lighting controls"
            }
        }
    },
    {
        "id": 15,
        "name": "香港柏宁铂尔曼酒店 (The Park Lane Hong Kong)",
        "enName": "The Park Lane Hong Kong, a Pullman Hotel",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛铜锣湾告士打道310号",
        "distance": "直面维多利亚公园，铜锣湾站步行2分钟，近伊利沙伯体育馆",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 4210,
        "verdict": "公园全景奢华",
        "price": 1680,
        "originalPrice": 2150,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "雅高集团 Planet 21 黄金级认证，全面停用一次性塑料制品",
        "images": [
            "https://www.parklane.com.hk/serve-webp?path=https%3A%2F%2Fwww.parklane.com.hk%2Fupload%2Fimg%2F202606%2F17%2Fimg_17816781001772.png"
        ],
        "rooms": [
            {
                "id": "pl-1501",
                "name": "维园尊贵大床房",
                "size": "34 平方米",
                "bed": "1张特大床",
                "bathroom": "独立大理石卫浴 (带浴缸)",
                "breakfast": "含 PLAYT 双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1680,
                "origPrice": 2150,
                "image": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "维园尊貴大床房",
                        "size": "34 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立大理石衛浴 (帶浴缸)",
                        "breakfast": "含 PLAYT 雙人自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "维园尊贵大床房",
                        "size": "34 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立大理石卫浴 (带浴缸)",
                        "breakfast": "含 PLAYT 双人自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Victoria Park View Grand King Room",
                        "size": "34  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary PLAYT Buffet Breakfast for 2",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港柏宁铂尔曼酒店 (The Park Lane Hong Kong)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島銅鑼灣告士打道310號",
                "distance": "直面维多利亚公園，銅鑼灣站步行2分鐘，近伊利沙伯體育館",
                "verdict": "公園全景奢华",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": "雅高集团 Planet 21 黄金級認證，全面停用一次性塑料製品"
            },
            "zh-CN": {
                "name": "香港柏宁铂尔曼酒店 (The Park Lane Hong Kong)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛铜锣湾告士打道310号",
                "distance": "直面维多利亚公园，铜锣湾站步行2分钟，近伊利沙伯体育馆",
                "verdict": "公园全景奢华",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": "雅高集团 Planet 21 黄金级认证，全面停用一次性塑料制品"
            },
            "en": {
                "name": "The Park Lane Hong Kong, a Pullman Hotel",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "310 Gloucester Road, Causeway Bay, Hong Kong",
                "distance": "Directly facing Victoria Park, 2-min walk to Causeway Bay MTR, near Queen Elizabeth Stadium",
                "verdict": "Park View Luxury",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": "Accor Planet 21 Gold certified; 100% elimination of single-use plastics across all guest rooms and dining venues"
            }
        }
    },
    {
        "id": 16,
        "name": "香港富豪香港酒店 (Regal Hongkong Hotel)",
        "enName": "Regal Hongkong Hotel",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛铜锣湾怡和街88号",
        "distance": "铜锣湾站F出口步行3分钟，时代广场及崇光百货核心",
        "stars": 5,
        "rating": 8.0,
        "reviewCount": 3650,
        "verdict": "欧陆古典典雅",
        "price": 1280,
        "originalPrice": 1650,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://pix10.agoda.net/hotelImages/2786/0/9a0ad2fdbae6efc488e5e457d3897317.jpeg?ce=2&s=1024x768"
        ],
        "rooms": [
            {
                "id": "rhk-1601",
                "name": "高级豪华双床客房",
                "size": "32 平方米",
                "bed": "2张单人床",
                "bathroom": "独立大理石卫浴 (配浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1280,
                "origPrice": 1650,
                "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級豪華双床客房",
                        "size": "32 平方米",
                        "bed": "2張單人床",
                        "bathroom": "獨立大理石衛浴 (配浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "高级豪华双床客房",
                        "size": "32 平方米",
                        "bed": "2张单人床",
                        "bathroom": "独立大理石卫浴 (配浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Superior Deluxe Twin Room",
                        "size": "32  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港富豪香港酒店 (Regal Hongkong Hotel)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島銅鑼灣怡和街88號",
                "distance": "銅鑼灣站F出口步行3分鐘，时代廣場及崇光百货核心",
                "verdict": "歐陸古典典雅",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港富豪香港酒店 (Regal Hongkong Hotel)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛铜锣湾怡和街88号",
                "distance": "铜锣湾站F出口步行3分钟，时代广场及崇光百货核心",
                "verdict": "欧陆古典典雅",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Regal Hongkong Hotel",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "88 Yee Wo Street, Causeway Bay, Hong Kong",
                "distance": "3-min walk from Causeway Bay MTR Exit F, next to Times Square and SOGO Mall",
                "verdict": "European Classic Elegance",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 17,
        "name": "香港瑰丽酒店 (Rosewood Hong Kong)",
        "enName": "Rosewood Hong Kong",
        "region": "维多利亚港",
        "district": "尖沙咀",
        "location": "九龙尖沙咀梳士巴利道18号",
        "distance": "坐落尖沙咀海滨核心，直通K11 MUSEA，近文化中心演艺剧场",
        "stars": 5,
        "rating": 8.0,
        "reviewCount": 2680,
        "verdict": "传奇顶奢",
        "price": 4680,
        "originalPrice": 5880,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "商业区",
            "演出场馆",
            "地铁站"
        ],
        "eco": "荣获 LEED Gold 金级绿色建筑认证，馆内全面采用 Nordaq 现场过滤玻璃瓶装水系统",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoQwnyWg1oXs1Q8kSR8fqPYHTD73VK-OUXh0E-oX8kUgMg0lngs8kbfA&s=10"
        ],
        "rooms": [
            {
                "id": "rw-201",
                "name": "九龙景观尊贵客房",
                "size": "53 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立双台盆大理石卫浴 (带浸泡浴缸)",
                "breakfast": "含半自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 4680,
                "origPrice": 5880,
                "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "九龍景观尊貴客房",
                        "size": "53 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "獨立双台盆大理石衛浴 (帶浸泡浴缸)",
                        "breakfast": "含半自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "九龙景观尊贵客房",
                        "size": "53 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "独立双台盆大理石卫浴 (带浸泡浴缸)",
                        "breakfast": "含半自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Kowloon View Premier Room",
                        "size": "53  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港瑰丽酒店 (Rosewood Hong Kong)",
                "region": "維多利亞港",
                "district": "尖沙咀",
                "location": "九龍尖沙咀梳士巴利道18號",
                "distance": "坐落尖沙咀海濱核心，直通K11 MUSEA，近文化中心演藝劇場",
                "verdict": "传奇顶奢",
                "locationTags": [
                    "商業區",
                    "演出場館",
                    "地鐵站"
                ],
                "eco": "荣獲 LEED Gold 金級綠色建築認證，館內全面採用 Nordaq 現場過濾玻璃瓶裝水系統"
            },
            "zh-CN": {
                "name": "香港瑰丽酒店 (Rosewood Hong Kong)",
                "region": "维多利亚港",
                "district": "尖沙咀",
                "location": "九龙尖沙咀梳士巴利道18号",
                "distance": "坐落尖沙咀海滨核心，直通K11 MUSEA，近文化中心演艺剧场",
                "verdict": "传奇顶奢",
                "locationTags": [
                    "商业区",
                    "演出场馆",
                    "地铁站"
                ],
                "eco": "荣获 LEED Gold 金级绿色建筑认证，馆内全面采用 Nordaq 现场过滤玻璃瓶装水系统"
            },
            "en": {
                "name": "Rosewood Hong Kong",
                "region": "Victoria Harbour",
                "district": "Tsim Sha Tsui",
                "location": "18 Salisbury Road, Tsim Sha Tsui, Kowloon",
                "distance": "Prime Victoria Dockside waterfront, connected to K11 MUSEA, near Cultural Centre",
                "verdict": "Legendary Luxury",
                "locationTags": [
                    "Commercial District",
                    "Performance / Sports Venue",
                    "MTR Station"
                ],
                "eco": "LEED Gold certified green building; property-wide Nordaq on-site water filtration system eliminating single-use bottles"
            }
        }
    },
    {
        "id": 18,
        "name": "香港君悦酒店 (Grand Hyatt Hong Kong)",
        "enName": "Grand Hyatt Hong Kong",
        "region": "维多利亚港",
        "district": "湾仔",
        "location": "港岛湾仔港湾道1号",
        "distance": "会展中心海旁，直通会展大型展演及演唱会大会堂",
        "stars": 5,
        "rating": 8.0,
        "reviewCount": 4320,
        "verdict": "维港天际标杆",
        "price": 3100,
        "originalPrice": 3900,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "商业区",
            "地铁站"
        ],
        "eco": "荣获香港环保卓越奖，配置大型太阳能供热及海水冷却温控系统",
        "images": [
            "https://res.klook.com/image/upload/w_750,c_fill,q_85/v1615531125/hotel/deuyz4oe78j9m4872m3u.jpg"
        ],
        "rooms": [
            {
                "id": "ghhk-1801",
                "name": "维港海景特大客房",
                "size": "40 平方米",
                "bed": "1张特大床",
                "bathroom": "独立大理石卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 3100,
                "origPrice": 3900,
                "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "維港海景特大客房",
                        "size": "40 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立大理石衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "维港海景特大客房",
                        "size": "40 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立大理石卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Victoria Harbour View Grand King Room",
                        "size": "40  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港君悦酒店 (Grand Hyatt Hong Kong)",
                "region": "維多利亞港",
                "district": "灣仔",
                "location": "港島灣仔港灣道1號",
                "distance": "會展中心海旁，直通会展大型展演及演唱会大會堂",
                "verdict": "維港天际标杆",
                "locationTags": [
                    "演出場館",
                    "商業區",
                    "地鐵站"
                ],
                "eco": "荣獲香港環保卓越獎，配置大型太陽能供熱及海水冷卻溫控系統"
            },
            "zh-CN": {
                "name": "香港君悦酒店 (Grand Hyatt Hong Kong)",
                "region": "维多利亚港",
                "district": "湾仔",
                "location": "港岛湾仔港湾道1号",
                "distance": "会展中心海旁，直通会展大型展演及演唱会大会堂",
                "verdict": "维港天际标杆",
                "locationTags": [
                    "演出场馆",
                    "商业区",
                    "地铁站"
                ],
                "eco": "荣获香港环保卓越奖，配置大型太阳能供热及海水冷却温控系统"
            },
            "en": {
                "name": "Grand Hyatt Hong Kong",
                "region": "Victoria Harbour",
                "district": "Wan Chai",
                "location": "1 Harbour Road, Wan Chai, Hong Kong",
                "distance": "On Wan Chai waterfront, direct covered walkway to HKCEC Exhibition Centre",
                "verdict": "Harbour Skyline Benchmark",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Commercial District",
                    "MTR Station"
                ],
                "eco": "Hong Kong Awards for Environmental Excellence winner, featuring solar water-heating and seawater district cooling systems"
            }
        }
    },
    {
        "id": 19,
        "name": "香港启德帝盛酒店 (Dorsett Kai Tak)",
        "enName": "Dorsett Kai Tak Hong Kong",
        "region": "启德体育园",
        "district": "九龙城",
        "location": "九龙启德承启道43号",
        "distance": "2024年底旗舰新落成，直面启德体育园主场馆与大球场",
        "stars": 5,
        "rating": 8.0,
        "reviewCount": 1850,
        "verdict": "体育园地标新旗舰",
        "price": 1450,
        "originalPrice": 1850,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "地铁站",
            "商业区"
        ],
        "eco": "全面采用 BEAM Plus 绿色建筑标准，全智能断电控温与雨水循环",
        "images": [
            "https://pix10.agoda.net/hotelImages/194021/0/8042e9f77d1cc4f4cc41e032d041e37e.jpeg?ce=2&s=414x232"
        ],
        "rooms": [
            {
                "id": "dkt-1901",
                "name": "体育园景尊贵客房",
                "size": "32 平方米",
                "bed": "1张特大床",
                "bathroom": "独立卫浴 (带景致浴缸)",
                "breakfast": "含双人活力自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 1450,
                "origPrice": 1850,
                "image": "https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "體育園景尊貴客房",
                        "size": "32 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立衛浴 (帶景致浴缸)",
                        "breakfast": "含雙人活力自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "体育园景尊贵客房",
                        "size": "32 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立卫浴 (带景致浴缸)",
                        "breakfast": "含双人活力自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Sports Park View Premier Room",
                        "size": "32  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港启德帝盛酒店 (Dorsett Kai Tak)",
                "region": "啟德體育園",
                "district": "九龍城",
                "location": "九龍启德承啟道43號",
                "distance": "2024年底旗艦新落成，直面啟德體育園主場館与大球場",
                "verdict": "體育園地标新旗艦",
                "locationTags": [
                    "演出場館",
                    "地鐵站",
                    "商業區"
                ],
                "eco": "全面採用 BEAM Plus 綠色建築標準，全智能斷電控溫与雨水循環"
            },
            "zh-CN": {
                "name": "香港启德帝盛酒店 (Dorsett Kai Tak)",
                "region": "启德体育园",
                "district": "九龙城",
                "location": "九龙启德承启道43号",
                "distance": "2024年底旗舰新落成，直面启德体育园主场馆与大球场",
                "verdict": "体育园地标新旗舰",
                "locationTags": [
                    "演出场馆",
                    "地铁站",
                    "商业区"
                ],
                "eco": "全面采用 BEAM Plus 绿色建筑标准，全智能断电控温与雨水循环"
            },
            "en": {
                "name": "Dorsett Kai Tak Hong Kong",
                "region": "Kai Tak Sports Park",
                "district": "Kowloon City",
                "location": "43 Shing Kai Road, Kai Tak, Kowloon",
                "distance": "Flagship opened late 2024, directly facing Kai Tak Sports Park Main Stadium",
                "verdict": "Sports Park Landmark Flagship",
                "locationTags": [
                    "Performance / Sports Venue",
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "Built to BEAM Plus Green Building standards with automated smart cut-off energy controls and rainwater recycling"
            }
        }
    },
    {
        "id": 20,
        "name": "香港九龙东皇冠假日酒店 (Crowne Plaza Kowloon East)",
        "enName": "Crowne Plaza Hong Kong Kowloon East",
        "region": "启德体育园",
        "district": "将军澳",
        "location": "九龙将军澳唐德街3号 (直通启德港铁线)",
        "distance": "港铁连通启德体育园核心，附豪华天际泳池",
        "stars": 5,
        "rating": 8.0,
        "reviewCount": 3950,
        "verdict": "天际会展尊享",
        "price": 1380,
        "originalPrice": 1780,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/Crowne_Plaza_Hong_Kong_Causeway_Bay_%28full_view%29.jpg?utm_source=zh.wikipedia.org&utm_campaign=index&utm_content=original"
        ],
        "rooms": [
            {
                "id": "cpke-2001",
                "name": "高级豪华客房",
                "size": "36 平方米",
                "bed": "1张特大床",
                "bathroom": "模块化现代淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1380,
                "origPrice": 1780,
                "image": "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級豪華客房",
                        "size": "36 平方米",
                        "bed": "1張特大床",
                        "bathroom": "模块化现代淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "高级豪华客房",
                        "size": "36 平方米",
                        "bed": "1张特大床",
                        "bathroom": "模块化现代淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Superior Deluxe Room",
                        "size": "36  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港九龍东皇冠假日酒店 (Crowne Plaza Kowloon East)",
                "region": "啟德體育園",
                "district": "將軍澳",
                "location": "九龍將軍澳唐德街3號 (直通启德港铁线)",
                "distance": "港铁连通啟德體育園核心，附豪華天际泳池",
                "verdict": "天际会展尊享",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港九龙东皇冠假日酒店 (Crowne Plaza Kowloon East)",
                "region": "启德体育园",
                "district": "将军澳",
                "location": "九龙将军澳唐德街3号 (直通启德港铁线)",
                "distance": "港铁连通启德体育园核心，附豪华天际泳池",
                "verdict": "天际会展尊享",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Crowne Plaza Hong Kong Kowloon East",
                "region": "Kai Tak Sports Park",
                "district": "Tseung Kwan O",
                "location": "3 Tong Tak Street, Tseung Kwan O, Kowloon",
                "distance": "Direct MTR link to Kai Tak Sports Park, featuring luxury rooftop infinity pool",
                "verdict": "Skyline Convention Privilege",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 21,
        "name": "香港朗廷酒店 (The Langham Hong Kong)",
        "enName": "The Langham Hong Kong",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀北京道8号",
        "distance": "紧邻海港城与广东道奢品商圈",
        "stars": 4,
        "rating": 9.5,
        "reviewCount": 4100,
        "verdict": "欧式典雅",
        "price": 1780,
        "originalPrice": 2280,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://www.langhamhotels.com/content/dam/langhamhotels/dynamicmedia/asia/the-langham-hong-kong-tlhkg/home/tlhkg-langham-hong-kong.jpg"
        ],
        "rooms": [
            {
                "id": "lh-1701",
                "name": "内园景客房",
                "size": "32 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立大理石浴室 (配浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1780,
                "origPrice": 2280,
                "image": "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "内园景客房",
                        "size": "32 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "獨立大理石浴室 (配浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "内园景客房",
                        "size": "32 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "独立大理石浴室 (配浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Courtyard View Room",
                        "size": "32  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港朗廷酒店 (The Langham Hong Kong)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀北京道8號",
                "distance": "緊鄰海港城与广东道奢品商圈",
                "verdict": "欧式典雅",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港朗廷酒店 (The Langham Hong Kong)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀北京道8号",
                "distance": "紧邻海港城与广东道奢品商圈",
                "verdict": "欧式典雅",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "The Langham Hong Kong",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "8 Peking Road, Tsim Sha Tsui, Kowloon",
                "distance": "Next to Harbour City and Canton Road luxury shopping quarter",
                "verdict": "European Elegance",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 22,
        "name": "香港百乐酒店 (Park Hotel Hong Kong)",
        "enName": "Park Hotel Hong Kong",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀漆咸道南61-65号",
        "distance": "尖沙咀核心购物商圈，近红馆",
        "stars": 4,
        "rating": 9.5,
        "reviewCount": 3300,
        "verdict": "宽敞舒适",
        "price": 790,
        "originalPrice": 1020,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "客房安装直饮水过滤系统，每年减少逾 20 万个即弃塑胶水樽",
        "images": [
            "https://image-tc.galaxy.tf/wijpeg-3y69dp0f676w8i9dofn98goiq/park-hotel-hong-kong-exterior-tsim-sha-tsui-jpg.jpg?height=700"
        ],
        "rooms": [
            {
                "id": "ph-2801",
                "name": "高级城市双床房",
                "size": "28 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 790,
                "origPrice": 1020,
                "image": "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級城市雙床房",
                        "size": "28 平方米",
                        "bed": "2張單人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "高级城市双床房",
                        "size": "28 平方米",
                        "bed": "2张单人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Superior City Room",
                        "size": "28  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港百乐酒店 (Park Hotel Hong Kong)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀漆咸道南61-65號",
                "distance": "尖沙咀核心购物商圈，近紅館",
                "verdict": "寬敞舒適",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": "客房安裝直飲水過濾系統，每年減少逾 20 萬個即棄塑膠水樽"
            },
            "zh-CN": {
                "name": "香港百乐酒店 (Park Hotel Hong Kong)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀漆咸道南61-65号",
                "distance": "尖沙咀核心购物商圈，近红馆",
                "verdict": "宽敞舒适",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": "客房安装直饮水过滤系统，每年减少逾 20 万个即弃塑胶水樽"
            },
            "en": {
                "name": "Park Hotel Hong Kong",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "61-65 Chatham Road South, Tsim Sha Tsui, Kowloon",
                "distance": "In the heart of Tsim Sha Tsui shopping hub, near Hong Kong Coliseum",
                "verdict": "Spacious & Comfortable",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": "High-efficiency in-room direct drinking water filtration system saving over 200,000 disposable plastic bottles annually"
            }
        }
    },
    {
        "id": 23,
        "name": "香港九龙维景酒店 (Metropark Hotel Kowloon)",
        "enName": "Metropark Hotel Kowloon",
        "region": "旺角",
        "district": "旺角",
        "location": "九龙窝打老道75号",
        "distance": "邻近旺角东站与旺角大球场",
        "stars": 4,
        "rating": 9.5,
        "reviewCount": 3280,
        "verdict": "闹市静居",
        "price": 690,
        "originalPrice": 890,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "演出场馆",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnjTpiWoZq3K05pMVgS-IyIaG5k-WOA1FsLY---HA229erTbtDl5fGgg&s=10"
        ],
        "rooms": [
            {
                "id": "mpk-4001",
                "name": "标准双人客房",
                "size": "22 平方米",
                "bed": "1张大床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 690,
                "origPrice": 890,
                "image": "https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準雙人客房",
                        "size": "22 平方米",
                        "bed": "1張大床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含雙人自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准双人客房",
                        "size": "22 平方米",
                        "bed": "1张大床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含双人自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard Double Room",
                        "size": "22  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港九龍维景酒店 (Metropark Hotel Kowloon)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龍窩打老道75號",
                "distance": "邻近旺角东站与旺角大球場",
                "verdict": "闹市静居",
                "locationTags": [
                    "地鐵站",
                    "演出場館",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港九龙维景酒店 (Metropark Hotel Kowloon)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龙窝打老道75号",
                "distance": "邻近旺角东站与旺角大球场",
                "verdict": "闹市静居",
                "locationTags": [
                    "地铁站",
                    "演出场馆",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Metropark Hotel Kowloon",
                "region": "Mong Kok",
                "district": "Mong Kok",
                "location": "75 Waterloo Road, Mong Kok, Kowloon",
                "distance": "Close to Mong Kok East MTR Station and Mong Kok Stadium",
                "verdict": "Urban Oasis",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 24,
        "name": "香港旺角帝盛酒店 (Dorsett Mongkok)",
        "enName": "Dorsett Mongkok, Hong Kong",
        "region": "旺角",
        "district": "旺角",
        "location": "九龙大角咀道88号",
        "distance": "步行至奥运站及旺角商圈约5分钟",
        "stars": 4,
        "rating": 9.5,
        "reviewCount": 3420,
        "verdict": "绿色环保标杆",
        "price": 720,
        "originalPrice": 940,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "获颁 EarthCheck 铜级认证，推行 EcoChoice+ 计划并设立智能净水站",
        "images": [
            "https://pix10.agoda.net/hotelImages/194021/0/8042e9f77d1cc4f4cc41e032d041e37e.jpeg?ce=2&s=414x232"
        ],
        "rooms": [
            {
                "id": "dm-3101",
                "name": "舒适双人客房",
                "size": "20 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 720,
                "origPrice": 940,
                "image": "https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "舒適雙人客房",
                        "size": "20 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "舒适双人客房",
                        "size": "20 平方米",
                        "bed": "1张双人床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Comfort Double Room",
                        "size": "20  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港旺角帝盛酒店 (Dorsett Mongkok)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龍大角咀道88號",
                "distance": "步行至奥运站及旺角商圈约5分鐘",
                "verdict": "绿色環保标杆",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "獲頒 EarthCheck 銅級認證，推行 EcoChoice+ 計劃并設立智能淨水站"
            },
            "zh-CN": {
                "name": "香港旺角帝盛酒店 (Dorsett Mongkok)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龙大角咀道88号",
                "distance": "步行至奥运站及旺角商圈约5分钟",
                "verdict": "绿色环保标杆",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "获颁 EarthCheck 铜级认证，推行 EcoChoice+ 计划并设立智能净水站"
            },
            "en": {
                "name": "Dorsett Mongkok, Hong Kong",
                "region": "Mong Kok",
                "district": "Mong Kok",
                "location": "88 Tai Kok Tsui Road, Mong Kok, Kowloon",
                "distance": "5-min walk to Olympic MTR Station and Mong Kok shopping precinct",
                "verdict": "Green Eco Benchmark",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "Awarded EarthCheck Bronze certification, operating the EcoChoice+ initiative and smart purified drinking water stations"
            }
        }
    },
    {
        "id": 25,
        "name": "香港四季酒店 (Four Seasons Hotel Hong Kong)",
        "enName": "Four Seasons Hotel Hong Kong",
        "region": "中环",
        "district": "中环",
        "location": "港岛中环金融街8号IFC",
        "distance": "直通IFC国际金融中心商场与机场快线香港站",
        "stars": 4,
        "rating": 9.5,
        "reviewCount": 3450,
        "verdict": "卓越尊贵",
        "price": 2800,
        "originalPrice": 3600,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "机场/高铁站",
            "商业区",
            "地铁站"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gXMMJBLFrt30UWrNEXpADZfSWpIeLdjE4lPsgMHvie0GgOKQWzLCowHj&s=10"
        ],
        "rooms": [
            {
                "id": "fs-601",
                "name": "山景豪华客房",
                "size": "45 平方米",
                "bed": "1张特大双人床",
                "bathroom": "现代步入式淋浴间",
                "breakfast": "含双人四季丰盛早餐",
                "cancel": "特惠房型不可退订",
                "price": 2800,
                "origPrice": 3600,
                "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "山景豪華客房",
                        "size": "45 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "现代步入式淋浴間",
                        "breakfast": "含雙人四季豐盛早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "山景豪华客房",
                        "size": "45 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "现代步入式淋浴间",
                        "breakfast": "含双人四季丰盛早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Mountain View Deluxe Room",
                        "size": "45  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港四季酒店 (Four Seasons Hotel Hong Kong)",
                "region": "中環",
                "district": "中環",
                "location": "港島中環金融街8號IFC",
                "distance": "直通IFC國際金融中心商場与机场快线香港站",
                "verdict": "卓越尊貴",
                "locationTags": [
                    "機場/高鐵站",
                    "商業區",
                    "地鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港四季酒店 (Four Seasons Hotel Hong Kong)",
                "region": "中环",
                "district": "中环",
                "location": "港岛中环金融街8号IFC",
                "distance": "直通IFC国际金融中心商场与机场快线香港站",
                "verdict": "卓越尊贵",
                "locationTags": [
                    "机场/高铁站",
                    "商业区",
                    "地铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Four Seasons Hotel Hong Kong",
                "region": "Central",
                "district": "Central",
                "location": "8 Finance Street, Central, Hong Kong",
                "distance": "Direct covered link to IFC Mall and Airport Express Hong Kong Station",
                "verdict": "Distinguished Prestige",
                "locationTags": [
                    "Airport / High Speed Rail",
                    "Commercial District",
                    "MTR Station"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 26,
        "name": "香港中环荷李活道木的地酒店 (Madera Hollywood)",
        "enName": "Madera Hollywood",
        "region": "中环",
        "district": "中环",
        "location": "港岛中环荷李活道53-55号",
        "distance": "中环SoHo苏豪区商业中心，近大馆艺术展演馆",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 1420,
        "verdict": "复古精品套房",
        "price": 1580,
        "originalPrice": 1980,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "商业区",
            "演出场馆",
            "地铁站"
        ],
        "eco": "",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/65775256.jpg?k=8ab32e0696b62557c69d55d9d843de365611785807a0858fb7b73065191f2564&o="
        ],
        "rooms": [
            {
                "id": "mh-2601",
                "name": "好莱坞经典套房",
                "size": "54 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立奢华浴缸",
                "breakfast": "含双人欧陆早餐",
                "cancel": "特惠房型不可退订",
                "price": 1580,
                "origPrice": 1980,
                "image": "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "好莱坞經典套房",
                        "size": "54 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "獨立奢华浴缸",
                        "breakfast": "含雙人歐陸早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "好莱坞经典套房",
                        "size": "54 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "独立奢华浴缸",
                        "breakfast": "含双人欧陆早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Hollywood Classic Suite",
                        "size": "54  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港中環荷李活道木的地酒店 (Madera Hollywood)",
                "region": "中環",
                "district": "中環",
                "location": "港島中環荷李活道53-55號",
                "distance": "中環SoHo苏豪区商业中心，近大馆艺术展演馆",
                "verdict": "复古精品套房",
                "locationTags": [
                    "商業區",
                    "演出場館",
                    "地鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港中环荷李活道木的地酒店 (Madera Hollywood)",
                "region": "中环",
                "district": "中环",
                "location": "港岛中环荷李活道53-55号",
                "distance": "中环SoHo苏豪区商业中心，近大馆艺术展演馆",
                "verdict": "复古精品套房",
                "locationTags": [
                    "商业区",
                    "演出场馆",
                    "地铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Madera Hollywood",
                "region": "Central",
                "district": "Central",
                "location": "53-55 Hollywood Road, Central, Hong Kong",
                "distance": "In Central SoHo dining district, near Tai Kwun Centre for Heritage and Arts",
                "verdict": "Vintage Boutique Suite",
                "locationTags": [
                    "Commercial District",
                    "Performance / Sports Venue",
                    "MTR Station"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 27,
        "name": "香港悦来酒店 (Panda Hotel)",
        "enName": "Panda Hotel Hong Kong",
        "region": "荃湾",
        "district": "荃湾",
        "location": "新界荃湾荃华街3号",
        "distance": "近大窝口及荃湾站，邻近荃湾商圈与荃景围大球场",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 3950,
        "verdict": "高性价比",
        "price": 590,
        "originalPrice": 780,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/8f/34/3f/caption.jpg?w=800&h=500&s=1"
        ],
        "rooms": [
            {
                "id": "panda-3801",
                "name": "标准双人房",
                "size": "25 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 590,
                "origPrice": 780,
                "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準雙人房",
                        "size": "25 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准双人房",
                        "size": "25 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard Double Room",
                        "size": "25  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港悦来酒店 (Panda Hotel)",
                "region": "荃灣",
                "district": "荃灣",
                "location": "新界荃灣荃華街3號",
                "distance": "近大窝口及荃灣站，邻近荃灣商圈与荃景围大球場",
                "verdict": "高性价比",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港悦来酒店 (Panda Hotel)",
                "region": "荃湾",
                "district": "荃湾",
                "location": "新界荃湾荃华街3号",
                "distance": "近大窝口及荃湾站，邻近荃湾商圈与荃景围大球场",
                "verdict": "高性价比",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Panda Hotel Hong Kong",
                "region": "Tsuen Wan",
                "district": "Tsuen Wan",
                "location": "3 Tsuen Wah Street, Tsuen Wan, New Territories",
                "distance": "Near Tai Wo Hau & Tsuen Wan MTR Stations, close to Tsuen Wan shopping hub",
                "verdict": "Great Value",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 28,
        "name": "香港荃湾帝盛酒店 (Dorsett Tsuen Wan)",
        "enName": "Dorsett Tsuen Wan",
        "region": "荃湾",
        "district": "荃湾",
        "location": "新界葵涌健全街28号",
        "distance": "港铁大窝口站步行约6分钟，附穿梭巴直达机场快线站",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 2750,
        "verdict": "超值四星",
        "price": 620,
        "originalPrice": 800,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/623589421.jpg?k=06eb1225a9ddc21c2e1129ef588a4ca4804d9e9cb33a5686feec228e67a24b29&o="
        ],
        "rooms": [
            {
                "id": "dtw-3501",
                "name": "帝盛舒适双人房",
                "size": "22 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 620,
                "origPrice": 800,
                "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "帝盛舒適雙人房",
                        "size": "22 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含雙人自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "帝盛舒适双人房",
                        "size": "22 平方米",
                        "bed": "1张双人床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含双人自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Comfort Double Room",
                        "size": "22  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港荃灣帝盛酒店 (Dorsett Tsuen Wan)",
                "region": "荃灣",
                "district": "荃灣",
                "location": "新界葵涌健全街28號",
                "distance": "港铁大窝口站步行約6分鐘，附穿梭巴直达机场快线站",
                "verdict": "超值四星",
                "locationTags": [
                    "地鐵站",
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港荃湾帝盛酒店 (Dorsett Tsuen Wan)",
                "region": "荃湾",
                "district": "荃湾",
                "location": "新界葵涌健全街28号",
                "distance": "港铁大窝口站步行约6分钟，附穿梭巴直达机场快线站",
                "verdict": "超值四星",
                "locationTags": [
                    "地铁站",
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Dorsett Tsuen Wan",
                "region": "Tsuen Wan",
                "district": "Tsuen Wan",
                "location": "28 Kin Chuen Street, Kwai Chung, Tsuen Wan, New Territories",
                "distance": "6-min walk to Tai Wo Hau MTR, complimentary shuttle to Airport Express Station",
                "verdict": "Superb 4-Star Value",
                "locationTags": [
                    "MTR Station",
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 29,
        "name": "迪士尼好莱坞酒店 (Disney's Hollywood Hotel)",
        "enName": "Disney's Hollywood Hotel",
        "region": "香港迪士尼乐园",
        "district": "大屿山",
        "location": "新界大屿山香港迪士尼乐园度假区",
        "distance": "直达迪士尼乐园与原野剧场免费穿梭巴",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 4320,
        "verdict": "奇幻亲子",
        "price": 1680,
        "originalPrice": 2150,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2KZWbKhfB2P2Xl7Q7hFEOhifdbyQ5JkZaNbYq6w_sPUueornxPL_hic&s=10"
        ],
        "rooms": [
            {
                "id": "dhh-2401",
                "name": "好莱坞豪华客房",
                "size": "29 平方米",
                "bed": "2张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 1680,
                "origPrice": 2150,
                "image": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "好莱坞豪華客房",
                        "size": "29 平方米",
                        "bed": "2張雙人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "含雙人自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "好莱坞豪华客房",
                        "size": "29 平方米",
                        "bed": "2张双人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "含双人自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Hollywood Deluxe Room",
                        "size": "29  sqm",
                        "bed": "2 Double Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "迪士尼好莱坞酒店 (Disney's Hollywood Hotel)",
                "region": "香港迪士尼乐园",
                "district": "大嶼山",
                "location": "新界大嶼山香港迪士尼乐园度假区",
                "distance": "直达迪士尼乐园与原野劇場免費穿梭巴",
                "verdict": "奇幻亲子",
                "locationTags": [
                    "演出場館",
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "迪士尼好莱坞酒店 (Disney's Hollywood Hotel)",
                "region": "香港迪士尼乐园",
                "district": "大屿山",
                "location": "新界大屿山香港迪士尼乐园度假区",
                "distance": "直达迪士尼乐园与原野剧场免费穿梭巴",
                "verdict": "奇幻亲子",
                "locationTags": [
                    "演出场馆",
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Disney's Hollywood Hotel",
                "region": "Hong Kong Disneyland",
                "district": "Lantau Island",
                "location": "Hong Kong Disneyland Resort, Lantau Island, New Territories",
                "distance": "Direct complimentary shuttle to Disneyland theme park and Storybook Theater",
                "verdict": "Magical Family Fun",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 30,
        "name": "香港愉景湾酒店 (Auberge Discovery Bay Hong Kong)",
        "enName": "Auberge Discovery Bay Hong Kong",
        "region": "香港迪士尼乐园",
        "district": "大屿山",
        "location": "新界大屿山愉景湾海澄湖畔路88号",
        "distance": "直通大屿山海滨，附专车往返香港迪士尼乐园演艺园区",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 3870,
        "verdict": "临海教堂度假",
        "price": 1420,
        "originalPrice": 1820,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "机场/高铁站"
        ],
        "eco": "采用环保无纸化前台与全海湾生态复育保护",
        "images": [
            "https://images.trvl-media.com/lodging/2000000/1930000/1926700/1926667/f887dc26.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
        ],
        "rooms": [
            {
                "id": "adb-3001",
                "name": "海景单卧客房",
                "size": "38 平方米",
                "bed": "1张特大床",
                "bathroom": "独立海景下沉式浴缸",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1420,
                "origPrice": 1820,
                "image": "https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "海景单卧客房",
                        "size": "38 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立海景下沉式浴缸",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "海景单卧客房",
                        "size": "38 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立海景下沉式浴缸",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Oceanfront One-Bedroom Suite",
                        "size": "38  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower and deep soaking tub",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港愉景湾酒店 (Auberge Discovery Bay Hong Kong)",
                "region": "香港迪士尼乐园",
                "district": "大嶼山",
                "location": "新界大嶼山愉景湾海澄湖畔路88號",
                "distance": "直通大嶼山海濱，附专车往返香港迪士尼乐园演藝園區",
                "verdict": "临海教堂度假",
                "locationTags": [
                    "演出場館",
                    "機場/高鐵站"
                ],
                "eco": "採用環保無紙化前台与全海灣生態復育保護"
            },
            "zh-CN": {
                "name": "香港愉景湾酒店 (Auberge Discovery Bay Hong Kong)",
                "region": "香港迪士尼乐园",
                "district": "大屿山",
                "location": "新界大屿山愉景湾海澄湖畔路88号",
                "distance": "直通大屿山海滨，附专车往返香港迪士尼乐园演艺园区",
                "verdict": "临海教堂度假",
                "locationTags": [
                    "演出场馆",
                    "机场/高铁站"
                ],
                "eco": "采用环保无纸化前台与全海湾生态复育保护"
            },
            "en": {
                "name": "Auberge Discovery Bay Hong Kong",
                "region": "Hong Kong Disneyland",
                "district": "Lantau Island",
                "location": "88 Siena Avenue, Discovery Bay, Lantau Island, New Territories",
                "distance": "Waterfront resort with dedicated shuttle service to Disneyland entertainment zone",
                "verdict": "Seaside Chapel Resort",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Airport / High Speed Rail"
                ],
                "eco": "Paperless smart mobile check-in and active participation in local marine bay ecological conservation"
            }
        }
    },
    {
        "id": 31,
        "name": "香港沙田帝都酒店 (Royal Park Hotel)",
        "enName": "Royal Park Hotel",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田白鹤汀街8号",
        "distance": "直通新城市广场与沙田站，近沙田大会堂演艺中心",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3600,
        "verdict": "购物便捷",
        "price": 1050,
        "originalPrice": 1380,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "演出场馆",
            "商业区"
        ],
        "eco": "荣获香港绿色机构认证，推行厨余回收转化及节水淋浴改造",
        "images": [
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80"
        ],
        "rooms": [
            {
                "id": "rp-1501",
                "name": "标准城景双人房",
                "size": "30 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1050,
                "origPrice": 1380,
                "image": "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準城景雙人房",
                        "size": "30 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准城景双人房",
                        "size": "30 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard City View Double Room",
                        "size": "30  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港沙田帝都酒店 (Royal Park Hotel)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田白鶴汀街8號",
                "distance": "直通新城市廣場与沙田站，近沙田大會堂演藝中心",
                "verdict": "购物便捷",
                "locationTags": [
                    "地鐵站",
                    "演出場館",
                    "商業區"
                ],
                "eco": "荣獲香港綠色機構認證，推行廚餘回收转化及節水淋浴改造"
            },
            "zh-CN": {
                "name": "香港沙田帝都酒店 (Royal Park Hotel)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田白鹤汀街8号",
                "distance": "直通新城市广场与沙田站，近沙田大会堂演艺中心",
                "verdict": "购物便捷",
                "locationTags": [
                    "地铁站",
                    "演出场馆",
                    "商业区"
                ],
                "eco": "荣获香港绿色机构认证，推行厨余回收转化及节水淋浴改造"
            },
            "en": {
                "name": "Royal Park Hotel",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "8 Pak Hok Ting Street, Sha Tin, New Territories",
                "distance": "Directly connected to New Town Plaza and Sha Tin MTR, near Sha Tin Town Hall",
                "verdict": "Shopping Haven",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue",
                    "Commercial District"
                ],
                "eco": "Hong Kong Green Organisation certified, pioneering food-waste conversion and water-saving aerated shower systems"
            }
        }
    },
    {
        "id": 32,
        "name": "香港沙田万怡酒店 (Courtyard Sha Tin)",
        "enName": "Courtyard by Marriott Sha Tin",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田安平街1号",
        "distance": "城门河畔，临近石门站与沙田工业商贸区",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3100,
        "verdict": "河畔商务",
        "price": 820,
        "originalPrice": 1080,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "获万豪 Serve 360 认证，采用大容量环保装洗护及智能变频节能空调",
        "images": [
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Courtyard_by_Marriott_Hong_Kong_Sha_Tin_201307.jpg?utm_source=zh.wikipedia.org&utm_campaign=index&utm_content=original"
        ],
        "rooms": [
            {
                "id": "cym-2501",
                "name": "城门河景舒适房",
                "size": "27 平方米",
                "bed": "1张大床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人 MoMo Cafe 早餐",
                "cancel": "特惠房型不可退订",
                "price": 820,
                "origPrice": 1080,
                "image": "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "城門河景舒適房",
                        "size": "27 平方米",
                        "bed": "1張大床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含雙人 MoMo Cafe 早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "城门河景舒适房",
                        "size": "27 平方米",
                        "bed": "1张大床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含双人 MoMo Cafe 早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Shing Mun River View Comfort Room",
                        "size": "27  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary MoMo Café Buffet Breakfast for 2",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港沙田万怡酒店 (Courtyard Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田安平街1號",
                "distance": "城門河畔，鄰近石門站与沙田工业商贸区",
                "verdict": "河畔商务",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "獲万豪 Serve 360 認證，採用大容量環保装洗護及智能變頻節能空調"
            },
            "zh-CN": {
                "name": "香港沙田万怡酒店 (Courtyard Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田安平街1号",
                "distance": "城门河畔，临近石门站与沙田工业商贸区",
                "verdict": "河畔商务",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "获万豪 Serve 360 认证，采用大容量环保装洗护及智能变频节能空调"
            },
            "en": {
                "name": "Courtyard by Marriott Sha Tin",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "1 On Ping Street, Sha Tin, New Territories",
                "distance": "Shing Mun Riverfront, close to Shek Mun MTR and Sha Tin commercial district",
                "verdict": "Riverside Business",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "Marriott Serve 360 certified, featuring bulk-dispenser eco toiletries and intelligent inverter energy-saving climate control"
            }
        }
    },
    {
        "id": 33,
        "name": "香港维港凯悦尚萃酒店 (Hyatt Centric Victoria Harbour)",
        "enName": "Hyatt Centric Victoria Harbour Hong Kong",
        "region": "北角",
        "district": "北角",
        "location": "港岛北角北角邨里1号",
        "distance": "坐落北角海滨长廊商圈，北角站步行1分钟",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3890,
        "verdict": "无边海景打卡",
        "price": 1380,
        "originalPrice": 1750,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "设置顶层无边际海景温控水循环泳池，推行客房无塑胶化",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/25520956.jpg?k=40c6d4cd114c0f20aa92ebef3aaef1ff2628d212a4f5faad5f3abddee4edb1fc&o="
        ],
        "rooms": [
            {
                "id": "hc-3301",
                "name": "标准海景客房",
                "size": "26 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带雨淋花洒)",
                "breakfast": "含 The Farmhouse 自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1380,
                "origPrice": 1750,
                "image": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準海景客房",
                        "size": "26 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶雨淋花灑)",
                        "breakfast": "含 The Farmhouse 自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准海景客房",
                        "size": "26 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带雨淋花洒)",
                        "breakfast": "含 The Farmhouse 自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard Sea View Room",
                        "size": "26  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Modern walk-in rain shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港維港凯悦尚萃酒店 (Hyatt Centric Victoria Harbour)",
                "region": "北角",
                "district": "北角",
                "location": "港島北角北角邨里1號",
                "distance": "坐落北角海濱长廊商圈，北角站步行1分鐘",
                "verdict": "无边海景打卡",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "設置頂層無邊際海景溫控水循環泳池，推行客房無塑膠化"
            },
            "zh-CN": {
                "name": "香港维港凯悦尚萃酒店 (Hyatt Centric Victoria Harbour)",
                "region": "北角",
                "district": "北角",
                "location": "港岛北角北角邨里1号",
                "distance": "坐落北角海滨长廊商圈，北角站步行1分钟",
                "verdict": "无边海景打卡",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "设置顶层无边际海景温控水循环泳池，推行客房无塑胶化"
            },
            "en": {
                "name": "Hyatt Centric Victoria Harbour Hong Kong",
                "region": "North Point",
                "district": "North Point",
                "location": "1 North Point Estate Lane, North Point, Hong Kong",
                "distance": "On North Point Promenade waterfront, 1-min walk to North Point MTR Station",
                "verdict": "Infinity Harbour View",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "Rooftop infinity glass-bottom pool with heat-recovery water circulation; 100% single-use plastic-free guest rooms"
            }
        }
    },
    {
        "id": 34,
        "name": "香港东隅酒店 (EAST Hong Kong)",
        "enName": "EAST Hong Kong",
        "region": "北角",
        "district": "鲗鱼涌",
        "location": "港岛太古城太古城道29号 (紧邻北角东区商圈)",
        "distance": "直通太古城中心甲级写字楼商圈与太古站",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2600,
        "verdict": "潮流设计",
        "price": 1280,
        "originalPrice": 1620,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "荣获 EarthCheck Silver 银级认证，回收逾 6,400 公斤生蚝壳复育珊瑚礁并通过 ORCA 分解 46,000 公斤厨余",
        "images": [
            "https://r-xx.bstatic.com/xdata/images/hotel/1200x630/678850464.jpg?k=42f23a692e5cae8b6aa5caf2b278c3e9b1ef5f8fcc2ce62673d854119cf8ac0e&o="
        ],
        "rooms": [
            {
                "id": "east-2101",
                "name": "Urban View 城市客房",
                "size": "28 平方米",
                "bed": "1张特大床",
                "bathroom": "现代步入式雨淋花洒淋浴间",
                "breakfast": "含 FEAST 双人活力早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1280,
                "origPrice": 1620,
                "image": "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "Urban View 城市客房",
                        "size": "28 平方米",
                        "bed": "1張特大床",
                        "bathroom": "现代步入式雨淋花灑淋浴間",
                        "breakfast": "含 FEAST 雙人活力早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "Urban View 城市客房",
                        "size": "28 平方米",
                        "bed": "1张特大床",
                        "bathroom": "现代步入式雨淋花洒淋浴间",
                        "breakfast": "含 FEAST 双人活力早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Urban View City Room",
                        "size": "28  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Modern walk-in rain shower",
                        "breakfast": "Complimentary FEAST Gourmet Breakfast for 2",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港东隅酒店 (EAST Hong Kong)",
                "region": "北角",
                "district": "鰂魚涌",
                "location": "港島太古城太古城道29號 (緊鄰北角东区商圈)",
                "distance": "直通太古城中心甲级写字樓商圈与太古站",
                "verdict": "潮流設计",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "荣獲 EarthCheck Silver 銀級認證，回收逾 6,400 公斤生蠔殼復育珊瑚礁并通过 ORCA 分解 46,000 公斤廚餘"
            },
            "zh-CN": {
                "name": "香港东隅酒店 (EAST Hong Kong)",
                "region": "北角",
                "district": "鲗鱼涌",
                "location": "港岛太古城太古城道29号 (紧邻北角东区商圈)",
                "distance": "直通太古城中心甲级写字楼商圈与太古站",
                "verdict": "潮流设计",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "荣获 EarthCheck Silver 银级认证，回收逾 6,400 公斤生蚝壳复育珊瑚礁并通过 ORCA 分解 46,000 公斤厨余"
            },
            "en": {
                "name": "EAST Hong Kong",
                "region": "North Point",
                "district": "Quarry Bay",
                "location": "29 Taikoo Shing Road, Taikoo Shing, Quarry Bay, Hong Kong",
                "distance": "Direct link to Cityplaza Mall, Grade-A offices and Taikoo MTR Station",
                "verdict": "Chic & Stylish",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "EarthCheck Silver certified; recycled 6,400+ kg oyster shells for coral reef restoration and digested 46,000+ kg food waste via ORCA"
            }
        }
    },
    {
        "id": 35,
        "name": "香港铜锣湾皇冠假日酒店 (Crowne Plaza Causeway Bay)",
        "enName": "Crowne Plaza Hong Kong Causeway Bay",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛铜锣湾礼顿道8号",
        "distance": "跑马地马场景观，铜锣湾站步行3分钟，近伊利沙伯体育馆",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3120,
        "verdict": "尊尚核心",
        "price": 1350,
        "originalPrice": 1750,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tP0AzvbsRtCcIq5msVlSKali4aFAXOa8TZW8_k87JzzFmmRBU6S7td0&s=10"
        ],
        "rooms": [
            {
                "id": "cpcb-3501",
                "name": "高级跑马地景客房",
                "size": "34 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带深浸浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1350,
                "origPrice": 1750,
                "image": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級跑马地景客房",
                        "size": "34 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶深浸浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "高级跑马地景客房",
                        "size": "34 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带深浸浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Superior Happy Valley View Room",
                        "size": "34  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower and deep soaking tub",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港銅鑼灣皇冠假日酒店 (Crowne Plaza Causeway Bay)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島銅鑼灣禮頓道8號",
                "distance": "跑马地马场景观，銅鑼灣站步行3分鐘，近伊利沙伯體育館",
                "verdict": "尊尚核心",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港铜锣湾皇冠假日酒店 (Crowne Plaza Causeway Bay)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛铜锣湾礼顿道8号",
                "distance": "跑马地马场景观，铜锣湾站步行3分钟，近伊利沙伯体育馆",
                "verdict": "尊尚核心",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "Crowne Plaza Hong Kong Causeway Bay",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "8 Leighton Road, Causeway Bay, Hong Kong",
                "distance": "Happy Valley Racecourse views, 3-min walk to Causeway Bay MTR and Queen Elizabeth Stadium",
                "verdict": "Prestige Prime",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 36,
        "name": "香港铜锣湾维景酒店 (Metropark Causeway Bay)",
        "enName": "Metropark Hotel Causeway Bay",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛铜锣湾道148号",
        "distance": "天后站步行2分钟，顶楼泳池，近维多利亚公园演艺中心",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 2380,
        "verdict": "维园景观",
        "price": 780,
        "originalPrice": 990,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Metropark_Hotel_Causeway_Bay_Hong_Kong_2014.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
        ],
        "rooms": [
            {
                "id": "mpcb-3601",
                "name": "维园景客房",
                "size": "25 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人早餐",
                "cancel": "特惠房型不可退订",
                "price": 780,
                "origPrice": 990,
                "image": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "维园景客房",
                        "size": "25 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "含雙人早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "维园景客房",
                        "size": "25 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "含双人早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Victoria Park View Room",
                        "size": "25  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港銅鑼灣维景酒店 (Metropark Causeway Bay)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島銅鑼灣道148號",
                "distance": "天后站步行2分鐘，顶樓泳池，近维多利亚公園演藝中心",
                "verdict": "维园景观",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港铜锣湾维景酒店 (Metropark Causeway Bay)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛铜锣湾道148号",
                "distance": "天后站步行2分钟，顶楼泳池，近维多利亚公园演艺中心",
                "verdict": "维园景观",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "Metropark Hotel Causeway Bay",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "148 Causeway Road, Causeway Bay, Hong Kong",
                "distance": "2-min walk to Tin Hau MTR, rooftop pool, close to Victoria Park events",
                "verdict": "Victoria Park View",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 37,
        "name": "香港万丽海景酒店 (Renaissance Harbour View)",
        "enName": "Renaissance Hong Kong Harbour View Hotel",
        "region": "维多利亚港",
        "district": "湾仔",
        "location": "港岛湾仔港湾道1号",
        "distance": "紧邻香港会议展览中心演艺大堂，维港海景第一排",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 3890,
        "verdict": "维港核心商旅",
        "price": 1850,
        "originalPrice": 2350,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "商业区",
            "地铁站"
        ],
        "eco": "参与万豪绿色环境倡议，采用高效低碳排节能空调",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTdFFGK-7nX2w8qdzco4b8mf8uQNr06E9QqbKU3up3g&s=10"
        ],
        "rooms": [
            {
                "id": "ren-3701",
                "name": "海景奢华客房",
                "size": "30 平方米",
                "bed": "1张特大床",
                "bathroom": "独立干湿分离卫浴",
                "breakfast": "含万丽咖啡室双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 1850,
                "origPrice": 2350,
                "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "海景奢华客房",
                        "size": "30 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立乾濕分離衛浴",
                        "breakfast": "含万丽咖啡室雙人自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "海景奢华客房",
                        "size": "30 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立干湿分离卫浴",
                        "breakfast": "含万丽咖啡室双人自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Harbour View Luxury Room",
                        "size": "30  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Renaissance Café Buffet Breakfast for 2",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港万丽海景酒店 (Renaissance Harbour View)",
                "region": "維多利亞港",
                "district": "灣仔",
                "location": "港島灣仔港灣道1號",
                "distance": "緊鄰香港会议展览中心演藝大堂，維港海景第一排",
                "verdict": "維港核心商旅",
                "locationTags": [
                    "演出場館",
                    "商業區",
                    "地鐵站"
                ],
                "eco": "参与万豪绿色环境倡議，採用高效低碳排节能空调"
            },
            "zh-CN": {
                "name": "香港万丽海景酒店 (Renaissance Harbour View)",
                "region": "维多利亚港",
                "district": "湾仔",
                "location": "港岛湾仔港湾道1号",
                "distance": "紧邻香港会议展览中心演艺大堂，维港海景第一排",
                "verdict": "维港核心商旅",
                "locationTags": [
                    "演出场馆",
                    "商业区",
                    "地铁站"
                ],
                "eco": "参与万豪绿色环境倡议，采用高效低碳排节能空调"
            },
            "en": {
                "name": "Renaissance Hong Kong Harbour View Hotel",
                "region": "Victoria Harbour",
                "district": "Wan Chai",
                "location": "1 Harbour Road, Wan Chai, Hong Kong",
                "distance": "Adjoining HKCEC Convention Hall, front-row panoramic Victoria Harbour views",
                "verdict": "Harbour Prime Business",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Commercial District",
                    "MTR Station"
                ],
                "eco": "Marriott Global Sustainability & Social Impact initiative participant, operating high-efficiency low-emission inverter cooling"
            }
        }
    },
    {
        "id": 38,
        "name": "香港维港朗廷汇酒店 (The Grand Harbourside Langham)",
        "enName": "The Grand Harbourside Langham",
        "region": "维多利亚港",
        "district": "中环",
        "location": "港岛中环民耀街88号中环海滨",
        "distance": "紧邻中环天星码头与海滨活动空间大型音乐会展区",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 1580,
        "verdict": "传奇云端奢华",
        "price": 2480,
        "originalPrice": 3180,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "商业区",
            "演出场馆",
            "地铁站"
        ],
        "eco": "荣获 EarthCheck 金级认证及 LEED 铂金级绿色建筑评级，全馆实现 100% 零塑胶客房",
        "images": [
            "https://www.langhamhotels.com/content/dam/langhamhotels/dynamicmedia/global/hotels/langham-hotels/tlhkg-langham-hong-kong.jpg"
        ],
        "rooms": [
            {
                "id": "ghl-401",
                "name": "天际尊尚维港客房",
                "size": "45 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立白玛瑙水疗卫浴 (配双人浴缸)",
                "breakfast": "含星厨定制点单式早餐",
                "cancel": "入住前24小时内可免费取消",
                "price": 2480,
                "origPrice": 3180,
                "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "天际尊尚維港客房",
                        "size": "45 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "獨立白玛瑙水疗衛浴 (配雙人浴缸)",
                        "breakfast": "含星厨定制点单式早餐",
                        "cancel": "入住前24小時内可免費取消"
                    },
                    "zh-CN": {
                        "name": "天际尊尚维港客房",
                        "size": "45 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "独立白玛瑙水疗卫浴 (配双人浴缸)",
                        "breakfast": "含星厨定制点单式早餐",
                        "cancel": "入住前24小时内可免费取消"
                    },
                    "en": {
                        "name": "Skyline Premier Victoria Harbour Room",
                        "size": "45  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Chef's À La Carte Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港維港朗廷汇酒店 (The Grand Harbourside Langham)",
                "region": "維多利亞港",
                "district": "中環",
                "location": "港島中環民耀街88號中環海濱",
                "distance": "緊鄰中環天星碼頭与海濱活动空间大型音乐会展区",
                "verdict": "传奇云端奢华",
                "locationTags": [
                    "商業區",
                    "演出場館",
                    "地鐵站"
                ],
                "eco": "荣獲 EarthCheck 金級認證及 LEED 铂金級綠色建築評級，全館實現 100% 零塑膠客房"
            },
            "zh-CN": {
                "name": "香港维港朗廷汇酒店 (The Grand Harbourside Langham)",
                "region": "维多利亚港",
                "district": "中环",
                "location": "港岛中环民耀街88号中环海滨",
                "distance": "紧邻中环天星码头与海滨活动空间大型音乐会展区",
                "verdict": "传奇云端奢华",
                "locationTags": [
                    "商业区",
                    "演出场馆",
                    "地铁站"
                ],
                "eco": "荣获 EarthCheck 金级认证及 LEED 铂金级绿色建筑评级，全馆实现 100% 零塑胶客房"
            },
            "en": {
                "name": "The Grand Harbourside Langham",
                "region": "Victoria Harbour",
                "district": "Central",
                "location": "88 Man Yiu Street, Central Waterfront, Central, Hong Kong",
                "distance": "Steps from Central Star Ferry Pier and Central Harbourfront Event Space",
                "verdict": "Skyline Luxury Icon",
                "locationTags": [
                    "Commercial District",
                    "Performance / Sports Venue",
                    "MTR Station"
                ],
                "eco": "EarthCheck Gold certified and LEED Platinum green building rating; 100% zero-plastic in-room guest amenities"
            }
        }
    },
    {
        "id": 39,
        "name": "香港富豪东方酒店 (Regal Oriental Hotel)",
        "enName": "Regal Oriental Hotel",
        "region": "启德体育园",
        "district": "九龙城",
        "location": "九龙九龙城沙浦道30-38号",
        "distance": "正对启德体育园区大型演唱会主场馆与九龙城美食商圈",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 3450,
        "verdict": "文化地标",
        "price": 680,
        "originalPrice": 880,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "商业区",
            "地铁站"
        ],
        "eco": "",
        "images": [
            "https://www.regalhotel.com/sites/regal/files/2026-07/Hotel_Thumbnail_0.jpg"
        ],
        "rooms": [
            {
                "id": "roh-3901",
                "name": "豪华行政大床房",
                "size": "26 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带标准浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 680,
                "origPrice": 880,
                "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "豪華行政大床房",
                        "size": "26 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶標準浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "豪华行政大床房",
                        "size": "26 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带标准浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Deluxe Executive King Room",
                        "size": "26  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港富豪东方酒店 (Regal Oriental Hotel)",
                "region": "啟德體育園",
                "district": "九龍城",
                "location": "九龍九龍城沙浦道30-38號",
                "distance": "正对啟德體育園区大型演唱会主場館与九龍城美食商圈",
                "verdict": "文化地标",
                "locationTags": [
                    "演出場館",
                    "商業區",
                    "地鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港富豪东方酒店 (Regal Oriental Hotel)",
                "region": "启德体育园",
                "district": "九龙城",
                "location": "九龙九龙城沙浦道30-38号",
                "distance": "正对启德体育园区大型演唱会主场馆与九龙城美食商圈",
                "verdict": "文化地标",
                "locationTags": [
                    "演出场馆",
                    "商业区",
                    "地铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Regal Oriental Hotel",
                "region": "Kai Tak Sports Park",
                "district": "Kowloon City",
                "location": "30-38 Sa Po Road, Kowloon City, Kowloon",
                "distance": "Facing Kai Tak Sports Park concert arena and Kowloon City dining district",
                "verdict": "Cultural Landmark",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Commercial District",
                    "MTR Station"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 40,
        "name": "香港九龙贝尔特酒店 (Pentahotel Hong Kong Kowloon)",
        "enName": "Pentahotel Hong Kong, Kowloon",
        "region": "启德体育园",
        "district": "新蒲岗",
        "location": "九龙新蒲岗六合街19号 (紧邻启德体育园)",
        "distance": "步行直达启德体育园演艺主场馆，邻近钻石山站",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 3280,
        "verdict": "潮流工业生活",
        "price": 750,
        "originalPrice": 960,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "地铁站"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mt6E1ulijzzTmjnBOszft8iVbUp90IKkgwV9k_uafTluKgLc_9_ea_t1&s=10"
        ],
        "rooms": [
            {
                "id": "penta-4001",
                "name": "贝尔特标准大床房",
                "size": "24 平方米",
                "bed": "1张大床",
                "bathroom": "现代步入式雨淋淋浴间",
                "breakfast": "含潮食双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 750,
                "origPrice": 960,
                "image": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "贝尔特標準大床房",
                        "size": "24 平方米",
                        "bed": "1張大床",
                        "bathroom": "现代步入式雨淋淋浴間",
                        "breakfast": "含潮食雙人自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "贝尔特标准大床房",
                        "size": "24 平方米",
                        "bed": "1张大床",
                        "bathroom": "现代步入式雨淋淋浴间",
                        "breakfast": "含潮食双人自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Pentahotel Standard King Room",
                        "size": "24  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Modern walk-in rain shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港九龍贝尔特酒店 (Pentahotel Hong Kong Kowloon)",
                "region": "啟德體育園",
                "district": "新蒲崗",
                "location": "九龍新蒲崗六合街19號 (緊鄰啟德體育園)",
                "distance": "步行直达啟德體育園演藝主場館，邻近钻石山站",
                "verdict": "潮流工业生活",
                "locationTags": [
                    "演出場館",
                    "地鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港九龙贝尔特酒店 (Pentahotel Hong Kong Kowloon)",
                "region": "启德体育园",
                "district": "新蒲岗",
                "location": "九龙新蒲岗六合街19号 (紧邻启德体育园)",
                "distance": "步行直达启德体育园演艺主场馆，邻近钻石山站",
                "verdict": "潮流工业生活",
                "locationTags": [
                    "演出场馆",
                    "地铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Pentahotel Hong Kong, Kowloon",
                "region": "Kai Tak Sports Park",
                "district": "San Po Kong",
                "location": "19 Luk Hop Street, San Po Kong, Kowloon",
                "distance": "Walking distance to Kai Tak Sports Park Main Arena, near Diamond Hill MTR Station",
                "verdict": "Trendy Industrial Chic",
                "locationTags": [
                    "Performance / Sports Venue",
                    "MTR Station"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 41,
        "name": "香港九龙酒店 (The Kowloon Hotel)",
        "enName": "The Kowloon Hotel",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀弥敦道19-21号",
        "distance": "直通尖沙咀站L4出口，紧邻海港城核心商业区",
        "stars": 3,
        "rating": 9.5,
        "reviewCount": 4890,
        "verdict": "黄金地段",
        "price": 820,
        "originalPrice": 1060,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://storage.googleapis.com/hafh-prod-property_image/51g4nfe9y1yectu7pcup2x2vih1l"
        ],
        "rooms": [
            {
                "id": "kh-3401",
                "name": "高级双床房",
                "size": "21 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 820,
                "origPrice": 1060,
                "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級雙床房",
                        "size": "21 平方米",
                        "bed": "2張單人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "含雙人自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "高级双床房",
                        "size": "21 平方米",
                        "bed": "2张单人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "含双人自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Superior Twin Room",
                        "size": "21  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港九龍酒店 (The Kowloon Hotel)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀彌敦道19-21號",
                "distance": "直通尖沙咀站L4出口，緊鄰海港城核心商业区",
                "verdict": "黄金地段",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港九龙酒店 (The Kowloon Hotel)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀弥敦道19-21号",
                "distance": "直通尖沙咀站L4出口，紧邻海港城核心商业区",
                "verdict": "黄金地段",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "The Kowloon Hotel",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "19-21 Nathan Road, Tsim Sha Tsui, Kowloon",
                "distance": "Direct underground access from Tsim Sha Tsui MTR Exit L4, adjoining Harbour City",
                "verdict": "Prime Location",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 42,
        "name": "香港尖沙咀帝国酒店 (The Imperial Hotel)",
        "enName": "The Imperial Hotel Hong Kong",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀弥敦道30-34号",
        "distance": "尖沙咀站C1出口步行1分钟，近文化中心与香港体育馆",
        "stars": 3,
        "rating": 9.5,
        "reviewCount": 3190,
        "verdict": "地段极佳",
        "price": 560,
        "originalPrice": 730,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/0a/8c/b4/nearby-attraction-heritage.jpg?w=900&h=-1&s=1"
        ],
        "rooms": [
            {
                "id": "imp-6001",
                "name": "标准双床房",
                "size": "17 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 560,
                "origPrice": 730,
                "image": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準雙床房",
                        "size": "17 平方米",
                        "bed": "2張單人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "标准双床房",
                        "size": "17 平方米",
                        "bed": "2张单人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Twin Room",
                        "size": "17  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港尖沙咀帝国酒店 (The Imperial Hotel)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀彌敦道30-34號",
                "distance": "尖沙咀站C1出口步行1分鐘，近文化中心与香港體育館",
                "verdict": "地段极佳",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港尖沙咀帝国酒店 (The Imperial Hotel)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀弥敦道30-34号",
                "distance": "尖沙咀站C1出口步行1分钟，近文化中心与香港体育馆",
                "verdict": "地段极佳",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "The Imperial Hotel Hong Kong",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "30-34 Nathan Road, Tsim Sha Tsui, Kowloon",
                "distance": "1-min walk from Tsim Sha Tsui MTR Exit C1, near Cultural Centre and Coliseum",
                "verdict": "Superb Location",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 43,
        "name": "香港城景国际酒店 (The Cityview)",
        "enName": "The Cityview Hong Kong",
        "region": "旺角",
        "district": "油麻地",
        "location": "九龙窝打老道23号 (紧邻旺角商圈)",
        "distance": "油麻地站A2出口步行1分钟",
        "stars": 3,
        "rating": 9.5,
        "reviewCount": 3680,
        "verdict": "绿色典范",
        "price": 660,
        "originalPrice": 850,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "多次荣获香港环境卓越大奖及 EarthCheck 金级认证，全馆采用热泵热回收系统",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3X9HT7-5dYsjVX5f2SGDa3IyLOcinl_YwQwypztzpNhpCCtMYwSPcvqE&s=10"
        ],
        "rooms": [
            {
                "id": "cv-4201",
                "name": "尊贵低碳双人房",
                "size": "22 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 660,
                "origPrice": 850,
                "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "尊貴低碳雙人房",
                        "size": "22 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "尊贵低碳双人房",
                        "size": "22 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Premier Low-Carbon Double Room",
                        "size": "22  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港城景國際酒店 (The Cityview)",
                "region": "旺角",
                "district": "油麻地",
                "location": "九龍窩打老道23號 (緊鄰旺角商圈)",
                "distance": "油麻地站A2出口步行1分鐘",
                "verdict": "绿色典范",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "多次荣獲香港环境卓越大奖及 EarthCheck 金級認證，全馆採用熱泵熱回收系統"
            },
            "zh-CN": {
                "name": "香港城景国际酒店 (The Cityview)",
                "region": "旺角",
                "district": "油麻地",
                "location": "九龙窝打老道23号 (紧邻旺角商圈)",
                "distance": "油麻地站A2出口步行1分钟",
                "verdict": "绿色典范",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "多次荣获香港环境卓越大奖及 EarthCheck 金级认证，全馆采用热泵热回收系统"
            },
            "en": {
                "name": "The Cityview Hong Kong",
                "region": "Mong Kok",
                "district": "Yau Ma Tei",
                "location": "23 Waterloo Road, Yau Ma Tei, Kowloon",
                "distance": "1-min walk from Yau Ma Tei MTR Station Exit A2, near Mong Kok commercial hub",
                "verdict": "Eco-Friendly Model",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "Multi-year Hong Kong Awards for Environmental Excellence winner and EarthCheck Gold certified; operates heat-pump heat recovery"
            }
        }
    },
    {
        "id": 44,
        "name": "香港富荟旺角酒店 (iclub Mong Kok)",
        "enName": "iclub Mong Kok Hotel",
        "region": "旺角",
        "district": "旺角",
        "location": "九龙旺角晏架街2号",
        "distance": "邻近旺角站与奥海城购物商圈，麦花臣场馆步行可达",
        "stars": 3,
        "rating": 9.5,
        "reviewCount": 2050,
        "verdict": "新锐环保",
        "price": 590,
        "originalPrice": 760,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "获 EarthCheck Silver 认证，采用自然采光与雨水回收灌溉系统",
        "images": [
            "https://res.klook.com/image/upload/w_750,c_fill,q_85/v1632127094/hotel/vf0nxdjulrbw8kkunxk8.jpg"
        ],
        "rooms": [
            {
                "id": "icmk-4701",
                "name": "标准客房",
                "size": "16 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含早间茶点",
                "cancel": "特惠房型不可退订",
                "price": 590,
                "origPrice": 760,
                "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準客房",
                        "size": "16 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含早间茶点",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "标准客房",
                        "size": "16 平方米",
                        "bed": "1张双人床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含早间茶点",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Guest Room",
                        "size": "16  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港富荟旺角酒店 (iclub Mong Kok)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龍旺角晏架街2號",
                "distance": "邻近旺角站与奥海城购物商圈，麦花臣场馆步行可达",
                "verdict": "新锐環保",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": "獲 EarthCheck Silver 認證，採用自然採光与雨水回收灌溉系統"
            },
            "zh-CN": {
                "name": "香港富荟旺角酒店 (iclub Mong Kok)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龙旺角晏架街2号",
                "distance": "邻近旺角站与奥海城购物商圈，麦花臣场馆步行可达",
                "verdict": "新锐环保",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": "获 EarthCheck Silver 认证，采用自然采光与雨水回收灌溉系统"
            },
            "en": {
                "name": "iclub Mong Kok Hotel",
                "region": "Mong Kok",
                "district": "Mong Kok",
                "location": "2 Anchor Street, Mong Kok, Kowloon",
                "distance": "Close to Mong Kok MTR and Olympian City Mall, walking distance to MacPherson Stadium",
                "verdict": "Modern Green Living",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": "EarthCheck Silver certified, featuring daylight-optimized architecture and rainwater harvesting irrigation"
            }
        }
    },
    {
        "id": 45,
        "name": "香港富荟上环酒店 (iclub Sheung Wan)",
        "enName": "iclub Sheung Wan Hotel",
        "region": "中环",
        "district": "上环",
        "location": "港岛上环文咸东街138号 (直达中环CBD)",
        "distance": "上环地铁站A2出口步行3分钟，紧邻中环金融街",
        "stars": 3,
        "rating": 9.5,
        "reviewCount": 2450,
        "verdict": "绿色智能精品",
        "price": 620,
        "originalPrice": 800,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "荣获 EarthCheck Silver 银级认证，为香港首批全面推行碳中和住宿的绿色环保酒店",
        "images": [
            "https://www.iclub-hotels.com/sites/regal/files/2026-07/ICAMTD_700x460_dimmed.png"
        ],
        "rooms": [
            {
                "id": "icsw-4101",
                "name": "iPlus 尊荟客房",
                "size": "18 平方米",
                "bed": "1张大床",
                "bathroom": "现代淋浴间",
                "breakfast": "含欧陆轻食早点",
                "cancel": "入住前24小时可免费取消",
                "price": 620,
                "origPrice": 800,
                "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "iPlus 尊荟客房",
                        "size": "18 平方米",
                        "bed": "1張大床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含歐陸輕食早點",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "iPlus 尊荟客房",
                        "size": "18 平方米",
                        "bed": "1张大床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含欧陆轻食早点",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "iPlus Premier Room",
                        "size": "18  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港富荟上環酒店 (iclub Sheung Wan)",
                "region": "中環",
                "district": "上環",
                "location": "港島上環文咸東街138號 (直达中環CBD)",
                "distance": "上環地鐵站A2出口步行3分鐘，緊鄰中環金融街",
                "verdict": "绿色智能精品",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "荣獲 EarthCheck Silver 銀級認證，为香港首批全面推行碳中和住宿的绿色環保酒店"
            },
            "zh-CN": {
                "name": "香港富荟上环酒店 (iclub Sheung Wan)",
                "region": "中环",
                "district": "上环",
                "location": "港岛上环文咸东街138号 (直达中环CBD)",
                "distance": "上环地铁站A2出口步行3分钟，紧邻中环金融街",
                "verdict": "绿色智能精品",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "荣获 EarthCheck Silver 银级认证，为香港首批全面推行碳中和住宿的绿色环保酒店"
            },
            "en": {
                "name": "iclub Sheung Wan Hotel",
                "region": "Central",
                "district": "Sheung Wan",
                "location": "138 Bonham Strand, Sheung Wan, Hong Kong",
                "distance": "3-min walk from Sheung Wan MTR Exit A2, close to Central financial district",
                "verdict": "Green Smart Boutique",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "EarthCheck Silver certified; among Hong Kong's first hotels to offer verified carbon-neutral accommodation options"
            }
        }
    },
    {
        "id": 46,
        "name": "宏基国际宾馆 (Bishop Lei International House)",
        "enName": "Bishop Lei International House",
        "region": "中环",
        "district": "中环",
        "location": "港岛中环罗便臣道4号",
        "distance": "中环半山区，附穿梭巴士往返中环IFC商厦及香港站",
        "stars": 3,
        "rating": 9.0,
        "reviewCount": 2890,
        "verdict": "半山静居",
        "price": 680,
        "originalPrice": 880,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "商业区",
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycylBZfIe1Jj8xE0gn3zKgcUfHiil72bqVPvCOUH4X2AnN8qxOyn71uwo&s=10"
        ],
        "rooms": [
            {
                "id": "bl-4601",
                "name": "半山标准客房",
                "size": "20 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带标准浴缸)",
                "breakfast": "含露台精致早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 680,
                "origPrice": 880,
                "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "半山標準客房",
                        "size": "20 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶標準浴缸)",
                        "breakfast": "含露台精緻早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "半山标准客房",
                        "size": "20 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带标准浴缸)",
                        "breakfast": "含露台精致早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Mid-Levels Standard Room",
                        "size": "20  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "宏基國際宾馆 (Bishop Lei International House)",
                "region": "中環",
                "district": "中環",
                "location": "港島中環羅便臣道4號",
                "distance": "中環半山区，附穿梭巴士往返中環IFC商厦及香港站",
                "verdict": "半山静居",
                "locationTags": [
                    "商業區",
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "宏基国际宾馆 (Bishop Lei International House)",
                "region": "中环",
                "district": "中环",
                "location": "港岛中环罗便臣道4号",
                "distance": "中环半山区，附穿梭巴士往返中环IFC商厦及香港站",
                "verdict": "半山静居",
                "locationTags": [
                    "商业区",
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Bishop Lei International House",
                "region": "Central",
                "district": "Central",
                "location": "4 Robinson Road, Mid-Levels, Central, Hong Kong",
                "distance": "Mid-Levels enclave with complimentary shuttle to Central IFC and Hong Kong Station",
                "verdict": "Mid-Levels Serenity",
                "locationTags": [
                    "Commercial District",
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 47,
        "name": "香港远东丝丽酒店 (Silka Far East Hotel)",
        "enName": "Silka Far East Hotel Hong Kong",
        "region": "荃湾",
        "district": "荃湾",
        "location": "新界荃湾青山公路135-143号",
        "distance": "荃湾站B出口步行3分钟，紧邻荃湾千色汇商圈",
        "stars": 3,
        "rating": 9.0,
        "reviewCount": 2650,
        "verdict": "高性价比",
        "price": 540,
        "originalPrice": 700,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/02/74/37/3a/silka-far-east-hotel.jpg"
        ],
        "rooms": [
            {
                "id": "slk-5601",
                "name": "标准双人房",
                "size": "16 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含早餐",
                "cancel": "特惠房型不可退订",
                "price": 540,
                "origPrice": 700,
                "image": "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準雙人房",
                        "size": "16 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "标准双人房",
                        "size": "16 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Double Room",
                        "size": "16  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港远东丝丽酒店 (Silka Far East Hotel)",
                "region": "荃灣",
                "district": "荃灣",
                "location": "新界荃灣青山公路135-143號",
                "distance": "荃灣站B出口步行3分鐘，緊鄰荃灣千色汇商圈",
                "verdict": "高性价比",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港远东丝丽酒店 (Silka Far East Hotel)",
                "region": "荃湾",
                "district": "荃湾",
                "location": "新界荃湾青山公路135-143号",
                "distance": "荃湾站B出口步行3分钟，紧邻荃湾千色汇商圈",
                "verdict": "高性价比",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Silka Far East Hotel Hong Kong",
                "region": "Tsuen Wan",
                "district": "Tsuen Wan",
                "location": "135-143 Castle Peak Road, Tsuen Wan, New Territories",
                "distance": "3-min walk from Tsuen Wan MTR Exit B, near Kolour Shopping Mall",
                "verdict": "Great Value",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 48,
        "name": "香港悦品酒店·荃湾 (Hotel COZi Oasis)",
        "enName": "Hotel COZi Oasis",
        "region": "荃湾",
        "district": "葵涌",
        "location": "新界葵涌青山公路葵涌段443号",
        "distance": "近葵兴及荃湾地铁站，巴士直达港铁枢纽",
        "stars": 3,
        "rating": 9.0,
        "reviewCount": 2310,
        "verdict": "宁静实惠",
        "price": 470,
        "originalPrice": 610,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1KIVNVC920sjWCSUu19ISlsQg0G2SYZUYia-CyXWv8amQ4Ker3EHzKIH&s=10"
        ],
        "rooms": [
            {
                "id": "cozi-5901",
                "name": "悦品标准房",
                "size": "18 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 470,
                "origPrice": 610,
                "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "悦品標準房",
                        "size": "18 平方米",
                        "bed": "2張單人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "含雙人自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "悦品标准房",
                        "size": "18 平方米",
                        "bed": "2张单人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "含双人自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "COZi Standard Room",
                        "size": "18  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港悦品酒店·荃灣 (Hotel COZi Oasis)",
                "region": "荃灣",
                "district": "葵涌",
                "location": "新界葵涌青山公路葵涌段443號",
                "distance": "近葵兴及荃灣地鐵站，巴士直达港铁枢纽",
                "verdict": "宁静实惠",
                "locationTags": [
                    "地鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港悦品酒店·荃湾 (Hotel COZi Oasis)",
                "region": "荃湾",
                "district": "葵涌",
                "location": "新界葵涌青山公路葵涌段443号",
                "distance": "近葵兴及荃湾地铁站，巴士直达港铁枢纽",
                "verdict": "宁静实惠",
                "locationTags": [
                    "地铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Hotel COZi Oasis",
                "region": "Tsuen Wan",
                "district": "Kwai Chung",
                "location": "443 Castle Peak Road, Kwai Chung, Tsuen Wan, New Territories",
                "distance": "Near Kwai Hing & Tsuen Wan MTR Stations, direct bus links to major transport hubs",
                "verdict": "Tranquil & Affordable",
                "locationTags": [
                    "MTR Station"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 49,
        "name": "香港挪亚方舟度假酒店 (Noah's Ark Resort)",
        "enName": "Noah's Ark Hotel & Resort",
        "region": "香港迪士尼乐园",
        "district": "马湾",
        "location": "新界马湾珀欣路33号 (直面迪士尼海湾)",
        "distance": "专线渡轮往返香港迪士尼乐园演艺度假区",
        "stars": 3,
        "rating": 9.0,
        "reviewCount": 2680,
        "verdict": "海湾自然奇趣",
        "price": 680,
        "originalPrice": 890,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "机场/高铁站"
        ],
        "eco": "设有太阳馆生态展区，全岛推行零排放绿色环保交通",
        "images": [
            "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=800&q=80"
        ],
        "rooms": [
            {
                "id": "na-4901",
                "name": "海滩景观家庭房",
                "size": "26 平方米",
                "bed": "2张大床",
                "bathroom": "独立私人卫浴 (带浴缸)",
                "breakfast": "含双人丰盛早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 680,
                "origPrice": 890,
                "image": "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "海滩景观家庭房",
                        "size": "26 平方米",
                        "bed": "2張大床",
                        "bathroom": "獨立私人衛浴 (帶浴缸)",
                        "breakfast": "含雙人豐盛早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "海滩景观家庭房",
                        "size": "26 平方米",
                        "bed": "2张大床",
                        "bathroom": "独立私人卫浴 (带浴缸)",
                        "breakfast": "含双人丰盛早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Beachfront Family Room",
                        "size": "26  sqm",
                        "bed": "2 Double Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港挪亚方舟度假酒店 (Noah's Ark Resort)",
                "region": "香港迪士尼乐园",
                "district": "馬灣",
                "location": "新界馬灣珀欣路33號 (直面迪士尼海湾)",
                "distance": "专线渡轮往返香港迪士尼乐园演藝度假区",
                "verdict": "海湾自然奇趣",
                "locationTags": [
                    "演出場館",
                    "機場/高鐵站"
                ],
                "eco": "設有太阳馆生態展區，全島推行零排放绿色環保交通"
            },
            "zh-CN": {
                "name": "香港挪亚方舟度假酒店 (Noah's Ark Resort)",
                "region": "香港迪士尼乐园",
                "district": "马湾",
                "location": "新界马湾珀欣路33号 (直面迪士尼海湾)",
                "distance": "专线渡轮往返香港迪士尼乐园演艺度假区",
                "verdict": "海湾自然奇趣",
                "locationTags": [
                    "演出场馆",
                    "机场/高铁站"
                ],
                "eco": "设有太阳馆生态展区，全岛推行零排放绿色环保交通"
            },
            "en": {
                "name": "Noah's Ark Hotel & Resort",
                "region": "Hong Kong Disneyland",
                "district": "Ma Wan",
                "location": "33 Pak Yan Road, Ma Wan, New Territories",
                "distance": "Dedicated ferry connections to Disneyland Resort, facing Disneyland bay",
                "verdict": "Coastal Eco Fun",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Airport / High Speed Rail"
                ],
                "eco": "Features on-site Solar Tower ecological learning zone and promotes 100% zero-emission island green transport"
            }
        }
    },
    {
        "id": 50,
        "name": "香港东涌福朋喜来登酒店 (Four Points by Sheraton)",
        "enName": "Four Points by Sheraton Tung Chung",
        "region": "香港迪士尼乐园",
        "district": "东涌",
        "location": "新界大屿山东涌怡东路9号",
        "distance": "直达香港迪士尼乐园港铁线，附免费机场穿梭巴",
        "stars": 3,
        "rating": 9.0,
        "reviewCount": 3100,
        "verdict": "乐园度假好伙伴",
        "price": 780,
        "originalPrice": 990,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "机场/高铁站",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/649465771.jpg?k=9339aff51f07aabb698557e7fbaecc4151ff53730424b5cf1ee68fbd408c8ff1&o="
        ],
        "rooms": [
            {
                "id": "fp-5001",
                "name": "标准海景客房",
                "size": "24 平方米",
                "bed": "1张特大双人床",
                "bathroom": "现代步入式淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 780,
                "origPrice": 990,
                "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準海景客房",
                        "size": "24 平方米",
                        "bed": "1張特大雙人床",
                        "bathroom": "现代步入式淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "标准海景客房",
                        "size": "24 平方米",
                        "bed": "1张特大双人床",
                        "bathroom": "现代步入式淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Sea View Room",
                        "size": "24  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港東涌福朋喜来登酒店 (Four Points by Sheraton)",
                "region": "香港迪士尼乐园",
                "district": "東涌",
                "location": "新界大嶼山東涌怡東路9號",
                "distance": "直达香港迪士尼乐园港铁线，附免費机场穿梭巴",
                "verdict": "乐园度假好伙伴",
                "locationTags": [
                    "機場/高鐵站",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港东涌福朋喜来登酒店 (Four Points by Sheraton)",
                "region": "香港迪士尼乐园",
                "district": "东涌",
                "location": "新界大屿山东涌怡东路9号",
                "distance": "直达香港迪士尼乐园港铁线，附免费机场穿梭巴",
                "verdict": "乐园度假好伙伴",
                "locationTags": [
                    "机场/高铁站",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "Four Points by Sheraton Tung Chung",
                "region": "Hong Kong Disneyland",
                "district": "Tung Chung",
                "location": "9 Yi Tung Road, Tung Chung, Lantau Island, New Territories",
                "distance": "Direct MTR link to Hong Kong Disneyland, complimentary airport shuttle",
                "verdict": "Resort Companion",
                "locationTags": [
                    "Airport / High Speed Rail",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 51,
        "name": "香港沙田丽豪酒店 (Regal Riverside)",
        "enName": "Regal Riverside Hotel",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田大涌桥路34-36号",
        "distance": "城门河畔，步行直达沙田大会堂及文化博物馆",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 3760,
        "verdict": "河景休闲",
        "price": 620,
        "originalPrice": 810,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "地铁站"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFe_8gtS7tm6SPH67b5ARssPl4EMDQ_FrsqA7LKX7X1Ea-_BG396Marxo&s=10"
        ],
        "rooms": [
            {
                "id": "rrh-3901",
                "name": "河景标准双床房",
                "size": "24 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 620,
                "origPrice": 810,
                "image": "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "河景標準雙床房",
                        "size": "24 平方米",
                        "bed": "2張單人床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "河景标准双床房",
                        "size": "24 平方米",
                        "bed": "2张单人床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard Twin Room",
                        "size": "24  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港沙田丽豪酒店 (Regal Riverside)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田大涌橋路34-36號",
                "distance": "城門河畔，步行直达沙田大會堂及文化博物馆",
                "verdict": "河景休闲",
                "locationTags": [
                    "演出場館",
                    "地鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港沙田丽豪酒店 (Regal Riverside)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田大涌桥路34-36号",
                "distance": "城门河畔，步行直达沙田大会堂及文化博物馆",
                "verdict": "河景休闲",
                "locationTags": [
                    "演出场馆",
                    "地铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Regal Riverside Hotel",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "34-36 Tai Chung Kiu Road, Sha Tin, New Territories",
                "distance": "Shing Mun Riverfront, walking distance to Sha Tin Town Hall and Heritage Museum",
                "verdict": "Riverside Leisure",
                "locationTags": [
                    "Performance / Sports Venue",
                    "MTR Station"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 52,
        "name": "香港沙田石门丝丽酒店 (Silka Sha Tin)",
        "enName": "Silka Sha Tin Hotel",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田安平街2号",
        "distance": "石门站步行3分钟，近沙田企业商贸区",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 2680,
        "verdict": "舒适便捷",
        "price": 490,
        "originalPrice": 640,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://pix10.agoda.net/hotelImages/1620257/0/98637befa3c5045101d054337a9d07db.jpeg?ce=2&s=1024x768"
        ],
        "rooms": [
            {
                "id": "sst-5001",
                "name": "标准双人房",
                "size": "18 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带小型浴缸)",
                "breakfast": "含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 490,
                "origPrice": 640,
                "image": "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準雙人房",
                        "size": "18 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶小型浴缸)",
                        "breakfast": "含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准双人房",
                        "size": "18 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带小型浴缸)",
                        "breakfast": "含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard Double Room",
                        "size": "18  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港沙田石門丝丽酒店 (Silka Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田安平街2號",
                "distance": "石門站步行3分鐘，近沙田企业商贸区",
                "verdict": "舒適便捷",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港沙田石门丝丽酒店 (Silka Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田安平街2号",
                "distance": "石门站步行3分钟，近沙田企业商贸区",
                "verdict": "舒适便捷",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Silka Sha Tin Hotel",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "2 On Ping Street, Sha Tin, New Territories",
                "distance": "3-min walk from Shek Mun MTR Station, close to Sha Tin enterprise district",
                "verdict": "Comfort & Convenient",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 53,
        "name": "香港富荟炮台山酒店 (iclub Fortress Hill)",
        "enName": "iclub Fortress Hill Hotel",
        "region": "北角",
        "district": "炮台山",
        "location": "港岛北角麦连街18号",
        "distance": "炮台山站步行4分钟，近北角商业中心",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 2180,
        "verdict": "环保轻巧",
        "price": 530,
        "originalPrice": 690,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "获颁 EarthCheck Silver 银级认证，安装高效节能照明及太阳能户外设施",
        "images": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/21/43/6c/caption.jpg?w=1100&h=1100&s=1"
        ],
        "rooms": [
            {
                "id": "icfh-4601",
                "name": "iSelect 双床房",
                "size": "16 平方米",
                "bed": "2张单人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含晨间轻食早点",
                "cancel": "特惠房型不可退订",
                "price": 530,
                "origPrice": 690,
                "image": "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "iSelect 雙床房",
                        "size": "16 平方米",
                        "bed": "2張單人床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含晨间輕食早點",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "iSelect 双床房",
                        "size": "16 平方米",
                        "bed": "2张单人床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含晨间轻食早点",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "iSelect Twin Room",
                        "size": "16  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港富荟炮台山酒店 (iclub Fortress Hill)",
                "region": "北角",
                "district": "炮台山",
                "location": "港島北角麥連街18號",
                "distance": "炮台山站步行4分鐘，近北角商业中心",
                "verdict": "環保轻巧",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "獲頒 EarthCheck Silver 銀級認證，安裝高效節能照明及太陽能户外設施"
            },
            "zh-CN": {
                "name": "香港富荟炮台山酒店 (iclub Fortress Hill)",
                "region": "北角",
                "district": "炮台山",
                "location": "港岛北角麦连街18号",
                "distance": "炮台山站步行4分钟，近北角商业中心",
                "verdict": "环保轻巧",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "获颁 EarthCheck Silver 银级认证，安装高效节能照明及太阳能户外设施"
            },
            "en": {
                "name": "iclub Fortress Hill Hotel",
                "region": "North Point",
                "district": "Fortress Hill",
                "location": "18 Merlin Street, Fortress Hill, North Point, Hong Kong",
                "distance": "4-min walk from Fortress Hill MTR Station, close to North Point business hub",
                "verdict": "Eco & Compact",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "EarthCheck Silver certified, equipped with high-efficiency LED lighting and solar-powered outdoor garden fixtures"
            }
        }
    },
    {
        "id": 54,
        "name": "香港宜必思北角酒店 (ibis North Point)",
        "enName": "ibis Hong Kong North Point",
        "region": "北角",
        "district": "北角",
        "location": "港岛北角渣华道138号",
        "distance": "北角地铁站A1出口步行1分钟，近北角汇商业综合体",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 3120,
        "verdict": "交通极便",
        "price": 480,
        "originalPrice": 620,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "荣获 Green Key 认证，推行客房节能温控与无纸化电子入住",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/25520956.jpg?k=40c6d4cd114c0f20aa92ebef3aaef1ff2628d212a4f5faad5f3abddee4edb1fc&o="
        ],
        "rooms": [
            {
                "id": "ibnp-4901",
                "name": "海景双床房",
                "size": "16 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人轻食自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 480,
                "origPrice": 620,
                "image": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "海景雙床房",
                        "size": "16 平方米",
                        "bed": "2張單人床",
                        "bathroom": "標準淋浴間",
                        "breakfast": "含雙人輕食自助早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "海景双床房",
                        "size": "16 平方米",
                        "bed": "2张单人床",
                        "bathroom": "标准淋浴间",
                        "breakfast": "含双人轻食自助早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Harbour View Twin Room",
                        "size": "16  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港宜必思北角酒店 (ibis North Point)",
                "region": "北角",
                "district": "北角",
                "location": "港島北角渣華道138號",
                "distance": "北角地鐵站A1出口步行1分鐘，近北角汇商业综合体",
                "verdict": "交通极便",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": "荣獲 Green Key 認證，推行客房节能溫控与無紙化電子入住"
            },
            "zh-CN": {
                "name": "香港宜必思北角酒店 (ibis North Point)",
                "region": "北角",
                "district": "北角",
                "location": "港岛北角渣华道138号",
                "distance": "北角地铁站A1出口步行1分钟，近北角汇商业综合体",
                "verdict": "交通极便",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": "荣获 Green Key 认证，推行客房节能温控与无纸化电子入住"
            },
            "en": {
                "name": "ibis Hong Kong North Point",
                "region": "North Point",
                "district": "North Point",
                "location": "138 Java Road, North Point, Hong Kong",
                "distance": "1-min walk from North Point MTR Exit A1, near Harbour North shopping complex",
                "verdict": "Transit Convenience",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": "Awarded international Green Key eco-label; implements guestroom energy-saving climate control and paperless e-check-in"
            }
        }
    },
    {
        "id": 55,
        "name": "香港利景酒店 (The Charterhouse Causeway Bay)",
        "enName": "The Charterhouse Causeway Bay",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛湾仔道209-219号",
        "distance": "步行5分钟达时代广场及伊利沙伯体育馆",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 2680,
        "verdict": "商务便捷",
        "price": 580,
        "originalPrice": 750,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0L2CU_JMOyB2xikJ5jScO1SkR-fHa_nxdfSUNBmcPfje_ifzU6LI6Yg&s=10"
        ],
        "rooms": [
            {
                "id": "ch-5501",
                "name": "高级标准客房",
                "size": "19 平方米",
                "bed": "1张大床",
                "bathroom": "模块淋浴间",
                "breakfast": "含精致早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 580,
                "origPrice": 750,
                "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級標準客房",
                        "size": "19 平方米",
                        "bed": "1張大床",
                        "bathroom": "模块淋浴間",
                        "breakfast": "含精緻早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "高级标准客房",
                        "size": "19 平方米",
                        "bed": "1张大床",
                        "bathroom": "模块淋浴间",
                        "breakfast": "含精致早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Superior Standard Room",
                        "size": "19  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港利景酒店 (The Charterhouse Causeway Bay)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島灣仔道209-219號",
                "distance": "步行5分鐘达时代廣場及伊利沙伯體育館",
                "verdict": "商务便捷",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港利景酒店 (The Charterhouse Causeway Bay)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛湾仔道209-219号",
                "distance": "步行5分钟达时代广场及伊利沙伯体育馆",
                "verdict": "商务便捷",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "The Charterhouse Causeway Bay",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "209-219 Wan Chai Road, Causeway Bay, Hong Kong",
                "distance": "5-min walk to Times Square and Queen Elizabeth Stadium",
                "verdict": "Business Convenience",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 56,
        "name": "香港铜锣湾迷你酒店 (mini hotel Causeway Bay)",
        "enName": "mini hotel Causeway Bay",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛铜锣湾新会道8号",
        "distance": "利园及希慎广场核心商业区旁，铜锣湾站步行2分钟",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 3800,
        "verdict": "核心商圈小巧",
        "price": 520,
        "originalPrice": 680,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67573734.jpg?k=c83dc2efdb6e69f43b1d0b6168daa16d50cb3fbeb33c2272ed717a6ece230f7e&o="
        ],
        "rooms": [
            {
                "id": "mcb-5601",
                "name": "时尚迷你客房",
                "size": "13 平方米",
                "bed": "1张双人床",
                "bathroom": "玻璃淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 520,
                "origPrice": 680,
                "image": "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "时尚迷你客房",
                        "size": "13 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "玻璃淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "时尚迷你客房",
                        "size": "13 平方米",
                        "bed": "1张双人床",
                        "bathroom": "玻璃淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Trendy Mini Room",
                        "size": "13  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港銅鑼灣迷你酒店 (mini hotel Causeway Bay)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島銅鑼灣新會道8號",
                "distance": "利园及希慎廣場核心商业区旁，銅鑼灣站步行2分鐘",
                "verdict": "核心商圈小巧",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港铜锣湾迷你酒店 (mini hotel Causeway Bay)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛铜锣湾新会道8号",
                "distance": "利园及希慎广场核心商业区旁，铜锣湾站步行2分钟",
                "verdict": "核心商圈小巧",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "mini hotel Causeway Bay",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "8 Sun Wui Road, Causeway Bay, Hong Kong",
                "distance": "Next to Lee Garden and Hysan Place, 2-min walk to Causeway Bay MTR Station",
                "verdict": "Cozy City Boutique",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 57,
        "name": "香港九龙海逸君绰酒店 (Harbour Grand Kowloon)",
        "enName": "Harbour Grand Kowloon",
        "region": "维多利亚港",
        "district": "红磡",
        "location": "九龙红磡黄埔花园德丰街20号",
        "distance": "黄埔地铁站D2出口步行2分钟，步行可达红磡香港体育馆",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 3120,
        "verdict": "无敌海景",
        "price": 980,
        "originalPrice": 1280,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/145/658/242/Hotel_Driveway_O.jpg?tr=w-1200%2Cfo-auto"
        ],
        "rooms": [
            {
                "id": "hgk-1601",
                "name": "海景客房",
                "size": "36 平方米",
                "bed": "1张特大床",
                "bathroom": "独立云石浴缸卫浴",
                "breakfast": "含双人早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 980,
                "origPrice": 1280,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "海景客房",
                        "size": "36 平方米",
                        "bed": "1張特大床",
                        "bathroom": "獨立雲石浴缸衛浴",
                        "breakfast": "含雙人早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "海景客房",
                        "size": "36 平方米",
                        "bed": "1张特大床",
                        "bathroom": "独立云石浴缸卫浴",
                        "breakfast": "含双人早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Harbour View Room",
                        "size": "36  sqm",
                        "bed": "1 King Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港九龍海逸君绰酒店 (Harbour Grand Kowloon)",
                "region": "維多利亞港",
                "district": "紅磡",
                "location": "九龍紅磡黄埔花园德豐街20號",
                "distance": "黄埔地鐵站D2出口步行2分鐘，步行可达紅磡香港體育館",
                "verdict": "無敵海景",
                "locationTags": [
                    "演出場館",
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港九龙海逸君绰酒店 (Harbour Grand Kowloon)",
                "region": "维多利亚港",
                "district": "红磡",
                "location": "九龙红磡黄埔花园德丰街20号",
                "distance": "黄埔地铁站D2出口步行2分钟，步行可达红磡香港体育馆",
                "verdict": "无敌海景",
                "locationTags": [
                    "演出场馆",
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Harbour Grand Kowloon",
                "region": "Victoria Harbour",
                "district": "Hung Hom",
                "location": "20 Tak Fung Street, Whampoa Garden, Hung Hom, Kowloon",
                "distance": "2-min walk from Whampoa MTR Exit D2, walking distance to Hong Kong Coliseum",
                "verdict": "Stunning Harbour View",
                "locationTags": [
                    "Performance / Sports Venue",
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 58,
        "name": "香港诺富特世纪酒店 (Novotel Century)",
        "enName": "Novotel Century Hong Kong",
        "region": "维多利亚港",
        "district": "湾仔",
        "location": "港岛湾仔谢斐道238号",
        "distance": "步行至会展中心维港大型展演馆约8分钟",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2900,
        "verdict": "法式连锁",
        "price": 860,
        "originalPrice": 1120,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "演出场馆",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTdFFGK-7nX2w8qdzco4b8mf8uQNr06E9QqbKU3up3g&s=10"
        ],
        "rooms": [
            {
                "id": "nc-3301",
                "name": "高级标准双人房",
                "size": "23 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 860,
                "origPrice": 1120,
                "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級標準雙人房",
                        "size": "23 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "含雙人自助早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "高级标准双人房",
                        "size": "23 平方米",
                        "bed": "1张双人床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "含双人自助早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard Double Room",
                        "size": "23  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Complimentary Buffet Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港诺富特世纪酒店 (Novotel Century)",
                "region": "維多利亞港",
                "district": "灣仔",
                "location": "港島灣仔謝斐道238號",
                "distance": "步行至會展中心維港大型展演馆约8分鐘",
                "verdict": "法式连锁",
                "locationTags": [
                    "地鐵站",
                    "演出場館",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港诺富特世纪酒店 (Novotel Century)",
                "region": "维多利亚港",
                "district": "湾仔",
                "location": "港岛湾仔谢斐道238号",
                "distance": "步行至会展中心维港大型展演馆约8分钟",
                "verdict": "法式连锁",
                "locationTags": [
                    "地铁站",
                    "演出场馆",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Novotel Century Hong Kong",
                "region": "Victoria Harbour",
                "district": "Wan Chai",
                "location": "238 Jaffe Road, Wan Chai, Hong Kong",
                "distance": "Approx. 8-min walk to HKCEC Victoria Harbour exhibition and concert halls",
                "verdict": "French Hospitality",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 59,
        "name": "香港富荟土瓜湾酒店 (iclub To Kwa Wan)",
        "enName": "iclub To Kwa Wan Hotel",
        "region": "启德体育园",
        "district": "土瓜湾",
        "location": "九龙土瓜湾下乡道8号",
        "distance": "土瓜湾站步行3分钟，步行直达启德体育园主场馆",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 1980,
        "verdict": "低碳出行",
        "price": 510,
        "originalPrice": 660,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "地铁站"
        ],
        "eco": "荣获 EarthCheck Silver 银级环保认证，推行全馆塑胶减量与智能断电节能",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/115539375.jpg?k=691783835441cf8141c4a069a5557aa82cd7fea3d3f6187f7e21a46128e15a66&o="
        ],
        "rooms": [
            {
                "id": "ictkw-4401",
                "name": "标准大床房",
                "size": "15 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 510,
                "origPrice": 660,
                "image": "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準大床房",
                        "size": "15 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "现代淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准大床房",
                        "size": "15 平方米",
                        "bed": "1张双人床",
                        "bathroom": "现代淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard King Room",
                        "size": "15  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港富荟土瓜灣酒店 (iclub To Kwa Wan)",
                "region": "啟德體育園",
                "district": "土瓜灣",
                "location": "九龍土瓜灣下鄉道8號",
                "distance": "土瓜灣站步行3分鐘，步行直达啟德體育園主場館",
                "verdict": "低碳出行",
                "locationTags": [
                    "演出場館",
                    "地鐵站"
                ],
                "eco": "荣獲 EarthCheck Silver 銀級環保認證，推行全馆塑膠減量与智能断电节能"
            },
            "zh-CN": {
                "name": "香港富荟土瓜湾酒店 (iclub To Kwa Wan)",
                "region": "启德体育园",
                "district": "土瓜湾",
                "location": "九龙土瓜湾下乡道8号",
                "distance": "土瓜湾站步行3分钟，步行直达启德体育园主场馆",
                "verdict": "低碳出行",
                "locationTags": [
                    "演出场馆",
                    "地铁站"
                ],
                "eco": "荣获 EarthCheck Silver 银级环保认证，推行全馆塑胶减量与智能断电节能"
            },
            "en": {
                "name": "iclub To Kwa Wan Hotel",
                "region": "Kai Tak Sports Park",
                "district": "To Kwa Wan",
                "location": "8 Ha Heung Road, To Kwa Wan, Kowloon",
                "distance": "3-min walk from To Kwa Wan MTR Station, direct walking route to Kai Tak Sports Park",
                "verdict": "Low-Carbon Living",
                "locationTags": [
                    "Performance / Sports Venue",
                    "MTR Station"
                ],
                "eco": "EarthCheck Silver environmental certified; comprehensive plastic reduction and smart automated power-off keycard systems"
            }
        }
    },
    {
        "id": 60,
        "name": "香港观塘帝盛酒店 (Dorsett Kwun Tong)",
        "enName": "Dorsett Kwun Tong, Hong Kong",
        "region": "启德体育园",
        "district": "观塘",
        "location": "九龙观塘鸿图道84号 (近启德邮轮及体育园)",
        "distance": "港铁观塘站步行5分钟，近启德商务区",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2890,
        "verdict": "都会现代",
        "price": 630,
        "originalPrice": 820,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://pix10.agoda.net/hotelImages/194021/0/8042e9f77d1cc4f4cc41e032d041e37e.jpeg?ce=2&s=414x232"
        ],
        "rooms": [
            {
                "id": "dkt-6001",
                "name": "高级舒适大床房",
                "size": "22 平方米",
                "bed": "1张大床",
                "bathroom": "标准淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 630,
                "origPrice": 820,
                "image": "https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "高級舒適大床房",
                        "size": "22 平方米",
                        "bed": "1張大床",
                        "bathroom": "標準淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "高级舒适大床房",
                        "size": "22 平方米",
                        "bed": "1张大床",
                        "bathroom": "标准淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Guest Room",
                        "size": "22  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港觀塘帝盛酒店 (Dorsett Kwun Tong)",
                "region": "啟德體育園",
                "district": "觀塘",
                "location": "九龍觀塘鴻圖道84號 (近启德邮轮及體育園)",
                "distance": "港铁觀塘站步行5分鐘，近启德商务区",
                "verdict": "都会现代",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港观塘帝盛酒店 (Dorsett Kwun Tong)",
                "region": "启德体育园",
                "district": "观塘",
                "location": "九龙观塘鸿图道84号 (近启德邮轮及体育园)",
                "distance": "港铁观塘站步行5分钟，近启德商务区",
                "verdict": "都会现代",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Dorsett Kwun Tong, Hong Kong",
                "region": "Kai Tak Sports Park",
                "district": "Kwun Tong",
                "location": "84 Hung To Road, Kwun Tong, Kowloon",
                "distance": "5-min walk from Kwun Tong MTR Station, near Kai Tak Cruise Terminal and business district",
                "verdict": "Modern Urban",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 61,
        "name": "香港扑飞旅舍 (Hop Inn on Mody)",
        "enName": "Hop Inn Hong Kong",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀么地道36号丽东大厦5楼",
        "distance": "尖东站P3出口步行2分钟，步行可达香港体育馆",
        "stars": 2,
        "rating": 9.5,
        "reviewCount": 3120,
        "verdict": "超棒极佳",
        "price": 390,
        "originalPrice": 520,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "获选 Tripadvisor 全球绿色领航旅宿，采用环保 LED 与本地可回收木材定制家具",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274360422.jpg?k=44f934169ffa4a991a9f31b360c6cf2cb4b3f0cc73185603bed3996afdb4844c&o="
        ],
        "rooms": [
            {
                "id": "hop-6301",
                "name": "艺术设计双人房",
                "size": "14 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带迷你浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 390,
                "origPrice": 520,
                "image": "https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "艺术設计雙人房",
                        "size": "14 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶迷你浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "艺术设计双人房",
                        "size": "14 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带迷你浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Art Design Double Room",
                        "size": "14  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港扑飞旅舍 (Hop Inn on Mody)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀麼地道36號丽东大廈5樓",
                "distance": "尖东站P3出口步行2分鐘，步行可达香港體育館",
                "verdict": "超棒极佳",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": "獲选 Tripadvisor 全球綠色領航旅宿，採用環保 LED 与本地可回收木材訂製家具"
            },
            "zh-CN": {
                "name": "香港扑飞旅舍 (Hop Inn on Mody)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀么地道36号丽东大厦5楼",
                "distance": "尖东站P3出口步行2分钟，步行可达香港体育馆",
                "verdict": "超棒极佳",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": "获选 Tripadvisor 全球绿色领航旅宿，采用环保 LED 与本地可回收木材定制家具"
            },
            "en": {
                "name": "Hop Inn Hong Kong",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "5/F, Lyton Building, 36 Mody Road, Tsim Sha Tsui, Kowloon",
                "distance": "2-min walk from East Tsim Sha Tsui MTR Exit P3, near Hong Kong Coliseum",
                "verdict": "Exceptional",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": "Selected as Tripadvisor Global GreenLeaders hotel, using low-energy LED systems and locally upcycled timber furniture"
            }
        }
    },
    {
        "id": 62,
        "name": "香港都会海逸客栈 (Urban Pack Hostel)",
        "enName": "Urban Pack Hostel",
        "region": "尖沙咀",
        "district": "尖沙咀",
        "location": "九龙尖沙咀海防道35号海防大厦14楼",
        "distance": "尖沙咀站A1出口出站即达，近海港城商圈与西九高铁站",
        "stars": 2,
        "rating": 9.5,
        "reviewCount": 3200,
        "verdict": "优质好评",
        "price": 350,
        "originalPrice": 460,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区",
            "机场/高铁站"
        ],
        "eco": "加拿大环保设计师主理，室内装饰 80% 采用升级再造材料",
        "images": [
            "https://pix10.agoda.net/hotelImages/774280/-1/d7ae32db4cb6d4b6c372a1f463653a55.jpg?ca=9&ce=1&s=414x232&ar=16x9"
        ],
        "rooms": [
            {
                "id": "up-6801",
                "name": "都市舒适大床房",
                "size": "13 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带迷你浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 350,
                "origPrice": 460,
                "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "都市舒適大床房",
                        "size": "13 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶迷你浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "都市舒适大床房",
                        "size": "13 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带迷你浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Urban Comfort King Room",
                        "size": "13  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港都会海逸客栈 (Urban Pack Hostel)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龍尖沙咀海防道35號海防大廈14樓",
                "distance": "尖沙咀站A1出口出站即达，近海港城商圈与西九高铁站",
                "verdict": "优质好评",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "機場/高鐵站"
                ],
                "eco": "加拿大環保設计师主理，室內裝飾 80% 採用升級再造材料"
            },
            "zh-CN": {
                "name": "香港都会海逸客栈 (Urban Pack Hostel)",
                "region": "尖沙咀",
                "district": "尖沙咀",
                "location": "九龙尖沙咀海防道35号海防大厦14楼",
                "distance": "尖沙咀站A1出口出站即达，近海港城商圈与西九高铁站",
                "verdict": "优质好评",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "机场/高铁站"
                ],
                "eco": "加拿大环保设计师主理，室内装饰 80% 采用升级再造材料"
            },
            "en": {
                "name": "Urban Pack Hostel",
                "region": "Tsim Sha Tsui",
                "district": "Tsim Sha Tsui",
                "location": "14/F, Haiphong Mansion, 35 Haiphong Road, Tsim Sha Tsui, Kowloon",
                "distance": "Steps from Tsim Sha Tsui MTR Exit A1, near Harbour City & West Kowloon High Speed Rail",
                "verdict": "Great Reviews",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Airport / High Speed Rail"
                ],
                "eco": "Designed by Canadian eco-architects, featuring 80%+ upcycled interior decor and sustainable vintage materials"
            }
        }
    },
    {
        "id": 63,
        "name": "香港极简旅舍 (Minimal Hotel Bazaar)",
        "enName": "Minimal Hotel Bazaar",
        "region": "旺角",
        "district": "旺角",
        "location": "九龙旺角通菜街124号",
        "distance": "旺角地铁站B2出口步行2分钟，女人街商圈核心",
        "stars": 2,
        "rating": 9.5,
        "reviewCount": 2650,
        "verdict": "很棒体验",
        "price": 310,
        "originalPrice": 410,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://minimal-bazaar.hongkonghotelsandrates.com/data/Pics/OriginalPhoto/14363/1436327/1436327221/pop-inn-mong-kok-hong-kong-pic-8.JPEG"
        ],
        "rooms": [
            {
                "id": "mhb-7201",
                "name": "极简舒适大床房",
                "size": "12 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 310,
                "origPrice": 410,
                "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "极简舒適大床房",
                        "size": "12 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "极简舒适大床房",
                        "size": "12 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Minimalist Comfort King Room",
                        "size": "12  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港极简旅舍 (Minimal Hotel Bazaar)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龍旺角通菜街124號",
                "distance": "旺角地鐵站B2出口步行2分鐘，女人街商圈核心",
                "verdict": "很棒体验",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港极简旅舍 (Minimal Hotel Bazaar)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龙旺角通菜街124号",
                "distance": "旺角地铁站B2出口步行2分钟，女人街商圈核心",
                "verdict": "很棒体验",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Minimal Hotel Bazaar",
                "region": "Mong Kok",
                "district": "Mong Kok",
                "location": "124 Tung Choi Street, Mong Kok, Kowloon",
                "distance": "2-min walk from Mong Kok MTR Exit B2, heart of Ladies' Market shopping district",
                "verdict": "Great Experience",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 64,
        "name": "香港龙群宾馆 (Dragon Hostel Hong Kong)",
        "enName": "Dragon Hostel Hong Kong",
        "region": "旺角",
        "district": "旺角",
        "location": "九龙旺角亚皆老街83号先施大厦7楼",
        "distance": "旺角地铁站D2出口步行1分钟，邻近麦花臣场馆",
        "stars": 2,
        "rating": 9.5,
        "reviewCount": 3150,
        "verdict": "很棒体验",
        "price": 290,
        "originalPrice": 380,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/02/40/9e/19/dragon-hostel-sign-on.jpg"
        ],
        "rooms": [
            {
                "id": "dh-7501",
                "name": "标准私享双人间",
                "size": "11 平方米",
                "bed": "1张双人床",
                "bathroom": "标准淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 290,
                "origPrice": 380,
                "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準私享雙人间",
                        "size": "11 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "標準淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "标准私享双人间",
                        "size": "11 平方米",
                        "bed": "1张双人床",
                        "bathroom": "标准淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Private Double Room",
                        "size": "11  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港龙群宾馆 (Dragon Hostel Hong Kong)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龍旺角亞皆老街83號先施大廈7樓",
                "distance": "旺角地鐵站D2出口步行1分鐘，邻近麦花臣场馆",
                "verdict": "很棒体验",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港龙群宾馆 (Dragon Hostel Hong Kong)",
                "region": "旺角",
                "district": "旺角",
                "location": "九龙旺角亚皆老街83号先施大厦7楼",
                "distance": "旺角地铁站D2出口步行1分钟，邻近麦花臣场馆",
                "verdict": "很棒体验",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "Dragon Hostel Hong Kong",
                "region": "Mong Kok",
                "district": "Mong Kok",
                "location": "7/F, Sincere House, 83 Argyle Street, Mong Kok, Kowloon",
                "distance": "1-min walk from Mong Kok MTR Exit D2, close to MacPherson Stadium",
                "verdict": "Great Experience",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 65,
        "name": "香港中环迷你酒店 (mini hotel Central)",
        "enName": "mini hotel Central",
        "region": "中环",
        "district": "中环",
        "location": "港岛中环雪厂街38号",
        "distance": "紧邻兰桂坊商圈与艺穗会演艺场，中环站步行3分钟",
        "stars": 2,
        "rating": 9.5,
        "reviewCount": 3420,
        "verdict": "时尚小巧",
        "price": 500,
        "originalPrice": 650,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtGeDT95ZYAp8dJ5MCcRSSKE02GpTVYn2A7XxEsnH9Zx8qJXm7LC1piU&s=10"
        ],
        "rooms": [
            {
                "id": "mc-6501",
                "name": "精巧客房",
                "size": "13 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带迷你浴缸)",
                "breakfast": "含双人早点",
                "cancel": "入住前24小时可免费取消",
                "price": 500,
                "origPrice": 650,
                "image": "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "精巧客房",
                        "size": "13 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶迷你浴缸)",
                        "breakfast": "含雙人早點",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "精巧客房",
                        "size": "13 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带迷你浴缸)",
                        "breakfast": "含双人早点",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Compact Cozy Room",
                        "size": "13  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港中環迷你酒店 (mini hotel Central)",
                "region": "中環",
                "district": "中環",
                "location": "港島中環雪廠街38號",
                "distance": "緊鄰兰桂坊商圈与艺穗会演藝场，中環站步行3分鐘",
                "verdict": "时尚小巧",
                "locationTags": [
                    "地鐵站",
                    "商業區",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港中环迷你酒店 (mini hotel Central)",
                "region": "中环",
                "district": "中环",
                "location": "港岛中环雪厂街38号",
                "distance": "紧邻兰桂坊商圈与艺穗会演艺场，中环站步行3分钟",
                "verdict": "时尚小巧",
                "locationTags": [
                    "地铁站",
                    "商业区",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "mini hotel Central",
                "region": "Central",
                "district": "Central",
                "location": "38 Ice House Street, Central, Hong Kong",
                "distance": "Next to Lan Kwai Fong and Fringe Club, 3-min walk from Central MTR Station",
                "verdict": "Stylish & Compact",
                "locationTags": [
                    "MTR Station",
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 66,
        "name": "香港兰桂坊商旅客栈 (Lan Kwai Fong Guest House)",
        "enName": "Lan Kwai Fong Guest House Central",
        "region": "中环",
        "district": "中环",
        "location": "港岛中环德己立街24号",
        "distance": "中环核心金融商业区，中环地铁站步行2分钟",
        "stars": 2,
        "rating": 9.0,
        "reviewCount": 1820,
        "verdict": "夜生活便捷",
        "price": 420,
        "originalPrice": 550,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXR2s4dJB2h3cgcnt9ez9RrgIPXV_CdPcsqk7zwE2Dmg&s=10"
        ],
        "rooms": [
            {
                "id": "lkf-6601",
                "name": "都会经济单间",
                "size": "12 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 420,
                "origPrice": 550,
                "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "都会经济单间",
                        "size": "12 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "都会经济单间",
                        "size": "12 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Urban Budget Single/Double Room",
                        "size": "12  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港兰桂坊商旅客栈 (Lan Kwai Fong Guest House)",
                "region": "中環",
                "district": "中環",
                "location": "港島中環德己立街24號",
                "distance": "中環核心金融商业区，中環地鐵站步行2分鐘",
                "verdict": "夜生活便捷",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港兰桂坊商旅客栈 (Lan Kwai Fong Guest House)",
                "region": "中环",
                "district": "中环",
                "location": "港岛中环德己立街24号",
                "distance": "中环核心金融商业区，中环地铁站步行2分钟",
                "verdict": "夜生活便捷",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Lan Kwai Fong Guest House Central",
                "region": "Central",
                "district": "Central",
                "location": "24 D'Aguilar Street, Central, Hong Kong",
                "distance": "In Central CBD and Lan Kwai Fong hub, 2-min walk from Central MTR Station",
                "verdict": "Nightlife Hub",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 67,
        "name": "香港旭逸雅捷酒店·荃湾 (Hotel Ease Access)",
        "enName": "Hotel Ease Access Tsuen Wan",
        "region": "荃湾",
        "district": "葵涌",
        "location": "新界葵涌嘉庆路12号",
        "distance": "大窝口地铁站步行约7分钟，直达荃湾商业区",
        "stars": 2,
        "rating": 9.0,
        "reviewCount": 2180,
        "verdict": "舒适实惠",
        "price": 360,
        "originalPrice": 460,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://hotel-ease-access-wan-chai.top-hotels-hong-kong.com/data/Pictures/OriginalPhoto/8566/856606/856606223/hong-kong-hotel-ease-access-wan-chai-picture-1.JPEG"
        ],
        "rooms": [
            {
                "id": "hea-6701",
                "name": "标准大床房",
                "size": "14 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 360,
                "origPrice": 460,
                "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準大床房",
                        "size": "14 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准大床房",
                        "size": "14 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard King Room",
                        "size": "14  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港旭逸雅捷酒店·荃灣 (Hotel Ease Access)",
                "region": "荃灣",
                "district": "葵涌",
                "location": "新界葵涌嘉慶路12號",
                "distance": "大窝口地鐵站步行約7分鐘，直达荃灣商业区",
                "verdict": "舒適实惠",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港旭逸雅捷酒店·荃湾 (Hotel Ease Access)",
                "region": "荃湾",
                "district": "葵涌",
                "location": "新界葵涌嘉庆路12号",
                "distance": "大窝口地铁站步行约7分钟，直达荃湾商业区",
                "verdict": "舒适实惠",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Hotel Ease Access Tsuen Wan",
                "region": "Tsuen Wan",
                "district": "Kwai Chung",
                "location": "12 Ka Ting Road, Kwai Chung, Tsuen Wan, New Territories",
                "distance": "7-min walk from Tai Wo Hau MTR Station, direct access to Tsuen Wan commercial center",
                "verdict": "Comfort & Value",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 68,
        "name": "香港青衣华逸旅馆 (Rambler Garden Living)",
        "enName": "Rambler Garden Living Hotel",
        "region": "荃湾",
        "district": "青衣",
        "location": "新界青衣青衣路1号 (荃湾生活圈)",
        "distance": "近蓝巴勒海峡，附班车直达荃湾地铁站与青衣机场快线",
        "stars": 2,
        "rating": 9.0,
        "reviewCount": 2950,
        "verdict": "预算首选",
        "price": 380,
        "originalPrice": 490,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": true,
        "hasFreeParking": true,
        "locationTags": [
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/228650861.jpg?k=59814690bd86fec28659451db817e499d1266768dc746ed77cd02ca2abfb0e50&o="
        ],
        "rooms": [
            {
                "id": "rg-6801",
                "name": "舒适海景双床房",
                "size": "18 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带小型浴缸)",
                "breakfast": "含简易早餐",
                "cancel": "特惠房型不可退订",
                "price": 380,
                "origPrice": 490,
                "image": "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "舒適海景雙床房",
                        "size": "18 平方米",
                        "bed": "2張單人床",
                        "bathroom": "獨立衛浴 (帶小型浴缸)",
                        "breakfast": "含简易早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "舒适海景双床房",
                        "size": "18 平方米",
                        "bed": "2张单人床",
                        "bathroom": "独立卫浴 (带小型浴缸)",
                        "breakfast": "含简易早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Harbour View Twin Room",
                        "size": "18  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港青衣华逸旅馆 (Rambler Garden Living)",
                "region": "荃灣",
                "district": "青衣",
                "location": "新界青衣青衣路1號 (荃灣生活圈)",
                "distance": "近藍巴勒海峽，附班车直达荃灣地鐵站与青衣机场快线",
                "verdict": "预算首选",
                "locationTags": [
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港青衣华逸旅馆 (Rambler Garden Living)",
                "region": "荃湾",
                "district": "青衣",
                "location": "新界青衣青衣路1号 (荃湾生活圈)",
                "distance": "近蓝巴勒海峡，附班车直达荃湾地铁站与青衣机场快线",
                "verdict": "预算首选",
                "locationTags": [
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Rambler Garden Living Hotel",
                "region": "Tsuen Wan",
                "district": "Tsing Yi",
                "location": "1 Tsing Yi Road, Tsing Yi, New Territories",
                "distance": "Overlooking Rambler Channel, shuttle bus to Tsuen Wan MTR and Tsing Yi Airport Express",
                "verdict": "Budget Choice",
                "locationTags": [
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 69,
        "name": "香港银矿湾度假露营屋 (Silvermine Cabin)",
        "enName": "Silvermine Cabin & Lodge",
        "region": "香港迪士尼乐园",
        "district": "大屿山",
        "location": "新界大屿山梅窝银矿湾东湾头路",
        "distance": "大屿山海滨直通迪士尼乐园演艺接驳公路",
        "stars": 2,
        "rating": 9.0,
        "reviewCount": 2180,
        "verdict": "良好推荐",
        "price": 350,
        "originalPrice": 450,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://www.lantau-da.com.hk/wp-content/uploads/2023/07/988-photo-1.jpg"
        ],
        "rooms": [
            {
                "id": "smb-7901",
                "name": "沙滩双人木屋",
                "size": "18 平方米",
                "bed": "1张大床",
                "bathroom": "独立私人卫浴 (带浴缸)",
                "breakfast": "含双人早点",
                "cancel": "特惠房型不可退订",
                "price": 350,
                "origPrice": 450,
                "image": "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "沙滩雙人木屋",
                        "size": "18 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立私人衛浴 (帶浴缸)",
                        "breakfast": "含雙人早點",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "沙滩双人木屋",
                        "size": "18 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立私人卫浴 (带浴缸)",
                        "breakfast": "含双人早点",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Beachfront Double Lodge",
                        "size": "18  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港银矿湾度假露营屋 (Silvermine Cabin)",
                "region": "香港迪士尼乐园",
                "district": "大嶼山",
                "location": "新界大嶼山梅窝银矿湾東灣頭路",
                "distance": "大嶼山海濱直通迪士尼乐园演藝接驳公路",
                "verdict": "良好推荐",
                "locationTags": [
                    "演出場館",
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港银矿湾度假露营屋 (Silvermine Cabin)",
                "region": "香港迪士尼乐园",
                "district": "大屿山",
                "location": "新界大屿山梅窝银矿湾东湾头路",
                "distance": "大屿山海滨直通迪士尼乐园演艺接驳公路",
                "verdict": "良好推荐",
                "locationTags": [
                    "演出场馆",
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Silvermine Cabin & Lodge",
                "region": "Hong Kong Disneyland",
                "district": "Lantau Island",
                "location": "Tung Wan Tau Road, Silvermine Bay, Mui Wo, Lantau Island, New Territories",
                "distance": "Lantau beachside retreat with direct bus highway connection to Disneyland Resort",
                "verdict": "Good Choice",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 70,
        "name": "大屿山昂坪翠绿客栈 (Lantau Greenview Hostel)",
        "enName": "Lantau Greenview Hostel",
        "region": "香港迪士尼乐园",
        "district": "大屿山",
        "location": "新界大屿山昂坪路",
        "distance": "巴士直达东涌商圈与迪士尼乐园剧场",
        "stars": 2,
        "rating": 9.0,
        "reviewCount": 1640,
        "verdict": "乐园离岛自然静谧",
        "price": 310,
        "originalPrice": 400,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "演出场馆",
            "机场/高铁站"
        ],
        "eco": "",
        "images": [
            "https://www.yha.org.hk/wp-content/uploads/2015/12/NP_Building_1024.jpg"
        ],
        "rooms": [
            {
                "id": "lg-7001",
                "name": "绿意山景大床房",
                "size": "14 平方米",
                "bed": "1张双人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人素食早点",
                "cancel": "特惠房型不可退订",
                "price": 310,
                "origPrice": 400,
                "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "绿意山景大床房",
                        "size": "14 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "標準淋浴間",
                        "breakfast": "含雙人素食早點",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "绿意山景大床房",
                        "size": "14 平方米",
                        "bed": "1张双人床",
                        "bathroom": "标准淋浴间",
                        "breakfast": "含双人素食早点",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Greenery Mountain View Room",
                        "size": "14  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "大嶼山昂坪翠绿客栈 (Lantau Greenview Hostel)",
                "region": "香港迪士尼乐园",
                "district": "大嶼山",
                "location": "新界大嶼山昂坪路",
                "distance": "巴士直达東涌商圈与迪士尼乐园劇場",
                "verdict": "乐园离岛自然静谧",
                "locationTags": [
                    "演出場館",
                    "機場/高鐵站"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "大屿山昂坪翠绿客栈 (Lantau Greenview Hostel)",
                "region": "香港迪士尼乐园",
                "district": "大屿山",
                "location": "新界大屿山昂坪路",
                "distance": "巴士直达东涌商圈与迪士尼乐园剧场",
                "verdict": "乐园离岛自然静谧",
                "locationTags": [
                    "演出场馆",
                    "机场/高铁站"
                ],
                "eco": ""
            },
            "en": {
                "name": "Lantau Greenview Hostel",
                "region": "Hong Kong Disneyland",
                "district": "Lantau Island",
                "location": "Ngong Ping Road, Lantau Island, New Territories",
                "distance": "Direct bus connection to Tung Chung shopping district and Disneyland Resort theater",
                "verdict": "Island Nature Retreat",
                "locationTags": [
                    "Performance / Sports Venue",
                    "Airport / High Speed Rail"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 71,
        "name": "沙田河滨青年客栈 (Sha Tin Riverside Inn)",
        "enName": "Sha Tin Riverside Inn",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田火炭路",
        "distance": "邻近火炭站与沙田大会堂演艺广场",
        "stars": 2,
        "rating": 8.5,
        "reviewCount": 1580,
        "verdict": "河畔实惠清幽",
        "price": 320,
        "originalPrice": 420,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "演出场馆"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5XyBri7JvkRC1BzHk6PKdTX7tyieu8p9oCS_maHPxLDC3VNRLLDicz8&s=10"
        ],
        "rooms": [
            {
                "id": "sri-7101",
                "name": "河畔双床客房",
                "size": "15 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 320,
                "origPrice": 420,
                "image": "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "河畔双床客房",
                        "size": "15 平方米",
                        "bed": "2張單人床",
                        "bathroom": "標準淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "河畔双床客房",
                        "size": "15 平方米",
                        "bed": "2张单人床",
                        "bathroom": "标准淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Riverside Twin Room",
                        "size": "15  sqm",
                        "bed": "2 Single Beds",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "沙田河滨青年客栈 (Sha Tin Riverside Inn)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田火炭路",
                "distance": "邻近火炭站与沙田大會堂演藝廣場",
                "verdict": "河畔实惠清幽",
                "locationTags": [
                    "地鐵站",
                    "演出場館"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "沙田河滨青年客栈 (Sha Tin Riverside Inn)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田火炭路",
                "distance": "邻近火炭站与沙田大会堂演艺广场",
                "verdict": "河畔实惠清幽",
                "locationTags": [
                    "地铁站",
                    "演出场馆"
                ],
                "eco": ""
            },
            "en": {
                "name": "Sha Tin Riverside Inn",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "Fo Tan Road, Sha Tin, New Territories",
                "distance": "Close to Fo Tan MTR Station and Sha Tin Town Hall performance plaza",
                "verdict": "Riverside Tranquility",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 72,
        "name": "香港沙田科学园青年旅居 (Inno Living Sha Tin)",
        "enName": "Inno Living Sha Tin",
        "region": "沙田",
        "district": "沙田",
        "location": "新界沙田白石角科学园科技大道",
        "distance": "科技园区商圈，科学园高通量展厅旁",
        "stars": 2,
        "rating": 8.5,
        "reviewCount": 1820,
        "verdict": "科技生态社区",
        "price": 340,
        "originalPrice": 450,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "商业区",
            "演出场馆"
        ],
        "eco": "科学园绿色建筑园区，全面采用太阳能光伏与智能微电网",
        "images": [
            "https://mic.cic.hk/files/HongKongProject/1/Photo/InnoCell_1823320750_compressed.jpg"
        ],
        "rooms": [
            {
                "id": "inno-7201",
                "name": "科技园景单人/双人房",
                "size": "16 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴",
                "breakfast": "含晨间早点",
                "cancel": "特惠房型不可退订",
                "price": 340,
                "origPrice": 450,
                "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "科技园景单人/雙人房",
                        "size": "16 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴",
                        "breakfast": "含晨间早點",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "科技园景单人/双人房",
                        "size": "16 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴",
                        "breakfast": "含晨间早点",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Science Park View Room",
                        "size": "16  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港沙田科学园青年旅居 (Inno Living Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田白石角科学园科技大道",
                "distance": "科技園區商圈，科学园高通量展厅旁",
                "verdict": "科技生态社区",
                "locationTags": [
                    "商業區",
                    "演出場館"
                ],
                "eco": "科学园綠色建築園區，全面採用太陽能光伏与智能微電網"
            },
            "zh-CN": {
                "name": "香港沙田科学园青年旅居 (Inno Living Sha Tin)",
                "region": "沙田",
                "district": "沙田",
                "location": "新界沙田白石角科学园科技大道",
                "distance": "科技园区商圈，科学园高通量展厅旁",
                "verdict": "科技生态社区",
                "locationTags": [
                    "商业区",
                    "演出场馆"
                ],
                "eco": "科学园绿色建筑园区，全面采用太阳能光伏与智能微电网"
            },
            "en": {
                "name": "Inno Living Sha Tin",
                "region": "Sha Tin",
                "district": "Sha Tin",
                "location": "Science Park West Avenue, Pak Shek Kok, Sha Tin, New Territories",
                "distance": "Located inside Hong Kong Science Park tech campus, adjoining high-throughput exhibition halls",
                "verdict": "Tech & Eco Living",
                "locationTags": [
                    "Commercial District",
                    "Performance / Sports Venue"
                ],
                "eco": "Located in Hong Kong Science Park green tech campus, powered by solar photovoltaic arrays and smart microgrids"
            }
        }
    },
    {
        "id": 73,
        "name": "香港华美达盛景酒店 (Ramada Hong Kong Grand View)",
        "enName": "Ramada Hong Kong Grand View",
        "region": "北角",
        "district": "北角",
        "location": "港岛北角春秧街88号",
        "distance": "北角春秧街商圈，北角地铁站步行4分钟",
        "stars": 2,
        "rating": 8.5,
        "reviewCount": 3100,
        "verdict": "地道电车文化",
        "price": 330,
        "originalPrice": 430,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://www.wyndhamhotels.com/content/dam/property-images/en-us/ra/cn/others/hong-kong/52289/52289_exterior_view_1.jpg"
        ],
        "rooms": [
            {
                "id": "rgv-7301",
                "name": "盛景舒适客房",
                "size": "15 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 330,
                "origPrice": 430,
                "image": "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "盛景舒適客房",
                        "size": "15 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "盛景舒适客房",
                        "size": "15 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Grand View Comfort Room",
                        "size": "15  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港华美达盛景酒店 (Ramada Hong Kong Grand View)",
                "region": "北角",
                "district": "北角",
                "location": "港島北角春秧街88號",
                "distance": "北角春秧街商圈，北角地鐵站步行4分鐘",
                "verdict": "地道电车文化",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港华美达盛景酒店 (Ramada Hong Kong Grand View)",
                "region": "北角",
                "district": "北角",
                "location": "港岛北角春秧街88号",
                "distance": "北角春秧街商圈，北角地铁站步行4分钟",
                "verdict": "地道电车文化",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Ramada Hong Kong Grand View",
                "region": "North Point",
                "district": "North Point",
                "location": "88 Chun Yeung Street, North Point, Hong Kong",
                "distance": "In historic Chun Yeung Tramway street market, 4-min walk to North Point MTR",
                "verdict": "Heritage Tramway Culture",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 74,
        "name": "香港北角M1旅舍 (M1 Hotel North Point)",
        "enName": "M1 Hotel North Point",
        "region": "北角",
        "district": "北角",
        "location": "港岛北角春秧街112号",
        "distance": "港铁北角站A1出口步行2分钟，近北角商业中心",
        "stars": 2,
        "rating": 8.5,
        "reviewCount": 1950,
        "verdict": "实惠便捷",
        "price": 310,
        "originalPrice": 410,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/608753781.jpg?k=8228a0fc75a03a8609f9a11c4411d9aa78fe0b621736fda805236c829fe1d634&o="
        ],
        "rooms": [
            {
                "id": "m1-7401",
                "name": "标准单/双人间",
                "size": "12 平方米",
                "bed": "1张双人床",
                "bathroom": "标准淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 310,
                "origPrice": 410,
                "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準单/雙人间",
                        "size": "12 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "標準淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退訂"
                    },
                    "zh-CN": {
                        "name": "标准单/双人间",
                        "size": "12 平方米",
                        "bed": "1张双人床",
                        "bathroom": "标准淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "特惠房型不可退订"
                    },
                    "en": {
                        "name": "Standard Single/Double Room",
                        "size": "12  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Special promotional rate - Non-refundable"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港北角M1旅舍 (M1 Hotel North Point)",
                "region": "北角",
                "district": "北角",
                "location": "港島北角春秧街112號",
                "distance": "港铁北角站A1出口步行2分鐘，近北角商业中心",
                "verdict": "实惠便捷",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港北角M1旅舍 (M1 Hotel North Point)",
                "region": "北角",
                "district": "北角",
                "location": "港岛北角春秧街112号",
                "distance": "港铁北角站A1出口步行2分钟，近北角商业中心",
                "verdict": "实惠便捷",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "M1 Hotel North Point",
                "region": "North Point",
                "district": "North Point",
                "location": "112 Chun Yeung Street, North Point, Hong Kong",
                "distance": "2-min walk from North Point MTR Exit A1, near North Point commercial center",
                "verdict": "Affordable & Handy",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 75,
        "name": "香港华丽精品酒店 (Best Western Hotel Causeway Bay)",
        "enName": "Best Western Hotel Causeway Bay",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛铜锣湾坚拿道西妙冈街19号",
        "distance": "时代广场旁步行3分钟，铜锣湾核心商业区",
        "stars": 2,
        "rating": 8.5,
        "reviewCount": 3820,
        "verdict": "很棒体验",
        "price": 360,
        "originalPrice": 480,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": true,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49359509.jpg?k=fdc6dbf6fac110c36bb0395fb3d1c9c15a324d95ca16b1331947bd7b4f6aced9&o="
        ],
        "rooms": [
            {
                "id": "bw-7301",
                "name": "标准大床客房",
                "size": "15 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带标准浴缸)",
                "breakfast": "含简式早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 360,
                "origPrice": 480,
                "image": "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "標準大床客房",
                        "size": "15 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立衛浴 (帶標準浴缸)",
                        "breakfast": "含简式早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "标准大床客房",
                        "size": "15 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立卫浴 (带标准浴缸)",
                        "breakfast": "含简式早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Standard King Room",
                        "size": "15  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Breakfast for 2 Included",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港华丽精品酒店 (Best Western Hotel Causeway Bay)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島銅鑼灣堅拿道西妙岡街19號",
                "distance": "时代廣場旁步行3分鐘，銅鑼灣核心商业区",
                "verdict": "很棒体验",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港华丽精品酒店 (Best Western Hotel Causeway Bay)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛铜锣湾坚拿道西妙冈街19号",
                "distance": "时代广场旁步行3分钟，铜锣湾核心商业区",
                "verdict": "很棒体验",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Best Western Hotel Causeway Bay",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "19 Canal Road West, Causeway Bay, Hong Kong",
                "distance": "3-min walk from Times Square in the heart of Causeway Bay shopping quarter",
                "verdict": "Great Experience",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 76,
        "name": "香港苹果旅舍 (Apple Hotel Causeway Bay)",
        "enName": "Apple Hotel",
        "region": "铜锣湾",
        "district": "铜锣湾",
        "location": "港岛铜锣湾利园山道54号",
        "distance": "铜锣湾地铁站步行1分钟，希慎广场与时代广场核心",
        "stars": 2,
        "rating": 8.0,
        "reviewCount": 2340,
        "verdict": "极佳地段实惠",
        "price": 280,
        "originalPrice": 360,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAWUOpAAdcLEBA78C3FI-8TxL78uvL47HnPK-fzMcHUfj8SmhRmdznxM&s=10"
        ],
        "rooms": [
            {
                "id": "ah-7101",
                "name": "迷你独立双人房",
                "size": "10 平方米",
                "bed": "1张标准双人床",
                "bathroom": "独立卫浴 (带迷你浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 280,
                "origPrice": 360,
                "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "迷你獨立雙人房",
                        "size": "10 平方米",
                        "bed": "1張標準雙人床",
                        "bathroom": "獨立衛浴 (帶迷你浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "迷你独立双人房",
                        "size": "10 平方米",
                        "bed": "1张标准双人床",
                        "bathroom": "独立卫浴 (带迷你浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Mini Private Double Room",
                        "size": "10  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港苹果旅舍 (Apple Hotel Causeway Bay)",
                "region": "銅鑼灣",
                "district": "銅鑼灣",
                "location": "港島銅鑼灣利園山道54號",
                "distance": "銅鑼灣地鐵站步行1分鐘，希慎廣場与时代廣場核心",
                "verdict": "极佳地段实惠",
                "locationTags": [
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港苹果旅舍 (Apple Hotel Causeway Bay)",
                "region": "铜锣湾",
                "district": "铜锣湾",
                "location": "港岛铜锣湾利园山道54号",
                "distance": "铜锣湾地铁站步行1分钟，希慎广场与时代广场核心",
                "verdict": "极佳地段实惠",
                "locationTags": [
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Apple Hotel",
                "region": "Causeway Bay",
                "district": "Causeway Bay",
                "location": "54 Lee Garden Road, Causeway Bay, Hong Kong",
                "distance": "1-min walk from Causeway Bay MTR Station, adjoining Hysan Place and Times Square",
                "verdict": "Prime Spot Bargain",
                "locationTags": [
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 77,
        "name": "香港六国酒店 (Gloucester Luk Kwok)",
        "enName": "Gloucester Luk Kwok Hong Kong",
        "region": "维多利亚港",
        "district": "湾仔",
        "location": "港岛湾仔告士打道72号",
        "distance": "湾仔地铁站步行3分钟，临近会展中心展演大堂",
        "stars": 2,
        "rating": 8.0,
        "reviewCount": 2150,
        "verdict": "经典品味",
        "price": 460,
        "originalPrice": 590,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "演出场馆",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetoGQu7UuYEm-WUx9T9EiJyqpNJ8C4PoemGMWnhMRSoH3LiB6fCTwZwM&s=10"
        ],
        "rooms": [
            {
                "id": "lk-7701",
                "name": "海湾标准客房",
                "size": "22 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 460,
                "origPrice": 590,
                "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "海湾標準客房",
                        "size": "22 平方米",
                        "bed": "1張大床",
                        "bathroom": "獨立衛浴 (帶浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "海湾标准客房",
                        "size": "22 平方米",
                        "bed": "1张大床",
                        "bathroom": "独立卫浴 (带浴缸)",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Harbour Standard Room",
                        "size": "22  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with bathtub and shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港六国酒店 (Gloucester Luk Kwok)",
                "region": "維多利亞港",
                "district": "灣仔",
                "location": "港島灣仔告士打道72號",
                "distance": "灣仔地鐵站步行3分鐘，鄰近會展中心展演大堂",
                "verdict": "經典品味",
                "locationTags": [
                    "地鐵站",
                    "演出場館",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港六国酒店 (Gloucester Luk Kwok)",
                "region": "维多利亚港",
                "district": "湾仔",
                "location": "港岛湾仔告士打道72号",
                "distance": "湾仔地铁站步行3分钟，临近会展中心展演大堂",
                "verdict": "经典品味",
                "locationTags": [
                    "地铁站",
                    "演出场馆",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Gloucester Luk Kwok Hong Kong",
                "region": "Victoria Harbour",
                "district": "Wan Chai",
                "location": "72 Gloucester Road, Wan Chai, Hong Kong",
                "distance": "3-min walk from Wan Chai MTR Station, close to HKCEC Convention and Exhibition halls",
                "verdict": "Classic Taste",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 78,
        "name": "香港芬名海湾客栈 (The Fleming Harbour View)",
        "enName": "The Fleming Harbour View Inn",
        "region": "维多利亚港",
        "district": "湾仔",
        "location": "港岛湾仔菲林明道41号",
        "distance": "湾仔码头旁，近会展演艺大会堂与金紫荆广场",
        "stars": 2,
        "rating": 8.0,
        "reviewCount": 1820,
        "verdict": "维港渡轮怀旧风",
        "price": 450,
        "originalPrice": 580,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "地铁站",
            "演出场馆",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1077839.jpg"
        ],
        "rooms": [
            {
                "id": "fl-7801",
                "name": "渡轮风雅致单间",
                "size": "16 平方米",
                "bed": "1张标准双人床",
                "bathroom": "独立淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 450,
                "origPrice": 580,
                "image": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "渡轮风雅致单间",
                        "size": "16 平方米",
                        "bed": "1張標準雙人床",
                        "bathroom": "獨立淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "渡轮风雅致单间",
                        "size": "16 平方米",
                        "bed": "1张标准双人床",
                        "bathroom": "独立淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Ferry-Themed Elegant Room",
                        "size": "16  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港芬名海湾客栈 (The Fleming Harbour View)",
                "region": "維多利亞港",
                "district": "灣仔",
                "location": "港島灣仔菲林明道41號",
                "distance": "灣仔码头旁，近会展演藝大會堂与金紫荆廣場",
                "verdict": "維港渡轮怀旧风",
                "locationTags": [
                    "地鐵站",
                    "演出場館",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "香港芬名海湾客栈 (The Fleming Harbour View)",
                "region": "维多利亚港",
                "district": "湾仔",
                "location": "港岛湾仔菲林明道41号",
                "distance": "湾仔码头旁，近会展演艺大会堂与金紫荆广场",
                "verdict": "维港渡轮怀旧风",
                "locationTags": [
                    "地铁站",
                    "演出场馆",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "The Fleming Harbour View Inn",
                "region": "Victoria Harbour",
                "district": "Wan Chai",
                "location": "41 Fleming Road, Wan Chai, Hong Kong",
                "distance": "Near Wan Chai Star Ferry Pier, steps from HKCEC performance halls and Golden Bauhinia Square",
                "verdict": "Nostalgic Ferry Style",
                "locationTags": [
                    "MTR Station",
                    "Performance / Sports Venue",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    },
    {
        "id": 79,
        "name": "香港麻雀客栈 (The Mahjong Boutique Hostel)",
        "enName": "The Mahjong Boutique Hostel",
        "region": "启德体育园",
        "district": "土瓜湾",
        "location": "九龙土瓜湾北帝街10-16号",
        "distance": "土瓜湾站步行3分钟，紧邻启德体育园演艺主场馆",
        "stars": 2,
        "rating": 8.0,
        "reviewCount": 2150,
        "verdict": "超棒极佳",
        "price": 350,
        "originalPrice": 450,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": true,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "地铁站"
        ],
        "eco": "推行「零即弃塑胶旅宿」计划，全面提供不锈钢滤水瓶并设旧物改造厨房",
        "images": [
            "https://q-xx.bstatic.com/xdata/images/hotel/max500/47299613.jpg?k=a7d4e7cd79a20706454ef27922b1ddd22a6fc92fc1a76f4f6912a5be4eed3a97&o="
        ],
        "rooms": [
            {
                "id": "mj-6201",
                "name": "精品私人大床房",
                "size": "12 平方米",
                "bed": "1张双人床",
                "bathroom": "独立紧凑淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 350,
                "origPrice": 450,
                "image": "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "精品私人大床房",
                        "size": "12 平方米",
                        "bed": "1張雙人床",
                        "bathroom": "獨立紧凑淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "精品私人大床房",
                        "size": "12 平方米",
                        "bed": "1张双人床",
                        "bathroom": "独立紧凑淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Boutique Private King Room",
                        "size": "12  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "香港麻雀客栈 (The Mahjong Boutique Hostel)",
                "region": "啟德體育園",
                "district": "土瓜灣",
                "location": "九龍土瓜灣北帝街10-16號",
                "distance": "土瓜灣站步行3分鐘，緊鄰啟德體育園演藝主場館",
                "verdict": "超棒极佳",
                "locationTags": [
                    "演出場館",
                    "地鐵站"
                ],
                "eco": "推行「零即弃塑胶旅宿」計劃，全面提供不銹鋼濾水瓶并設舊物改造廚房"
            },
            "zh-CN": {
                "name": "香港麻雀客栈 (The Mahjong Boutique Hostel)",
                "region": "启德体育园",
                "district": "土瓜湾",
                "location": "九龙土瓜湾北帝街10-16号",
                "distance": "土瓜湾站步行3分钟，紧邻启德体育园演艺主场馆",
                "verdict": "超棒极佳",
                "locationTags": [
                    "演出场馆",
                    "地铁站"
                ],
                "eco": "推行「零即弃塑胶旅宿」计划，全面提供不锈钢滤水瓶并设旧物改造厨房"
            },
            "en": {
                "name": "The Mahjong Boutique Hostel",
                "region": "Kai Tak Sports Park",
                "district": "To Kwa Wan",
                "location": "10-16 Pak Tai Street, To Kwa Wan, Kowloon",
                "distance": "3-min walk from To Kwa Wan MTR Station, adjacent to Kai Tak Sports Park Main Arena",
                "verdict": "Exceptional",
                "locationTags": [
                    "Performance / Sports Venue",
                    "MTR Station"
                ],
                "eco": "Champions the 'Zero Single-Use Plastic' lodging campaign, providing stainless-steel filtered bottles and an upcycled community kitchen"
            }
        }
    },
    {
        "id": 80,
        "name": "启德海湾青年驿站 (Kai Tak Bay Youth Hostel)",
        "enName": "Kai Tak Bay Youth Hostel",
        "region": "启德体育园",
        "district": "九龙城",
        "location": "九龙启德沐宁街10号",
        "distance": "启德站步行4分钟，直达启德体育园主场馆与零售馆",
        "stars": 2,
        "rating": 8.0,
        "reviewCount": 1640,
        "verdict": "体育盛事首选",
        "price": 330,
        "originalPrice": 430,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "hasAirportShuttle": false,
        "hasFreeParking": false,
        "locationTags": [
            "演出场馆",
            "地铁站",
            "商业区"
        ],
        "eco": "",
        "images": [
            "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2024/10/23/2d432780-82b1-40a9-9969-bb3323eb10df_5f713f54.jpg"
        ],
        "rooms": [
            {
                "id": "ktb-8001",
                "name": "体育园单人/双人房",
                "size": "12 平方米",
                "bed": "1张大床",
                "bathroom": "标准淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 330,
                "origPrice": 430,
                "image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80",
                "i18n": {
                    "zh-TW": {
                        "name": "體育園单人/雙人房",
                        "size": "12 平方米",
                        "bed": "1張大床",
                        "bathroom": "標準淋浴間",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小時可免費取消"
                    },
                    "zh-CN": {
                        "name": "体育园单人/双人房",
                        "size": "12 平方米",
                        "bed": "1张大床",
                        "bathroom": "标准淋浴间",
                        "breakfast": "不含早餐",
                        "cancel": "入住前24小时可免费取消"
                    },
                    "en": {
                        "name": "Sports Park Single/Double Room",
                        "size": "12  sqm",
                        "bed": "1 Queen Bed",
                        "bathroom": "Private bathroom with walk-in shower",
                        "breakfast": "Room only (Breakfast not included)",
                        "cancel": "Free cancellation up to 24 hours before check-in"
                    }
                }
            }
        ],
        "i18n": {
            "zh-TW": {
                "name": "启德海湾青年驿站 (Kai Tak Bay Youth Hostel)",
                "region": "啟德體育園",
                "district": "九龍城",
                "location": "九龍启德沐寧街10號",
                "distance": "启德站步行4分鐘，直达啟德體育園主場館与零售馆",
                "verdict": "体育盛事首选",
                "locationTags": [
                    "演出場館",
                    "地鐵站",
                    "商業區"
                ],
                "eco": ""
            },
            "zh-CN": {
                "name": "启德海湾青年驿站 (Kai Tak Bay Youth Hostel)",
                "region": "启德体育园",
                "district": "九龙城",
                "location": "九龙启德沐宁街10号",
                "distance": "启德站步行4分钟，直达启德体育园主场馆与零售馆",
                "verdict": "体育盛事首选",
                "locationTags": [
                    "演出场馆",
                    "地铁站",
                    "商业区"
                ],
                "eco": ""
            },
            "en": {
                "name": "Kai Tak Bay Youth Hostel",
                "region": "Kai Tak Sports Park",
                "district": "Kowloon City",
                "location": "10 Muk Ning Street, Kai Tak, Kowloon",
                "distance": "4-min walk from Kai Tak MTR Station, direct covered walkway to Kai Tak Sports Park Main Stadium and Mall",
                "verdict": "Sports Event Choice",
                "locationTags": [
                    "Performance / Sports Venue",
                    "MTR Station",
                    "Commercial District"
                ],
                "eco": ""
            }
        }
    }
];

/**
 * 通用多語言欄位讀取助手 (保證向後兼容性)
 */
function getHotelI18n(hotel, field, lang) {
    if (!hotel) return "";
    const currentLang = lang || (window.i18n ? window.i18n.currentLang : localStorage.getItem("tripstay_lang")) || "zh-TW";
    if (hotel.i18n && hotel.i18n[currentLang] && hotel.i18n[currentLang][field] !== undefined) {
        return hotel.i18n[currentLang][field];
    }
    if (currentLang === "en" && field === "name" && hotel.enName) {
        return hotel.enName;
    }
    return hotel[field] || "";
}

function getRoomI18n(room, field, lang) {
    if (!room) return "";
    const currentLang = lang || (window.i18n ? window.i18n.currentLang : localStorage.getItem("tripstay_lang")) || "zh-TW";
    if (room.i18n && room.i18n[currentLang] && room.i18n[currentLang][field] !== undefined) {
        return room.i18n[currentLang][field];
    }
    return room[field] || "";
}