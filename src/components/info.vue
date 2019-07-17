<template>
  <div class="content">
    <h1 class="title">新闻标题</h1>
    <p class="subtitle">
      <span>发表时间:2019-03-27 19:08:56</span>
      <span>点击:1次</span>
    </p>
    <hr>
    <div class="con">
      {{newInfo}}
    </div>
    <comment></comment>
  </div>
</template>

<script>
import Comment from '@/components/comment'
export default {
  name: 'info',
  data () {
    return {
      id: this.$route.params,
      newInfo: '漂亮漂亮漂亮'
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http.get('api/getnew/' + this.id).then(result => {
        if (result.body.status === 0) {
          this.newInfo = result.body.message
        } else {
          alert('获取失败')
        }
      })
    }
  },
  components: {
    'comment': Comment
  }
}
</script>

<style lang="scss" scoped>
.content{
  padding: 0 4px;
  .title{
    font-size: 16px;
    margin: 15px auto;
    text-align: center;
    color: #cf2d28;
  }
  .subtitle{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
    span{
    }
  }
  .con{
    margin-bottom: 50px;
  }
}
</style>
