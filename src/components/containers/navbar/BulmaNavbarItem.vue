<template>
	<!--todo: straight binding the item causes sum wonky DOM exceptions need to figure out another way to bind attrs -->
	<component :is="tag" :class="classes" ref="parent" :href="item?.href" class="navbar-item"
	           @click="toggleDropdown($refs.parent)">

		<template v-if="item.dropdown">
			<component :is="tag" class="navbar-link">{{ item.dropdown.link }}</component>
			<component :is="tag" class="navbar-dropdown">

				<template v-for="dropdownItem in item.dropdown.items">
					<hr v-if="dropdownItem === undefined || dropdownItem === null" class="navbar-divider"/>
					<bulma-navbar-item v-else :item="dropdownItem" :tag="tag">
						<slot/>
					</bulma-navbar-item>
				</template>

			</component>
		</template>

		<slot v-else>
			<!--! todo: improve HTML rendering (add check or sum idk) so its not such plain injection; is it even dangerous🤷🏿‍♂️-->
			<component :is="item.tagName" v-if="isHTMLElement(item)" ref="htmlElement"/>
			<component :is="item.isComponent" v-else-if="item.isComponent" v-bind="item.props"/>
			<template v-else>{{ item }}</template>
		</slot>
	</component>
</template>


<script lang="ts" setup>
	import {computed, onMounted, ref} from "vue";
	import {BulmaNavBarItem, getNavbarItemClasses, isHTMLElement} from "../../../types/types.js";

	const props = withDefaults(defineProps<{
		tag?: 'div' | 'a',
		//todo add isActive with implemeentation to have active item by default
		item: any | BulmaNavBarItem | HTMLElement;
	}>(), {
		tag: 'a'
	});

	const htmlElement = ref<HTMLElement | null>(null);
	onMounted(() => {
		if(htmlElement.value)
			htmlElement.value.outerHTML = props.item.outerHTML;
	});

	const classes = computed(() => getNavbarItemClasses(props.item));

	const toggleDropdown = (parent: HTMLElement) => {
		if(props.item.dropdown)
			parent.classList.toggle('is-active');
	};
</script>

