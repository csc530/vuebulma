<template>
	<component :is="tag" class="menu">
		<template v-for="menuItem in menu">
			<component :is="labelTag" class="menu-label">{{ menuItem.label }}</component>
			<ul class="menu-list">
				<li v-for="item in menuItem.items" :key="item">

					<template v-if="isMenuItem(item)">
						<component :is="labelTag">{{ item.label }}</component>
						<ul v-if="item.items.length > 0">
							<li v-for="subItem in item.items">
								<slot v-bind:data="subItem">{{ subItem }}</slot>
							</li>
						</ul>
					</template>

					<slot v-else v-bind:data="item">{{ item }}</slot>
				</li>
			</ul>
		</template>
	</component>
</template>

<script lang="ts" setup>

	import {isMenuItem, Menu} from "../../types/MenuTypes";

	const props = withDefaults(defineProps<{
			/** tag of the menu container
			 * @default aside */
			tag?: string;
			/** items of the menu, maximum of two levels deep
			 * @see [Menu Type]{@link https://csc530.github.io/vuebulma/types/MenuTypes.html#menu} */
			menu: Menu;
			/** tag of the menu labels
			 * @default p*/
			labelTag?: string;
		}>(),
		{
			tag: 'aside',
			labelTag: 'p'
		});
</script>

