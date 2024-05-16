<template>
    <component :is="tag" class="columns" :class="classes">
        <slot />
    </component>
</template>

<script setup lang="ts">
    import {computed} from "vue";
    import {toGapClass} from "../../../class-transformers/columnTransformers";
    import {VBulmaBreakpointSize, getBulmaClassesFromProps, BulmaMedia, toResponsiveClass} from "../../../types";
    import {BulmaColumnGapSizes} from "../../../types/ColumnTypes";

    const props = withDefaults(defineProps<{
        tag?: string
        // todo: removing custom gap size but works when just the numbers are used in the union showing
        // * [Vue warn]: Invalid prop: type check failed for prop "gaps". Expected Boolean | Null, got Number with value 8.
        gap?: BulmaColumnGapSizes | VBulmaBreakpointSize
        isMultiline?: boolean
        isVCentered?: boolean
        isCentered?: boolean
        responsive?: BulmaMedia|BulmaMedia[]
    }>(), {
        tag: "section",
    });

    const classes = computed(() => {
        const classes = [];
        classes.push(toResponsiveClass(props.responsive));
        classes.push(toGapClass(props.gap));
        classes.push(getBulmaClassesFromProps(props));
        return classes;
    });
</script>

