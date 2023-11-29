<template>
  <div class="common-layout">
    <el-container>
      <el-header  class="header">Header</el-header>
      <el-container>
        <el-aside class="aside">
          <common-aside />
        </el-aside>
        <el-main> 
          
          <router-view>
              
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.common-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
}

.header {
  background-color: lightblue;
}

.aside {
  background-color: orange;
  border: 0px;
  width: 200px;
  flex: 0 0 200px; /* 固定左侧宽度为 200px */
}
</style>
<script>
import CommonAside from './components/CommonAside.vue';
 
export default {
  name: 'App' ,
  components: {
    CommonAside
  }
}
</script>

 