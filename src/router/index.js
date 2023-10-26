import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Equipe from '../pages/Equipe.vue';
import Funcionario from '../pages/Funcionario.vue';
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
    name: 'Equipe',
    component: Equipe,
  },
  {
    path: '/equipe/:id',
    name: 'Functionario',
    component: Funcionario,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
