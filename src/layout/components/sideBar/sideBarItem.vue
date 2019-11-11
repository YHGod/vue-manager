<template>
  <div class="sideItem" v-if="!item.hidden">
    <!--单个-->
    <template v-if="hasOnlyChild(item.children,item) && (!childItem.children || childItem.noChild)">
      <el-menu-item :index="resolvePath(childItem.path)">
        <i :class="childItem.meta.icon ? childItem.meta.icon : ''"></i>
        <span slot="title">{{childItem.meta.title}}</span>
      </el-menu-item>
    </template>
    <!--多级菜单组合-->
    <el-submenu v-else :index="resolvePath(item.path)" :popper-append-to-body="true">
      <template slot="title">
        <i :class="item.meta.icon ? item.meta.icon : ''"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <!--递归生成多级菜单-->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="resolvePath(child.path)"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
  import {isAbsolutePath} from '@/utils/validate.js'
  import path from 'path'
  export default {
    name: 'SidebarItem',
    props: {
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        childItem: null
      }
    },
    methods: {
      hasOnlyChild(children = [], item){
        let newChildren = children.filter(obj => {
          if (obj.hidden) {
            return false
          } else {
            return true
          }
        })
        if (newChildren.length === 1 && !item.meta) {
          this.childItem = newChildren[0]
          return true
        }
        if (newChildren.length === 0) {
          this.childItem = {...item, path: '', noChild: true}
          return true
        }
        return false
      },
      resolvePath(router){
        if (isAbsolutePath(router)) {
          return router
        }
        if (isAbsolutePath(this.basePath)) {
          return this.basePath
        }
        return path.join(this.basePath, router)
      }
    }
  }
</script>
