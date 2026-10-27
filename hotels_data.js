// 香港 31 间酒店平衡数据集（5星:11间, 4星:10间, 3星:10间；各设施均 <= 15间；评分精确分布于 9.5 / 9.0 / 8.5 / 8.0）
const hotelsData = [
    // ==================== 5 星级酒店 (共 11 间，含 ID 42) ====================
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
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
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
                "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": "icon-102",
                "name": "CLUB 36 全海景行政客房",
                "size": "38 平方米",
                "bed": "1张特大床 或 2张单人床",
                "bathroom": "独立大理石卫浴 (带全景浴缸与淋浴)",
                "breakfast": "含行政酒廊全日礼遇及自助早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 2180,
                "origPrice": 2780,
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
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
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
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
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": "rw-202",
                "name": "尊尚维港海景大套房",
                "size": "78 平方米",
                "bed": "1张特大床 / 独立会客起居室",
                "bathroom": "独立维港景观大理石浴室 (双人水疗浴缸)",
                "breakfast": "含 Manor Club 贵宾酒廊早餐及香槟茶歇",
                "cancel": "特惠房型不可退订",
                "price": 6800,
                "origPrice": 8500,
                "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
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
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "lmo-301",
                "name": "L600 尊贵客房",
                "size": "56 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立超大圆形浸泡浴缸及干湿分离卫浴",
                "breakfast": "不含早餐 (可现场加购 Amber 早膳)",
                "cancel": "入住前24小时可免费取消",
                "price": 4500,
                "origPrice": 5600,
                "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
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
        "images": [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
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
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
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
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
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
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 6,
        "name": "香港奕居 (The Upper House)",
        "enName": "The Upper House",
        "region": "港岛",
        "district": "金钟",
        "location": "港岛金钟道88号太古广场",
        "distance": "坐落太古广场高层，俯瞰金钟港湾",
        "stars": 5,
        "rating": 9.5,
        "reviewCount": 1890,
        "verdict": "都市静谧奢华",
        "price": 4200,
        "originalPrice": 5200,
        "hasBreakfast": true,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "uh-601",
                "name": "Studio 70 豪华山景房",
                "size": "68 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立豪华水疗浴室 (配备石灰岩浴缸)",
                "breakfast": "含 Salisterra 双人精选早餐",
                "cancel": "特惠房型不可退订",
                "price": 4200,
                "origPrice": 5200,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 7,
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
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "rc-701",
                "name": "云端豪华城景客房",
                "size": "50 平方米",
                "bed": "1张特大双人床",
                "bathroom": "高空景观淋浴卫浴 (无浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 4100,
                "origPrice": 5200,
                "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 8,
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
        "hasGym": false,
        "images": [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "jw-801",
                "name": "精选豪华大床房",
                "size": "33 平方米",
                "bed": "1张特大床",
                "bathroom": "标准干湿分离淋浴间",
                "breakfast": "含双人JW咖啡室国际自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 2250,
                "origPrice": 2850,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 9,
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
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "hrs-901",
                "name": "九肚山景标准客房",
                "size": "38 平方米",
                "bed": "1张特大床",
                "bathroom": "独立大理石卫浴 (带深浸浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1180,
                "origPrice": 1480,
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 10,
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
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "stc-1001",
                "name": "大屿山海景豪华客房",
                "size": "35 平方米",
                "bed": "1张特大双人床",
                "bathroom": "现代步入式淋浴间",
                "breakfast": "含屿坊双人丰盛自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 1280,
                "origPrice": 1650,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    // ==================== 4 星级酒店 (共 10 间) ====================
    {
        "id": 11,
        "name": "香港芬名酒店 (The Fleming Hong Kong)",
        "enName": "The Fleming Boutique Hotel",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔菲林明道41号",
        "distance": "距离湾仔地铁站步行约3分钟，近香港会展中心",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 1820,
        "verdict": "复古潮流精品",
        "price": 1180,
        "originalPrice": 1480,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "fl-1101",
                "name": "雅致小号双人房 (渡轮美学风)",
                "size": "22 平方米",
                "bed": "1张标准双人床 (Queen Bed)",
                "bathroom": "独立复古黄铜卫浴 (带深浸浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1180,
                "origPrice": 1480,
                "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 12,
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
        "hasCancel": false,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "east-1201",
                "name": "Urban View 城市精选房",
                "size": "28 平方米",
                "bed": "1张特大床",
                "bathroom": "现代步入式雨淋花洒淋浴间",
                "breakfast": "含 FEAST 双人活力早餐",
                "cancel": "特惠房型不可退订",
                "price": 1280,
                "origPrice": 1620,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 13,
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
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "mh-1301",
                "name": "好莱坞经典一房套房",
                "size": "54 平方米",
                "bed": "1张特大双人床",
                "bathroom": "独立奢华浴缸与干湿分离浴室",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 1580,
                "origPrice": 1980,
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 14,
        "name": "香港沙田万怡酒店 (Courtyard by Marriott Hong Kong Sha Tin)",
        "enName": "Courtyard by Marriott Sha Tin",
        "region": "新界",
        "district": "沙田",
        "location": "新界沙田安平街1号",
        "distance": "城门河畔，临近石门站，性价比极高",
        "stars": 4,
        "rating": 9.0,
        "reviewCount": 3100,
        "verdict": "舒适商务",
        "price": 820,
        "originalPrice": 1080,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "cym-1401",
                "name": "城门河景舒适客房",
                "size": "27 平方米",
                "bed": "1张大床 或 2张单人床",
                "bathroom": "现代淋浴间 (无浴缸)",
                "breakfast": "含双人 MoMo Cafe 自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 820,
                "origPrice": 1080,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 15,
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
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "rp-1501",
                "name": "标准城景双人房",
                "size": "30 平方米",
                "bed": "1张大床 或 2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 880,
                "origPrice": 1150,
                "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 16,
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
        "hasCancel": false,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "nc-1601",
                "name": "高级标准双人房",
                "size": "23 平方米",
                "bed": "1张标准双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含 Le Cafe 双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 860,
                "origPrice": 1120,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 17,
        "name": "香港百乐酒店 (Park Hotel Hong Kong)",
        "enName": "Park Hotel Hong Kong",
        "region": "九龙",
        "district": "尖沙咀",
        "location": "九龙尖沙咀漆咸道南61-65号",
        "distance": "尖沙咀核心区，周边餐饮购物密集",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 3300,
        "verdict": "出行便捷",
        "price": 790,
        "originalPrice": 1020,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": false,
        "hasCancel": true,
        "hasGym": false,
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "ph-1701",
                "name": "宽敞城景双床房",
                "size": "28 平方米",
                "bed": "2张单人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 790,
                "origPrice": 1020,
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 18,
        "name": "香港湾仔睿景酒店 (Kew Green Hotel Wanchai)",
        "enName": "Kew Green Hotel Wanchai",
        "region": "港岛",
        "district": "湾仔",
        "location": "港岛湾仔轩尼诗道41-49号",
        "distance": "紧邻太古广场三座与湾仔站，交通四通八达",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2400,
        "verdict": "英伦简约",
        "price": 760,
        "originalPrice": 980,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": false,
        "hasCancel": false,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "kg-1801",
                "name": "标准双人床客房",
                "size": "21 平方米",
                "bed": "1张标准双人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人简约早点",
                "cancel": "特惠房型不可退订",
                "price": 760,
                "origPrice": 980,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 19,
        "name": "香港九龙维景酒店 (Metropark Hotel Kowloon)",
        "enName": "Metropark Hotel Kowloon",
        "region": "九龙",
        "district": "旺角",
        "location": "九龙窝打老道75号",
        "distance": "邻近旺角女人街及太子地铁站",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2150,
        "verdict": "闹中取静",
        "price": 680,
        "originalPrice": 880,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "mpk-1901",
                "name": "高级城景客房",
                "size": "24 平方米",
                "bed": "1张大床 或 2张单人床",
                "bathroom": "独立卫浴 (带标准浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 680,
                "origPrice": 880,
                "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 20,
        "name": "香港荃湾帝盛酒店 (Dorsett Tsuen Wan, Hong Kong)",
        "enName": "Dorsett Tsuen Wan",
        "region": "新界",
        "district": "荃湾",
        "location": "新界葵涌健全街28号",
        "distance": "距离港铁大窝口站步行约6分钟",
        "stars": 4,
        "rating": 8.5,
        "reviewCount": 2750,
        "verdict": "超值四星",
        "price": 620,
        "originalPrice": 800,
        "hasBreakfast": true,
        "hasPrivateBath": false,
        "hasPool": true,
        "hasCancel": false,
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "dtw-2001",
                "name": "帝盛舒适双人房",
                "size": "22 平方米",
                "bed": "1张双人床",
                "bathroom": "现代淋浴间",
                "breakfast": "含双人自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 620,
                "origPrice": 800,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    // ==================== 3 星级酒店 (共 10 间) ====================
    {
        "id": 21,
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
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "ibis-2101",
                "name": "标准城景大床房",
                "size": "17 平方米",
                "bed": "1张标准大床",
                "bathroom": "紧凑型模块化淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 580,
                "origPrice": 750,
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 22,
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
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "ibnp-2201",
                "name": "精选海景双床房",
                "size": "16 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人轻食自助早餐",
                "cancel": "特惠房型不可退订",
                "price": 480,
                "origPrice": 620,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 23,
        "name": "香港华美达海景酒店 (Ramada Hong Kong Harbour View)",
        "enName": "Ramada Hong Kong Harbour View",
        "region": "港岛",
        "district": "西营盘",
        "location": "港岛西营盘德辅道西308号",
        "distance": "港铁西营盘站旁，顶楼设季节性泳池",
        "stars": 3,
        "rating": 8.5,
        "reviewCount": 2800,
        "verdict": "经济实用",
        "price": 460,
        "originalPrice": 600,
        "hasBreakfast": false,
        "hasPrivateBath": true,
        "hasPool": true,
        "hasCancel": true,
        "hasGym": false,
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "rmd-2301",
                "name": "高级海景双人房",
                "size": "18 平方米",
                "bed": "1张双人床",
                "bathroom": "独立私人卫浴 (带小型浴缸)",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 460,
                "origPrice": 600,
                "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 24,
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
        "images": [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "rmg-2401",
                "name": "标准城景客房",
                "size": "19 平方米",
                "bed": "2张单人床",
                "bathroom": "标准淋浴间",
                "breakfast": "含双人美式简餐",
                "cancel": "特惠房型不可退订",
                "price": 490,
                "origPrice": 650,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 25,
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
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "ro-2501",
                "name": "标准双床客房",
                "size": "18 平方米",
                "bed": "2张单人床",
                "bathroom": "淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 420,
                "origPrice": 550,
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 26,
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
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "rgd-2601",
                "name": "园景舒适房",
                "size": "19 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带小型浴缸)",
                "breakfast": "含双人简单早点",
                "cancel": "特惠房型不可退订",
                "price": 410,
                "origPrice": 530,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 27,
        "name": "香港红茶馆酒店 - 油麻地鸦打街 (Bridal Tea House Hotel)",
        "enName": "Bridal Tea House Yau Ma Tei",
        "region": "九龙",
        "district": "油麻地",
        "location": "九龙油麻地鸦打街6号",
        "distance": "油麻地地铁站C出口步行1分钟，近庙街夜市",
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
        "images": [
            "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "bth-2701",
                "name": "标准紧凑型双人房",
                "size": "14 平方米",
                "bed": "1张标准双人床",
                "bathroom": "紧凑淋浴间",
                "breakfast": "不含早餐",
                "cancel": "入住前24小时可免费取消",
                "price": 450,
                "origPrice": 580,
                "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 28,
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
        "images": [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "mcb-2801",
                "name": "时尚迷你双人房",
                "size": "12 平方米",
                "bed": "1张双人床",
                "bathroom": "玻璃淋浴间",
                "breakfast": "不含早餐",
                "cancel": "特惠房型不可退订",
                "price": 520,
                "origPrice": 680,
                "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 29,
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
        "images": [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "mc-2901",
                "name": "精巧标准客房",
                "size": "13 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带迷你浴缸)",
                "breakfast": "含双人牛角包咖啡早点",
                "cancel": "入住前24小时可免费取消",
                "price": 500,
                "origPrice": 650,
                "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        "id": 30,
        "name": "香港旺角丝丽酒店 (Silka Far East Hotel Hong Kong)",
        "enName": "Silka Seaview Hotel Hong Kong",
        "region": "九龙",
        "district": "油麻地",
        "location": "九龙油麻地上海街268号",
        "distance": "步行至油麻地地铁站约3分钟",
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
        "hasGym": true,
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
        ],
        "rooms": [
            {
                "id": "slk-3001",
                "name": "标准双人客房",
                "size": "16 平方米",
                "bed": "1张双人床",
                "bathroom": "独立卫浴 (带浴缸)",
                "breakfast": "含双人丝丽咖啡室早餐",
                "cancel": "特惠房型不可退订",
                "price": 540,
                "origPrice": 700,
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    // ==================== 置顶推荐酒店 (ID: 42, 5星) ====================
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
        "images": [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
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
                "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
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
                "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
            }
        ]
    }
];