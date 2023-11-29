
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import user from '../views/user.vue';
import main from '../views/main.vue';
import index from '../views/index.vue';
const routes = [
  // { path: '/', component:  '<div>home</div>' },
  { path: '/user', component: user },
  { path: '/main', component: main },
  { path: '/index', component: index },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;