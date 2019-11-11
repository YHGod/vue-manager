import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.scss' // glob scss
import animated from 'animate.css'
import VueRouter from 'vue-router'

Vue.use(animated)
Vue.use(ElementUI)
Vue.config.productionTip = false

// 对Router原型链上的push、replace方法进行重写，这样就不用每次调用方法都要加上catch 防止控制台出现Uncaught (in promise) undefined报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
