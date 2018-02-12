<template>
  <div class="header">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">基础数据管理</template>
        <el-menu-item index="2-1">用户管理</el-menu-item>
        <el-menu-item index="2-2">部门管理</el-menu-item>
        <el-menu-item index="2-3">角色管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">业务管理</template>
        <el-menu-item index="3-1">入库管理</el-menu-item>
        <el-menu-item index="3-2">出库管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
          switch (key){
            case '1': document.getElementById('iframe_1').src = './index.html';break;
            case '2-1': document.getElementById('iframe_1').src = './boys.html';break;
            case '2-2': document.getElementById('iframe_1').src = './goods.html';break;
            case '2-3': document.getElementById('iframe_1').src = './boys.html';break;
            case '3-1': document.getElementById('iframe_1').src = './sotho.html';break;
          }

      }
    }
  }
</script>
