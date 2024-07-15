import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateContact.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditContact.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
