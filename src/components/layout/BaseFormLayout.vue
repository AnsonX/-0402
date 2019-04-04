<template>
  <div class="form-layout">
    <div class="title-box">
      <div class="title">
        <h1>{{ `${layout.title}` }}</h1>
      </div>
      <div v-if="act.headline" class="head-line"></div>
      <div class="button-box">
        <el-button v-if="act.savebtn" type="primary" @click="save">保存</el-button>
        <el-button v-if="act.submitbtn" type="primary" @click="submit">办结</el-button>
        <el-button v-if="act.closebtn" type="primary" @click="close">关闭</el-button>
      </div>
    </div>
    <div class="form-box">
      <router-view/>
    </div>
    <div v-if="act.footer" class="footer-box">
      <div class="button-box">
        <el-button v-if="act.savebtn" type="primary" @click="save">保存</el-button>
        <el-button v-if="act.submitbtn" type="primary" @click="submit">办结</el-button>
        <el-button v-if="act.closebtn" type="primary" @click="close">关闭</el-button>
      </div>
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
      act: {
        headline: false,
        savebtn: false,
        submitbtn: false,
        closebtn: false,
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
      type: Boolean,
      default: false
    },
    submitbtn: {
      type: Boolean,
      default: false
    },
    closebtn: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initEventBus () {
      this.$eventBus.$on('changeFormLayout', this.changeLayout)
    },
    initData () {
      // layout的按钮控制一般可以用路由配置，某些复杂情况下比如业务流程逻辑也影响到，可以通过eventBus通知更新
      this.layout.title = this.title
      this.act.headline = this.headline
      this.act.savebtn = this.savebtn
      this.act.submitbtn = this.submitbtn
      this.act.closebtn = this.closebtn
      this.act.footer = this.footer
    },
    changeLayout (data) {
      if (typeof data === 'object') {
        for (const i in data) {
          if (i === 'title') {
            this.layout.title = data[i]
          } else {
            this.act[i] = data[i]
          }
        }
      }
    },
    save () {
      this.$eventBus.$emit('save')
    },
    submit () {
      this.$eventBus.$emit('submit')
    },
    close () {
      this.$eventBus.$emit('close')
      window.close()
    }
  },
  created () {
    this.initEventBus()
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
