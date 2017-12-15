let express = require('express');

let mongoose = require('mongoose');

let bodyParser = require('body-parser');

// api接口位置
let elmApp = require('./routers/elmApp');

let app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/api',elmApp);

mongoose.connect('mongodb://localhost:27017/elm',(err)=>{
    if(err){
        console.log('数据库连接失败')
    }else{
        console.log('数据库连接成功,监听在3000端口')
        app.listen(3000)
    }
})

