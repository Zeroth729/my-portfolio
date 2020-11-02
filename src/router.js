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
  {
    path: '/work',
    name: 'Work',
    component: () => import(/* webpackChunkName: "work" */ './views/Work.vue'),
    meta: {
      title: 'Work',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    meta: {
      title: 'Contact',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
