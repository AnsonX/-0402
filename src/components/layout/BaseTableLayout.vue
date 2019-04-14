<template>
  <div class="table-layout">
    <div v-if="searchBar" class="search-box">
      <slot name="searchs"></slot>
    </div>
    <div v-if="statusBar" class="act-box">
      <div class="status-box">
        <slot name="status"></slot>
      </div>
      <div class="btns-box">
        <slot name="btns"></slot>
      </div>
    </div>
    <div class="table-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TableLayout',
  components: {
  },
  data () {
    return {
      common: {
      },
      act: {
      }
    }
  },
  props: {
    searchBar: {
      type: Boolean,
      default: false
    },
    statusBar: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initEventBus () {
      // this.$eventBus.$on('saveBaseFormLayout', ()=>{})
    },
    initData () {
    }
  },
  created () {
    this.initEventBus()
    this.initData()
  },
  mounted () {
    console.log('$router:', this.$router)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.table-layout {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
}
</style>
