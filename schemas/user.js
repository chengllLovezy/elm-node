let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name:String,//用户名
    password:String,//登录密码
    headImg:String,//头像
    isMember:Boolean,//是否是会员
    telPhone:String,//手机号
    addressList:Array,//地址列表
    collection:Array,//收藏商家
    redPacket:Array,//红包
    weChat:String,//微信号
    qq:String,//qq号
    //支付密码
    payPassword:String
});

module.exports = mongoose.model('user',userSchema)