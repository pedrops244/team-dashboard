import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Team from '../pages/Team.vue';
import SeeEmail from '../pages/SeeEmail.vue';
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
    name: 'SeeEmail',
    component: SeeEmail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
