<template>
  <div>
    <i class="el-icon-full-screen iconfont" @click="toggleFull"></i>
  </div>
</template>

<script>
  import screenfull from 'screenfull'
  export default {
    data(){
      return {
        isFullscreen: false
      }
    },
    methods: {
      toggleFull(){
        if (!screenfull.isEnabled) { // 如果不允许进入全屏，发出不允许提示
          this.$message({
            message: '不支持全屏',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
        this.$message({
          message: '全屏啦',
          type: 'success'
        })
      }
    }
  }
</script>
