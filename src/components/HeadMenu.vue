<template>
  <div class="head-menu">
    <div class="first-level-menu">
      <div v-for="(item, index) in firstLevelMenu" v-bind:key="index" :class="item.clz" @click="changeActive(item)"><h2>{{item.title}}</h2></div>
    </div>
    <span class="second-level-menu">
      <div v-for="(item, index) in secondLevelMenu" v-bind:key="index" :class="item.clz" @click="changeActive(item)"><span>{{item.title}}</span></div>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import permissionMap from '@/permission'

export default {
  name: 'HeadMenu',
  data () {
    return {
      common: {
        menuMap: {
          supervise: [ // 主管单位菜单配置
            {
              permissionName: 'tjcx',
              title: '首页',
              path: [ ...permissionMap.tjcx.path ],
              clz: 'menu-item'
            },
            {
              permissionName: 'wdgcqd',
              title: '危大工程清单',
              path: [ ...permissionMap.wdgcqd.path ],
              clz: 'menu-item'
            },
            {
              permissionName: 'zjkgl',
              title: '专家库管理',
              path: [
                ...permissionMap.zjkgl_zjxxcs.path,
                ...permissionMap.zjkgl_zjxxsh.path,
                ...permissionMap.zjkgl_hgzjxxk.path,
                ...permissionMap.zjkgl_zjxypj.path,
                ...permissionMap.zjkgl_hmd.path
              ],
              clz: 'menu-item',
              children: [
                {
                  permissionName: 'zjkgl_zjxxcs',
                  title: '专家信息初审',
                  path: [ ...permissionMap.zjkgl_zjxxcs.path ],
                  clz: 'menu-subitem'
                },
                {
                  permissionName: 'zjkgl_zjxxsh',
                  title: '专家信息审核',
                  path: [ ...permissionMap.zjkgl_zjxxsh.path ],
                  clz: 'menu-subitem'
                },
                {
                  permissionName: 'zjkgl_hgzjxxk',
                  title: '合格专家信息库',
                  path: [ ...permissionMap.zjkgl_hgzjxxk.path ],
                  clz: 'menu-subitem'
                },
                {
                  permissionName: 'zjkgl_zjxypj',
                  title: '专家信用评价',
                  path: [ ...permissionMap.zjkgl_zjxypj.path ],
                  clz: 'menu-subitem'
                },
                {
                  permissionName: 'zjkgl_hmd',
                  title: '黑名单',
                  path: [ ...permissionMap.zjkgl_hmd.path ],
                  clz: 'menu-subitem'
                }
              ]
            },
            {
              permissionName: 'dagl',
              title: '档案管理',
              path: [ ...permissionMap.dagl.path ],
              clz: 'menu-item'
            }
          ],
          construct: [ // 建设单位菜单配置
          ],
          work: [ // 施工单位菜单配置
          ],
          constructControl: [ // 监理单位菜单配置
          ],
          monitor: [ // 监测单位菜单配置
          ]
        }
      },
      act: {
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUserInfo',
      'getPermissions'
    ]),
    firstLevelMenu () {
      const permissionNames = this.getPermissions.map(item => item.name)
      const orgType = (this.getUserInfo && this.getUserInfo.org.type) || null
      let arr = this.common.menuMap[orgType]
      arr = arr.filter(item => {
        return permissionNames.includes(item.permissionName)
      })
      return arr
    },
    secondLevelMenu () {
      const path = this.$route.path
      let arr = []

      this.firstLevelMenu.forEach(item => {
        if (item.path.includes(path) && Array.isArray(item.children)) {
            arr = item.children 
          }
      })

      return arr
    }
  },
  watch: {
    '$route.path' (val, oldVal) {
      // 监测路由变化，更新菜单选中项
      this.activeMenuItem(val)
    }
  },
  methods: {
    activeMenuItem (path) { // 根据当前路由高亮显示对应的菜单项
      if (this.firstLevelMenu) {
        this.firstLevelMenu.forEach(item => {
          if (item.path.includes(path)) {
            item.clz = 'menu-item active'
          } else {
            item.clz = 'menu-item'
          }
        })
      }
      if (this.secondLevelMenu) {
        this.secondLevelMenu.forEach(item => {
          if (item.path.includes(path)) {
            item.clz = 'menu-subitem active'
          } else {
            item.clz = 'menu-subitem'
          }
        })
      }
    },
    changeActive (item) { // 点击菜单项，路由跳转
      const path = item.path[0]
      this.$router.push(path)
    }
  },
  created () {
    this.activeMenuItem(this.$route.path)
  },
  mounted () {
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
  .menu-subitem {
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
