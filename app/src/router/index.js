import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import article from '../views/articleViews/articleTemplate.vue'
import Editor from '../views/Editor.vue'
import NProgress from 'nprogress';
import store from '@/store'
import 'nprogress/nprogress.css';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { login: false }
  },
  {
    path: '/article',
    name: 'article',
    component: article,
    meta: { login: false }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
    meta: { login: true }
  },

]



const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  if(to.meta.login&&!store.state.isLogin){

    Vue.prototype.$message({
      title: '通知',
      message: `请先登录`,
      type: 'error'
    })
    NProgress.done()
    console.log(123);
    next({ name: 'Home' })
  }else{
    window.scrollTo(0,0)
    next()
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router
