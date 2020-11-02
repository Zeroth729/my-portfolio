<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
import DefaultLayout from '@/layout/Default.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
  watch: {
    $route: {
      handler: (to) => {
        console.log(to);
        document.title = `KenB's Portfolio | ${to.meta.title}`;
      },
      immediate: true,
    },
  },
};
</script>
