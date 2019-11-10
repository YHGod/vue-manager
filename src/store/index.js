import Vue from 'vue'
import Vuex from 'vuex'
import router, { asyncRoutes, currencyRoutes, resetRouter } from '../router/index'
import { Message } from 'element-ui'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opened: false,
    msgIsShow: false,
    userName: '',
    rules: '', // 通过接口请求到当前用户的路由权限
    addRoutes: [],
    introduce: '', // 自我介绍
    routes: [] // 所有路由
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
      sessionStorage.removeItem('user')
      state.userName = ''
    },
    SET_RULES (state, val) {
      state.rules = val
    },
    SET_Introduce (state, val) {
      state.introduce = val
    },
    SET_ROUTES (state, payload) {
      state.routes = [...currencyRoutes, ...payload]
      state.addRoutes = payload
    }
  },
  actions: {
    loginOut({commit}) {
      commit('CLEAR_LOGIN')
      resetRouter()
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
          console.log(formdatas.username)
          let res = {data: {success: 'success'}}
          resolve(res)
        }, 2000)
      })
    },
    getRoutes({commit, rootState}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('获取用户对应权限路由成功')
          var datas = {}
          if (rootState.userName === 'admin') {
            datas = {
              'name': 'admin',
              'roles': ['Home', 'Dashbord', 'Driver', 'Driver-index', 'Permission', 'PageUser', 'PageAdmin', 'Roles', 'Table', 'BaseTable', 'ComplexTable', 'Icons', 'Icons-index', 'Error', 'Page404'],
              'introduce': '我是大佬'
            }
          } else {
            datas = {
              'name': 'user',
              'roles': ['Home', 'Dashbord', 'Driver', 'Driver-index', 'Permission', 'PageUser', 'Table', 'BaseTable', 'ComplexTable', 'Icons', 'Icons-index', 'Error', 'Page404'],
              'introduce': '我是垃圾'
            }
          }
          const {name, roles, introduce} = datas
          commit('SET_RULES', roles)
          commit('SET_Introduce', introduce)
          resolve(datas)
        }, 2000)
      })
    },
    getAsyncRoutes({commit, rootState}, roles) {
      return new Promise((resolve, reject) => {
        let routes = []
        if (rootState.userName === 'admin') {
          routes = asyncRoutes || ''
          console.log(routes)
        } else {
          routes = forSearchArr(asyncRoutes, roles)
        }
        commit('SET_ROUTES', routes)
        resolve(routes)
      })
    }
  },
  modules: {}
})

/**
 * 遍历动态路由
 * @param route  路由
 * @param roles  规则
 */
function forSearchArr (route, roles) {
  let arrNew = []
  for (let item of route) {
    let itemNew = { ...item }
    if (roles.includes(itemNew.name)) {
      if (itemNew.children) {
        itemNew.children = forSearchArr(itemNew.children, roles)
      }
      arrNew.push(itemNew)
    }
  }
  return arrNew
}
