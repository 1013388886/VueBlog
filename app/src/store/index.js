import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'
import baseConfig from '@/config/baseConfig.js'
const { TOKEN_NAME } = baseConfig
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: store.get(TOKEN_NAME) || "",
    userinfo: {},
  },
  mutations: {
    LOGIN(state, data) {
      if (data.states === '200') {
        state.isLogin = true;
        Vue.prototype.$message({
          showClose: true,
          message: '登陆成功',
          type: 'success'
        });
      } 
      if(data.states === '300'){
        Vue.prototype.$message({
          showClose: true,
          message: '未找到该用户，请注册',
          type: 'error'
        });
      }
      if(data.states !=='200'&&data.states !=='300') {
        Vue.prototype.$message({
          showClose: true,
          message: '登录失败',
          type: 'error'
        });
      }
    },
    SET_USERINFO(state, data) {
      state.userinfo = data.result  
    },
    OUT_LOGIN(state){
      state.isLogin = false
      store.clearAll()
      state.userinfo = {}
      Vue.prototype.$message({
        showClose: true,
        message: '登出成功',
        type: 'success'
      });
    }
  },
  actions: {
    login({ commit, dispatch }, data) {
      commit('LOGIN', data)
      dispatch('set_userinfo', data)
    },
    set_userinfo({ commit }, data) {
      commit('SET_USERINFO', data)
    },
    out_login({ commit }){
      commit('OUT_LOGIN')
    }
  },
  modules: {
  }
})
