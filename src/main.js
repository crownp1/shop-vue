/* eslint-disable spaced-comment */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
/* import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint) */

// 按需导入mint-ui组件
import './lib/dist/js/mui.min.js'
import {Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(VueResource)
Vue.use(Lazyload)
Vue.use(Vuex)
Vue.http.options.root = 'http://vue.studyit.io'
Vue.config.productionTip = false
/* eslint-disable no-new */
var store = new Vuex.Store({
  state: {
    //使用方法，this.$store.state.***
    shopCar: []
  },
  mutations: {
    //使用方法，this.$store.commit(方法名称，按需传入唯一的参数
    addCar (state, goodsInfo) {
      var flag = false
      state.shopCar.some(item => {
        if (item.id === goodsInfo.id) {
          item.num += parseInt(goodsInfo.num)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.shopCar.push(goodsInfo)
      }
    }
  },
  getters: {
    //相当于计算属性
    getAllcount (state) {
      var count = 0
      state.shopCar.forEach(item => {
        count += parseInt(item.num)
      })
      return count
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
