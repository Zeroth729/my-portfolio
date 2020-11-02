import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "experience" */ './views/Experience.vue'),
    meta: {
      title: 'Experience',
    },
  },
  {
    path: '/abilities',
    name: 'Abilities',
    component: () => import(/* webpackChunkName: "abilities" */ './views/Abilities.vue'),
    meta: {
      title: 'Abilities',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
