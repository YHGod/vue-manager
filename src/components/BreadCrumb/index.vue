<template>
  <div class="breadDiv" id="domBread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :to="item.path"
        :key="index"
      >
        {{item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        breadList: []
      }
    },
    watch: {
      $route: {
        handler(route) {
//            console.log(route)
          let allList = route.matched.filter(item => {
            if (item.meta && item.meta.title) {
              if (item.redirect) { //如果存在则说明为一级路由 将path只为''
                item.path = ''
              }
              return true
            }
          })
//          console.log(allList);
          if (allList[0].path !== '/' && allList[0].path !== '/dashbord') {
            allList.unshift({path: '/', meta: {title: '首页'}})
          }
          this.breadList = allList
        },
        immediate: true
      }
    }
  }
</script>
