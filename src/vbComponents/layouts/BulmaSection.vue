<template>
  <component :is="tag" :class="spacingClass" class="section">
    <slot/>
  </component>
</template>

<script lang="ts" setup>
import {BulmaSectionSize, toSizeClasses} from "../../types";
import {computed} from "vue";

const props = withDefaults(defineProps<{
  /**
   * parent html element tag
   */
  tag?: string
  /**
   * The size of the space between adjacent (sibling) elements;
   */
  spacing?: BulmaSectionSize
}>(), {tag: 'section'})

const spacingClass = computed(() => toSizeClasses(props.spacing))
</script>