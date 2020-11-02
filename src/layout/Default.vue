<template>
  <div class="site">
    <aside class="site__menu">
      <Profile />
      <Navigation
        class="site__navigation"
        :nav-list="routes"
      />
    </aside>
    <div class="site__main">
      <slot/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Profile from '@/components/Profile.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Default',
  components: {
    Profile,
    Navigation,
  },
  data() {
    const { routes } = this.$router.options;
    return {
      routes,
    };
  },
  computed: {
    ...mapState(['activePage']),
  },
  mounted() {
    console.log(this.routes);
  },
};
</script>

<style lang="scss" scoped>
.site {

  &__menu {
    position: fixed;
    top: 0;
    left: 0;
    padding: 45px 40px;
    width: 25%;
    height: 100%;
    background-color: $tiffany;
    opacity: 0.75;
  }

  &__navigation {
    margin: 30px 0 0 0;
  }

  &__main {
    padding: 50px;
    margin-left: 25%;
    height: 1000px;
  }
}
</style>
