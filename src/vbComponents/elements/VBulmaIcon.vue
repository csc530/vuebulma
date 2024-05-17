<template>
    <!-- Icon text -->
    <component :is="flex ? 'div' : 'span'" v-if="hasText" :class="['icon-text',{[colourClass]:colourText}]">
        <span v-if="$slots['pre-text']"><slot name="pre-text"></slot></span>

        <VBulmaIcon :colour="colour" :container-size="containerSize">
            <slot />
        </VBulmaIcon>

        <span v-if="$slots['post-text'] || text"><slot name="post-text">{{ text }}</slot></span>
    </component>

    <!--Icon -->
    <template v-else>
        <!--Single-->
        <span :class="[sizeClass,colourClass]" class="icon" v-bind="$attrs">
			<slot />
		</span>
    </template>
</template>

<script lang="ts" setup>
    import {computed, useSlots} from "vue";
    import {BulmaColour, BulmaColourHelper, BulmaSize, toBulmaColourClass, toSizeClasses} from "../../types";

    const props = defineProps<{
        flex?: boolean,
        text?: string,
        colour?: BulmaColourHelper | BulmaColour,
        colourText?:boolean
        containerSize?: BulmaSize,
    }>();

    const textSlot = Boolean(useSlots()["post-text"] || useSlots()["pre-text"]);
    const colourClass = computed(() => props.colour ? toBulmaColourClass(props.colour, "text") : null);
    const sizeClass = computed(() => toSizeClasses(props.containerSize));
    const hasText = computed(() => props.text || textSlot);
</script>

