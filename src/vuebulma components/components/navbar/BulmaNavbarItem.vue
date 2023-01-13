<template>
	<!--todo: straight binding the item causes sum wonky DOM exceptions need to figure out another way to bind attrs -->
	<!--	todo: wrap all item `whitespace: pre-wrap` so their contained in the dropdown and navbar-->
	<component :is="tag" ref="parent" :class="[classes, isActive]" :href="getLink(item)" class="navbar-item"
	           v-bind="$attrs" @click="toggleDropdown($refs.parent)">

		<template v-if="isBulmaNavbarItem(item) && item.type === 'dropdown'">
			<component :is="tag" :class="{ 'is-arrowless': item.dropdown.isArrowless }" class="navbar-link">
				{{ item.display }}
			</component>
			<!--todo better tag to wrap this in, menu?-->
			<div :class="{ 'is-boxed': boxedDropdown || item.dropdown.isBoxed, 'is-right': item.dropdown.isRight }"
			     class="navbar-dropdown">

				<template v-for="dropdownItem in item.dropdown.items">
					<hr v-if="dropdownItem === null" class="navbar-divider" />
					<bulma-navbar-item v-else :item="dropdownItem" :tag="tag">
						<slot />
					</bulma-navbar-item>
				</template>

			</div>
		</template>

		<slot v-else>
			<template v-if="isBulmaNavbarItem(item)">
				<!--! todo: improve HTML rendering (add check or sum idk) so its not such plain injection; is it even dangerous🤷🏿‍♂️-->
				<!-- * render HTML -->
				<component :is="item.display.tagName" v-if="item.type === 'html' && isHTML(item.display)"
				           ref="htmlElement" />
				<!-- * Render component-->
				<component :is="item.display" v-else-if="item.type === 'component' && typeof item.display !== 'string'"
				           v-bind="item.props">
					<template v-for="(value, slotName) in  item.slot" #[slotName]>
						{{ value }}
					</template>
				</component>
				<!-- * Render text-->
				<template v-else-if="isBulmaNavbarItem(item)">{{ item.display }}</template>
			</template>
			<!-- * Default render item-->
			<template v-else>{{ item }}</template>
		</slot>
	</component>
</template>


<script lang="ts" setup>

	import {computed, onMounted, ref} from "vue";
	import {
		BulmaNavbarItem as navbarItemType,
		BulmaNavbarItemTag,
		getNavbarItemClasses,
		isBulmaNavbarItem
	} from "../../../types";

	const props = withDefaults(defineProps<{
		tag?: BulmaNavbarItemTag,
		item: any | navbarItemType;
		isTab?: boolean;
		boxedDropdown?: boolean;
	}>(), {
		tag: 'a'
	});

	const htmlElement = ref<HTMLElement | null>(null);
	onMounted(() => {
		if(isHTML(htmlElement.value) && isHTML(props.item.display))
			htmlElement.value.outerHTML = props.item.display.outerHTML;
	});

	const classes = computed(() => {
		const classes = [];
		if(isBulmaNavbarItem(props.item))
			classes.push(getNavbarItemClasses(props.item));
		if(props.isTab)
			classes.push('is-tab');
		return classes;
	});
	const toggleDropdown = (parent: HTMLElement) => {
		if(props.item.type === 'dropdown' && props.item.dropdown)
			parent.classList.toggle('is-active');
	};

	function getLink(item: any): string | undefined {
		if(isBulmaNavbarItem(item) && item.link)
			return item.link;
		return undefined;
	}

	const isActive = ref({'is-active': props.item.isActive});

	function isHTML(item: any): item is HTMLElement {
		return item instanceof HTMLElement;
	}

	defineExpose({
		isActive: isActive
	});

</script>

