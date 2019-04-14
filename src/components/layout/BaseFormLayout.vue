<template>
  <div class="form-layout">
    <div class="title-box">
      <div class="title">
        <h1>{{ `${layout.title}` }}</h1>
      </div>
      <div v-if="act.headline" class="head-line"></div>
      <div class="button-box">
        <el-button v-if="act.savebtn === 'show' || act.savebtn === 'disabled'" :disabled="act.savebtn === 'disabled'" type="primary" @click="save">保存</el-button>
        <el-button v-if="act.submitbtn === 'show' || act.submitbtn === 'disabled'" :disabled="act.submitbtn === 'disabled'" type="primary" @click="submit">办结</el-button>
        <el-button v-if="act.closebtn === 'show' || act.closebtn === 'disabled'" :disabled="act.closebtn === 'disabled'" type="primary" @click="close">关闭</el-button>
      </div>
    </div>
    <div class="form-box">
      <slot></slot>
    </div>
    <div v-if="act.footer" class="footer-box">
      <div class="button-box">
        <el-button v-if="act.savebtn === 'show' || act.savebtn === 'disabled'" :disabled="act.savebtn === 'disabled'" type="primary" @click="save">保存</el-button>
        <el-button v-if="act.submitbtn === 'show' || act.submitbtn === 'disabled'" :disabled="act.submitbtn === 'disabled'" type="primary" @click="submit">办结</el-button>
        <el-button v-if="act.closebtn === 'show' || act.closebtn === 'disabled'" :disabled="act.closebtn === 'disabled'" type="primary" @click="close">关闭</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFormLayout',
  components: {
  },
  data () {
    return {
      common: {
      },
      act: {
        headline: false,
        savebtn: 'hidden',
        submitbtn: 'hidden',
        closebtn: 'hidden',
        footer: false
      },
      layout: {
        title: ''
      }
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    headline: {
      type: Boolean,
      default: false
    },
    savebtn: {
      type: String,
      default: 'hidden' // hidden,show,disabled
    },
    submitbtn: {
      type: String,
      default: 'hidden' // hidden,show,disabled
    },
    closebtn: {
      type: String,
      default: 'hidden' // hidden,show,disabled
    },
    footer: {
      type: Boolean,
      default: false
    },
    save: {
      type: Function,
      default: null
    },
    submit: {
      type: Function,
      default: null
    },
    close: {
      type: Function,
      default: null
    }
  },
  watch: {
    savebtn (str) {
      this.act.savebtn = str
    },
    submitbtn (str) {
      this.act.submitbtn = str
    },
    closebtn (str) {
      this.act.closebtn = str
    }
  },
  methods: {
    initData () {
      this.layout.title = this.title
      this.act.headline = this.headline
      this.act.savebtn = this.savebtn
      this.act.submitbtn = this.submitbtn
      this.act.closebtn = this.closebtn
      this.act.footer = this.footer
    },
    save () {
      if (typeof this.save === 'function') {
        this.save()
      } else {
        this.$eventBus.$emit('saveBaseFormLayout')
      }
    },
    submit () {
      if (typeof this.submit === 'function') {
        this.submit()
      } else {
        this.$eventBus.$emit('submitBaseFormLayout')
      }
    },
    close () {
      if (typeof this.close === 'function') {
        this.close()
      } else {
        this.$eventBus.$emit('closeBaseFormLayout')
      }
      window.close()
    }
  },
  created () {
    this.initData()
  },
  mounted () {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.form-layout {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: relative;

  .title-box {
    width: 100%;
    height: 100px;
    position: relative;
    .title {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 100px;
    }
    .head-line {
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: solid 1px #e1e4e8;
    }
  }

  .button-box {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 24px;
    height: 100px;
    line-height: 100px;
  }

  .footer-box {
    width: 100%;
    height: 100px;
    position: relative;
    border-top: solid 1px #e1e4e8;
  }
}
</style>
