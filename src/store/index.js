import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import { Message } from 'element-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opened: false,
    msgIsShow: false,
    userName: ''
  },
  mutations: {
    SET_OPENED (state, val) {
      state.opened = val
    },
    SET_MESSAGE (state) {
      state.msgIsShow = !state.msgIsShow
    },
    SET_NAME (state, val) {
      state.userName = val
    },
    CLEAR_LOGIN (state) {
      sessionStorage.removeItem('user');
      state.userName = ''
    },

  },
  actions: {
    loginOut({commit}) {
      commit('CLEAR_LOGIN');
      router.push({
        path: '/login',
        query: {
          redirect: '/'
        }
      })
    },
    LoginIn({commit}, formdatas) {
      return new Promise((resolve, reject) => {
        // 模拟接口数据
        setTimeout(() => {
          Message.success('欢迎登录')
          commit('SET_NAME', formdatas.username)
          let res = { data: { success: 'success' } }
          resolve(res)
        }, 2000)
      })
    }
  },
  modules: {}
})
