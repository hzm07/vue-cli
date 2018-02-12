<style coped>
  .index {
    font-size: 14px;
  }
</style>
<template>

  <div id="app" class="index">

    这是首页<br>
    <el-button type="success" @click="handleClick">成功按钮</el-button>
    <el-button type="warning" @click="handleClick">警告按钮</el-button>
    <el-button type="danger" @click="handleClick">危险按钮</el-button>
    <el-button type="info" @click="handleClick">信息按钮</el-button>
    <hello></hello>

    <table class="table table-striped table-hover ">
      <thead>
        <tr>
          <th>序号</th>
          <th>列1</th>
          <th>列2</th>
          <th>列3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="info">
          <td>3</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="success">
          <td>4</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="danger">
          <td>5</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="warning">
          <td>6</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="active">
          <td>7</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>
<script>
  import hello from '../../components/HelloWorld.vue'

export default {
  name: 'index',
  components: { hello},
  methods:{
    handleClick(key) {
      console.log(key);
    }
  }
}

</script>
