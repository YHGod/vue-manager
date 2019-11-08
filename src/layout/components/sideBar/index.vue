<template>
  <div id="domSideBar" class="sideBar">
    <el-scrollbar>
      <el-menu
        :collapse="opened"
        mode="vertical"
        router
        class="el-menu-vertical-demo"
        background-color="#3a3f51"
        text-color="#b5b6bd"
        active-text-color="rgb(79, 148, 212)"
      >
        <sidebar-item
          v-for="item in routes"
          :key="item.path"
          :item="item"
          :basePath="item.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import SidebarItem from './sideBarItem.vue'
  import {mapState}  from 'vuex'
  export default {
    data(){
      return {
        routes:this.$router.options.routes
      }
    },
    computed: mapState({
      opened: 'opened'
    }),
    components: {
      SidebarItem
    },
    methods: {
      handleOpen(key, keyPath) {
//        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

