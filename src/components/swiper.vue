<template>
  <!--轮播图实现-->
  <!--auto表示自动设置时间-->
  <mt-swipe :auto="3000">
    <!--<mt-swipe-item v-for="item in dataList" :key="item.url">-->
    <!--<img :src="item.img" alt="">-->
    <!--</mt-swipe-item>-->
    <mt-swipe-item>
      <img src="../images/muwu.jpg" alt="" :class="{'full':isfull}">
    </mt-swipe-item>
    <mt-swipe-item>
      <img src="../images/yuantiao.jpg" alt="" :class="{'full':isfull}">
    </mt-swipe-item>
    <mt-swipe-item>
      <img src="../images/qrcode.png" alt="" :class="{full:isfull}">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default{
  data () {
    return {
    }
  },
  props: ['isfull'],
  created () {

  }
}
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      text-align: center;
      img{
        height: 100%;
      }
    }
  }
  .full{
    width: 100%;
  }
</style>
