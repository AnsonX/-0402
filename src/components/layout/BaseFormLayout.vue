<template>
  <div class="form-layout">
    <div class="title-box">
      <div class="title">
        <h1>{{ `${title}` }}</h1>
      </div>
      <div v-if="headline" class="head-line"></div>
    </div>
    <div class="button-box">
      <el-button v-if="savebtn" type="primary" @click="save">保存</el-button>
      <el-button v-if="submitbtn" type="primary" @click="submit">办结</el-button>
      <el-button v-if="closebtn" type="primary" @click="close">关闭</el-button>
    </div>
    <div class="form-box">
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
    }
  },
  methods: {
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
}
</style>
