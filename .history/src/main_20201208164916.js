// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import ElementUI from "element-ui"
import App from "./App.vue"
import router from "./router"
import store from "./vuex"
import i18n from "./i18n/i18n"
import globalPlugin from "./utils/global"
import permission from "./directive/permission/button"
import NProgress from "nprogress"

import "nprogress/nprogress.css"
import "element-ui/lib/theme-chalk/index.css"
import "@/assets/iconfont/iconfont.css"
import "font-awesome/css/font-awesome.css"
import "@/router/permission"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(globalPlugin)
Vue.use(permission)

//iView的使用
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

//视频播放
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
Vue.use(VideoPlayer)

var axios = require('axios')
// axios.defaults.baseURL = 'http://192.168.1.101:8445/api'
axios.defaults.baseURL = 'http://10.28.160.250:8445/api'
Vue.prototype.$axios = axios

NProgress.inc(0.2)
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false })

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: h => h(App),
  components: {App},
  template: "<App/>"
})
