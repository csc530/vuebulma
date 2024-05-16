<template>
    <component :is="tag" class="column" :class="classes">
        <slot />
    </component>
</template>


<script setup lang="ts">
    import {computed} from "vue";
    import {BulmaMedia, VBulmaBreakpoint} from "../../../types";
    import {toColumnOffsetClass, toColumnSizeClass} from "../../../class-transformers/columnTransformers";
    import {BulmaColumnSize} from "../../../types/ColumnTypes";

    const props = withDefaults(defineProps<{
        tag?: string
        size?: BulmaColumnSize | VBulmaBreakpoint<BulmaColumnSize>
        offset?: BulmaColumnSize
        isNarrow?: boolean | BulmaMedia | BulmaMedia[]
    }>(), {
        tag: "div",
    });


    const classes = computed(() => {
        const offset = props.offset ? toColumnOffsetClass(props.offset) : null;
        const responsiveClass = props.breakpoint ? "is-" + props.breakpoint : null;

        let sizeClass;
        if(!props.isNarrow)
            sizeClass = props.size ? toColumnSizeClass(props.size) : null;
        else if(props.isNarrow === true)
            sizeClass = "is-narrow";
        else if(typeof props.isNarrow === "string")
            sizeClass = "is-narrow-" + props.isNarrow;
        else if(Array.isArray(props.isNarrow))
            sizeClass = props.isNarrow.map(narrow => "is-narrow-" + narrow).join(" ");

        return [sizeClass, offset, responsiveClass];
    });

</script>

