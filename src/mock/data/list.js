// 具体的接口应用
const utils = require('../utils')
const Mock = require("mockjs")

const List = []
const count = 10

// 列表数据本身
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    abstract: "前端开发指南-前端知识体系",
    media_name: "央视网",
    title: "学习 | 前端知识体系-前端工程师",
    comment_count: 6355,
    datetime: "2022-06-19 18:17"
  }))
}

// 接口封装结构 - 可拓展
function getList(config) {
    // 接口逻辑 - 业务逻辑 or 排序 or 翻页
    return {
        total: List.length,
        data: List,
        has_more: false,
        html: null,
        page_id: "/__all__/",
        return_count: 8
    }
}



exports.getList = getList;