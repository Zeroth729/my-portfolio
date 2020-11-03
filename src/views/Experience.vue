<template>
  <div class="experience">
    <h1 class="experience__title">Experience</h1>
    <div class="experience__context">
      See my work below. <strong>These are my top items throughout the past six years.</strong>
    </div>
    <ExpGrid
      class="experience__list"
      :expList="expList"
    />
  </div>
</template>

<script>
import data from '@/data/experience.json';
import ExpGrid from '@/components/ExpGrid.vue';

export default {
  name: 'Experience',
  components: {
    ExpGrid,
  },
  data() {
    return {
      expList: data.experience,
    };
  },
};
</script>

<style lang="scss" scoped>
.experience {

  &__title {
    font-size: 36px;
    font-weight: 300;
    color: $tiffany;
    text-transform: uppercase;
  }

  &__context {
    margin-bottom: 20px;
  }
}
</style>
