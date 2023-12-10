<template>
  <v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
    <v-bulma-hero :colour="colour" :size="size">
      <v-bulma-heading is-spaced type="title">
        Hero title
      </v-bulma-heading>
      <v-bulma-heading is-spaced type="subtitle">
        Hero subtitle
      </v-bulma-heading>
    </v-bulma-hero>
  </v-bulma-box>

  <v-bulma-box>
    <v-bulma-heading>Props</v-bulma-heading>
    <fieldset
        class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
        name="props">

      <v-bulma-form-field is-horizontal label="Colour">
        <v-bulma-select v-model="colour" :options="getBulmaColours()"/>
      </v-bulma-form-field>
      <v-bulma-form-field is-horizontal label="Size">
        <v-bulma-select v-model="size" :options="getBulmaHeroSizes()"/>
      </v-bulma-form-field>
    </fieldset>
  </v-bulma-box>
</template>

<script setup lang="ts">
import VBulmaHero from "../../vbComponents/layouts/VBulmaHero.vue";
import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";
import {BulmaColour, BulmaHeroSize, getBulmaColours, getBulmaHeroSizes} from "../../types";
import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
import {ref} from "vue";

const colour = ref<BulmaColour>('warning')
const size = ref<BulmaHeroSize>('large')
</script>