<template>
  <div class="navigation">
    <ul
      class="navigation__list"
    >
      <li
        v-for="(navItem, navIdx) in navList"
        :key="navIdx"
        class="navigation__item"
        :class="{
          active: activePage === navItem.path
        }"
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
    activePage: {
      type: String,
      default: '',
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
    margin: 0 0 10px;
    font-size: 20px;

    @include tabletAndDown {
      font-size: 40px;
    }

    &.active {

      &:after {
        color: $text-color-highlight;
      }

      &:hover:after {
        margin-left: 5px;
      }
    }

    &:after {
      content: '\F0A9';
      margin-left: 5px;
      color: white;
      font-size: 0.75em;
      font-family: 'fontello';
      transition: margin-left 0.2s ease-in;
      @include valign(middle);

      @include tabletAndDown {
        font-size: 0.5em;
      }
    }

    &:hover:after {
      margin-left: 10px;
    }
  }

  &__link {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    @include valign(baseline);

    @include tabletAndDown {
      font-size: 40px;
    }

    .active & {
      color: $text-color-highlight;
      font-weight: bold;
      pointer-events: none;
    }
  }
}
</style>
