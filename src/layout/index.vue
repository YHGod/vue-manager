<template>
  <div class="wrapper" :class="{ closeBar: opened }">
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
  import { mapState } from 'vuex'
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
      ...mapState(['opened']),
      msgIsShow(){
          return this.$store.state.msgIsShow
      }
    }
  }
</script>
