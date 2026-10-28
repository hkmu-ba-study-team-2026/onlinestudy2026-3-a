// 香港 60 间酒店完整平衡数据集
// 星级分布：5星 (20间: ID 1-19, 42) | 4星 (20间: ID 20-39) | 3星 (20间: ID 40-41, 43-60)
// 设施平衡：每项设施 (hasBreakfast, hasPrivateBath, hasPool, hasCancel, hasGym) 均严格控制在 30 间 (50%)
// 环保认证：新增 "eco" 字段，收录 24 间真实环保奖项与可持续发展纪录 (每星级各 8 间)
const hotelsData = [
    // =========================================================================
    // ⭐⭐⭐⭐⭐ 5 星级酒店 (共 20 间：ID 1 ~ 19 及 ID 42)
    // =========================================================================
    {
        "id": 1,
        "name": "香港唯港荟酒店 (Hotel ICON)",
        "enName": "Hotel ICON Hong Kong",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀东部科学馆道17号",
        "distance": "距离尖东站步行约4分钟，临近维港海滨",
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
        "eco": "获颁国际 Green Key 环保钥匙认证，配备 ORCA 厨余有氧分解系统、垂直绿化植物墙及 100% 纯电动酒店穿梭巴士",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_ICON_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "icon-101",
                "name": "ICON 36 经典城市客房",
                "size": "36 平方米",
                "bed": "1张特大双人床 (King Bed)",
                "bathroom": "独立干湿分离卫浴 (带深浸浴缸)",
                "breakfast": "含双人精致自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1480,
                "origPrice": 1880,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_ICON_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 2,
        "name": "香港瑰丽酒店 (Rosewood Hong Kong)",
        "enName": "Rosewood Hong Kong",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀梳士巴利道18号 Victoria Dockside",
        "distance": "坐落尖沙咀海滨核心，直通K11 MUSEA",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 2680,
        "verdict": "传奇顶奢",
        "price": 4680,
        "originalPrice": 5880,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "荣获 LEED Gold 金级绿色建筑认证，馆内全面采用 Nordaq 现场过滤玻璃瓶装水系统并淘汰一次性塑胶制品",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Rosewood_Hong_Kong_Lobby_The_Skin_Speaks_A_Language_Not_Its_Own_2019.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "rw-201",
                "name": "九龙景观尊贵大理石客房",
                "size": "53 平方米",
                "bed": "1张特大双人床 (Custom King)",
                "bathroom": "独立双台盆奢华大理石卫浴 (带独立浸泡浴缸)",
                "breakfast": "含 Holt's Cafe 奢华半自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 4680,
                "origPrice": 5880,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosewood_Hong_Kong_Lobby_The_Skin_Speaks_A_Language_Not_Its_Own_2019.jpg?width=600"
            }
        ]
    },
    {
        "id": 3,
        "name": "香港置地文华东方酒店 (The Landmark Mandarin Oriental)",
        "enName": "The Landmark Mandarin Oriental",
        "region": "港岛",
        "district": "中环",
        "location": "港岛中环皇后大道中15号置地广场",
        "distance": "中环核心金融区，直通中环地铁站",
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
        "eco": "荣获 EarthCheck 白金级认证 (Platinum Certified)，旗下米其林三星餐厅 Amber 推行全素食及低碳排永续高级餐饮",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarin_Oriental_Hong_Kong_1.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "lmo-301",
                "name": "L600 尊贵客房",
                "size": "56 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立超大圆形浸泡浴缸及干湿分离卫浴",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 4500,
                "origPrice": 5600,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarin_Oriental_Hong_Kong_1.jpg?width=600"
            }
        ]
    },
    {
        "id": 4,
        "name": "香港四季酒店 (Four Seasons Hotel Hong Kong)",
        "enName": "Four Seasons Hotel Hong Kong",
        "region": "港岛",
        "district": "中环",
        "location": "港岛中环金融街8号国际金融中心",
        "distance": "直通IFC商场与机场快线香港站",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 3450,
        "verdict": "卓越尊贵",
        "price": 4800,
        "originalPrice": 6000,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Four_Seasons_Hotel_view.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "fs-401",
                "name": "全新翻新山景豪华客房",
                "size": "45 平方米",
                "bed": "1张特大双人床",
                "bathroom": "现代步入式淋浴间 (无浴缸)",
                "breakfast": "含双人四季丰盛自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 4800,
                "origPrice": 6000,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Four_Seasons_Hotel_view.jpg?width=600"
            }
        ]
    },
    {
        "id": 5,
        "name": "香港半岛酒店 (The Peninsula Hong Kong)",
        "enName": "The Peninsula Hong Kong",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀梳士巴利道22号",
        "distance": "百年传奇地标，直面维多利亚港",
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
        "eco": "推行「奢华有道」(Sustainable Luxury) 愿景，客房备品采用 99.9% 无石油塑料可回收铝瓶，并获 BREEAM 绿色建筑认证",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/The_Peninsula_Hong_Kong.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "pen-501",
                "name": "豪华特大床客房",
                "size": "43 平方米",
                "bed": "1张豪华特大床",
                "bathroom": "独立大理石卫浴 (配水疗浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 4980,
                "origPrice": 6280,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Peninsula_Hong_Kong.jpg?width=600"
            }
        ]
    },
    {
        "id": 6,
        "name": "香港康得思酒店 (Cordis, Hong Kong)",
        "enName": "Cordis, Hong Kong",
        "region": "九龙",
        "district": "旺角",
        "location": "九龙旺角上海街555号",
        "distance": "直通朗豪坊商场及旺角地铁站",
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
        "eco": "连续 15 年荣获 EarthCheck Master 大师级最高认证、ISO 14001 环境管理认证及香港环境卓越大奖银奖",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/A_View_of_The_Cordis_Hong_Kong.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "cd-601",
                "name": "高级城市客房",
                "size": "32 平方米",
                "bed": "1张大床 或 2张单人床",
                "bathroom": "独立大理石卫浴 (配浴缸与淋浴)",
                "breakfast": "含 The Place 双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1480,
                "origPrice": 1880,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/A_View_of_The_Cordis_Hong_Kong.jpg?width=600"
            }
        ]
    },
    {
        "id": 7,
        "name": "香港美利酒店 (The Murray, Hong Kong)",
        "enName": "The Murray, Hong Kong, a Niccolo Hotel",
        "region": "港岛",
        "district": "中环",
        "location": "港岛中环红棉路22号",
        "distance": "近山顶缆车站与香港公园，历史建筑改造",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 2760,
        "verdict": "建筑保育典范",
        "price": 2650,
        "originalPrice": 3350,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "eco": "属于「保育中环」旗舰活化项目，保留原址百年古树节果决明，荣获 LEED 金级及绿建环评 BEAM Plus 认证",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/The_Murray_Lobby_2018.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "mur-701",
                "name": "N1 Deluxe 豪华客房",
                "size": "47 平方米",
                "bed": "1张特大床",
                "bathroom": "独立云石卫浴 (带浴缸)",
                "breakfast": "含双人半自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 2650,
                "origPrice": 3350,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Murray_Lobby_2018.jpg?width=600"
            }
        ]
    },
    {
        "id": 8,
        "name": "香港嘉里酒店 (Kerry Hotel Hong Kong)",
        "enName": "Kerry Hotel Hong Kong",
        "region": "九龙",
        "district": "红磡",
        "location": "九龙红磡湾红鸾道38号",
        "distance": "坐拥无遮挡红磡维港海滨，紧邻黄埔站",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 3340,
        "verdict": "城市度假首选",
        "price": 1880,
        "originalPrice": 2380,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "荣获 ISO 14001 环境管理认证，设有天台都市有机农圃与蜜蜂保育基地，自设水净化装瓶系统取代塑胶樽",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kerry_Hotel_Hong_Kong_Level_2_Grand_Ballroom_2017.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "kh-801",
                "name": "豪华城市景观客房",
                "size": "42 平方米",
                "bed": "1张特大床",
                "bathroom": "现代步入式淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1880,
                "origPrice": 2380,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kerry_Hotel_Hong_Kong_Level_2_Grand_Ballroom_2017.jpg?width=600"
            }
        ]
    },
    {
        "id": 9,
        "name": "香港丽思卡尔顿酒店 (The Ritz-Carlton Hong Kong)",
        "enName": "The Ritz-Carlton Hong Kong",
        "region": "九龙",
        "district": "西九龙",
        "location": "九龙柯士甸道西1号环球贸易广场102-118层",
        "distance": "全球最高酒店之一，九龙站ICC直达",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 4120,
        "verdict": "云端奢享",
        "price": 4100,
        "originalPrice": 5200,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/The_Ritz-Carlton_Hong_Kong_Level_103_Lobby.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "rc-901",
                "name": "豪华云端维港客房",
                "size": "50 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立全景大理石卫浴 (配浸泡浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 4100,
                "origPrice": 5200,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Ritz-Carlton_Hong_Kong_Level_103_Lobby.jpg?width=600"
            }
        ]
    },
    {
        "id": 10,
        "name": "香港JW万豪酒店 (JW Marriott Hotel Hong Kong)",
        "enName": "JW Marriott Hotel Hong Kong",
        "region": "港岛",
        "district": "金钟",
        "location": "港岛金钟道88号太古广场",
        "distance": "直通金钟四线换乘核心枢纽地铁站",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 3890,
        "verdict": "豪华商务",
        "price": 2250,
        "originalPrice": 2850,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_%E9%87%91%E9%90%98_Admiralty_%E6%AD%A3%E7%BE%A9%E9%81%93_Justic_Drive_%E9%A6%99%E6%B8%AFJW%E8%90%AC%E8%B1%AA%E9%85%92%E5%BA%97_JW_Marriott_Hotel_Hong_Kong_lobby_interior_November_2022_Px3_01.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "jw-1001",
                "name": "精选豪华大床房",
                "size": "33 平方米",
                "bed": "1张特大床",
                "bathroom": "标准干湿分离淋浴间",
                "breakfast": "含双人JW咖啡室国际自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 2250,
                "origPrice": 2850,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_%E9%87%91%E9%90%98_Admiralty_%E6%AD%A3%E7%BE%A9%E9%81%93_Justic_Drive_%E9%A6%99%E6%B8%AFJW%E8%90%AC%E8%B1%AA%E9%85%92%E5%BA%97_JW_Marriott_Hotel_Hong_Kong_lobby_interior_November_2022_Px3_01.jpg?width=600"
            }
        ]
    },
    {
        "id": 11,
        "name": "香港九龙香格里拉大酒店 (Kowloon Shangri-La)",
        "enName": "Kowloon Shangri-La",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀东部么地道64号",
        "distance": "近尖东站，直面维多利亚港夜景",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 3780,
        "verdict": "经典典雅",
        "price": 1750,
        "originalPrice": 2250,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kowloon_Shangri-La_Hotel_lobby.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "ksl-1101",
                "name": "豪华阁城市客房",
                "size": "42 平方米",
                "bed": "1张特大床",
                "bathroom": "独立豪华大理石浴缸卫浴",
                "breakfast": "含双人 Cafe Kool 自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1750,
                "origPrice": 2250,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kowloon_Shangri-La_Hotel_lobby.jpg?width=600"
            }
        ]
    },
    {
        "id": 12,
        "name": "香港朗廷酒店 (The Langham Hong Kong)",
        "enName": "The Langham Hong Kong",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀北京道8号",
        "distance": "紧邻海港城与广东道奢品街",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 4100,
        "verdict": "欧式典雅",
        "price": 1780,
        "originalPrice": 2280,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Langham_Hotel,_Hong_Kong.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "lh-1201",
                "name": "高级内园景客房",
                "size": "32 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立大理石浴室 (配浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1780,
                "origPrice": 2280,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Langham_Hotel,_Hong_Kong.jpg?width=600"
            }
        ]
    },
    {
        "id": 13,
        "name": "香港沙田凯悦酒店 (Hyatt Regency Hong Kong, Sha Tin)",
        "enName": "Hyatt Regency Hong Kong, Sha Tin",
        "region": "新界",
        "district": "沙田",
        "location": "新界沙田泽祥街18号",
        "distance": "临近港铁大学站，依山傍海绿意度假风",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 2800,
        "verdict": "山海度假",
        "price": 1180,
        "originalPrice": 1480,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hyatt_Regency_Hong_Kong_Shatin_Lobby.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "hrs-1301",
                "name": "九肚山景标准客房",
                "size": "38 平方米",
                "bed": "1张特大床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人咖啡厅自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1180,
                "origPrice": 1480,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyatt_Regency_Hong_Kong_Shatin_Lobby.jpg?width=600"
            }
        ]
    },
    {
        "id": 14,
        "name": "香港东涌世茂喜来登酒店 (Sheraton Hong Kong Tung Chung)",
        "enName": "Sheraton Hong Kong Tung Chung Hotel",
        "region": "新界",
        "district": "东涌",
        "location": "新界大屿山东涌怡东路9号",
        "distance": "近香港国际机场与港珠澳大桥，附免费穿梭巴士",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 3100,
        "verdict": "机场度假首选",
        "price": 1280,
        "originalPrice": 1650,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sheraton_Hong_Kong_Tung_Chung_Hotel_25-11-2023(1).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "stc-1401",
                "name": "豪华山景客房",
                "size": "35 平方米",
                "bed": "1张特大双人床",
                "bathroom": "现代步入式淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1280,
                "origPrice": 1650,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sheraton_Hong_Kong_Tung_Chung_Hotel_25-11-2023(1).jpg?width=600"
            }
        ]
    },
    {
        "id": 15,
        "name": "香港喜来登酒店 (Sheraton Hong Kong Hotel & Towers)",
        "enName": "Sheraton Hong Kong Hotel & Towers",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀弥敦道20号",
        "distance": "尖沙咀站旁，正对维港及星光大道",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 3650,
        "verdict": "维港核心",
        "price": 1520,
        "originalPrice": 1950,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sheraton_Hong_Kong_Hotel_%26_Towers_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "shk-1501",
                "name": "经典豪华客房",
                "size": "30 平方米",
                "bed": "1张特大床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1520,
                "origPrice": 1950,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sheraton_Hong_Kong_Hotel_%26_Towers_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 16,
        "name": "香港帝京酒店 (Royal Plaza Hotel)",
        "enName": "Royal Plaza Hotel",
        "region": "九龙",
        "district": "旺角",
        "location": "九龙旺角太子道西193号",
        "distance": "直通新世纪广场商场及旺角东火车站",
        "stars": 5,
        "rating": 9.0,
        "reviewCount": 4980,
        "verdict": "亲子宽敞",
        "price": 1150,
        "originalPrice": 1480,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_RoyalPlazaHotel.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "rpl-1601",
                "name": "尊贵双大床家庭房",
                "size": "33 平方米",
                "bed": "2张宽敞大床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 1150,
                "origPrice": 1480,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_RoyalPlazaHotel.jpg?width=600"
            }
        ]
    },
    {
        "id": 17,
        "name": "香港九龙海逸君绰酒店 (Harbour Grand Kowloon)",
        "enName": "Harbour Grand Kowloon",
        "region": "九龙",
        "district": "红磡",
        "location": "九龙红磡黄埔花园德丰街20号",
        "distance": "黄埔地铁站D2出口步行2分钟，顶楼透明泳池",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 3120,
        "verdict": "无敌海景",
        "price": 1220,
        "originalPrice": 1580,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Harbour_Grand_Kowloon_hotel.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "hgk-1701",
                "name": "城景塔楼客房",
                "size": "36 平方米",
                "bed": "1张双人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人 The Promenade 早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1220,
                "origPrice": 1580,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Harbour_Grand_Kowloon_hotel.jpg?width=600"
            }
        ]
    },
    {
        "id": 18,
        "name": "香港文华东方酒店 (Mandarin Oriental, Hong Kong)",
        "enName": "Mandarin Oriental, Hong Kong",
        "region": "港岛",
        "district": "中环",
        "location": "港岛中环干诺道中5号",
        "distance": "中环皇后像广场旁，传奇旗舰酒店",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 3290,
        "verdict": "殿堂传奇",
        "price": 4380,
        "originalPrice": 5500,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarin_Oriental_Hong_Kong.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "mohk-1801",
                "name": "皇后像广场景观客房",
                "size": "40 平方米",
                "bed": "1张特大床",
                "bathroom": "独立云石浴缸卫浴",
                "breakfast": "含快船廊双人早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 4380,
                "origPrice": 5500,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarin_Oriental_Hong_Kong.jpg?width=600"
            }
        ]
    },
    {
        "id": 19,
        "name": "香港荃湾西如心酒店 (Nina Hotel Tsuen Wan West)",
        "enName": "Nina Hotel Tsuen Wan West",
        "region": "新界",
        "district": "荃湾",
        "location": "新界荃湾杨屋道8号如心广场",
        "distance": "直通屯马线荃湾西站，坐拥蓝巴勒海峡景致",
        "stars": 5,
        "rating": 8.5,
        "reviewCount": 6120,
        "verdict": "高空海景",
        "price": 890,
        "originalPrice": 1150,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Nina_Hotel_Tsuen_Wan_West_Level_6_Ballroom_202009.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "nina-1901",
                "name": "高空城景大床房",
                "size": "35 平方米",
                "bed": "1张特大双人床",
                "bathroom": "干湿分离淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 890,
                "origPrice": 1150,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Nina_Hotel_Tsuen_Wan_West_Level_6_Ballroom_202009.jpg?width=600"
            }
        ]
    },

    // =========================================================================
    // ⭐⭐⭐⭐ 4 星级酒店 (共 20 间：ID 20 ~ 39)
    // =========================================================================
    {
        "id": 20,
        "name": "香港东隅酒店 (EAST Hong Kong)",
        "enName": "EAST Hong Kong",
        "region": "港岛",
        "district": "鲗鱼涌",
        "location": "港岛太古城太古城道29号",
        "distance": "直通太古城中心商场与太古站，现代轻奢风",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 2600,
        "verdict": "潮流设计",
        "price": 1280,
        "originalPrice": 1620,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "荣获 EarthCheck Silver 银级认证及 Food Made Good 三星可持续发展标准，累计回收逾 6,400 公斤生蚝壳复育珊瑚礁并通过 ORCA 分解 46,000 公斤厨余",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Courtyard_By_Marriott_Hong_Kong_2.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "east-2001",
                "name": "Urban View 城市精选房",
                "size": "28 平方米",
                "bed": "1张特大床",
                "bathroom": "现代步入式雨淋花洒淋浴间",
                "breakfast": "含 FEAST 双人活力早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1280,
                "origPrice": 1620,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Courtyard_By_Marriott_Hong_Kong_2.jpg?width=600"
            }
        ]
    },
    {
        "id": 21,
        "name": "香港旺角帝盛酒店 (Dorsett Mongkok, Hong Kong)",
        "enName": "Dorsett Mongkok, Hong Kong",
        "region": "九龙",
        "district": "旺角",
        "location": "九龙大角咀道88号",
        "distance": "步行至奥运站约5分钟，设免费穿梭巴士",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3420,
        "verdict": "绿色环保标杆",
        "price": 720,
        "originalPrice": 940,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "eco": "获颁 EarthCheck 铜级认证 (Bronze Certified)，推行 Dorsett EcoChoice+ 计划鼓励住客减少每日床单洗涤并在每层设立智能净水站",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Mongkok_(hotel),_Hong_Kong.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "dm-2101",
                "name": "舒适双人客房",
                "size": "20 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 720,
                "origPrice": 940,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Mongkok_(hotel),_Hong_Kong.JPG?width=600"
            }
        ]
    },
    {
        "id": 22,
        "name": "香港湾仔帝盛酒店 (Dorsett Wanchai, Hong Kong)",
        "enName": "Dorsett Wanchai, Hong Kong",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔皇后大道东387-397号",
        "distance": "正对跑马地马场，附铜锣湾及会展免费穿梭巴",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3180,
        "verdict": "马场景观",
        "price": 850,
        "originalPrice": 1100,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "eco": "获选国泰绿色旅游环保酒店及 EarthCheck 认证，全面淘汰一次性塑胶洗漱用品并采用 FSC 认证环保纸品",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Wanchai_Hong_Kong_Hotel_01.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "dw-2201",
                "name": "跑马地马场景观房",
                "size": "25 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 850,
                "origPrice": 1100,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Wanchai_Hong_Kong_Hotel_01.jpg?width=600"
            }
        ]
    },
    {
        "id": 23,
        "name": "香港逸东酒店 (Eaton HK)",
        "enName": "Eaton HK",
        "region": "九龙",
        "district": "佐敦",
        "location": "九龙弥敦道380号",
        "distance": "佐敦站步行4分钟，融合文化艺术与米其林美食",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 4150,
        "verdict": "文化永续先锋",
        "price": 980,
        "originalPrice": 1280,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "荣获 EarthCheck 白金级认证及绿建环评 BEAM Plus 金级，旗下米其林星级食府逸东轩推行零剩食及有机农场直送食材",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_YTM_%E4%BD%90%E6%95%A6_Jordan_%E5%BD%8C%E6%95%A6%E9%81%93_380_Nathan_Road_%E9%A6%99%E6%B8%AF%E9%80%B8%E6%9D%B1%E9%85%92%E5%BA%97_Eaton_Hotel_Hong_Kong_restaurant_September_2022_Px3_02.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "eaton-2301",
                "name": "逸・新 (Eaton Room) 客房",
                "size": "24 平方米",
                "bed": "1张特大床",
                "bathroom": "现代步入式淋浴间",
                "breakfast": "含普庆餐厅 (The Astor) 双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 980,
                "origPrice": 1280,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_YTM_%E4%BD%90%E6%95%A6_Jordan_%E5%BD%8C%E6%95%A6%E9%81%93_380_Nathan_Road_%E9%A6%99%E6%B8%AF%E9%80%B8%E6%9D%B1%E9%85%92%E5%BA%97_Eaton_Hotel_Hong_Kong_restaurant_September_2022_Px3_02.jpg?width=600"
            }
        ]
    },
    {
        "id": 24,
        "name": "香港沙田万怡酒店 (Courtyard by Marriott Sha Tin)",
        "enName": "Courtyard by Marriott Hong Kong Sha Tin",
        "region": "新界",
        "district": "沙田",
        "location": "新界沙田安平街1号",
        "distance": "城门河畔，临近石门站，性价比极高",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 3100,
        "verdict": "河畔商务",
        "price": 820,
        "originalPrice": 1080,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "获香港环保卓越计划嘉许及万豪 Serve 360 可持续发展认证，全面采用大容量环保补充装洗护备品及智能变频节能空调",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Courtyard_by_Marriott_Hong_Kong_Sha_Tin_201307.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "cym-2401",
                "name": "城门河景舒适客房",
                "size": "27 平方米",
                "bed": "1张大床 或 2张单人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人 MoMo Cafe 自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 820,
                "origPrice": 1080,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Courtyard_by_Marriott_Hong_Kong_Sha_Tin_201307.jpg?width=600"
            }
        ]
    },
    {
        "id": 25,
        "name": "香港沙田帝都酒店 (Royal Park Hotel)",
        "enName": "Royal Park Hotel",
        "region": "新界",
        "district": "沙田",
        "location": "新界沙田白鹤汀街8号",
        "distance": "直通新城市广场大型购物中心与沙田站",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 3600,
        "verdict": "购物便捷",
        "price": 880,
        "originalPrice": 1150,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "eco": "荣获「香港绿色机构」认证及环境局户外灯光约章铂金奖，积极推行厨余回收转化及节水淋浴改造",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Park_Hotel_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "rp-2501",
                "name": "标准城景双人房",
                "size": "30 平方米",
                "bed": "1张大床 或 2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 880,
                "origPrice": 1150,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Park_Hotel_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 26,
        "name": "香港百乐酒店 (Park Hotel Hong Kong)",
        "enName": "Park Hotel Hong Kong",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀漆咸道南61-65号",
        "distance": "尖沙咀核心区，周边餐饮购物密集",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3300,
        "verdict": "宽敞舒适",
        "price": 790,
        "originalPrice": 1020,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "推行「绿色住宿计划」，全馆客房安装直饮水过滤系统，每年减少超过 20 万个即弃塑胶水樽",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Park_Hotel_Hong_Kong.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "ph-2601",
                "name": "高级城市双床房",
                "size": "28 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 790,
                "origPrice": 1020,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Park_Hotel_Hong_Kong.JPG?width=600"
            }
        ]
    },
    {
        "id": 27,
        "name": "香港九龙东智选假日酒店 (Holiday Inn Express Kowloon East)",
        "enName": "Holiday Inn Express Hong Kong Kowloon East",
        "region": "新界",
        "district": "将军澳",
        "location": "新界将军澳唐德街3号",
        "distance": "将军澳地铁站C出口直达，毗邻PopCorn商场",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2480,
        "verdict": "低碳智选",
        "price": 740,
        "originalPrice": 960,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "eco": "通过洲际酒店集团 IHG Green Engage 绿色环保系统三级认证，设有空中绿化花园及太阳能热水辅助系统",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Holiday_Inn_Express_Hong_Kong_Kowloon_East_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "hie-2701",
                "name": "标准智选双床房",
                "size": "22 平方米",
                "bed": "2张单人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人智选活力早餐",
                "cancel": "特惠房型不可退订",
                "price": 740,
                "origPrice": 960,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Holiday_Inn_Express_Hong_Kong_Kowloon_East_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 28,
        "name": "香港诺富特世纪酒店 (Novotel Century Hong Kong)",
        "enName": "Novotel Century Hong Kong",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔谢斐道238号",
        "distance": "湾仔美食区中心，步行至会展中心约8分钟",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2900,
        "verdict": "法式连锁",
        "price": 860,
        "originalPrice": 1120,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Novotel_Century_Hong_Kong_Hotel.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "nc-2801",
                "name": "高级标准双人房",
                "size": "23 平方米",
                "bed": "1张标准双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含 Le Cafe 双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 860,
                "origPrice": 1120,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Novotel_Century_Hong_Kong_Hotel.jpg?width=600"
            }
        ]
    },
    {
        "id": 29,
        "name": "香港六国酒店 (Gloucester Luk Kwok Hong Kong)",
        "enName": "Gloucester Luk Kwok Hong Kong",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔告士打道72号",
        "distance": "湾仔地铁站步行3分钟，历史传承名店",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 2150,
        "verdict": "经典品味",
        "price": 1050,
        "originalPrice": 1350,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Luk_Kwok_Hotel_Lobby_2020.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "lk-2901",
                "name": "高级行政大床房",
                "size": "26 平方米",
                "bed": "1张大床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1050,
                "origPrice": 1350,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Luk_Kwok_Hotel_Lobby_2020.jpg?width=600"
            }
        ]
    },
    {
        "id": 30,
        "name": "香港铜锣湾维景酒店 (Metropark Hotel Causeway Bay)",
        "enName": "Metropark Hotel Causeway Bay",
        "region": "港岛",
        "district": "铜锣湾",
        "location": "港岛铜锣湾道148号",
        "distance": "天后地铁站步行2分钟，顶楼海景泳池",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2380,
        "verdict": "维园景观",
        "price": 780,
        "originalPrice": 990,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Tai_Hang_%E9%8A%85%E9%91%BC%E7%81%A3%E7%B6%AD%E6%99%AF%E9%85%92%E5%BA%97_Metropark_Hotel_Causeway_Bay_02_Tung_Lo_Wan_Road.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "mpcb-3001",
                "name": "高级维园景客房",
                "size": "25 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 780,
                "origPrice": 990,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Tai_Hang_%E9%8A%85%E9%91%BC%E7%81%A3%E7%B6%AD%E6%99%AF%E9%85%92%E5%BA%97_Metropark_Hotel_Causeway_Bay_02_Tung_Lo_Wan_Road.JPG?width=600"
            }
        ]
    },
    {
        "id": 31,
        "name": "香港湾仔皇悦酒店 (Empire Hotel Hong Kong - Wan Chai)",
        "enName": "Empire Hotel Hong Kong - Wan Chai",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔轩尼诗道33号",
        "distance": "毗邻湾仔及金钟地铁站",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 2640,
        "verdict": "商旅便捷",
        "price": 710,
        "originalPrice": 920,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Empire_Hotel_Hong_Kong.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "ehw-3101",
                "name": "标准城市客房",
                "size": "22 平方米",
                "bed": "1张大床",
                "bathroom": "标准淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 710,
                "origPrice": 920,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Empire_Hotel_Hong_Kong.JPG?width=600"
            }
        ]
    },
    {
        "id": 32,
        "name": "香港九龙酒店 (The Kowloon Hotel)",
        "enName": "The Kowloon Hotel",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀弥敦道19-21号",
        "distance": "直通尖沙咀地铁站L4出口，半岛酒店正后方",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 4890,
        "verdict": "黄金地段",
        "price": 820,
        "originalPrice": 1060,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/KowloonHotel_20070509.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "kh-3201",
                "name": "高级双床客房",
                "size": "21 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含倚窗阁双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 820,
                "origPrice": 1060,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/KowloonHotel_20070509.jpg?width=600"
            }
        ]
    },
    {
        "id": 33,
        "name": "香港悦来酒店 (Panda Hotel)",
        "enName": "Panda Hotel Hong Kong",
        "region": "新界",
        "district": "荃湾",
        "location": "新界荃湾荃华街3号",
        "distance": "近大窝口及荃湾站，下设大型购物商场",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 3950,
        "verdict": "高性价比",
        "price": 590,
        "originalPrice": 780,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Panda_Hotel,_Hong_Kong.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "panda-3301",
                "name": "标准双人客房",
                "size": "25 平方米",
                "bed": "1张双人床 或 2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 590,
                "origPrice": 780,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Panda_Hotel,_Hong_Kong.jpg?width=600"
            }
        ]
    },
    {
        "id": 34,
        "name": "香港迪士尼好莱坞酒店 (Disney's Hollywood Hotel)",
        "enName": "Disney's Hollywood Hotel",
        "region": "新界",
        "district": "大屿山",
        "location": "新界大屿山香港迪士尼乐园度假区",
        "distance": "直达迪士尼乐园免费穿梭巴，经典电影主题",
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
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Disney%27s_Hollywood_Hotel_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "dhh-3401",
                "name": "「米奇与好友」豪华客房",
                "size": "29 平方米",
                "bed": "2张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含艺彩厨双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 1680,
                "origPrice": 2150,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Disney%27s_Hollywood_Hotel_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 35,
        "name": "香港沙田丽豪酒店 (Regal Riverside Hotel)",
        "enName": "Regal Riverside Hotel",
        "region": "新界",
        "district": "沙田",
        "location": "新界沙田大涌桥路34-36号",
        "distance": "城门河畔，邻近沙田围地铁站",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 3760,
        "verdict": "河景休闲",
        "price": 620,
        "originalPrice": 810,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Regal_Riverside_Hotel_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "rrh-3501",
                "name": "河景标准双床房",
                "size": "24 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 620,
                "origPrice": 810,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Regal_Riverside_Hotel_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 36,
        "name": "香港港岛万怡酒店 (Courtyard by Marriott Hong Kong)",
        "enName": "Courtyard by Marriott Hong Kong",
        "region": "港岛",
        "district": "西营盘",
        "location": "港岛西营盘干诺道西167号",
        "distance": "西营盘地铁站步行4分钟，饱览维港海景",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2290,
        "verdict": "海景商旅",
        "price": 960,
        "originalPrice": 1240,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Courtyard_By_Marriott_Hong_Kong_2.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "cymhk-3601",
                "name": "高级海景大床房",
                "size": "25 平方米",
                "bed": "1张大床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人 MoMo Cafe 早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 960,
                "origPrice": 1240,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Courtyard_By_Marriott_Hong_Kong_2.jpg?width=600"
            }
        ]
    },
    {
        "id": 37,
        "name": "香港芬名酒店 (The Fleming Hong Kong)",
        "enName": "The Fleming Boutique Hotel",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔菲林明道41号",
        "distance": "湾仔地铁站步行3分钟，经典渡轮复古设计",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 1820,
        "verdict": "复古潮流精品",
        "price": 1180,
        "originalPrice": 1480,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Wanchai_Hong_Kong_Hotel_02.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "fl-3701",
                "name": "雅致小号双人房",
                "size": "22 平方米",
                "bed": "1张标准双人床",
                "bathroom": "复古黄铜雨淋花洒淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1180,
                "origPrice": 1480,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Wanchai_Hong_Kong_Hotel_02.jpg?width=600"
            }
        ]
    },
    {
        "id": 38,
        "name": "香港中环荷李活道木的地酒店 (Madera Hollywood)",
        "enName": "Madera Hollywood",
        "region": "港岛",
        "district": "中环",
        "location": "港岛中环荷李活道53-55号",
        "distance": "中环SoHo苏豪区，好莱坞复古精品设计",
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
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Empire_Hotel_Hong_Kong_(full_blue_sky).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "mh-3801",
                "name": "好莱坞经典一房套房",
                "size": "54 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立奢华浴缸与干湿分离浴室",
                "breakfast": "含双人欧陆早餐",
                "cancel": "特惠房型不可退订",
                "price": 1580,
                "origPrice": 1980,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Empire_Hotel_Hong_Kong_(full_blue_sky).jpg?width=600"
            }
        ]
    },
    {
        "id": 39,
        "name": "香港荃湾帝盛酒店 (Dorsett Tsuen Wan)",
        "enName": "Dorsett Tsuen Wan, Hong Kong",
        "region": "新界",
        "district": "荃湾",
        "location": "新界葵涌健全街28号",
        "distance": "距离港铁大窝口站步行约6分钟",
        "stars": 4,
        "rating": 8.0,
        "reviewCount": 2750,
        "verdict": "超值四星",
        "price": 620,
        "originalPrice": 800,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Holiday_Inn_Express_Hong_Kong-Kowloon_East.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "dtw-3901",
                "name": "帝盛舒适双人房",
                "size": "22 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 620,
                "origPrice": 800,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Holiday_Inn_Express_Hong_Kong-Kowloon_East.jpg?width=600"
            }
        ]
    },

    // =========================================================================
    // ⭐⭐⭐ 3 星级酒店 (前 2 间：ID 40, 41)
    // =========================================================================
    {
        "id": 40,
        "name": "香港宜必思中上环酒店 (ibis Hong Kong Central & Sheung Wan)",
        "enName": "ibis Hong Kong Central & Sheung Wan",
        "region": "港岛",
        "district": "上环",
        "location": "港岛上环德辅道西28号",
        "distance": "上环码头及电车总站旁，高层开阔海景",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 4600,
        "verdict": "超高性价比",
        "price": 580,
        "originalPrice": 750,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "荣获国际 Green Key 环保钥匙认证，落实雅高集团 Planet 21 零塑胶承诺及 100% 认证环保洗护备品",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_ibis_Hong_Kong_Central_and_Sheung_Wan,_Hong_Kong_(Unsplash).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "ibis-4001",
                "name": "标准城景大床房",
                "size": "17 平方米",
                "bed": "1张标准大床",
                "bathroom": "紧凑型模块化淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 580,
                "origPrice": 750,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_ibis_Hong_Kong_Central_and_Sheung_Wan,_Hong_Kong_(Unsplash).jpg?width=600"
            }
        ]
    },
    {
        "id": 41,
        "name": "香港宜必思北角酒店 (ibis Hong Kong North Point)",
        "enName": "ibis Hong Kong North Point",
        "region": "港岛",
        "district": "北角",
        "location": "港岛北角渣华道138号",
        "distance": "北角地铁站A1出口步行1分钟，临近春秧街",
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
        "eco": "荣获 Green Key 国际生态标签认证，推行客房节能温控与无纸化电子入住登记",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_North_Point_%E5%AE%9C%E5%BF%85%E6%80%9D%E4%B8%96%E7%B4%80%E8%BB%92_Hotel_Ibis_%E5%8C%97%E8%A7%92%E7%A2%BC%E9%A0%AD%E9%9C%B2%E5%A4%A9%E5%81%9C%E8%BB%8A%E5%A0%B4_Outdoor_carpark.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "ibnp-4101",
                "name": "精选海景双床房",
                "size": "16 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人轻食自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 480,
                "origPrice": 620,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_North_Point_%E5%AE%9C%E5%BF%85%E6%80%9D%E4%B8%96%E7%B4%80%E8%BB%92_Hotel_Ibis_%E5%8C%97%E8%A7%92%E7%A2%BC%E9%A0%AD%E9%9C%B2%E5%A4%A9%E5%81%9C%E8%BB%8A%E5%A0%B4_Outdoor_carpark.JPG?width=600"
            }
        ]
    },

    // =========================================================================
    // ⭐⭐⭐⭐⭐ 置顶推荐 5 星级酒店 (ID: 42，第 20 间五星级酒店)
    // =========================================================================
    {
        "id": 42,
        "name": "香港维港朗廷汇酒店 (The Grand Harbourside Langham Hong Kong)",
        "enName": "The Grand Harbourside Langham Hong Kong",
        "region": "港岛",
        "district": "中环",
        "location": "港岛中环民耀街88号中环海滨综合体",
        "distance": "紧邻中环天星码头与摩天轮，直通IFC与中环站",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 1580,
        "verdict": "传奇云端奢华",
        "dealTag": "黑卡尊享礼遇",
        "price": 4980,
        "originalPrice": 6280,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "荣获 EarthCheck 金级认证及 LEED 铂金级绿色建筑评级，全馆实现 100% 零塑胶客房及智能再生能源热回收系统",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Four_Seasons_Hotel_view.jpg?width=800",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Rosewood_Hong_Kong_Lobby_The_Skin_Speaks_A_Language_Not_Its_Own_2019.jpg?width=600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The_Ritz-Carlton_Hong_Kong_Level_103_Lobby.jpg?width=600"
        ],
        "rooms": [
            {
                "id": "ghl-4201",
                "name": "天际尊尚维港全景客房 (Grand Skyline Harbour Room)",
                "size": "58 平方米",
                "bed": "1张特大双人床 (Custom King Bed)",
                "bathroom": "独立进口白玛瑙奢华水疗卫浴 (配落地窗景双人浴缸与智能淋浴系统)",
                "breakfast": "含双人米其林星厨定制点单式奢华早餐",
                "cancel": "入住前24小时内可免费取消",
                "price": 4980,
                "origPrice": 6280,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosewood_Hong_Kong_Lobby_The_Skin_Speaks_A_Language_Not_Its_Own_2019.jpg?width=600"
            },
            {
                "id": "ghl-4202",
                "name": "维港朗廷汇府邸海景套房 (The Grand Harbourside Suite)",
                "size": "92 平方米",
                "bed": "独立起居会客厅 + 特大双人床",
                "bathroom": "独立双台盆大理石浴室 (带蒸汽水疗房与全景浸泡浴缸)",
                "breakfast": "含专属行政贵宾府邸全日香槟茶点与定制早餐",
                "cancel": "入住前48小时内可免费取消",
                "price": 7980,
                "origPrice": 9980,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Ritz-Carlton_Hong_Kong_Level_103_Lobby.jpg?width=600"
            }
        ]
    },

    // =========================================================================
    // ⭐⭐⭐ 3 星级酒店 (后 18 间：ID 43 ~ 60)
    // =========================================================================
    {
        "id": 43,
        "name": "香港富荟上环酒店 (iclub Sheung Wan Hotel)",
        "enName": "iclub Sheung Wan Hotel",
        "region": "港岛",
        "district": "上环",
        "location": "港岛上环文咸东街138号",
        "distance": "上环地铁站A2出口步行3分钟，时尚环保精品",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 2450,
        "verdict": "绿色智能精品",
        "price": 620,
        "originalPrice": 800,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "eco": "荣获 EarthCheck Silver 银级认证，为香港首批全面推行无烟、无纸化及碳中和住宿体验的绿色环保酒店",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Sheung_Wan_%E6%96%87%E5%92%B8%E8%A1%97_138_Bonham_Strand_Oct-2014_zr2_IClub_Hotel.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "icsw-4301",
                "name": "iPlus 尊荟大床房",
                "size": "18 平方米",
                "bed": "1张大床",
                "bathroom": "现代淋浴间",
                "breakfast": "含免费欧陆轻食早点",
                "cancel": "入住前24小时可免费取消",
                "price": 620,
                "origPrice": 800,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Sheung_Wan_%E6%96%87%E5%92%B8%E8%A1%97_138_Bonham_Strand_Oct-2014_zr2_IClub_Hotel.JPG?width=600"
            }
        ]
    },
    {
        "id": 44,
        "name": "香港富荟炮台山酒店 (iclub Fortress Hill Hotel)",
        "enName": "iclub Fortress Hill Hotel",
        "region": "港岛",
        "district": "炮台山",
        "location": "港岛北角麦连街18号",
        "distance": "炮台山地铁站步行4分钟，邻近铜锣湾商圈",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2180,
        "verdict": "环保轻巧",
        "price": 530,
        "originalPrice": 690,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "eco": "获颁 EarthCheck Silver 银级基准认证，安装高效节能照明及太阳能供电户外花园设施",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_iclub_Sheung_Wan_Hotel_%E5%AF%8C%E8%96%88%E4%B8%8A%E7%92%B0%E9%85%92%E5%BA%97_night_Feb-2015_LG2_lift_lobby.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "icfh-4401",
                "name": "iSelect 精选双床房",
                "size": "16 平方米",
                "bed": "2张单人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人晨间咖啡牛角包早点",
                "cancel": "特惠房型不可退订",
                "price": 530,
                "origPrice": 690,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_iclub_Sheung_Wan_Hotel_%E5%AF%8C%E8%96%88%E4%B8%8A%E7%92%B0%E9%85%92%E5%BA%97_night_Feb-2015_LG2_lift_lobby.jpg?width=600"
            }
        ]
    },
    {
        "id": 45,
        "name": "香港富荟土瓜湾酒店 (iclub To Kwa Wan Hotel)",
        "enName": "iclub To Kwa Wan Hotel",
        "region": "九龙",
        "district": "土瓜湾",
        "location": "九龙土瓜湾下乡道8号",
        "distance": "屯马线土瓜湾站步行3分钟，快捷连接启德与尖沙咀",
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
        "eco": "荣获 EarthCheck Silver 银级环保认证及香港环保酒店奖，推行全馆塑胶减量与智能房卡断电节能",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_iclub_Sheung_Wan_Hotel_%E5%AF%8C%E8%96%88%E4%B8%8A%E7%92%B0%E9%85%92%E5%BA%97_night_Feb-2015_LG2_logo.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "ictkw-4501",
                "name": "标准大床客房",
                "size": "15 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 510,
                "origPrice": 660,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_iclub_Sheung_Wan_Hotel_%E5%AF%8C%E8%96%88%E4%B8%8A%E7%92%B0%E9%85%92%E5%BA%97_night_Feb-2015_LG2_logo.jpg?width=600"
            }
        ]
    },
    {
        "id": 46,
        "name": "香港富荟旺角酒店 (iclub Mong Kok Hotel)",
        "enName": "iclub Mong Kok Hotel",
        "region": "九龙",
        "district": "旺角",
        "location": "九龙旺角晏架街2号",
        "distance": "邻近旺角站及奥海城，年轻时尚风格",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 2050,
        "verdict": "新锐环保",
        "price": 590,
        "originalPrice": 760,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "eco": "荣获 EarthCheck Silver 银级基准认证及绿建环评认证，公共空间采用自然采光与雨水回收灌溉系统",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Mongkok_(hotel),_Hong_Kong.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "icmk-4601",
                "name": "iRoom 标准客房",
                "size": "16 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含免费早间茶点",
                "cancel": "特惠房型不可退订",
                "price": 590,
                "origPrice": 760,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dorsett_Mongkok_(hotel),_Hong_Kong.JPG?width=600"
            }
        ]
    },
    {
        "id": 47,
        "name": "香港城景国际酒店 (The Cityview - Chinese YMCA of Hong Kong)",
        "enName": "The Cityview Hong Kong",
        "region": "九龙",
        "district": "油麻地",
        "location": "九龙窝打老道23号",
        "distance": "油麻地地铁站A2出口步行1分钟，环保示范酒店",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 3680,
        "verdict": "绿色典范",
        "price": 660,
        "originalPrice": 850,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "多次荣获「香港环境卓越大奖」及 EarthCheck 金级认证，全馆采用热泵热回收系统及低碳环保餐饮菜单",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_%E6%B2%B9%E9%BA%BB%E5%9C%B0_Yau_Ma_Tei_%E5%BD%8C%E6%95%A6%E9%81%93_Nathan_Road_%E9%A6%99%E6%B8%AF%E9%80%B8%E6%9D%B1%E9%85%92%E5%BA%97_Eaton_Hotel_facade_am_%E5%8A%A0%E5%A3%AB%E5%B1%85%E9%81%93_Gascoigne_Road_Jan-2014.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "cv-4701",
                "name": "尊贵低碳双人房",
                "size": "22 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 660,
                "origPrice": 850,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_%E6%B2%B9%E9%BA%BB%E5%9C%B0_Yau_Ma_Tei_%E5%BD%8C%E6%95%A6%E9%81%93_Nathan_Road_%E9%A6%99%E6%B8%AF%E9%80%B8%E6%9D%B1%E9%85%92%E5%BA%97_Eaton_Hotel_facade_am_%E5%8A%A0%E5%A3%AB%E5%B1%85%E9%81%93_Gascoigne_Road_Jan-2014.JPG?width=600"
            }
        ]
    },
    {
        "id": 48,
        "name": "香港黄金海岸酒店 (Hong Kong Gold Coast Hotel)",
        "enName": "Hong Kong Gold Coast Hotel",
        "region": "新界",
        "district": "屯门",
        "location": "新界屯门青山公路青山湾段1号",
        "distance": "直通黄金泳滩，热带园林度假风",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 3920,
        "verdict": "海滩生态度假",
        "price": 750,
        "originalPrice": 980,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "eco": "设立「黄金海岸生态农庄」与蝴蝶保育园，安装超过 200 块太阳能光伏板并全面提供室内智能过滤水机",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Gold_Coast_Hotel_in_Hong_Kong.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "gch-4801",
                "name": "豪华海景客房",
                "size": "32 平方米",
                "bed": "1张大床 或 2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含聆沨咖啡厅双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 750,
                "origPrice": 980,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gold_Coast_Hotel_in_Hong_Kong.JPG?width=600"
            }
        ]
    },
    {
        "id": 49,
        "name": "香港青逸酒店 (Rambler Oasis Hotel)",
        "enName": "Rambler Oasis Hotel",
        "region": "新界",
        "district": "青衣",
        "location": "新界青衣青衣路1号",
        "distance": "蓝澄湾海畔，提供往返青衣站巴士",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 3400,
        "verdict": "经济度假",
        "price": 420,
        "originalPrice": 550,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Rambler_Plaza_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "ro-4901",
                "name": "标准双床客房",
                "size": "18 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 420,
                "origPrice": 550,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rambler_Plaza_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 50,
        "name": "香港华逸酒店 (Rambler Garden Hotel)",
        "enName": "Rambler Garden Hotel",
        "region": "新界",
        "district": "青衣",
        "location": "新界青衣青衣路1号2座",
        "distance": "紧邻大型空中花园与户外泳池",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2950,
        "verdict": "预算首选",
        "price": 410,
        "originalPrice": 530,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Rambler_Channel_(Hong_Kong).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "rgd-5001",
                "name": "园景舒适房",
                "size": "19 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带小型浴缸)",
                "breakfast": "含双人简单早点",
                "cancel": "特惠房型不可退订",
                "price": 410,
                "origPrice": 530,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rambler_Channel_(Hong_Kong).jpg?width=600"
            }
        ]
    },
    {
        "id": 51,
        "name": "香港红茶馆酒店 - 西营盘皇后大道西 (Bridal Tea House Hotel)",
        "enName": "Bridal Tea House Hotel Sai Ying Pun",
        "region": "港岛",
        "district": "西营盘",
        "location": "港岛西营盘皇后大道西389号",
        "distance": "西营盘地铁站B出口步行3分钟",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 1950,
        "verdict": "地道便利",
        "price": 450,
        "originalPrice": 580,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Bridal_Tea_House_Hotel_(Queen%27s_Road_West).JPG?width=800"
        ],
        "rooms": [
            {
                "id": "bth-5101",
                "name": "标准紧凑型双人房",
                "size": "14 平方米",
                "bed": "1张标准双人床",
                "bathroom": "紧凑淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 450,
                "origPrice": 580,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bridal_Tea_House_Hotel_(Queen%27s_Road_West).JPG?width=600"
            }
        ]
    },
    {
        "id": 52,
        "name": "香港华美达海景酒店 (Ramada Hong Kong Harbour View)",
        "enName": "Ramada Hong Kong Harbour View",
        "region": "港岛",
        "district": "西营盘",
        "location": "港岛西营盘德辅道西308号",
        "distance": "港铁西营盘站旁，顶楼设季节性泳池",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2800,
        "verdict": "经济实用",
        "price": 460,
        "originalPrice": 600,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_ibis_Hong_Kong_Central_and_Sheung_Wan,_Hong_Kong_(Unsplash).jpg?width=800"
        ],
        "rooms": [
            {
                "id": "rmd-5201",
                "name": "高级海景双人房",
                "size": "18 平方米",
                "bed": "1张双人床",
                "bathroom": "独立私人卫浴 (带小型浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 460,
                "origPrice": 600,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hotel_ibis_Hong_Kong_Central_and_Sheung_Wan,_Hong_Kong_(Unsplash).jpg?width=600"
            }
        ]
    },
    {
        "id": 53,
        "name": "香港华美达华丽酒店 (Ramada Hong Kong Grand)",
        "enName": "Ramada Hong Kong Grand",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀柯士甸路23号",
        "distance": "距离佐敦地铁站步行约5分钟",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2250,
        "verdict": "实惠之选",
        "price": 490,
        "originalPrice": 650,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Park_Hotel_Hong_Kong.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "rmg-5301",
                "name": "标准城景客房",
                "size": "19 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人美式简餐",
                "cancel": "特惠房型不可退订",
                "price": 490,
                "origPrice": 650,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Park_Hotel_Hong_Kong.JPG?width=600"
            }
        ]
    },
    {
        "id": 54,
        "name": "香港铜锣湾迷你酒店 (mini hotel Causeway Bay)",
        "enName": "mini hotel Causeway Bay",
        "region": "港岛",
        "district": "铜锣湾",
        "location": "港岛铜锣湾新会道8号",
        "distance": "利园及希慎广场旁，极简文青设计",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 3800,
        "verdict": "核心商圈",
        "price": 520,
        "originalPrice": 680,
        "hasBreakfast": false,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Tai_Hang_%E9%8A%85%E9%91%BC%E7%81%A3%E7%B6%AD%E6%99%AF%E9%85%92%E5%BA%97_Metropark_Hotel_Causeway_Bay_35_Cafe_interior_visitors.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "mcb-5401",
                "name": "时尚迷你双人房",
                "size": "12 平方米",
                "bed": "1张双人床",
                "bathroom": "玻璃淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 520,
                "origPrice": 680,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Tai_Hang_%E9%8A%85%E9%91%BC%E7%81%A3%E7%B6%AD%E6%99%AF%E9%85%92%E5%BA%97_Metropark_Hotel_Causeway_Bay_35_Cafe_interior_visitors.JPG?width=600"
            }
        ]
    },
    {
        "id": 55,
        "name": "香港中环迷你酒店 (mini hotel Central)",
        "enName": "mini hotel Central",
        "region": "港岛",
        "district": "中环",
        "location": "港岛中环雪厂街38号",
        "distance": "紧邻兰桂坊与艺穗会，夜生活丰富",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 3420,
        "verdict": "时尚小巧",
        "price": 500,
        "originalPrice": 650,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Bridal_Tea_House_Hotel_(Queen%27s_Road_West).JPG?width=800"
        ],
        "rooms": [
            {
                "id": "mc-5501",
                "name": "精巧标准客房",
                "size": "13 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带迷你浴缸)",
                "breakfast": "含双人牛角包咖啡早点",
                "cancel": "入住前24小时可免费取消",
                "price": 500,
                "origPrice": 650,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Bridal_Tea_House_Hotel_(Queen%27s_Road_West).JPG?width=600"
            }
        ]
    },
    {
        "id": 56,
        "name": "香港远东丝丽酒店 (Silka Far East Hotel Hong Kong)",
        "enName": "Silka Far East Hotel Hong Kong",
        "region": "新界",
        "district": "荃湾",
        "location": "新界荃湾青山公路135-143号",
        "distance": "荃湾地铁站B出口步行3分钟，近千色汇",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2650,
        "verdict": "高性价比",
        "price": 540,
        "originalPrice": 700,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Panda_Hotel_07-08-2026.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "slk-5601",
                "name": "标准双人客房",
                "size": "16 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人丝丽咖啡室早餐",
                "cancel": "特惠房型不可退订",
                "price": 540,
                "origPrice": 700,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Panda_Hotel_07-08-2026.jpg?width=600"
            }
        ]
    },
    {
        "id": 57,
        "name": "香港海景丝丽酒店 (Silka Seaview Hotel Hong Kong)",
        "enName": "Silka Seaview Hotel Hong Kong",
        "region": "九龙",
        "district": "油麻地",
        "location": "九龙油麻地上海街268号",
        "distance": "油麻地地铁站步行3分钟，邻近庙街",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2410,
        "verdict": "旺中带静",
        "price": 520,
        "originalPrice": 680,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_KTD_%E8%A7%80%E5%A1%98_Kwun_Tong_%E5%B7%A7%E6%98%8E%E8%A1%97_97_How_Ming_Street_Holiday_Inn_Express_Hong_Kong_lobby_view_Landmark_East_in_June_2021_SS2_01.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "ssv-5701",
                "name": "标准城市双床房",
                "size": "15 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人简式早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 520,
                "origPrice": 680,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_KTD_%E8%A7%80%E5%A1%98_Kwun_Tong_%E5%B7%A7%E6%98%8E%E8%A1%97_97_How_Ming_Street_Holiday_Inn_Express_Hong_Kong_lobby_view_Landmark_East_in_June_2021_SS2_01.jpg?width=600"
            }
        ]
    },
    {
        "id": 58,
        "name": "香港湾仔维景酒店 (Metropark Hotel Wanchai)",
        "enName": "Metropark Hotel Wanchai",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔轩尼诗道41-49号",
        "distance": "湾仔站步行2分钟，电车路核心",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2120,
        "verdict": "出行省心",
        "price": 610,
        "originalPrice": 790,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Wan_Chai_%E7%81%A3%E4%BB%94_Luk_Kwok_Hotel_%E5%85%AD%E5%9C%8B%E9%A3%AF%E5%BA%97_1933.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "mpw-5801",
                "name": "高级双人客房",
                "size": "19 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 610,
                "origPrice": 790,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_Wan_Chai_%E7%81%A3%E4%BB%94_Luk_Kwok_Hotel_%E5%85%AD%E5%9C%8B%E9%A3%AF%E5%BA%97_1933.jpg?width=600"
            }
        ]
    },
    {
        "id": 59,
        "name": "香港悦品酒店·荃湾 (Hotel COZi Oasis)",
        "enName": "Hotel COZi Oasis",
        "region": "新界",
        "district": "葵涌",
        "location": "新界葵涌青山公路葵涌段443号",
        "distance": "近葵兴地铁站，安静舒适",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 2310,
        "verdict": "宁静实惠",
        "price": 470,
        "originalPrice": 610,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Inbalance_outdoor_pool_-_Novotel_Century_Hong_Kong_Hotel.jpg?width=800"
        ],
        "rooms": [
            {
                "id": "cozi-5901",
                "name": "悦品标准客房",
                "size": "18 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 470,
                "origPrice": 610,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Inbalance_outdoor_pool_-_Novotel_Century_Hong_Kong_Hotel.jpg?width=600"
            }
        ]
    },
    {
        "id": 60,
        "name": "香港尖沙咀帝国酒店 (The Imperial Hotel)",
        "enName": "The Imperial Hotel Hong Kong",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀弥敦道30-34号",
        "distance": "尖沙咀地铁站C1出口步行1分钟，下楼即重庆大厦与维港",
        "stars": 3,
        "rating": 8.0,
        "reviewCount": 3190,
        "verdict": "地段极佳",
        "price": 560,
        "originalPrice": 730,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": false,
        "eco": "",
        "images": [
            "https://commons.wikimedia.org/wiki/Special:FilePath/HK_TST_night_%E5%98%89%E8%98%AD%E5%9C%8D_Granville_Circuit_%E7%99%BE%E6%A8%82%E9%85%92%E5%BA%97%E9%9B%86%E5%9C%98_Park_Hotel.JPG?width=800"
        ],
        "rooms": [
            {
                "id": "imp-6001",
                "name": "标准双床客房",
                "size": "17 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 560,
                "origPrice": 730,
                "image": "https://commons.wikimedia.org/wiki/Special:FilePath/HK_TST_night_%E5%98%89%E8%98%AD%E5%9C%8D_Granville_Circuit_%E7%99%BE%E6%A8%82%E9%85%92%E5%BA%97%E9%9B%86%E5%9C%98_Park_Hotel.JPG?width=600"
            }
        ]
    }
];