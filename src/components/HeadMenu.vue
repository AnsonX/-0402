<template>
  <div class="head-menu">
    <div class="level-one">
      <div v-for="(item, index) in menu.data.levelOne" v-bind:key="index" :class="item.clz" @click="changeActive(item)"><h2>{{item.title}}</h2></div>
    </div>
    <div v-if="act.menu.levelTwo" class="level-two">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      common: {
        menuMap: {}
      },
      act: {
        menu: {
          levelTwo: true
        }
      },
      menu: {
        params: {
        },
        data: {
          levelOne: [
            {
              title: '首页',
              url: '/',
              clz: 'menu-item active'
            },
            {
              title: '危大工程清单',
              url: '/',
              clz: 'menu-item'
            },
            {
              title: '专家库管理',
              url: '/',
              clz: 'menu-item'
            },
            {
              title: '档案管理',
              url: '/',
              clz: 'menu-item'
            }
          ],
          levelTwo: []
        }
      }
    }
  },
  watch: {
    '$route.path' (val, oldVal) {
      console.log('$route.path:', val)
    }
  },
  methods: {
    initData () {
      // TODO 根据系统&角色&权限生产菜单数据
    },
    changeActive (item, isLevelTwo = false) {
      const title = item.title
      let menus = this.menu.data.levelOne
      if (isLevelTwo) {
        menus = this.menu.data.levelTwo
      }
      menus.forEach((o, index) => {
        if (title === o.title) {
          o.clz = 'menu-item active'
          // 路由跳转
          this.$router.push(o.url)
        } else {
          o.clz = 'menu-item'
        }
      })
    }
  },
  created () {
    console.log('create $route.path:', this.$route.path)
  },
  mounted () {
    console.log('$router:', this.$router)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.head-menu {
  width: 100%;
  min-height: 40px;
  background-color:#409EFF;
  .menu-item {
    background-color: #409EFF;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #409EFF;
    }
    &.active {
      background-color: #fff;
      color: #409EFF;
    }
  }
}
</style>
