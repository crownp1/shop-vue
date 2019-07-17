<template>
  <div>
    <!--添加滑动条-->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            推荐
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            热点
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            北京
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            社会
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
        </div>
      </div>
    </div>
    <!--图片区域-->
    <ul class="photo-list">
      <li v-for="item in list" :key="item.id">
        <img src="../images/cbd.jpg">
        <div class="info">
          <h1 class="info-title"> 搭建Vuemint-ui 框架</h1>
          <div class="info-body">mint-ui 是有饿了么前端团队推出的基于Vue.js的移动端组件库。下面就让我们一起来看看mint-ui的构建吧。
            每个组件的使用方法请阅读文档，这里只举一个微小的例子。在 app.vue 中</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mui from '../lib/dist/js/mui.min.js'
export default {
  name: 'photo-list',
  data () {
    return {
      cate: [],
      list: [
        {id: 0, href: 'https://image.so.com/i?q=%E5%9B%BE%E7%89%87&listsrc=sobox&listsign=fdacc77605b3854fd1003e89e1e22bb4&src=360pic_strong#/liteflow/list?imgkey=t0100714605ba9621e2.jpg&prevsn=-1&currsn=0'},
        {id: 1, href: 'https://image.so.com/i?q=%E5%9B%BE%E7%89%87&listsrc=sobox&listsign=fdacc77605b3854fd1003e89e1e22bb4&src=360pic_strong#/liteflow/list?imgkey=t010eed8a6ad9ee124f.jpg&prevsn=-1&currsn=0'},
        {id: 2, href: 'https://image.so.com/i?q=%E5%9B%BE%E7%89%87&listsrc=sobox&listsign=fdacc77605b3854fd1003e89e1e22bb4&src=360pic_strong#/liteflow/list?imgkey=t015e75f34751c205fc.jpg&prevsn=-1&currsn=0'}
      ]
    }
  },
  created () {
    this.getAllCategory()
  },
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })
  },
  methods: {
    getAllCategory () {
      this.$http.get('api/getimgcategory', 'Access-Control-Allow-Origin').then(result => {
        if (result.status === 0) {
          result.body.message.unshift({title: '全部', id: 0})
          this.cate = result.body.message
          console.log('yes')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  touch-action: pan-x; //启用单指水平平移手势
}
.photo-list{
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li{
    position: relative;
    text-align: center;
    margin-bottom: 10px;
    background-color: #ccc;
    box-shadow: 0 0 9px #999999;
    img{
      width: 100%;
      vertical-align: middle;
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      position: absolute;
      bottom: 0;
      color: white;
      width: 100%;
      background-color: rgba(0,0,0,0.4);
      text-align: left;
      max-height: 84px;
      .info-title{
        font-size: 14px;
      }
      .info-body{
        font-size: 13px;
      }
    }
  }
}

</style>
