import * as type from './mutation-types.js'
import axios from 'axios'

export default {
    getList({            //首页的数据请求
        commit,
        state
    }, pay) {
        if (pay.kind && pay.flag) {
            // 网络请求 - 列表数据
            let url = '/api/article/list';  // localhost:8088/api/article/list => localhost:3000/api/xxxx
            let params = {
                tag: pay.kind
            }

            axios.get(url, { params }).then(res => {
                // 写转换逻辑
                res = res.data;
                // 更新后的数据存储至状态机的数据部分
                commit(type.GET_NEWSLIST, {
                    data: res.data,
                    kind: pay.kind
                })

                // 更新状态部分
                // 取消loading态
                commit(type.CHANGE_LOADING_STATE, false);
                
                // 更新展示
                if(res.return_count) {
                    commit(type.RETURN, true);
                } else {
                    commit(type.RETURN, false);
                }
            })
        }
    },
    loadMore({
        commit,
        state
    }, payload) {
        if (payload.flag && payload.kind) {
            // 网络请求 - 列表数据
            let url = '/api/article/list';  // localhost:8088/api/article/list => localhost:3000/api/xxxx
            let params = {
                tag: payload.kind
            }

            axios.get(url, { params }).then(res => {
                // 写转换逻辑
                res = res.data;

                // 更新后的数据存储至状态机的数据部分
                commit(type.GET_NEWSLIST, {
                    data: res.data,
                    kind: payload.kind
                })
            })
        }
    }
}
