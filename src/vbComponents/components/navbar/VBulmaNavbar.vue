<template>
	<nav :class="classes" class="navbar">
		<!-- * Left hand side Always visible-->
		<div class="navbar-brand">
			<v-bulma-navbar-item v-for="(item, i) in startItems" ref="startItem" :boxed-dropdown="boxedDropdowns"
			                   :is-tab="brandTab" :item="item" :tag="startItemTag"
			                   @click="activateItem($refs.startItem[i])">
				<slot name="start-items" v-bind:data="item" />
			</v-bulma-navbar-item>

			<button ref="burger" class="navbar-burger" @click="toggleMenu">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>

		<!-- * Right-hand side; hidden on mobile, visible on desktops-->
		<div ref="menu" class="navbar-menu">

			<!-- * the left part of the menu, which appears next to the navbar brand on desktop-->
			<div class="navbar-start">
				<v-bulma-navbar-item v-for="(item, i) in middleItems" ref="middleItem" :boxed-dropdown="boxedDropdowns"
				                   :is-tab="startTab" :item="item" :tag="middleItemTag"
				                   @click="activateItem($refs.middleItem[i])">
					<slot name="middle-items" v-bind:data="item" />
				</v-bulma-navbar-item>
			</div>

			<!-- * the right part of the menu, which appears at the end of the navbar-->
			<div class="navbar-end">
				<v-bulma-navbar-item v-for="(item, i) in endItems" ref="endItem" :boxed-dropdown="boxedDropdowns"
				                   :is-tab="endTab" :item="item" :tag="endItemTag"
				                   @click="activateItem($refs.endItem[i])">
					<slot name="end-items" v-bind:data="item" />
				</v-bulma-navbar-item>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
	import {computed, ref, watch} from "vue";
	import {BulmaColour, BulmaNavbarItemTag, getBulmaClassesFromProps} from "../../../types";
	import VBulmaNavbarItem from "./VBulmaNavbarItem.vue";

	const props = withDefaults(defineProps<{
		/** Toggle active look of navbar items. If `single` only one item will be active at a time
		 * @default  single */
		activateOnClick?: boolean | 'single';
		/** Apply boxed style to all dropdown items */
		boxedDropdowns?: boolean;
		/** Navbar colour */
		colour?: BulmaColour;
		/** tag to wrap {@link endItems} in */
		endItemTag?: BulmaNavbarItemTag,
		/** Items to display on the right-hand side of the navbar
		 * @see [Bulma docs(navbar-end)]{@link https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end} */
		endItems?: any[],
		/** Add shadows around the navbar
		 * @default false */
		hasShadow?: boolean,
		/** fix navbar to the top or bottom of the page. If false, navbar is not fixed.
		 * @default false
		 */
		isFixed?: 'top' | 'bottom' | false,
		/** Increase spacing around its borders
		 * @default false*/
		isSpaced?: boolean,
		/** Remove hover or active effects from navbar items
		 * @default false*/
		isTransparent?: boolean,
		/** tag to wrap {@link middleItems} in */
		middleItemTag?: BulmaNavbarItemTag,
		/** Items to display in the middle of the navbar
		 * @see [Bulma docs(navbar-start]{@link https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end} */
		middleItems?: any[],
		/**Tag to wrap brand items in */
		startItemTag?: BulmaNavbarItemTag,
		/** Items to display on the left-hand side of the navbar
		 * items which are always visible shown on the left-hand-side of the navbar
		 * @see [Bulma docs]{@link https://bulma.io/documentation/components/navbar/#navbar-brand}*/
		startItems?: any[],
		/** Make navbar items look like tabs
		 * @default false */
		tabbedItems?: boolean | ('brand' | 'start' | 'end')[],
	}>(), {
		middleItemTag: 'a',
		endItemTag: 'a',
		startItemTag: 'a',
		activateOnClick: "single"
	});

	const classes = computed(() => getBulmaClassesFromProps(props));

	watch(() => props.isFixed, (value, oldValue) => {
		if(value) {
			if(oldValue && document.body.classList.contains(`has-navbar-fixed-${oldValue}`))
				document.body.classList.remove(`has-navbar-fixed-${oldValue}`);
			document.body.classList.add(`has-navbar-fixed-${value}`);
		}
		else {
			document.body.classList.remove('has-navbar-fixed-top');
			document.body.classList.remove('has-navbar-fixed-bottom');
		}
	});

	/**
	 * Determines whether a navbar sections items are in tabbed style
	 * @param {"brand" | "start" | "end"} item - the section to check
	 * @returns {boolean} - true if the section is in tabbed style
	 */
	const isTabbed = (item: 'brand' | 'start' | 'end'): boolean => Array.isArray(props.tabbedItems) ? props.tabbedItems.includes(item) : !!props.tabbedItems; //ik iffy js to silence ts error/linter

	//? each navbar area, if their items are tabs
	const brandTab = computed(() => isTabbed('brand'));
	const startTab = computed(() => isTabbed('start'));
	const endTab = computed(() => isTabbed('end'));

	const activeItem = ref<InstanceType<typeof VBulmaNavbarItem> | null>(null);
	const activateItem = (item: InstanceType<typeof VBulmaNavbarItem>) => {
		if(props.activateOnClick === 'single') {
			if(activeItem.value)
				activeItem.value.isActive['is-active'] = false;
			activeItem.value = item;
		}
		item.isActive['is-active'] = !item.isActive['is-active'];
	}

	/** The menu area of the navbar */
	const menu = ref<HTMLElement | null>(null);
	/** The burger buttons of the navbar */
	const burger = ref<HTMLElement | null>(null);

	/** Toggle the menu area's visibility in the navbar */
	function toggleMenu() {
		if(!(menu.value instanceof HTMLElement) || !(burger.value instanceof HTMLElement))
			return;
		menu.value.classList.toggle('is-active');
		burger.value.classList.toggle('is-active');
	}

</script>

