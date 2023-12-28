
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
 
 
import index from '../views/index.vue';

import avater from '../views/avater.vue';
 
import voice from '../views/voice.vue';
import writer from '../views/writer.vue';
import box from '../views/box.vue';
const routes = [
 
 
  { path: '/index', component: index },

  { path: '/avater', component: avater },
 
  { path: '/voice', component: voice },
  { path: '/writer', component: writer },
  { path: '/box', component: box },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;