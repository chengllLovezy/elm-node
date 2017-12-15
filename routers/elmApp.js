let express = require('express');

let router = express.Router();

let Appdata = require('./../schemas/appdata');
let Seller = require('./../schemas/seller');
let Store = require('./../schemas/store');

router.get('/home',(req, res, next)=>{
    // new Appdata({
    //     category:[
    //         {
    //             "imgUrl":"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
    //             "text":"甜品饮品"
    //         },
    //         {
    //             "imgUrl":"/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
    //             "text":"商超便利"
    //         },
    //         {
    //             "imgUrl":"/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg",
    //             "text":"简餐"
    //         },
    //         {
    //             "imgUrl":"/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg",
    //             "text":"麻辣烫"
    //         },
    //         {
    //             "imgUrl":"/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg",
    //             "text":"果蔬生鲜"
    //         },
    //         {
    //             "imgUrl":"/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg",
    //             "text":"汉堡薯条"
    //         },
    //         {
    //             "imgUrl":"/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
    //             "text":"准时达"
    //         },
    //         {
    //             "imgUrl":"/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg",
    //             "text":"鲜花蛋糕"
    //         },
    //         {
    //             "imgUrl":"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
    //             "text":"甜品饮品"
    //         },
    //         {
    //             "imgUrl":"/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
    //             "text":"商超便利"
    //         },
    //         {
    //             "imgUrl":"/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg",
    //             "text":"简餐"
    //         },
    //         {
    //             "imgUrl":"/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg",
    //             "text":"麻辣烫"
    //         },
    //         {
    //             "imgUrl":"/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg",
    //             "text":"果蔬生鲜"
    //         },
    //         {
    //             "imgUrl":"/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg",
    //             "text":"汉堡薯条"
    //         },
    //         {
    //             "imgUrl":"/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
    //             "text":"准时达"
    //         },
    //         {
    //             "imgUrl":"/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg",
    //             "text":"鲜花蛋糕"
    //         }
    //     ],//分类
    //     enter_banner:[],//进入APP的轮播
    //     enter_animate:[],//进入APP的动画
    //     ads_banner:[
    //         {
    //             "imgSrc":"images/ad-banner01.jpg"
    //         },
    //         {
    //             "imgSrc":"images/ad-banner02.jpg"
    //         },
    //         {
    //             "imgSrc":"images/ad-banner03.jpg"
    //         },
    //         {
    //             "imgSrc":"images/ad-banner04.jpg"
    //         }
    //     ],//首页广告轮播
    //     hot_recommend:{
    //         top:[
    //             {
    //                 "title":"限量抢购",
    //                 "description":"超值美味 9.9元起",
    //                 "sub":"6214人正在抢",
    //                 "imgSrc":"images/recommend01.png"
    //             },
    //             {
    //                 "title":"今日膳食",
    //                 "description":"午餐吃好点",
    //                 "sub":"健康搭",
    //                 "imgSrc":"images/recommend02.png"
    //             }
    //         ],
    //         bottom:[
    //             {
    //                 "title":"简餐大咖",
    //                 "description":"必吃榜",
    //                 "imgSrc":"images/recommend03.png"
    //             },
    //             {
    //                 "title":"暖心美食季",
    //                 "description":"满减12元起",
    //                 "imgSrc":"images/recommend04.png"
    //             },
    //             {
    //                 "title":"营养快餐",
    //                 "description":"海量美食任选",
    //                 "imgSrc":"images/recommend05.png"
    //             }
    //         ]
    //     },//首页热门推荐
    //     quality_option:{
    //         "title":"品质优选",
    //         "subTitle":"大牌精选",
    //         "lists":[
    //             {
    //                 "title":"鲜芋仙",
    //                 "imgSrc":"/2/d9/5900545e6b515d7f9d547832d0ca6png.png"
    //             },
    //             {
    //                 "title":"DQ冰淇淋",
    //                 "imgSrc":"/b/b1/0c6a9919098436d2018521e0f36a7png.png"
    //             },
    //             {
    //                 "title":"1點點",
    //                 "imgSrc":"/9/5d/174c6822bf43a205fe53db5d5710bjpeg.jpeg"
    //             },
    //             {
    //                 "title":"coco都可",
    //                 "imgSrc":"/f/8d/f29dbf20be425fc12426c0b1f90b7jpeg.jpeg"
    //             }
    //         ]
    //     },//首页品质优选
    //     activity_style:[
    //         {
    //             "active_id":0,
    //             "text":"减",
    //             "bgcolor":"#f07373"
    //         },
    //         {
    //             "active_id":1,
    //             "text":"首",
    //             "bgcolor":"#70bc46"
    //         },
    //         {
    //             "active_id":2,
    //             "text":"特",
    //             "bgcolor":"#f1884f"
    //         }
    //     ],//活动列表的样式
    // }).save()
    // new Seller({
    //     name:'che',//用户名
    //     password:'123',//登录密码
    //     head_img:'',//用户头像
    //     belong_store:[],//名下店铺
    //     isMember:false,//是否是会员
    //     telPhone:'15201512159',//手机号
    //     redPacket:[],//红包
    //     weChat:'',//微信号
    //     qq:'',//qq号
    //     //银行卡
    //     bank_card:[]
    // }).save()
    // new Store({
    //     seller_id:'',//归属商家
    //     store_name:'曼玲粥店(金陵东路店)',
    //     description:'尽焊新品压轴上市！精选100%进口纯牛奶！！',//描述简介
    //     score:'4.6',//评分
    //     mouth_sale:'2000',//月销量
    //     money_limit:'20',//起送价
    //     money_dispatch:'5',//配送费
    //     head_img:'/6/b6/5395624ab8e887b1479107067e479png.png',//头像
    //     category:'',//所属分类
    //     activity:[
    //         {
    //             "active_id":0,
    //             "contentText":"满60减30"
    //         },
    //         {
    //             "active_id":1,
    //             "contentText":"新用户下单立减17元(不与其他活动同享)"
    //         },
    //         {
    //             "active_id":2,
    //             "contentText":"【立减10元】大“块”朵颐玩具单人餐"
    //         },
    //         {
    //             "active_id":2,
    //             "contentText":"【立减12.5元】王牌鸡盒餐"
    //         }
    //     ],//活动列表
    //     foods_lists:[
    //         {
    //             "menus_name":"热销",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"优惠",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"甜品饮品",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"糕点",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         }
    //     ]
    // }).save()

    // new Store({
    //     seller_id:'',//归属商家
    //     store_name:'德克士(江宁路店)',
    //     description:'尽焊新品压轴上市！精选100%进口纯牛奶！！',//描述简介
    //     score:'4.5',//评分
    //     mouth_sale:'1400',//月销量
    //     money_limit:'20',//起送价
    //     money_dispatch:'4',//配送费
    //     head_img:'/4/ff/bde8cd29387027b84824a95e0058bjpeg.jpeg',//头像
    //     category:'',//所属分类
    //     activity:[
    //         {
    //             "contentText":"满60减30"
    //         }
    //     ],//活动列表
    //     foods_lists:[
    //         {
    //             "menus_name":"热销",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"优惠",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"甜品饮品",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"糕点",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         }
    //     ]
    // }).save()
    // new Store({
    //     seller_id:'',//归属商家
    //     store_name:'永和大王(南京西店)',
    //     description:'尽焊新品压轴上市！精选100%进口纯牛奶！！',//描述简介
    //     score:'4.3',//评分
    //     mouth_sale:'500',//月销量
    //     money_limit:'20',//起送价
    //     money_dispatch:'4',//配送费
    //     head_img:'/e/da/c4e5abab06dea4b64d041495a9381png.png',//头像
    //     category:'',//所属分类
    //     activity:[
    //         {
    //             "active_id":0,
    //             "contentText":"满60减30"
    //         },
    //         {
    //             "active_id":1,
    //             "contentText":"新用户下单立减17元(不与其他活动同享)"
    //         },
    //         {
    //             "active_id":2,
    //             "contentText":"【立减10元】大“块”朵颐玩具单人餐"
    //         }
    //     ],//活动列表
    //     foods_lists:[
    //         {
    //             "menus_name":"热销",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"优惠",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"甜品饮品",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         },
    //         {
    //             "menus_name":"糕点",
    //             "menus_foods":[
    //                 {
    //                     "name":"王道椒香鸡腿",
    //                     "description":"",
    //                     "imgSrc":"",
    //                     "price":11,
    //                     "salenum":174,
    //                     "favorableRate":100
    //                 }
    //             ]
    //         }
    //     ]
    // }).save()


    Appdata.findOne({}).then((data)=>{

        Store.find({}).then((store)=>{
            res.json({
                status:0,
                message:'',
                data:{
                    appdata:data,
                    store:store
                }
            })
        })

    })
});

router.get('/shop',(req, res, next)=>{
    let store_id = req.query.store_id;
    Appdata.findOne({}).then((data)=>{
        Store.findOne({
            _id:store_id
        }).then((store)=>{
            res.json({
                status:0,
                message:'',
                data:{
                    appdata:data,
                    store:store
                }
            })
        })
    })

});

module.exports =  router;