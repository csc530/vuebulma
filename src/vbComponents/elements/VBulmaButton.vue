<template>
    <component :is="tag" :class="classes" class="button">
        <slot>{{ label }}</slot>
    </component>
</template>

<style lang="css" scoped>
    /*	Copied from bulma biased style to maintain the addon look (for button group =buttons) even if the buttons are small*/
    .buttons.are-small.has-addons .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        margin-right: -1px;
    }
</style>

<script lang="ts" setup>
    import {computed} from "vue";
    import {BulmaSize, BulmaState, getBulmaClassesFromProps} from "../../types";
    import {BulmaButtonColour} from "../../types/ButtonTypes";

    const props = withDefaults(defineProps<{
        tag?: string;
        label?: string;
        colour?: BulmaButtonColour
        isLight?: boolean;
        isDark?: boolean;
        size?: BulmaSize
        isDelete?: boolean;
        isResponsive?: boolean;
        isFullwidth?: boolean;
        isOutlined?: boolean;
        isInverted?: boolean;
        isRounded?: boolean;
        isLoading?: boolean;
        isStatic?: boolean;
        state?: BulmaState;
        isSelected?: boolean;
    }>(), {
        tag: "button"
    });

    const classes = computed(() => getBulmaClassesFromProps(props));
</script>

