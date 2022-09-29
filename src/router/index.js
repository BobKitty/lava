import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IndividualView from '../views/IndividualView.vue';
import DocView from '../views/DocView.vue';
import InvoiceView from '../views/InvoiceView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/individual',
      name: 'individual',
      component: IndividualView
    },
    {
      path: '/doc',
      name: 'doc',
      component: DocView
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: InvoiceView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router;
