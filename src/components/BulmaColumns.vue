<template>
	<section>
	<base-header v-if="header" v-bind="header"></base-header>
	<div :class="bulma" class="columns">
		<div v-for="item in data" class="column" :class="item.class">
			<slot v-if="$slots.default" v-bind="item" />
			<component :is="component" v-else-if="component" v-bind="item">
				{{ item.display() }}
			</component>
			<span v-else>{{ item.display() }}</span>
		</div>
	</div>
	</section>
</template>

<script lang="ts" setup>
	import Columnable, {ColumnHeader} from "@/models/columnContent";
	import BaseHeader from "~/components/AppHeader.vue";
	
	const props = defineProps<{
		data: Columnable[],
		component?: string,
		//TODO: create class of class list that has default constructor
		bulma?: string[] | ['is-centered', 'is-multiline'],
		header?: ColumnHeader,
	}>();
</script>

<style scoped>
</style>