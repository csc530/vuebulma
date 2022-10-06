<template>
	<component :is="wrapperTag" class="breadcrumb" v-bind:class="[alignment,separatorType,getSize]">
		<ul>
			<li v-for="(item, index) in list" :key="index" :class="isActiveCrumb(index)">
				<slot v-bind:data="item">
					<a :href="item.href">{{ item.text }}</a>
				</slot>
			</li>
		</ul>
	</component>
</template>

<style lang="sass">
$breadcrumb-item-color: $link
$breadcrumb-item-hover-color: $link-hover
$breadcrumb-item-active-color: $text-strong
$breadcrumb-item-padding-vertical: 0
$breadcrumb-item-padding-horizontal: 0.75rem
$breadcrumb-item-separator-color: $border-hover
@import "./node_modules/bulma/sass/components/breadcrumb.sass"

</style>

<script lang="ts" setup>
	import {computed} from 'vue';
	import {BreadcrumbItem} from '../models';
	
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
		/// the separator to use between breadcrumbs; defaults to '/'; slash
		separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds' | 'slash';
		/// the size of the breadcrumbs
		size?: 'small' | 'medium' | 'large';
	}>();
	
	
	const {rootTag: tag, lastCrumbIsActive, list} = props;
	
	const wrapperTag = computed(() => tag ? tag : 'nav');
	const isActiveCrumb = (index: number) => {
		console.log(index, lastCrumbIsActive, list[index].isActive);
		if((lastCrumbIsActive && index === list.length - 1) || list[index].isActive)
			return 'is-active';
		return '';
	};
	
	const separatorType = computed(() => {
		if(props.separator && props.separator !== 'slash')
			return `has-${props.separator}-separator`;
		return '';
	});
	
const getSize = computed(() => {
		if(props.size)
			return `is-${props.size}`;
		return '';
	});
</script>