<template>
	<component :is="tag" class="menu">
		<template v-for="value in menu">
			<component :is="labelTag" class="menu-label">{{ value.label }}</component>
			<ul class="menu-list">
				<li v-for="item in value.items" :key="item">

					<template v-if="isMenu(item)">
						<component :is="labelTag">{{ item.label }}</component>

						<ul>
							<li v-for="subItem in item.items" :key="subItem">
								<slot v-if="$slots.default" v-bind:data="subItem"/>
								<template v-else>{{ subItem }}</template>
							</li>
						</ul>
					</template>

					<slot v-else-if="$slots.default" v-bind:data="item"/>
					<template v-else>{{ item }}</template>
				</li>
			</ul>
		</template>
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	import {isMenu, Menu} from "../../types";

	const props = withDefaults(defineProps<{
				tag?: string;
				menu: Menu[];
				labelTag?: string;
			}>(),
			{
				tag: 'aside',
				labelTag: 'p'
			});
</script>

