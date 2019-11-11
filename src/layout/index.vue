<template>
  <div class="wrapper">
    <m-header></m-header>
    <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutRight"
    >
      <notificat-bar v-show="msgIsShow"></notificat-bar>
    </transition>
    <div class="wrapper_con">
      <side-bar></side-bar>
      <page-main></page-main>
    </div>
  </div>
</template>
<script>
  import MHeader from './components/header/index.vue'
  import SideBar from './components/sideBar/index.vue'
  import PageMain from './components/pageMain/index.vue'
  import NotificatBar from '@/components/NotificatBar'
  export default{
    name:'layout',
    components:{
      MHeader,
      SideBar,
      PageMain,
      NotificatBar
    },
    methods:{

    },
    computed:{
      msgIsShow(){
          return this.$store.state.msgIsShow
      }
    }
  }
</script>
