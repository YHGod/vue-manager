import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

/* 通用routers */
export const currencyRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: {title: '登录页'},
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/index.vue'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashbord',
    children: [
      {
        path: 'dashbord',
        name: 'Dashbord',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {title: '首页', icon: 'el-icon-s-data'}
      }
    ]
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Layout,
    redirect: '/personal/index',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Personal-index',
        component: () => import('@/views/About.vue'),
        meta: {title: '个人中心'}
      }
    ]
  },
  {
    path: '/driver',
    name: 'Driver',
    component: Layout,
    redirect: '/driver/index',
    children: [
      {
        path: 'index',
        name: 'Driver-index',
        component: () => import('@/views/driver-page/index.vue'),
        meta: {title: '引导指南', icon: 'el-icon-s-flag'}
      }
    ]
  },
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    redirect: '/permission/page-use',
    meta: {
      title: '权限许可',
      icon: 'el-icon-lock'
    },
    children: [
      {
        path: 'page-user',
        name: 'PageUser',
        component: () => import('@/views/permission/page-user'),
        meta: {title: '用户页面', icon: 'el-icon-user'}
      },
      {
        path: 'page-admin',
        name: 'PageAdmin',
        component: () => import('@/views/permission/page-admin'),
        meta: {
          title: '管理员页面',
          icon: 'el-icon-user-solid'
        }
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/permission/roles'),
        meta: {title: '权限设置', icon: 'el-icon-s-tools'}
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    redirect: '/table/base-table',
    component: Layout,
    meta: {
      title: 'Table',
      icon: 'el-icon-table iconfont'
    },
    children: [
      {
        path: 'base-table',
        name: 'BaseTable',
        component: () => import('@/views/table/common-table'),
        meta: {title: '普通表格'}
      },
      {
        path: 'complex-table',
        name: 'ComplexTable',
        component: () => import('@/views/table/complex-table'),
        meta: {title: '复杂表格'}
      }
    ]
  },
  {
    path: '/icons',
    component: Layout,
    name: 'Icons',
    redirect: '/icons/index',
    children: [
      {
        path: 'index',
        name: 'Icons-index',
        component: () => import('@/views/icons'),
        meta: {title: 'Icons图标', icon: 'el-icon-picture-outline'}
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    name: 'Error',
    redirect: '/error/404',
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/error-page/index.vue'),
        meta: {title: '404', icon: 'el-icon-s-release'}
      }
    ]
  },
  {
    path: 'https://github.com/gcddblue/vue-admin-webapp',
    name: 'Github',
    meta: {icon: 'el-icon-link', title: '项目链接'}
  },
]

const creatRouter = () => {
  return new VueRouter({
    routes: currencyRoutes,
    scrollBehavior () {
      return {x: 0, y: 0}
    }
  })
}

const router = creatRouter()

// 导航守卫  验证是否登录了  没有登录跳转到登录页面
router.beforeEach((to, from, next) => {
  console.log(to.path);
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  var user = sessionStorage.getItem('user');
  if (!user && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router
