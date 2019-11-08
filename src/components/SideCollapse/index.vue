<template>
  <div class="sideCollapse" id="domColapse">
    <i :class="{'el-icon-s-unfold':opened,'el-icon-s-fold':!opened}" @click="toggleShowSlide()"></i>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: mapState({
      opened:'opened'
    }),
    methods: {
      toggleShowSlide(){
//        console.log('点击了')
        this.$store.commit('SET_OPENED', !this.opened)
      }
    },
  }
</script>
<style></style>
