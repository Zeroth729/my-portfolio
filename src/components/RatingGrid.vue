<template>
  <div class="rating-grid">
    <div class="rating-grid__header"
         v-text="header"
    />
    <ul class="rating-grid__list">
      <li
        v-for="(rate, name) in skillList"
        :key="name"
        class="rating-grid__item"
      >
        {{ name }}
        <v-rating
          class="rating-grid__rating"
          dense
          half-increments
          readonly
          color="#D69F22"
          length="5"
          size="20"
          :value="rate"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RatingGrid',
  props: {
    header: {
      type: String,
      default: 'header',
    },
    skillList: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.rating-grid {
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid $border-color;

  &__header {
    font-size: 26px;
    font-weight: 300;
    color: #22A39F;
    text-transform: uppercase;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
  }

  &__item {
    $gap: 30px;
    display: flex;
    justify-content: space-between;
    width: calc((100% - #{$gap}) / 2);

    &:nth-child(odd) {
      margin-right: #{$gap};

      @include mobile {
        margin-right: 0;
      }
    }

    @include mobile {
      width: 100%;
    }
  }

  &__rating {
    @include valign(bottom);
  }
}
</style>
