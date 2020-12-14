import en from "../i18n/lang/en"
import Vue from "vue"
import Router from "vue-router"
import CommerViews from "@/views/commerViews"
import Login from "@/views/login/index"
import Layout from "@/views/layout/layout"
import HomeMain from "@/views/index/mainIndex"

// 不是必须加载的组件使用懒加载

const NotFound = () => import("@/views/page404")

const Detail = () => import("@/views/check/detailCheck/detailCheckList")
const DetailCheck = () => import("@/views/check/detailCheck/detail")
const Easy = () => import("@/views/check/easyCheck/easyCheckList")
const EasyCheck = () => import("@/views/check/easyCheck/easy")
const Send = () => import("@/views/message/send")
const Register = () => import("@/views/useraccount/registercheck")

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)
let routeName = en.routeName
let defaultRouter = [
  { path: "/",
    redirect: "/index",
    hidden: true,
    children: []
  },
  {
    path: "/login",
    component: Login,
    name: "",
    hidden: true,
    children: []
  },
  {
    path: "/index",
    iconCls: "fa fa-dashboard", // 图标样式class
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: "/index",
        iconCls: "fa fa-dashboard", // 图标样式class
        name: "主页",
        component: HomeMain,
        children: []
      },

    ]
  },
  {
    path: "/404",
    component: NotFound,
    name: "404",
    hidden: true,
    children: []
  }
]

let addRouter = [
  {
    path:"/exhiShow",
    component: () => import("@/views/exhiShow.vue"),
    name:routeName.exhiShow,
    children: []
  },

  {
    path: "/",
    iconCls: "fa fa-check-square-o", // 图标样式class
    name: routeName.check,
    component: Layout,
    children: [
      {
        path: "/easy",
        iconCls: "fa fa-leanpub", // 图标样式class
        name: routeName.easy,
        component: Easy,
        children: [

        ]
      },
      {
        path: "/easyCheck",
        component: EasyCheck,
        name: "EasyCheck",
        hidden: true,
        children: []
      },
      {
        path: "/detail",
        iconCls: "fa fa-wpforms", // 图标样式class
        name: routeName.detail,
        component: Detail,
        children: []
      },
      {
        path: "/detailCheck",
        component: DetailCheck,
        name: "DetailCheck",
        hidden: true,
        children: []
      },
    ]
  },


  {
    path: "/",
    iconCls: "fa fa-file-text", // 图标样式class
    name: routeName.message,
    component: Layout,
    children: [
      {
        path: "/send",
        iconCls: "el-icon-edit", // 图标样式class
        name: routeName.send,
        component: Send,
        children: []
      }
    ]
  },

  {
    path: "/",
    iconCls: "fa fa-user-circle", // 图标样式class
    name: routeName.account,
    component: Layout,
    children: [
      {
        path: "/register",
        iconCls: "fa fa-address-card-o", // 图标样式class
        name: routeName.register,
        component: Register,
        children: []
      }
    ]
  },






  { path: "*",
    redirect: "/404",
    hidden: true,
    component: NotFound
  }

]




export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
