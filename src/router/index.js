import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Search from '@/components/Search'
import Shopcar from '@/components/Shopcar'
import newList from '@/components/newList'
import photoList from '@/components/photoList'
import goodList from '@/components/goodList'
import info from '@/components/info'
import GoodsInfo from '@/components/GoodsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/home/newList',
      component: newList
    },
    {
      path: '/home/photoList',
      component: photoList
    },
    {
      path: '/home/goodList',
      component: goodList
    },
    {
      path: '/home/info/:id',
      component: info
    },
    {
      path: '/home/GoodsInfo/:id',
      name: 'goodsInfo',
      component: GoodsInfo
    }

  ],
  linkActiveClass: 'mui-active'
})
