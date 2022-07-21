// 服务端
// 引入依赖
const express = require("express");
const app = express();
let Mock = require('mockjs');

// 接口mock
let ListApi = require('./data/list');
console.log(ListApi);
app.get('/api/article/list', function (req, res) {
    // 通用结构搭建 - 可拓展
    res.json(
        Mock.mock(
            ListApi.getList(req)
        )
    )
})

app.listen(3000); //localhost:3000/api/article/list