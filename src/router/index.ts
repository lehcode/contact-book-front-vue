import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateContact from '../views/CreateContact.vue';
import EditContact from '../views/EditContact.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateContact
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditContact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
