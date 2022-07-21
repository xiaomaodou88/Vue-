import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);
const state = {
    ifReturnMsg: '',  
    // 需要知道页面路由切换
    routerChange:true, 
    // 加载更多   
    downLoadMore:false, 
    // 列表数据  
    list: {                
        __all__: [] // 后续多种面板 - 可拓展
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
