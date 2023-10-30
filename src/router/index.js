import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Team from '../pages/Team.vue';
import MoreDetails from '../pages/MoreDetails.vue';
import Page404 from '../pages/Page404.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Page404',
    component: Page404,
  },
  {
    path: '/equipe',
    name: 'Team',
    component: Team,
  },
  {
    path: '/equipe/:id',
    name: 'MoreDetails',
    component: MoreDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
