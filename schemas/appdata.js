/*
* 该表只有管理员可以操作
*
* app中加载的默认数据
* */

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let appdataSchema = new Schema({
    category:Array,//分类
    enter_banner:Array,//进入APP的轮播
    enter_animate:Array,//进入APP的动画
    ads_banner:Array,//首页广告轮播
    hot_recommend:Object,//首页热门推荐
    quality_option:Object,//首页品质优选
    activity_style:Array,//活动列表的样式（减  首  特）
});

module.exports = mongoose.model('appdata',appdataSchema)