<template>
    <component :is="tag" class="breadcrumb" :class="classes">
        <ul>
            <li v-for="(item, index) in items" :class="isActiveCrumb(index)">
                <slot v-bind:data="item"><a :href="getHref(item)">{{ item?.toString() }}</a></slot>
            </li>
        </ul>
    </component>
</template>

<script lang="ts" setup>
    import {computed} from "vue";
    import {BulmaAlignment, BulmaSize, getBulmaClassesFromProps} from "../../types";
    import {BulmaBreadcrumbSeparator} from "../../types/BreadcrumbTypes";

    const props = withDefaults(defineProps<{
        tag?: string;
        items?: any[];
        alignment?: BulmaAlignment;
        separator?: BulmaBreadcrumbSeparator;
        size?: BulmaSize
    }>(), {
        tag: "nav",
        alignment: "center",
        separator: "slash",
        size: "default"
    });

    const isActiveCrumb = (index: number) => {
        if(!props.items || !Array.isArray(props.items))
            return;
        if(props.items.length - 1 === index || props.items[index].isActive === true)
            return "is-active";
    }



    const getHref = (item: typeof props.items[number]) => {
        if(typeof item === "object" && Object.hasOwn(item, "href"))
            return item.href;
        if(typeof item === "string")
            return item.toString();
        return "#";
    };

    const classes = computed(() => getBulmaClassesFromProps(props, false));
</script>