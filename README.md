# vue-wdgc

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

开发规范（代码不要出现eslint检查warning）

1.代码

 1) 变量驼峰命名；权限等全局常量使用全大写，下划线分隔

 2) 函数&块语句中的空格，文件结尾空行，符合eslint检查标准规则

2.注释

 1) 单行注释较短可以放在代码结尾，双斜杠左右空一格；单行注释较长要单起一行，之前空一行，如果在局部作用域第一行可以不用空一行

3.组件

 1) 命名：vue文件命名首字母大写，驼峰命名。复杂组件单独放在一个目录中，目录首字母大写，驼峰命名。非业务相关的基础组件统一加上Base前缀。

 2) 文件内import的组件命名首字母大写，驼峰命名
 
 3) 组件抽离层次：
 
    1.业务无关组件：
    
      layout组件（主页面框架，注意兼顾页面适配；从设计稿中抽离的表格layout，表单layout；某些可以配置的自适应布局layout（根据实际设计场景抽离））
      
      基础组件(行政区划选择，在ui框架基础上封装定制的一些控件等)
      
    2.业务封装组件：
    
      菜单组件，个人信息，等用于内嵌在layout组件中
      
      使用第三方组件如echarts封装的统计数据展示组件（地图，饼图，条形图等）
      
      全局通用表单信息（很多流程中都用到的某些信息的详情，支持编辑和纯展示2种状态）
          

 4) 其他可读性建议：

  -1. 模板中v-if等指令写在最前面，方便查看业务逻辑。

  -2. data拆分原则：保证单一数来源的基础上拆分

    例子：

      data () {

        return {

          common: {

            // 不能直接从props或者store中获取的，或者需要特殊处理的全局信息统一写在common中

          },

          act: {

            // 纯交互相关参数，比如loading，显示隐藏规则等放这里

            loading: {

              componentA: false,

              componentB: false

            },

            show: {

              componentA: false,

              componentB: false

            }

          },

          componentA: {

            // 界面上显示的表单&表格&流程状态等信息，一般一个组件（基本组件或者子组件）对应一个查询&提交接口

            params: {

            },

            data: {}, // 用于存放响应数据，对象或者数组

            rules: [] // 可选，表单校验规则

          }

        }

      }

    -3. props定义要声明类型和default值：

      props: {

        title: {

          type: String,

          default: ''

        }

      }

    -4. computed：基本数据如果不能直接用在模板中，表达式或者加工逻辑写在computed中

    -5. watch: 基本数据变化引起的其他业务操作(数据同步等)写在watch中

    -6. mixin和util: 一般复杂组件有时候需要在内部提炼代码，但是提炼的代码又不能放到系统全局中，可以在组件目录中创建mixin和utils目录

      原method中需要抽离的业务逻辑放在mixin中，需要抽离的业务无关的方法放在util中，写成纯函数

4.store

  结构：api抽离出去，一个服务对应一个js文件

  /api

  /store

   -/actions

   -/getters

   -/mutations

   -/state

   -/modules

   -index.js

  state：包含个人信息（基本信息&角色信息&权限信息），项目信息（基本信息&流程状态信息）

  store拆分：

   1) 全局state&action&mutation&getters尽量根据系统服务模块拆分组合
     
     例如：
    const user = {

      userInfo: {

      }

    }

    const project = {

      projectInfo: {

      }

    }

    const state = {

      ...user,

      ...project

    }

    export default state

   关于module：
   
   如果系统越来越复杂，并且不想把所有store一次性注册，可以考虑拆分成module（封装性更强，耦合度更低），根据业务动态注册到store中（有的module动态注册到个别组件中更合理）

   例子：
 
  #upload.js

  import state from './state.js'

  import mutations from './mutations.js'

  import actions from './actions.js'

  export default {

    namespaced: true,

    state,

    mutations,

    actions

  }

   系统级注册

   import uploadStore from '@/store/modules/upload'

   store.registerModule('upload', uploadStore)

   ...

   this.$dispatch('upload/getUrl', {})

   ...

   组件级注册

  import fileLinkStore from '@/store/modules/fileLink'

  const action = this.$store._actions['fileLink/addMarkup']

  if (!action) { // 保证只注册一次module

    this.$store.registerModule('fileLink', fileLinkStore)

  }

5.样式

 1) 尽量不要写行内样式，class命名规则要统一（form-wrap）
 
 2) 样式尽量控制在单文件内部，不依赖其他文件

 3) 关于页面主题配置：根据设计规范（字体，色值，线条，间距）创建全局主题风格样式文件，统一覆盖ui框架的样式

 3) 如果某些场景需要自定义覆盖ui框架的样式，在公共style目录中建立自己的命名空间（gld-table）
  
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
