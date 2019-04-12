<template>
  <div class="head-bar">
    <div class="left">
      <h1>危险性较大分部分项工程安全管理系统</h1>
    </div>
    <div class="right">
      <el-badge :value="msg.data" class="item">
        <i class="iconfont bj-icon-bell topicon f30"></i>
      </el-badge>
      <el-badge class="item">
        <i class="iconfont bj-icon-User-1 topicon f30 ml"></i>
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadBar',
  data () {
    return {
      common: {
      },
      act: {},
      msg: {
        data: 99
      }
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.head-bar {
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  background-color: #abddff;
  position: relative;
  padding: 0 24px;
  .left {
    height: 100%;
    float: left;
    line-height: 200px;
    color:darkred;
  }
  .right {
    height: 40px;
    position: absolute;
    right: 24px;
    bottom: 24px;

    .topicon {
      color: #409EFF;

      &:hover,&:active {
        color: rgb(140, 197, 255);
      }
    }
  }
}
.ml {
  margin-left: 36px;
}
.mt {
  margin-top: 6px;
}
.f30 {
  font-size: 30px;
}
</style>
