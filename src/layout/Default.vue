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
};
</script>

<style lang="scss" scoped>
.site {
  background-color: $bg-default;

  &__menu {
    position: fixed;
    top: 0;
    left: 0;
    padding: 45px 40px;
    width: 25%;
    height: 100%;
    background-color: $tiffany;
    opacity: 0.75;

    @include tabletAndDown {
      position: relative;
      width: 100%;
      height: auto;
    }
  }

  &__navigation {
    margin: 30px 0 0 0;
  }

  &__main {
    padding: 50px;
    margin-left: 25%;
    max-width: 1000px;
    min-height: 1000px;
    color: $text-color;
    background-color: $bg-color-1;

    @include tabletAndDown {
      margin-left: 0;
      max-width: none;
    }
  }
}
</style>
