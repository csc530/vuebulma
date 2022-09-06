<template>
	<component :is="wrapperTag" class="breadcrumb" :class="alignment">
		<ul>
			<li v-for="(item, index) in list" :key="index" :class="isActiveCrumb(index)">
				<slot v-bind:breadcrumbItem="item">
					<a :href="item.href">{{ item.text }}</a>
				</slot>
			</li>
		</ul>
	</component>
</template>

<style lang="sass">
@import "~bulma/sass/components/breadcrumb.sass"
</style>

<script lang="ts" setup>
	import {BreadcrumbItem} from '@/models';
	import {Component, computed} from 'vue';
	
	type ArrayElement<ArrayType extends readonly unknown[]> =
			ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
	const props = defineProps<{
		/// the tag or component to render as the breadcrumb's ul parent
		rootTag?: string | Component;
		lastCrumbIsActive?: boolean;
		/// the list of items to render as breadcrumbs;
		list: BreadcrumbItem[];
		/// the alignment of the breadcrumb; defaults to 'is-left'
		alignment?: 'is-centered' | 'is-right' | 'is-left';
	}>();
	
	
	const {rootTag: tag, lastCrumbIsActive, list} = props;
	
	const wrapperTag = computed(() => tag ? tag : 'nav');
	const isActiveCrumb = (index: number) => {
		console.log(index, lastCrumbIsActive, list[index].isActive);
		if((lastCrumbIsActive && index === list.length - 1) || list[index].isActive)
			return 'is-active';
		return '';
	};
</script>

