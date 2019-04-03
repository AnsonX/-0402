<template>
  <div class="main-layout">
    <div class="header"></div>
    
    <div class="main-box">
      <router-view/>
    </div>
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
.main-layout {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

  .header {
    width: 100%;
    height: 200px;
    background-color: aqua;
  }

  .main-box {
    width: 100%;
  }
}
</style>
