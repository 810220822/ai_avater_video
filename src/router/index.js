
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import user from '../views/user.vue';
 
import index from '../views/index.vue';

import avater from '../views/avater.vue';
import source from '../views/source.vue';
import voice from '../views/voice.vue';
import writer from '../views/writer.vue';
const routes = [
  // { path: '/', component:  '<div>home</div>' },
  { path: '/user', component: user },
 
  { path: '/index', component: index },

  { path: '/avater', component: avater },
  { path: '/source', component: source },
  { path: '/voice', component: voice },
  { path: '/writer', component: writer },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;