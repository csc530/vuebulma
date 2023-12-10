<template>
  <figure :class="classes" :style="customWidth" class="image">
    <slot>
      <img :alt="alt" :class="{'is-rounded': isRounded}" :src="src" v-bind="$attrs"/>
    </slot>
    <figcaption v-if="$slots.figcaption || caption">
      <slot name="figcaption">{{ caption }}</slot>
    </figcaption>
  </figure>
</template>


<script lang="ts" setup>
import {computed} from "vue";
import {getBulmaClassesFromProps} from "../../types";
import {BulmaAspectRatio, BulmaDimension} from "../../types/ImageTypes";

const props = defineProps<{
  /** css width of image container (figure) */
  width?: string
  /** Standard dimensions for the image container to be from 16 to 128 increase by a factor of 2^x */
  dimensions?: BulmaDimension
  /** If the container should be rounder; clipping whatever does not fit into the image
   *
   * If you slot your own content this must be added on that element
   * @see https://bulma.io/documentation/elements/image/#rounded-images
   * @default false*/
  isRounded?: boolean
  /** The aspect ratio to apply to the image or content.
   * Recommended to have the parent to have a set width ({@link width}) or the content will expand to the full width of the parent*/
  aspectRatio?: BulmaAspectRatio
  /** If the image doesn't already expand to the parents' width, set the width to expand to available space
   * @default false*/
  isFullwidth?: boolean,
  /** Src attribute for the img element */
  src?: string,
  /** Alt attribute for the img element; RECOMMENDED */
  alt?: string,
  /** Optional caption text to display in figcaption. Can lead to image distortion if text is too large */
  //todo: look into word wrap class or custom to make caption wrap and not distort image, when long
  caption?: string
}>();


const classes = computed(() => getBulmaClassesFromProps(props).filter(c => c !== 'is-rounded'));

const customWidth = computed(() => props.width ? `width: ${props.width}` : null)
</script>

