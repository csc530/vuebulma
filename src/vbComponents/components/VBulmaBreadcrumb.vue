<template>
	<component :is="tag" class="breadcrumb" :class="classes">
		<ul>
			<li v-for="(item, index) in list" :class="isActiveCrumb(index)">
				<slot v-bind:data="item"><a :href="getHref(item)" v-bind="$attrs">{{ display(item) }}</a></slot>
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
		list?: any[];
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
		if(Array.isArray(props.list) && props.list.length - 1 === index || props.list[index].isActive === true)
			return "is-active";
	};

	const display = (item: any) => typeof item === "string" ? item : item.toString();

	const getHref = (item: any) => {
		if(typeof item === "object" && Object.hasOwn(item, "href"))
			return item.href;
		if(typeof item === "string")
			return `#${item}`;
		return "#";
	};

	const classes = computed(() => getBulmaClassesFromProps(props, false));
</script>