import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// restCss
import '@/assets/css/Reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/monokai-sublime.css'

import '@/plugin/animated.js'
// element
import '@/plugin/element.js'

// 自定义方法
import '@/plugin/getData.js'
import http from '@/http/http.js'

// 注册全局组件
import intall from '@/plugin/install.js'
Vue.use(intall)

Vue.prototype.$bus = new Vue()
Vue.prototype.$http = http

new Vue({
  router,
  store,  
  render: h => h(App)
}).$mount('#app')
