<template>
  <div>
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
                fullwidth: !hasImage(work.images)
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
            <div
              v-if="work.task"
              class="work__body task"
            >
              <p class="task__header">Key Task</p>
              <ul class="task__list">
                <li
                  v-for="(task, taskIdx) in work.task"
                  :key="taskIdx"
                  class="task__item"
                >
                  <span
                    class="task__title"
                    v-text="task.title"
                  />
                  <span
                    class="task__context"
                    v-html="task.context"
                  />
                </li>
              </ul>
            </div>
            <div class="work__footer">
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
            v-if="work.images"
            class="work__main--right"
          >
            <v-carousel
              v-if="work.images.length > 1"
              cycle
              hide-delimiters
              height="auto"
              class="work__preview"
            >
              <v-carousel-item
                v-for="image in work.images"
                :key="image"
              >
                <v-img
                  :src="getImgUrl(image)"
                />
              </v-carousel-item>
            </v-carousel>
            <v-img
              class="work__preview"
              v-else-if="work.images.length === 1"
              :src="getImgUrl(work.images[0])"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'ExpGrid',
  props: {
    expList: {
      type: Array,
      required: true,
    },
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
.work {
  $period-width-xl: 90px;
  $period-width-sm: 50px;

  display: flex;

  &__period {
    position: relative;
    padding: 0 10px 0 0;
    width: $period-width-xl;
    text-align: right;
    font-style: italic;
    border-right: 1px solid $border-color;

    @include tabletAndDown {
      width: $period-width-sm;
    }

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
    width: calc(100% - #{$period-width-xl});

    @include tabletAndDown {
      width: calc(100% - #{$period-width-sm});
    }

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

  &__preview {
    margin-top: 40px;

    @include tabletAndDown {
      margin-top: 0;
    }

    /deep/ .v-window {

      &__prev, &__next {
        top: 50%;
        transform: translateY(-50%);
      }
    }
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

.task {

  &__list {
    margin-bottom: 30px;
    color: $tiffany;
  }

  &__item {
    margin-bottom: 10px;
  }

  &__header {
    color: $border-color;
    font-size: 20px;
    margin-bottom: 5px;
    font-style: italic;
  }

  &__title {
    font-size: 18px;
    color: $tiffany;
  }

  &__context {
    color: $text-color;
    font-size: 14px;
    display: block;
    text-align: justify;
  }
}
</style>
