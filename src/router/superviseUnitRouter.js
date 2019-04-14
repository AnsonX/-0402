/* 主管单位 */

import BaseMainLayout from '@/components/layout/BaseMainLayout'
const SuperviseTjcx = () => import('@/pages/supervise/tjcx')
const SuperviseWdgcqdList = () => import('@/pages/supervise/wdgcqd/list')
const SuperviseWdgcqdForm = () => import('@/pages/supervise/wdgcqd/form')
const SuperviseZjkglZjxxcsList = () => import('@/pages/supervise/zjkgl/zjxxcs/list')
const SuperviseZjkglZjxxcsForm = () => import('@/pages/supervise/zjkgl/zjxxcs/form')
const SuperviseZjkglZjxxshForm = () => import('@/pages/supervise/zjkgl/zjxxcs/form')
const SuperviseZjkglZjxxshList = () => import('@/pages/supervise/zjkgl/zjxxcs/list')
const SuperviseZjkglHgzjxxkForm = () => import('@/pages/supervise/zjkgl/hgzjxxk/form')
const SuperviseZjkglHgzjxxkList = () => import('@/pages/supervise/zjkgl/hgzjxxk/list')
const SuperviseZjkglZjxypjForm = () => import('@/pages/supervise/zjkgl/zjxypj/form')
const SuperviseZjkglZjxypjList = () => import('@/pages/supervise/zjkgl/zjxypj/list')
const SuperviseZjkglHmdForm = () => import('@/pages/supervise/zjkgl/hmd/form')
const SuperviseZjkglHmdList = () => import('@/pages/supervise/zjkgl/hmd/list')
const SuperviseDaglForm = () => import('@/pages/supervise/dagl/form')
const SuperviseDaglList = () => import('@/pages/supervise/dagl/list')

const superviseRouter = [
  {
    path: '/tjcx',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'tjcx',
        component: SuperviseTjcx
      }
    ]
  },
  {
    path: '/wdgcqd/list', // 路由path都要配在第一级，方便配置permission和路由的映射关系，component和children只负责页面组件加载。
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'wdgcqd_list',
        component: SuperviseWdgcqdList
      }
    ]
  },
  {
    path: '/wdgcqd/form',
    name: 'wdgcqd_form',
    component: SuperviseWdgcqdForm
  },
  {
    path: '/zjkgl/zjxxcs/list',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'zjkgl_zjxxcs_list',
        component: SuperviseZjkglZjxxcsList
      }
    ]
  },
  {
    path: '/zjkgl/zjxxcs/form',
    name: 'zjkgl_zjxxcs_form',
    component: SuperviseZjkglZjxxcsForm
  },
  {
    path: '/zjkgl/zjxxsh/list',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'zjkgl_zjxxsh_list',
        component: SuperviseZjkglZjxxshList
      }
    ]
  },
  {
    path: '/zjkgl/zjxxsh/form',
    name: 'zjkgl_zjxxsh_form',
    component: SuperviseZjkglZjxxshForm
  },
  {
    path: '/zjkgl/hgzjxxk/list',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'zjkgl_hgzjxxk_list',
        component: SuperviseZjkglHgzjxxkList
      }
    ]
  },
  {
    path: '/zjkgl/hgzjxxk/form',
    name: 'zjkgl_hgzjxxk_form',
    component: SuperviseZjkglHgzjxxkForm
  },
  {
    path: '/zjkgl/zjxypj/list',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'zjkgl_zjxypj_list',
        component: SuperviseZjkglZjxypjList
      }
    ]
  },
  {
    path: '/zjkgl/zjxypj/form',
    name: 'zjkgl_zjxypj_form',
    component: SuperviseZjkglZjxypjForm
  },
  {
    path: '/zjkgl/hmd/list',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'zjkgl_hmd_list',
        component: SuperviseZjkglHmdList
      }
    ]
  },
  {
    path: '/zjkgl/hmd/form',
    name: 'zjkgl_hmd_form',
    component: SuperviseZjkglHmdForm
  },
  {
    path: '/dagl/list',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'dagl_list',
        component: SuperviseDaglList
      }
    ]
  },
  {
    path: '/dagl/form',
    name: 'dagl_form',
    component: SuperviseDaglForm
  }
]

export default superviseRouter
