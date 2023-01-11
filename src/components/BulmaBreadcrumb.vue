<template>
	<component :is="tag" class="breadcrumb" v-bind:class="classes">
		<ul>
			<li v-for="(item, index) in list" :key="index" :class="isActiveCrumb(index)">
				<slot v-bind:data="item">
					<a :href="item?.href ? item.href : item">{{ item.text ? item.text : item }}</a>
				</slot>
			</li>
		</ul>
	</component>
</template>

<script lang="ts" setup>
	import {computed} from 'vue';
	import {BulmaAlignment, BulmaSize, getBulmaClassesFromProps} from '../types';
	import {BulmaBreadcrumbSeparator} from "../types/BreadcrumbTypes";

	const props = withDefaults(defineProps<{
		/** The tag or component to render as the breadcrumb's ul parent
		 * @default nav */
		tag?: string;
		/** If the last item in the breadcrumb's list should be active; appending 'is-active' to the item
		 * @default true */
		lastCrumbIsActive?: boolean;
		/** list of items to render as breadcrumbs */
		list: any[];
		/** the alignment of the breadcrumb within container
		 * @default left */
		alignment?: BulmaAlignment;
		/** the separator to use between breadcrumbs
		 * @default slash => / */
		separator?: BulmaBreadcrumbSeparator;
		/** the size of the breadcrumbs
		 * @default default */
		size?: BulmaSize
	}>(), {
		tag: 'nav',
		lastCrumbIsActive: true,
		alignment: 'left',
		separator: 'slash',
		size: 'default'
	});

	const {lastCrumbIsActive, list} = props;

	const isActiveCrumb = (index: number) => (lastCrumbIsActive && index === list.length - 1) || list[index].isActive ? 'is-active' : false;

	const classes = computed(() => getBulmaClassesFromProps(props, false));
</script>