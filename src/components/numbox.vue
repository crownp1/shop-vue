<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1"
           @change="countChange" ref="numbox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
/* eslint-disable spaced-comment */
export default {
  name: 'numbox',
  methods: {
    countChange () {
      /*每当文本的值改变时就监听到他的值*/
      this.$emit('fun', parseInt(this.$refs.numbox.value))
    }
  }
}
</script>

<style scoped>

</style>
