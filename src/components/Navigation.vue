<template>
  <div class="navigation">
    <ul
      class="navigation__list"
    >
      <li
        v-for="(navItem, navIdx) in navList"
        :key="navIdx"
        class="navigation__item"
      >
        <router-link
          :to="navItem.path"
          v-text="navItem.name"
          class="navigation__link"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    navList: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {

  &__list {
    padding: 0;
  }

  &__item {
    list-style-type: none;
    margin: 0 0 20px;
    font-size: 20px;

    &:after {
      content: '\F0A9';
      margin-left: 5px;
      color: white;
      font-size: 0.75em;
      font-family: 'fontello';
      transition: margin-left 0.2s ease-in;
      @include valign(middle);
    }

    &:hover:after {
      margin-left: 10px;
    }
  }

  &__link {
    color: white;
    text-decoration: none;
    @include valign(baseline);
  }
}
</style>
