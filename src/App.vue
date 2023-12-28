<template>
  <div class="common-layout">
    <!-- common-layout 部分整体布局，浏览器宽高 -->
    <div class="header">

      <Header class="header"></Header>

    </div>
    <div class="main">
       
      <div class="left-aside">
        <CommonAside @handleMenuClick="handleMenuClick"></CommonAside>
      </div>
      <div class="main-content">
        <div class="breadcrumb">
          <PageHeader class="pageHeader" :breadcrumb="breadcrumb" :title="pageTitle" :subTitle="pageSubTitle">
        </PageHeader> 
        </div>
        <div class="pageContent">
          <router-view>

          </router-view>
          
          
        </div>
      </div>
    </div>

  </div>
</template>
<style>
.pageContent{
 
  flex: 1;
  width: 100%;
  height: 100%;
  
}
.common-layout {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
 
}

.header {
  height: 55px;
}

.left-aside {
  width: 230px;
  overflow-y: auto;
  /* 其他样式属性 */
  overflow-x: hidden;
  max-height: calc(100vh - 55px);
  /* 减去header的高度 */
   
  position: relative;
  height: 100%;
  border-right: 1px solid rgb(220, 230, 232);
}

.main {
  display: flex;
  flex: 1;
  height: calc(100vh - 55px);
  /* 减去header的高度 */

}

.main-content {
  flex: 1;
  overflow: hidden;
  
  
}

.breadcrumb {
  display: flex;
  align-items: center; 
  height: 30px;
  width: 100%; 
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

 