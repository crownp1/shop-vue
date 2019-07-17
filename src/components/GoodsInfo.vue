<template>
  <div class="goods-info">
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
      <div class="ball" v-show="isShow" ref="ball"></div>
    </transition>
    <!--轮播图部分-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
              市场价:<del>￥1266</del>&nbsp;&nbsp;
              销售价:<span class="now-price">￥1200</span>
          </p>
          <div class="price">
            数量：<numbox @fun="getNum"></numbox>
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号: 001021</p>
          <p>商品库存: 6件</p>
          <p>上架时间：2016-12-05</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable spaced-comment */
import swiper from '@/components/swiper.vue'
import numbox from '@/components/numbox.vue'
export default{
  data () {
    return {
      id: this.$route.params.id,
      'isFull': false,
      'isShow': false,
      selectCount: 1
    }
  },
  components: {
    'swiper': swiper,
    'numbox': numbox
  },
  methods: {
    addCar () {
      this.isShow = !this.isShow
      var goosinfo = {
        id: this.id,
        num: this.selectCount
      }
      this.$store.commit('addCar', goosinfo)
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      el.offsetWidth
      /*获取小球在页面中的位置*/
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      /*获取徽标在页面中的位置*/
      const bagePosition = document.getElementById('bage').getBoundingClientRect()
      var x = bagePosition.left - ballPosition.left
      var y = bagePosition.top - ballPosition.top
      el.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      el.style.transition = 'all 1s cubic-bezier(.4,-0.3,1,.68)'
      done()
    },
    afterEnter (el) {
      this.isShow = !this.isShow
    },
    getNum (number) {
      this.selectCount = number
      console.log('number' + number)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-info{
  background-color: #cccccc;
  overflow: hidden;
}
  .now-price{
    color: #cf2d28;
    font-size: 16px;
    font-weight: bold;
  }
  .price{
    padding-bottom: 10px;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 10px 0;
    }
  }
  .ball{
    width: 20px;
    height: 20px;
    background-color: #cf2d28;
    border-radius: 50%;
    position: absolute;
    z-index: 90;
    left: 117px;
    top: 388px;
  }
</style>
