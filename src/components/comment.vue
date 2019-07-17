<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea  v-model="msg" placeholder="请输入你的评论内容(最多120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large" @click="postMsg">发表评论</mt-button>
    <div class="com-list" v-for="(item, i) in comments" :key="item.id">
      <div class="com-title">第{{i+1}}楼&nbsp;&nbsp;用户:{{item.name}}&nbsp;&nbsp;发表时间:{{item.date}} </div>
      <div class="com-item">{{item.content}}</div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'comment',
  data () {
    return {
      msg: '',
      comments: [
        {id: 1, name: '匿名用户', date: Date.now(), content: '真好'},
        {id: 2, name: '匿名用户', date: Date.now(), content: '漂亮极了'},
        {id: 3, name: '匿名用户', date: Date.now(), content: '真好'},
        {id: 4, name: '匿名用户', date: Date.now(), content: '真好'},
        {id: 5, name: '匿名用户', date: Date.now(), content: '真好'}
      ]
    }
  },
  methods: {
    postMsg () {
      if (this.msg.trim().length === 0) {
        return Toast({
          message: '内容不能为空',
          duration: 1000
        })
      }
      var comment = {id: 6, name: '匿名用户', date: Date.now(), content: this.msg}
      this.comments.unshift(comment)
      this.msg = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  h3{
    font-size: 18px;
  }
  textarea{
    font-size: 14px;
    margin: 0;
    height: 85px;
  }
.com-list{
  margin: 10px 0;
  font-size: 13px;
  .com-title{
    margin: 0 5px;
    background-color: #cccccc;
    border-radius: 5px ;
    color: #000;
    line-height: 35px;
  }
  .com-item{
    line-height: 35px;
    text-indent: 2em;
  }
}
</style>
