import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //state状态管理(通过store.state.name访问)
    state: {
        num: [],
        name: [{
                name: "推荐",
            },
            {
                name: "热点",
                type: 1
            },
            {
                name: "社会",
                type: 2
            },
            {
                name: "娱乐",
                type: 11
            },
            {
                name: "科技",
                type: 4
            },
            {
                name: "军事",
                type: 7
            },
            {
                name: "时尚",
                type: 9
            },
            {
                name: "养生"
            },
            {
                name: "旅游",
                type: 11
            },
            {
                name: "汽车"
            },

        ]
    },
    // mutations改变store的状态
    mutations: {
        NUM(state, num) {
            state.num = num
                // console.log(state.num)
        },
        NAME(state, name) {

            state.name = name
            console.log(state.name)
        }
    },
    // actions提交mutations
    actions: {},
    //子模块，一般在主模块中用到
    modules: {}
})