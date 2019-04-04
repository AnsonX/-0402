<template>
  <div class="head-bar">
    head bar ！！
    内部包含底图，个人头像，消息通知链接图标
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      common: {
      },
      act: {}
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.head-bar {
  width: 100%;
  height: 200px;
  background-color: aqua;
}
</style>
