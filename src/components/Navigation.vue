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

    &:after {
      content: '\E766';
      font-family: 'fontello';
      color: white;
    }
  }

  &__link {
    color: white;
    text-decoration: none;

    &:hover {

    }
  }
}
</style>
