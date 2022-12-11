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
	import {computed, ref, watch} from "vue";
	import {Colours, getBulmaClassesFromProps} from "../../../types/types";
	import BulmaNavbarItem from "./BulmaNavbarItem.vue";

	const emit = defineEmits<{
		(name: 'navbarBurger', event: MouseEvent, el: HTMLElement): void;
		(name: 'itemClick', item: any, event: Event, element: HTMLElement): void;
	}>();

	const props = withDefaults(defineProps<{
		colour?: Colours;
		middleItems?: any[];
		endItems?: any[];
		middleItemTag?: 'div' | 'a',
		endItemTag?: 'div' | 'a',
		isTransparent?: boolean,
		isSpaced?: boolean,
		isTab?: boolean | 'menu' | 'start' | 'end' | 'brand' | 'brand&end' | 'all',
		isFixed?: 'top' | 'bottom' | false,
		/** items which are always visible shown on the lefthandside of the navbar*/
		startItems?: any[],
		/**Tag to wrap brand items in */
		startItemTag?: 'div' | 'a',
	}>(), {
		middleItemTag: 'a',
		endItemTag: 'a',
		startItemTag: 'a'
	});

	const classes = computed(() => getBulmaClassesFromProps(props));
	const tab = ref(props.isTab);
	const itemModifiers = ref(getBulmaClassesFromProps(props));

	watch(props, (props) => {
		const fixedPos = props.isFixed;
		if(fixedPos) {
			document.body.classList.add(`has-navbar-fixed-${fixedPos}`);
			const oppositePosition = fixedPos === 'top' ? 'bottom' : 'top';
			if(document.body.classList.contains(`has-navbar-fixed-${oppositePosition}`)) {
				document.body.classList.remove(`has-navbar-fixed-${oppositePosition}`);
			}
		}
		else {
			document.body.classList.remove('has-navbar-fixed-top');
			document.body.classList.remove('has-navbar-fixed-bottom');
		}
	});
</script>

