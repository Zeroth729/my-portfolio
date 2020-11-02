<template>
  <div class="profile">
    <div
      class="profile__name"
      v-text="name"
    />
    <div
      class="profile__post"
      v-text="post"
    />
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      name: 'Ken Bei',
      post: 'Analyst Programmer',
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {

  &__name, &__post {
    color: white;
    text-transform: uppercase;
  }

  &__name {
    font-size: 28px;
  }

  &__post {
    font-size: 16px;
  }
}
</style>
