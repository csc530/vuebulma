<template>
  <bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
    <bulma-hero :colour="colour" :size="size">
      <bulma-heading is-spaced type="title">
        Hero title
      </bulma-heading>
      <bulma-heading is-spaced type="subtitle">
        Hero subtitle
      </bulma-heading>
    </bulma-hero>
  </bulma-box>

  <bulma-box>
    <bulma-heading>Props</bulma-heading>
    <fieldset
        class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
        name="props">

      <bulma-form-field is-horizontal label="Colour">
        <bulma-select v-model="colour" :options="getBulmaColours()"/>
      </bulma-form-field>
      <bulma-form-field is-horizontal label="Size">
        <bulma-select v-model="size" :options="getBulmaHeroSizes()"/>
      </bulma-form-field>
    </fieldset>
  </bulma-box>
</template>

<script setup lang="ts">

import BulmaHero from "../../vbComponents/layouts/BulmaHero.vue";
import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";
import {BulmaColour, BulmaHeroSize, getBulmaColours, getBulmaHeroSizes} from "../../types";
import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
import {ref} from "vue";

const colour = ref<BulmaColour>('warning')
const size = ref<BulmaHeroSize>('large')
</script>