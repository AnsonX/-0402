<template>
  <div class="main-layout">
    <HeadBar v-if="headbar"></HeadBar>
    <HeadMenu v-if="headmenu"></HeadMenu>
    <div class="main-box">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeadBar from '@/components/HeadBar'
import HeadMenu from '@/components/HeadMenu'

export default {
  name: 'MainLayout',
  components: {
    HeadBar,
    HeadMenu
  },
  data () {
    return {
      common: {
      },
      act: {}
    }
  },
  props: {
    headbar: {
      type: Boolean,
      default: true
    },
    headmenu: {
      type: Boolean,
      default: true
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

  .main-box {
    width: 100%;
  }
}
</style>
