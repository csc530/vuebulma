<template>
	<!--	todo: make helper to include 'has' classes as well-->
	<!--todo: straight binding the item causes sum wonky DOM exceptions need to figure out another way to bind attrs -->
	<component :is="tag" :class="{'has-dropdown': isDropdown, 'is-hoverable': item?.dropdown?.isHoverable}"
	           class="navbar-item"
	           @click="emit('activate',$event, $el)">

		<template v-if="isDropdown">
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
			<!--todo: warn of danger that it's basically html injection-->
			<component :is="item.tagName" v-if="isHTMLElement(item)" ref="htmlElement"/>
			<component :is="item" v-else-if="item.isComponent" v-bind="item"/>
			<template v-else>{{ item }}</template>
		</slot>
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>

	import {computed, onMounted, ref} from "vue";
	import {isHTMLElement, NavBarItem} from "../../../types/types.js";

	const emit = defineEmits<{
		(name: 'activate', event: Event, el: HTMLElement): void;
	}>();

	const props = withDefaults(defineProps<{
		tag?: 'div' | 'a',
		item: any | NavBarItem | HTMLElement;
	}>(), {
		tag: 'a'
	});

	const htmlElement = ref<HTMLElement | null>(null);
	onMounted(() => {
		if (htmlElement.value)
			htmlElement.value.outerHTML = props.item.outerHTML;
	});

	const isDropdown = computed(() => (props.item as NavBarItem).dropdown !== undefined);
</script>

