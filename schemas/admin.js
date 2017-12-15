let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let adminSchema = new Schema({
    name:String,//用户名
    password:String,//登录密码
    is_super_admin:Boolean,//是否是超级管理员
    headImg:String,//头像
});

module.exports = mongoose.model('admin',adminSchema)