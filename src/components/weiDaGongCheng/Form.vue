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
  watch: {
    '$route.path' (val, oldVal) {
      console.log('$route.path:', val)
    }
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
    console.log('create $route.path:', this.$route.path)
  },
  mounted () {
    setTimeout(() => {
      this.$eventBus.$emit('changeFormLayout', {
        title: '危大工程（xxxxxx）',
        footer: false
      })
    }, 3000)
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
