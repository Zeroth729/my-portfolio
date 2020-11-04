<template>
  <div class="home">
    <div class="home__introduction">
      I'm an analyst programmer living in Hong Kong.<br>
      Now working at Commercial Radio Interactive.<br>
      Tech Stack: VueJS & PHP<br>
      Now studying: React & Golang
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;

  &__introduction {
    font-size: 30px;
    font-family: 'Itim', cursive;
    color: $tiffany;

    @include mobile() {
      font-size: 26px;
    }
  }
}
</style>
