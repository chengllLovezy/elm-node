let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let id = Schema.Types.ObjectId;
let storeSchema = new Schema({
    seller_id:String,//归属商家
    store_name:String,//店铺名
    description:String,//描述简介
    score:String,//评分
    mouth_sale:String,//月销量
    money_limit:String,//起送价
    money_dispatch:String,//配送费
    head_img:String,//头像
    category:String,//所属分类
    activity:Array,//活动列表
    foods_lists:Array,
    menus_lists:Array
});

module.exports = mongoose.model('store',storeSchema)