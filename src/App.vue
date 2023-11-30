<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Header ></Header>
      </el-header>
      <el-container>
        <el-aside class="aside" style="background-color: white;">
       
          <CommonAside ></CommonAside>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 0px solid ;

}

.header {

  width: 100vw;

  margin: 0;
  padding: 0;

}

.aside {
  background-color: white;
  border: 0px;
  width: 200px;
  
 

}

.el-main {
  flex: 1;
  /* 填充剩余空间 */
}
</style>
<script>
import CommonAside from './components/CommonAside.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    CommonAside, Header
  }
}
</script>

 