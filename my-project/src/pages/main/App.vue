<template>
  <div class="main">
    <mainHeader></mainHeader>
    <div id="div-iframe">
      <iframe src="./index.html" frameborder="0" id="iframe_1" width="100%" height="100%" scrolling="auto"></iframe>
    </div>

  </div>
</template>
<script>
  import mainHeader from '../../components/header.vue'

  export default{
      name: 'mainPage',
      components: {mainHeader}
  }
</script>
<style coped>

  html, body{
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #div-iframe{
    width: 100%;
    height: calc(99vh - 60px);
  }
</style>
