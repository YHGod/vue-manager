<template>
  <div class="pageUser">
    <el-card>
      <div class="driver_p0">
        <i class="el-icon-s-opportunity"></i>你的权限页面是:
      </div>
      <el-tag v-for="(item,index) in rules">{{item}}</el-tag>
    </el-card>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['rules'])
    }
  }
</script>
<style scoped lang="scss">
  .pageUser .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .driver_p0 {
    font-size: 14px;
    margin-bottom: 20px;
    i {
      margin-right: 5px;
      color: #ffc107;
      font-size: 18px;
    }
  }
</style>
