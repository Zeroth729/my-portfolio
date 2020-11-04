<template>
  <div class="abilities">
    <div class="abilities__header"
       v-text="'Abilities'"
    />
    <RatingGrid
      header="Skills"
      :skill-list="skills"
    />
    <RatingGrid
      header="Languages (Written + Spoken)"
      :skill-list="languages"
    />
    <RatingGrid
      header="Tools"
      :skill-list="tools"
    />
  </div>
</template>

<script>
import RatingGrid from '@/components/RatingGrid.vue';

export default {
  name: 'Abilities',
  components: { RatingGrid },
  data() {
    return {
      skills: {
        'Bootstrap Framework': 3,
        'CSS(3)': 5,
        'HTML(5)': 5,
        NodeJS: 4,
        JSON: 5,
        React: 2,
        VueJS: 5,
        MySQL: 4,
        PHP: 4,
        Golang: 1,
        XML: 4,
        'Command line Inteface': 3,
        JQuery: 5,
        Javascript: 4,
        Phalcon: 4,
        'MVC Pattern': 4,
        'Object Orientated Programming': 4,
        'SASS / SCSS': 5,
        SEO: 5,
        BEM: 5,
        ElasticSearch: 2,
        Ruby: 2,
        Apache: 3,
        Nginx: 3,
        'WCAG 2.0': 4,
      },
      languages: {
        Cantonese: 5,
        Mandarin: 4,
        English: 4,
        Japanese: 3,
      },
      tools: {
        'FileZilla (4 years)': 4,
        'Firefox (6 years)': 4,
        'Safari (3 years)': 3,
        'MS Office (10+ years)': 4,
        'Mac (3 years)': 4,
        'Webkit browsers (10+ years)': 4,
        'Windows (10+ years)': 4,
        'Git / Git Flow (1 year)': 2,
        'Internet Explorer 10+ (6 years)': 4,
        'MAMP (3 year)': 4,
        'PHPStorm (3 years)': 4,
        'WebStorm (3 years)': 4,
        'Sublime Text (5 years)': 4,
        'Subversion (3 years)': 3,
        'Adobe Photoshop (1 years)': 2,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.abilities {

  &__header, &__subheader {
    font-weight: 300;
    color: #22A39F;
    text-transform: uppercase;
  }

  &__header {
    font-size: 36px;
  }

  &__subheader {
    font-size: 26px;
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
