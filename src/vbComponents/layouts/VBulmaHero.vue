<template>
  <section :class="classes" class="hero">
    <component :is="bodyTag" class="hero-body">
      <component :is="headTag" class="hero-head">
        <slot name="head"/>
      </component>

      <slot/>

      <component :is="footTag" class="hero-foot">
        <slot name="foot"/>
      </component>
    </component>
  </section>
</template>


<script lang="ts" setup>
import {BulmaColour, BulmaHeroSize, getBulmaClassesFromProps} from "../../types";
import {computed} from "vue";

const props = withDefaults(defineProps<{
      /**
       *Tag wrapping main hero content
       * @default section
       */
      bodyTag?: string,
      /**
       * Background colour of the hero
       */
      colour?: BulmaColour,
      /**
       * The size of the hero
       */
      size?: BulmaHeroSize,
      /**
       * Tag wrapping hero footer
       * @default footer
       */
      footTag?: string,
      /**
       * Tag wrapping hero head
       * @default header
       */
      headTag?: string
    }>(),
    {
      bodyTag: 'section',
      footTag: 'footer',
      headTag: 'header'
    })
const classes = computed(() => getBulmaClassesFromProps(props))
</script>