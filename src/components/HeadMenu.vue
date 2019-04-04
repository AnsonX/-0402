<template>
  <div class="head-menu">
    head menu 根据权限展示一级、二级菜单，默认选中第一个菜单
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
.head-menu {
  width: 100%;
  min-height: 40px;
  background-color:khaki;
}
</style>
