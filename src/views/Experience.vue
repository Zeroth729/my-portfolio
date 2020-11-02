<template>
  <div class="experience">
    <h1 class="experience__title">Experience</h1>
    <div class="experience__context">
      See my work below. <strong>These are my top items throughout the past six years.</strong>
    </div>
    <div class="experience__list">
      <div
        v-for="(exp, expIdx) in expList"
        :key="expIdx"
        class="experience__item work"
      >
        <div class="work__period">
          <span
            class="work__period-text"
            v-text="exp.period"
          />
        </div>
        <div class="work__main">
          <div
            v-for="(work, workIdx) in exp.work"
            :key="workIdx"
            class="work__main-item"
          >
            <div
              class="work__main--left"
              :class="{
                fullwidth: !hasImage(work.image)
              }"
            >
              <div
                class="work__title"
                v-text="work.title"
              />
              <div
                class="work__context"
                v-html="work.context"
              />
              <div class="work__body">
                <v-btn
                  v-if="work.url"
                  :href="work.url"
                  v-text="'Go to Site'"
                  target="_blank"
                  color="#22A39F"
                  dark
                />
                <div
                  v-if="work.tech"
                  class="work__tech"
                >
                  <div
                    class="work__tech-text"
                    v-text="'Technologies'"
                  />
                  <v-chip
                    class="work__tech-chip"
                    v-for="(tech, techIdx) in work.tech"
                    :key="techIdx"
                    v-text="tech"
                    color="#22A39F"
                    dark
                    label
                    small
                  />
                </div>
              </div>
            </div>
            <div
              v-if="work.image"
              class="work__main--right"
            >
              <v-img
                class="work__image"
                :src="getImgUrl(work.image)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data/experience.json';
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'Experience',
  data() {
    return {
      expList: data.experience,
    };
  },
  mounted() {
    console.log(this.expList);
  },
  methods: {
    getImgUrl(pic) {
      return `/static/images/${pic}`;
    },
    hasImage(img) {
      return !isEmpty(img);
    },
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

.work {
  $period-width: 90px;

  display: flex;

  &__period {
    position: relative;
    padding: 0 10px 0 0;
    width: $period-width;
    text-align: right;
    font-style: italic;
    border-right: 1px solid $border-color;

    &-text {
      position: relative;
      color: $border-color;
      top: 18px;
      font-size: 0.875rem;
    }

    &:after {
      content: '';
      width: 8px;
      height: 8px;
      background-color: $tiffany;
      position: absolute;
      top: 28px;
      right: -5px;
    }
  }

  &__main {
    padding: 0 10px;
    width: calc(100% - #{$period-width});

    &-item {
      padding: 20px 0;
      margin-bottom: 20px;
      border-bottom: 1px solid $border-color;

      &:first-child ~ & {
        padding-top: 0;
      }
    }

    &--left, &--right {
      width: 50%;
      @include valign(top);

      @include tabletAndDown {
        width: 100%;
      }
    }

    &--right {
      padding-left: 10px;

      @include tabletAndDown {
        padding-left: 0;
        margin-top: 20px;
      }
    }
  }

  &__title {
    color: $tiffany;
    font-size: 28px;
    line-height: 1em;
    margin-bottom: 10px;
  }

  &__context {
    margin-bottom: 20px;
  }

  &__image {
    width: 100%;
  }

  &__tech {
    margin-top: 20px;
    white-space: nowrap;

    @include tabletAndDown {
      white-space: normal;
    }

    &-text {
      font-size: 12px;
      text-transform: uppercase;
    }

    &-chip {
      margin-left: 5px;

      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }
}
</style>
