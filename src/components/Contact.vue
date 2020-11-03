<template>
  <div class="contact">
    Contact
    <ul class="contact__list">
      <li class="contact__item">
        <a
          class="contact__icon contact__icon--linkedIn"
          href="https://www.linkedin.com/in/ken-bei-2914739a/"
          target="_blank"
        />
      </li>
      <li class="contact__item">
        <a
          class="contact__icon contact__icon--email"
          href="mailto:kenbei01@yahoo.com.hk"
          target="_blank"
        />
      </li>
      <li class="contact__item">
        <a
          class="contact__icon contact__icon--github"
          href="https://github.com/Zeroth729"
          target="_blank"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 100px;
  text-transform: uppercase;
  color: white;

  &__list {
    padding: 0;
  }

  &__item {
    display: inline-block;
    margin-left: 10px;

    @include tabletAndDown {
      margin-left: 20px;
    }

    &:first-child {
      margin-left: 0;
    }
  }

  &__icon {

    &:before {
      font-size: 18px;
      font-family: 'fontello';
      color: white;

      @include tabletAndDown {
        font-size: 30px;
      }
    }

    &--linkedIn {

      &:before {
        content: '\F30C';
      }
    }

    &--email {

      &:before {
        content: '\F0E0';
      }
    }

    &--github {

      &:before {
        content: '\F300';
      }
    }
  }
}
</style>
