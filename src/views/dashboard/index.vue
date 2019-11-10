<template>
  <div>
    <components :is="componentName"></components>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import  AdminComponent from './admin/index.vue'
  import  UserConponent from './user/index.vue'
  export default {
    computed: {
      ...mapState(['userName']),
      componentName() {
        if (this.userName === 'admin') {
          return 'AdminComponent'
        } else {
          return 'UserConponent'
        }
      }
    },
    components: {
      AdminComponent,
      UserConponent
    }
  }
</script>
