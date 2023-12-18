<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside class="aside" style="background-color: white;">

          <CommonAside @handleMenuClick="handleMenuClick"></CommonAside>
        </el-aside>
        <div style="width: 100%;height: 100%;">
          <PageHeader class="pageHeader" :breadcrumb="breadcrumb" :title="pageTitle" :subTitle="pageSubTitle">
          </PageHeader>

          
            <router-view>

</router-view>
           
         


        </div>


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
  border: 0px solid;

}

.pageHeader {
  display: flex;
  /* flex-direction: column; */
  align-items: stretch;

  background-color: #f5f5f5;
  height: 25px;
  margin-top: 0;
  margin-left: 0;
  display: flex;
  align-items: center;

  width: 100%;
  height: 35px;
  background-color: red;

}

.header {

  width: 100vw;
  height: 55px;
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* 填充剩余空间 */

}
</style>
<script>
import CommonAside from './components/CommonAside.vue';
import Header from './components/Header.vue';
import PageHeader from './components/PageHeader.vue';
export default {
  data() {
    return {
      breadcrumb: [

        { index: '0', route: '/index', label: '首页' },

      ], // 初始为空数组
      pageTitle: '', // 初始为空字符串
      pageSubTitle: '', // 初始为空字符串
    };
  },
  methods: {
    handleMenuClick(path, title) {
      // 根据左侧菜单点击事件更新面包屑和标题
      this.breadcrumb = [
        { index: '0', route: path, label: title },
        // { route: path, label: 'route 1' },
        // { route: path, label: 'route 2' }
      ];
      this.pageTitle = title;
      // this.pageSubTitle = 'Sub title'; console.log('dddddddddd')
    },

  },

  name: 'App',
  components: {
    CommonAside, Header, PageHeader
  }
}
</script>

 