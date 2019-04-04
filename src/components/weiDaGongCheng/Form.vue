<template>
  <div class="form-box">
    危大工程form
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
      common: {
      },
      act: {}
    }
  },
  props: {
  },
  methods: {
    initEventBus () {
      this.$eventBus.$on('save', this.saveHandle)
      this.$eventBus.$on('submit', this.submitHandle)
      this.$eventBus.$on('close', this.closeHandle)
    },
    saveHandle () {
      console.log('saveHandle->')
    },
    submitHandle () {
      console.log('submitHandle->')
    },
    closeHandle () {
      console.log('closeHandle->')
    }
  },
  created () {
    this.initEventBus()
  },
  mounted () {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.form-box {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
}
</style>
