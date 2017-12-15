let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let sellerSchema = new Schema({
    name:String,//用户名
    password:String,//登录密码
    head_img:String,//用户头像
    belong_store:Array,//名下店铺
    isMember:Boolean,//是否是会员
    telPhone:String,//手机号
    redPacket:Array,//红包
    weChat:String,//微信号
    qq:String,//qq号
    bank_card:Array,//银行卡列表
});

module.exports = mongoose.model('seller',sellerSchema)