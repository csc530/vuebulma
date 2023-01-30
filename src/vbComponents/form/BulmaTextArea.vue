<template>
	<textarea :class="classes" :value="modelValue? modelValue:props.default" class="textarea"
            @input="emit('update:modelValue',$event.target.value)">
	</textarea>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {BulmaColour, BulmaSize, BulmaState, getBulmaClassesFromProps} from "../../types";

const emit = defineEmits<{ (name: 'update:modelValue', value: string): void }>();
const props = defineProps<{
  /** The value of the textarea */
  modelValue?: string;
  /** The colour of the textarea */
  colour?: BulmaColour
  /** The size of the textarea */
  size?: BulmaSize
  /** The visual state of the textarea */
  //todo: loading needs to go on parent control tag
  state?: BulmaState;
  /** Static textarea size; can't be changed by user
   * @default false */
  hasFixedSize?: boolean
  /** Default text to place within textarea */
  default?: string
}>();


const classes = computed(() => getBulmaClassesFromProps(props));

if (props.default)
  props.modelValue ? emit('update:modelValue', props.default) : props.default
</script>