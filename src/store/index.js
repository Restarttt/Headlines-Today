import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //state状态管理(通过store.state.name访问)
    state: {
        num: [],
        name: []
    },
    // mutations改变store的状态
    mutations: {
        NUM(state, num) {
            state.num = num
            console.log(state.num)
        },
        NAME(state, name) {
            console.log(name)
            state.name = name
        }
    },
    // actions提交mutations
    actions: {},
    //子模块，一般在主模块中用到
    modules: {}
})