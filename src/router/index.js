import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';

const lazyLoad = (view) => import(`../pages/${view}.vue`);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Page404',
    component: lazyLoad('Page404'),
  },
  {
    path: '/equipe',
    name: 'Team',
    component: lazyLoad('Team'),
  },
  {
    path: '/equipe/:id',
    name: 'MoreDetails',
    component: lazyLoad('MoreDetails'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
