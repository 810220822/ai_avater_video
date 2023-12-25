import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import '@element-plus/icons-vue/dist/icon.css'; // 引入 Element Icon 样式文件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue';

import router from './router';
import axios from 'axios';
// import VueAxios from 'vue-axios';

const app = createApp(App);

// const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
  //   console.log(key)
}
 
app.use(ElementPlus);
app.use(router); // 使用 Vue Router 插件
// app.use(VueAxios, axios);
app.config.globalProperties.$http = axios; // 将 axios 实例添加到全局属性中


// app.use(VueAxios)
app.mount('#app');