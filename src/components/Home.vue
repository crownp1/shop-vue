<template>

  <div>
    <swiper :isfull="true"></swiper>
    <!--六宫格实现-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="/home/newList">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="/home/photoList">
        <span class="mui-icon mui-icon-email"></span>
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="/home/goodList">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 "><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 "><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 "><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
import swiper from '@/components/swiper.vue'
/* eslint-disable indent,keyword-spacing,quotes */

  import {Toast} from 'mint-ui'
export default {
  name: 'home',
  data () {
    return {
      isFull: true,
     dataList: []
   }
  },
  created () {
    this.getLunbo()
  },
  methods: {
    getLunbo () {
      this.$http.get("api/getlunbo").then(result => {
         if(result.body.status === 0) {
           this.dataList = result.body.message
             Toast({
               message: '获取成功',
               duration: 3000
             })
         }else{
           Toast({
             message: '获取失败',
             duration: 3000
           })
         }
      })
    }
  },
  components: {
    'swiper': swiper
  }
}
</script>

<style lang="scss" scoped>
  .mui-table-view.mui-grid-view.mui-grid-9{
    background-color: #fff;
    .mui-media-body {
      font-size: 13px;
    }
  }
  .mui-table-view-cell.mui-media.mui-col-xs-4{
    border: none;
  }
</style>
