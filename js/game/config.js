/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-23
 * Time: 上午10:27
 * To change this template use File | Settings | File Templates.
 */
var gameList = [
    {
        "title":"捉鬼游戏",
        "id":"ghost",
        "versions":[
            {
                "name":"简化版(1.0)",
                "gameid":-1000,
                "type":"remote",
                "url":"officialGame/ghost_simple.json"

            },
            {
                "name":"猜词版(2.0)",
                "gameid":-1100,
                "type":"remote",
                "url":"officialGame/ghost_simple.json"
            },


            {
                "name":"杀人版(3.0)",
                "gameid":-1400,
                "type":"remote",
                "url":"officialGame/ghost_kill.json"
            }
        ]
    },
    {
        "title":"杀人游戏",
        "id":"kill",
        "versions":[
            {
                "name":"简化版",
                "gameid":-2000,
                "type":"remote",
                "url":"officialGame/kill_simple.json"
            },
            {
                "name":"警版",
                "gameid":-2100,
                "type":"remote",
                "url":"officialGame/ghost_simple.json"
            },


            {
                "name":"3.0",
                "gameid":-2300,
                "type":"remote",
                "url":"officialGame/ghost_simple.json"
            }  /*,
             {
             "name":"地雷版",
             "gameid":-2400,
             "type":"remote",
             "url":"officialGame/ghost_mine.json"
             }*/

        ]
    },
    {
        "title":"狼人杀",
        "id":"wolf",
        "versions":[
            {
                "name":"狼人杀",
                "gameid":-3000,
                "type":"remote",
                "url":"officialGame/ghost_simple.json"
            }
        ]
    },
    {
        "title":"炸狼堡",
        "id":"burg",
        "versions":[
            {
                "name":"炸狼堡",
                "gameid":-4000,
                "type":"remote",
                "url":"officialGame/ghost_simple.json"
            }
        ]
    }

]

var userList = [
    {
        "title":"三方",
        "id":"1",
        "versions":[
            {
                "name":"简化变异小三方",
                "gameid":1,
                "type":"local",
                "url":"ghost_simple.json"
            }


        ]
    },
    {
        "title":"最爱",
        "id":"2",
        "versions":[
            {
                "name":"三十六人象棋杀",
                "gameid":2,
                "type":"local",
                "url":"ghost_simple.json"
            },
            {
                "name":"天使与魔鬼",
                "gameid":3,
                "type":"local",
                "url":"ghost_simple.json"
            },
            {
                "name":"捉鬼变异版",
                "gameid":4,
                "type":"local",
                "url":"ghost_simple.json"
            },
            {
                "name":"狼人杀新月扩展",
                "gameid":5,
                "type":"local",
                "url":"ghost_simple.json"
            },
            {
                "name":"炸狼堡全角色",
                "gameid":6,
                "type":"local",
                "url":"ghost_simple.json"
            }

        ]
    }


]


var versionConfig = {
    "-1000":{
        "name":"捉鬼游戏简化版",
        "type":"remote",
        "gameid":-1000,
        "playerNumDefault":6,
        "showProperties":["card"],
        "roleProperties":["role","card"],
        "peopleNum":[3, 18],
        "rolesConfig":{
            "roleSort":"ghost,water",
            "default":"1,5",
            "3":"1,2",
            "4":"1,3",
            "5":"1,4",
            "6":"2,4",
            "7":"2,5",
            "8":"2,6",
            "9":"3,6",
            "10":"3,7",
            "11":"3,8",
            "12":"4,8",
            "13":"4,9",
            "14":"4,10",
            "15":"4,11",
            "tips":{
                "water":"你是人还是鬼呢？小心一点没有坏处哦！",
                "ghost":"你是人还是鬼呢？小心一点没有坏处哦！"
            }
        },
        "CN":{
            "ghost":"幽灵",
            "water":"水民",
            "role":"角色",
            "card":"卡牌",
            "num":"数量"
        },
        "properties":"",
        "rule":{
            "foreword":"风靡全国的捉鬼游戏",
            "text":"",
            "more":"http://bbs.ptteng.com",
            template:"第X天白天出局：XX；身份：XX。"
        }
    },
    "-1100":{
        "name":"捉鬼游戏猜词版",
        "type":"remote",
        "gameid":-1100,
        "playerNumDefault":8,
        "showProperties":["role","card"],
        "roleProperties":["role","card"],
        "peopleNum":[3, 18],
        "rolesConfig":{
            "roleSort":"ghost,water",
            "default":"2,6",
            "3":"1,2",
            "4":"1,3",
            "5":"1,4",
            "6":"2,4",
            "7":"2,5",
            "8":"2,6",
            "9":"3,6",
            "10":"3,7",
            "11":"3,8",
            "12":"4,8",
            "13":"4,9",
            "14":"4,10",
            "15":"4,11",
            "tips":{
                "ghost":"想办法猜到人的词，同时还要注意不要暴露自己哦！",
                "water":"描述的时候要小心，不要太容易被鬼猜到你的词哦"

            }
        },
        "properties":"",
        "rule":{
            "foreword":"猜猜看，他的词到底是什么？",
            template:"第X天白天出局：XX；身份：XX。",
            "text":"",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "ghost":"幽灵",
            "water":"水民",
            "num":"数量",
            "role":"角色",
            "card":"卡牌"
        }
    },
    "-1300":{
        "name":"捉鬼游戏魂版",
        "type":"remote",
        "gameid":-1300,
        "peopleNum":[3, 18],
        "playerNumDefault":8,
        "showProperties":["card"],
        "roleProperties":["role","card"],
        "rolesConfig":{
            "roleSort":"ghost,soul,water",
            "default":"1,1,6",
            "3":"1,1,1",
            "4":"1,1,2",
            "5":"1,1,3",
            "6":"1,1,4",
            "7":"2,1,4",
            "8":"2,1,5",
            "9":"2,1,6",
            "tips":{
                "ghost":"你的词也许和同伴不一样，怎样达成共识是关键。",
                "water":"你的词也许和同伴不一样，怎样达成共识是关键。",
                "soul":"你的词也许和同伴不一样，怎样达成共识是关键。"
            }
        },
        "properties":"",
        "rule":{
            "foreword":"你是人还是魂？别太自信哦！",
            template:"第X天白天出局：XX；身份：XX。",
            "text":"",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "ghost":"幽灵",
            "water":"水民",
            "role":"角色",
            "card":"卡牌",
            "soul":"魂"
        }
    },

    "-1400":{
        "name":"捉鬼游戏杀人版",
        "type":"remote",
        "gameid":-1400,
        "peopleNum":[4, 15],
        "playerNumDefault":8,
        "showProperties":["role", "card"],
        "roleProperties":["role","card"],
        "rolesConfig":{
            "roleSort":"ghost,water",
            "default":"2,6",
            "4":"1,3",
            "5":"1,4",
            "6":"2,4",
            "7":"2,5",
            "8":"2,6",
            "9":"3,6",
            "10":"3,7",
            "11":"3,8",
            "12":"4,8",
            "13":"4,9",
            "14":"4,10",
            "15":"4,11",
            "tips":{
                "ghost":"胜负只在一念间！仔细分析，谨慎出手，误伤你的队友就不好了！",
                "water":"胜负只在一念间！仔细分析，谨慎出手，误伤你的队友就不好了！",
                "soul":"胜负只在一念间！仔细分析，谨慎出手，误伤你的队友就不好了！"
            }
        },
        "properties":"",
        "rule":{
            "foreword":"比捉鬼更刺激，比杀人更好玩！",
            template:"第X天白天出局：XX；身份：XX；夜里出局：XX；身份：XX。",
            "text":"",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "ghost":"幽灵",
            "water":"水民",
            "role":"角色",
            "card":"卡牌",
            "soul":"魂"
        }
    },
    "-2000":{
        "name":"杀人游戏简化版",
        "type":"remote",
        "gameid":-2000,
        "peopleNum":[3, 18],
        "playerNumDefault":8,
        "showProperties":["role"],
        "roleProperties":["role"],
        "rolesConfig":{
            "roleSort":"killer,water",
            "default":"1,7",
            "3":"1,2",
            "4":"1,3",
            "5":"1,4",
            "6":"1,5",
            "7":"1,6",
            "8":"1,7",
            "9":"2,7",
            "10":"2,8",
            "11":"2,9",
            "12":"3,9",
            "13":"3,10",
            "14":"3,11",
            "15":"3,12",
            "16":"4,12",
            "17":"4,13",
            "18":"4,14",
            "tips":{
                "killer":"积极发言分析，尽可能的伪装成水民，刀法也很重要哦",
                "water":"通过逻辑分析抓出隐藏的杀手"
            }
        },
        "properties":"",
        "rule":{
            "foreword":"最纯粹的推理",
            template:"第X天白天出局：XX；夜里出局：XX。",
            "text":"",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "killer":"杀手",
            "water":"水民",
            "role":"角色"
        }

    },
    "-2100":{
        "name":"杀人游戏警版",
        "type":"remote",
        "gameid":-2100,
        "peopleNum":[3, 20],
        "playerNumDefault":8,
        "showProperties":["role"],
        "roleProperties":["role"],
        "rolesConfig":{
            "roleSort":"killer,police,water",
            "default":"1,1,7",
            "4":"1,1,2",
            "5":"1,1,3",
            "6":"1,1,4",
            "7":"1,1,5",
            "8":"2,2,4",
            "9":"2,2,5",
            "10":"2,2,6",
            "11":"3,3,5",
            "12":"3,3,6",
            "13":"3,3,7",
            "14":"3,3,8",
            "15":"4,4,7",
            "16":"4,4,8",
            "17":"4,4,9",
            "18":"5,5,8",
            "19":"5,5,9",
            "20":"5,5,10",
            "tips":{
                "killer":"通过分析发言找出警察，杀光他们！同时也要注意隐藏自己的身份！",
                "police":"你是好人方的领路人，仔细分析，谨慎查证，用你的智慧带领平民走向胜利！",
                "water":"通过逻辑分析抓出隐藏的杀手，同时也要通过巧妙的发言来保护警察！"

            }
        },
        "properties":"",
        "rule":{
            "foreword":"警察与杀手的生死时速",
            template:"第X天白天出局：XX；身份：XX。夜里出局：XX；身份：XX。 第X天查证：XX。身份：XX。",
            "text":"",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "killer":"杀手",
            "water":"水民",
            "role":"角色",
            "police":"警察"
        }
    },
    "-2200":{
        "name":"杀人游戏警版不翻牌",
        "type":"remote",
        "gameid":-2200,
        "showProperties":["role"],
        "roleProperties":["role"],
        "peopleNum":[3, 20],
        "playerNumDefault":8,
        "rolesConfig":{
            "roleSort":"killer,police,water",
            "default":"1,1,7",
            "4":"1,1,2",
            "5":"1,1,3",
            "6":"1,1,4",
            "7":"1,1,5",
            "8":"2,2,4",
            "9":"2,2,5",
            "10":"2,2,6",
            "11":"3,3,5",
            "12":"3,3,6",
            "13":"3,3,7",
            "14":"3,3,8",
            "15":"4,4,7",
            "16":"4,4,8",
            "17":"4,4,9",
            "18":"5,5,8",
            "19":"5,5,9",
            "20":"5,5,10",
            "tips":{
                "killer":"通过分析发言找出警察，杀光他们！同时也要注意隐藏自己的身份！",
                "police":"你是好人方的领路人，仔细分析，谨慎查证，用你的智慧带领平民走向胜利！",
                "water":"通过逻辑分析抓出隐藏的杀手，同时也要通过巧妙的发言来保护警察！"

            }
        },
        "properties":"",

        "rule":{"foreword":"谁是杀手谁是警察?死亡反而什么都无法证明",
            "text":"",
            template:"第X天白天出局：XX；夜里出局：XX； 第X天查证：XX。。",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "killer":"杀手",
            "water":"水民",
            "role":"角色",
            "police":"警察"
        }
    },
    "-2300":{
        "name":"杀人游戏3.0",
        "type":"remote",
        "gameid":-2300,
        "showProperties":["role"],
        "roleProperties":["role"],
        "peopleNum":[5, 20],
        "playerNumDefault":8,
        "rolesConfig":{
            "roleSort":"killer,police,awp,doctor,water",
            "default":"1,1,1,1,4",
            "5":"1,1,1,1,1",
            "6":"1,1,1,1,2",
            "7":"1,1,1,1,3",
            "8":"1,1,1,1,4",
            "9":"2,1,1,1,4",
            "10":"2,1,1,1,5",
            "11":"2,1,1,1,6",
            "12":"3,2,1,1,5",
            "13":"3,2,1,1,6",
            "14":"3,2,1,1,7",
            "15":"4,3,1,1,6",
            "16":"4,3,1,1,7",
            "17":"5,4,1,1,6",
            "18":"5,4,1,1,7",
            "19":"5,4,1,1,8",
            "20":"5,4,1,1,9",

            "tips":{
                "killer":"寻找警察的同时也要注意避开医生的针法，大胆赌针也许会有意想不到的收获！",
                "police":"医生的保护会让你更加勇敢，阳光地站出来带领平民吧，记得分配好特权的任务！",
                "water":"通过逻辑分析抓出隐藏的杀手，同时也要通过巧妙的发言来保护特权！",
                "awp":"最稳妥的方案是听从警察的吩咐，不要贸然开枪，也许你就是那个关键时刻扭转全局的人！",
                "doctor":"你是好人方的保护者，重点保护警察和自己总是没错的，猜中杀手的心思会让你的胜率大大增加。"
            }
        },
        "properties":"",
        "rule":{
            "foreword":"杀手与特权的博弈",
            "text":"",
            template:"第X天白天出局：XX；身份：XX。夜里出局：XX；身份：XX。 第X天查证：XX。身份：XX。医生救治：XX。 第X天夜里狙击开枪，射杀XX。",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "killer":"杀手",
            "water":"水民",
            "role":"角色",
            "police":"警察",
            "doctor":"医生",
            "awp":"狙击"

        }

    },
    "-2400":{
        "name":"杀人游戏地雷版",
        "type":"remote",
        "gameid":-2400,
        "showProperties":["role"],
        "roleProperties":["role"],
        "peopleNum":[2, 18],
        "rolesConfig":{
            "roleSort":"killer,police,pmine,kmine,water",
            "default":"1,1,1,1,5",
            "5":"1,1,1,1,1",
            "6":"1,1,1,1,2",
            "7":"1,1,1,1,3",
            "8":"1,1,1,1,4",
            "9":"1,1,1,1,5",
            "tips":{
                "killer":"和匪雷密切配合会让你轻松取胜，杀人时注意避开可能是警雷的身份！",
                "police":"寻找杀手的时候不要忘记雷的存在，上票时谨慎一点总没错的！",
                "water":"通过逻辑分析抓出隐藏的杀手，同时也不要忘记雷的存在，掌握排雷的技巧很重要！",
                "kmine":"跳警察或胡乱发言求票都是不错的选择，炸死警察和平民就是成功，注意不要误伤自己人哦！",
                "pmine":"阳光地站出来带领好人方吧，炸死杀手就是胜利。"
            }
        },
        "properties":"",
        "rule":{
            "foreword":"轰！爆炸啦！",
            "text":"",
            template:"第X天白天出局：XX；身份：XX。夜里出局：XX；身份：XX。 第X天查证：XX。身份：XX。",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "killer":"杀手",
            "water":"水民",
            "role":"角色",
            "police":"警察",
            "kmine":"匪雷",
            "pmine":"警雷"

        }

    },
    "-3000":{
        "name":"狼人杀",
        "type":"remote",
        "gameid":-3000,
        "showProperties":["role"],
        "roleProperties":["role"],
        "peopleNum":[6, 18],
        "playerNumDefault":8,
        "rolesConfig":{
            "roleSort":"wolf,witch,lover,prophet,guard,mix,hunter,leader,idiot,water",
            "default":"2,1,1,0,0,0,0,0,0,4",
            "6":"2,1,0,0,0,0,0,0,0,3",
            "7":"2,1,0,0,0,0,0,0,0,4",
            "8":"2,1,1,0,0,0,0,0,0,4",
            "9":"2,1,1,0,0,0,0,0,0,5",
            "10":"3,1,1,1,0,0,0,0,0,4",
            "11":"3,1,1,1,0,0,0,0,0,5",
            "12":"3,1,1,1,1,1,0,0,0,4",
            "13":"3,1,1,1,1,1,0,0,0,5",
            "14":"4,1,1,1,1,1,0,0,0,5",
            "15":"4,1,1,1,1,1,0,0,0,6",
            "16":"4,1,1,1,1,1,1,1,0,5",
            "17":"5,1,1,1,1,1,1,1,0,6",
            "18":"5,1,1,1,1,1,1,1,1,6",
            "tips":{
                "wolf":"想办法和你的同伴配合，杀光所有的好人吧！注意隐藏自己的身份！",
                "water":"通过逻辑分析抓出隐藏的狼人，掩护特权也是你的责任。",
                "prophet":"你是好人方的指路明灯，努力分析发言，查出隐藏的狼人吧！",
                "witch":"你对阵营非常重要，仔细分析，谨慎地使用你的特权，你会成为致胜的关键，不要忘记保护好自己！",
                "lover":"射出你的丘比特之箭吧，你将决定两个人的命运！",
                "guard":"你是好人方的坚实盾牌，猜中狼人的心思会让你守护的成功率大大增加。",
                "hunter":"你可以带走一个狼人，如果对自己的判断没把握，不妨听从先知的指引哦。",
                "leader":"狼人想杀你是要付出代价的，你可以大胆地站出来领导好人方。一定要注意不能被票死。",
                "idiot":"即使被票死了，你依然可以对场上形势提出你的意见，为阵营的胜利而不懈努力吧！",
                "mix":"通过分析发言判断出你所支持玩家的阵营，是你取胜的关键!"

            }
        },
        "properties":"",
        "rule":{
            "foreword":"杀人游戏与角色扮演的完美结合",
            "text":"",
            template:"情侣：XX-XX。成为/未成为独立第三方。混血儿支持：XX。阵营：XX。混血儿杀人：XX。身份：XX。 第X天白天出局：XX；身份：XX。 第X天狼人杀人：XX；身份：XX；查证：XX。身份：XX；守护：XX。女巫复活：XX；身份：XX；下毒：XX；身份：XX。 猎人带走：XX。身份：XX。",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "water":"水民",
            "role":"角色",
            "wolf":"狼人",
            prophet:"先知",
            witch:"女巫",
            lover:"爱人",
            guard:"守卫",
            hunter:"猎人",
            leader:"村长",
            idiot:"白痴",
            mix:"混血儿"

        }
    },
    "-4000":{
        "name":"炸狼堡",
        "type":"remote",
        "gameid":-4000,
        "peopleNum":[5, 10],
        "playerNumDefault":5,
        "showProperties":["role"],
        "roleProperties":["role"],
        "rolesConfig":{
            "roleSort":"wolf,water",
            "default":"2,3",
            "5":"2,3",
            "6":"2,4",
            "7":"3,4",
            "8":"3,5",
            "9":"3,6",
            "10":"4,6",
            "tips":{
                "wolf":"想办法破坏平民间的信任！如果你被选中成为炸堡者，一定要利用好这个身份！",
                "water":"信任比猜忌更重要，试着找到你的同伴，并且信任他！"

            }
        },
        "properties":"",
        "rule":{
            "foreword":"信任与猜忌的悖论",
            "text":"",
            template:"X号狼堡.村长：XX；小组人选：XX；结果：XX",
            "more":"http://bbs.ptteng.com"
        },
        "CN":{
            "num":"数量",
            "water":"水民",
            "role":"角色",
            "wolf":"狼人"
        }
    }

}

