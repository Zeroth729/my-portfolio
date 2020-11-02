<template>
  <div class="navigation">
    <ul>
      <li
        v-for="(navItem, navIdx) in navList"
        :key="navIdx"
        class
      >
        <router-link
          :to="navItem.path"
          v-text="navItem.name"
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

}
</style>
