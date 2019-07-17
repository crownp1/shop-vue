<template>
<div class="good-list">
  <div class="good-item" v-for="item in list" :key="item.id" @click="up(item.id)">
    <img v-bind:src="item.url" alt="">
    <h1>{{item.title}}</h1>
    <div class="info">
      <p class="title">
        <span class="new">￥{{item.nowMoney}}</span>
        <span class="old">￥{{item.oldMoney}}</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>仅剩{{item.num}}件</span>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'good-list',
  data () {
    return {
      list: [
        {id: 1, title: '小米商品', url: require('../images/muwu.jpg'), nowMoney: 899, oldMoney: 1999, num: 66},
        {id: 2, title: '苹果手机', url: require('../images/qrcode.png'), nowMoney: 599, oldMoney: 2999, num: 86},
        {id: 3, title: '华为荣耀八', url: require('../images/yuantiao.jpg'), nowMoney: 1899, oldMoney: 19999, num: 66},
        {id: 4, title: 'vivo R11', url: require('../images/qrcode.png'), nowMoney: 899, oldMoney: 1999, num: 54}
      ]
    }
  },
  methods: {
    up (id) {
      this.$router.push({name: 'goodsInfo', params: {id}})
    }
  }
}
</script>

<style lang="scss" scoped>
  .good-list {
    display: flex;//流式布局
    flex-wrap: wrap;//使其换行
    padding: 7px;
    justify-content: space-between;
    .good-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #323232;
      margin: 3px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;//更改流式布局的布局方向，默认是水平方向
      justify-content: space-between;
      min-height: 210px;
      img {
        width: 100%;
        height: 105px;
      }
      h1 {
        font-size: 14px;
      }
      .info {
        padding: 2px;
        background-color: #eee;
        p{
          margin: 0;
          padding: 5px;
        }
        .title {
          .new {
            color: #cf2d28;
            font-size: 14px;
            font-weight: bolder;
          }
          .old {
            text-decoration: line-through;
            margin-left: 20px;
            font-size: 12px;
          }
        }
        .sell {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }
</style>
