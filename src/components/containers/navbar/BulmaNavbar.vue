<template>
	<nav :class="classes" class="navbar">
		<!--	Lefthand side Always visible-->
		<div class="navbar-brand">
			<bulma-navbar-item @click="activateItem($refs.startItem[i])" ref="startItem" v-for="(item,i) in startItems"
			                   :key="item"
			                   :item="item" :tag="startItemTag">
				<slot v-if="$slots['start-items']" name="start-items" v-bind:data="item" />
			</bulma-navbar-item>

			<button class="navbar-burger" @click="toggleMenu" ref="burger">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>

		<!--	Righthand side; hidden on mobile, visible on desktops-->
		<div class="navbar-menu" ref="menu">

			<!--? the left part of the menu, which appears next to the navbar brand on desktop-->
			<div class="navbar-start">
				<bulma-navbar-item @click="activateItem($refs.middleItem[i])" ref="middleItem" :is="middleItemTag"
				                   v-for="(item,i) in middleItems" :item="item">
					<slot v-if="$slots['middle-items']" name="middle-items" v-bind:data="item" />
				</bulma-navbar-item>
			</div>

			<!--? the right part of the menu, which appears at the end of the navbar-->
			<div class="navbar-end">
				<bulma-navbar-item @click="activateItem($refs.endItem[i])" ref="endItem" :is="endItemTag"
				                   v-for="(item,i) in endItems"
				                   :item="item">
					<slot v-if="$slots['end-items']" name="end-items" v-bind:data="item" />
				</bulma-navbar-item>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
	import {computed, ref, watch} from "vue";
	import {BulmaColour, getBulmaClassesFromProps} from "../../../types";
	import BulmaNavbarItem from "./BulmaNavbarItem.vue";

	const props = withDefaults(defineProps<{
		colour?: BulmaColour;
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
		activateOnClick?: boolean | 'singly',
	}>(), {
		middleItemTag: 'a',
		endItemTag: 'a',
		startItemTag: 'a'
	});

	const classes = computed(() => getBulmaClassesFromProps(props));

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

	let activeItem = ref<HTMLElement | null>(null);
	const activateItem = (element: HTMLElement) => {
		if(props.activateOnClick === 'singly') {
			if(activeItem.value)
				activeItem.value.classList.remove('is-active');
			activeItem.value = element;
		}
		element.classList.toggle('is-active');
	}

	const menu = ref<HTMLElement | null>(null);
	const burger = ref<HTMLElement | null>(null);

	const toggleMenu = () => {
		if(menu.value)
			menu.value.classList.toggle('is-active');
		if(burger.value)
			burger.value.classList.toggle('is-active');
	}
</script>

