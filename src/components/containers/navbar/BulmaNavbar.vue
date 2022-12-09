<template>
	<nav :class="classes" class="navbar">
		<!--	Lefthand side Always visible-->
		<div class="navbar-brand">
			<bulma-navbar-item v-for="item in startItems" :key="item" :item="item" :tag="startItemTag">
				<slot v-if="$slots['brand-items']" name="brand-items" v-bind:data="item"/>
			</bulma-navbar-item>

			<button class="navbar-burger" @click="emit('navbarBurger', $event, $el)">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>

		<!--	Righthand side; hidden on mobile, visible on desktops-->
		<div class="navbar-menu">

			<!--? the left part of the menu, which appears next to the navbar brand on desktop-->
			<div class="navbar-start">
				<bulma-navbar-item :is="middleItemTag" v-for="item in middleItems" :item="item">
					<slot v-if="$slots['menu-start-items']" name="menu-start-items" v-bind:data="item"/>
				</bulma-navbar-item>
			</div>

			<!--? the right part of the menu, which appears at the end of the navbar-->
			<div class="navbar-end">
				<bulma-navbar-item :is="endItemTag" v-for="item in endItems" :item="item">
					<slot v-if="$slots['menu-end']" name="menu-end" v-bind:data="item"/>
				</bulma-navbar-item>
			</div>
		</div>
	</nav>
</template>

<style scoped>
</style>

<script lang="ts" setup>
	import {computed, ref} from "vue";
	import {getBulma_IS_Classes} from "../../../types/types";
	import BulmaNavbarItem from "./BulmaNavbarItem.vue";

	const emit = defineEmits<{
		(name: 'navbarBurger', event: MouseEvent, el: HTMLElement): void;
	}>();

	const props = withDefaults(defineProps<{
		middleItems?: any[];
		endItems?: any[];
		middleItemTag?: 'div' | 'a',
		endItemTag?: 'div' | 'a',
		isTransparent?: boolean,
		isTab?: boolean | 'menu' | 'start' | 'end' | 'brand' | 'brand&end' | 'all',
		//todo: add emit for activate items
		activateItems?: boolean
		//todo: add item logic for when an item should have the expanded class but also if it's just one item too (optional)
		expandActiveItems?: boolean;
		// todo: add second step or documentation for the html/body element to append the has-navbar-fixed-top class
		isFixed?: 'top' | 'bottom' | false,
		/** items which are always visible shown on the lefthandside of the navbar*/
		startItems?: any[],
		/**Tag to wrap brand items in */
		startItemTag?: 'div' | 'a',
		hasDropdowns?: boolean,
	}>(), {
		middleItemTag: 'a',
		endItemTag: 'a',
		startItemTag: 'a'
	});

	const classes = computed(() => {
		return getBulma_IS_Classes(props);
	});
	const tab = ref(props.isTab);
	const itemModifiers = ref(getBulma_IS_Classes(props));
</script>

