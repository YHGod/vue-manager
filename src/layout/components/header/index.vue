<template>
  <div class="header">
    <div class="header_l">
      <a href="javascript:;" class="logoLink"
      ><img src="./logo.png" alt="logo" />Vue Project</a
      >
    </div>
    <div class="header_r">
      <div class="headr_d1">
        <side-collapse class="sidecoll"></side-collapse>
        <bread-crumb class="bread"></bread-crumb>
      </div>
      <div class="headr_d2">
        <ul class="headrUl clearFixed">
          <li id="domMessage">
            <el-badge is-dot @click.native="toggleMsgShow">
              <i class="el-icon-message-solid iconFont"></i>
            </el-badge>
          </li>
          <li id="domFullScreen">
            <full-screen></full-screen>
          </li>
          <li id="domPersonal">
            <user-dropdown></user-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import SideCollapse from '@/components/SideCollapse/index.vue'
  import BreadCrumb from '@/components/BreadCrumb/index.vue'
  import FullScreen from '@/components/FullScreen/index.vue'
  import UserDropdown from '@/components/UserDropdown/index.vue'
  export default{
    components:{
      SideCollapse,
      FullScreen,
      UserDropdown,
      BreadCrumb
    },
    methods:{
      toggleMsgShow(){
        this.$store.commit('SET_MESSAGE')
      }
    }
  }
</script>
