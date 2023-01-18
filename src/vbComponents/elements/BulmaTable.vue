<template>
	<div v-if="scrollable" class="table-container">
		<bulma-table v-bind="props" :scrollable="false" />
	</div>
	<table v-else :class="classes" class="table">
		<slot name="table">
			<thead v-if="header">
				<tr v-for="row in header">
					<th v-for="item in row">
						<slot name="header" v-bind:data="item">{{ row }}</slot>
					</th>
				</tr>
			</thead>
			<tbody v-if="items">
				<tr v-for="row in items">
					<td v-for="item in row">
						<slot v-bind:data="item">{{ item }}</slot>
					</td>
				</tr>
			</tbody>
			<tfoot v-if="footer">
				<tr v-for="row in footer">
					<td v-for="item in row">
						<slot name="footer" v-bind:data="item">{{ item }}</slot>
					</td>
				</tr>
			</tfoot>
		</slot>
	</table>
</template>

<script lang="ts" setup >
	import { computed } from "vue";
	import { getBulmaClassesFromProps } from "../../types";

	const props = defineProps<{
		/** make table scrollable, to view overflow content
		 * @default false		 */
		scrollable?: boolean
		/** items to display in thead */
		header?: any[][],
		/** items to display in tbody */
		items?: any[][],
		/** items to display in tfoot */
		footer?: any[][],
		/** add full borders around table data
		 *  @default false		 */
		isBordered?: boolean
		/**Add alternating backgrounds between table rows 
		 * @default false	*/
		isStriped?: boolean
		/** decrease sppacing between table rows
		 * @default false	*/
		isNarrow?: boolean
		/** add visual focus to hovered rows
		 * @default false	*/
		isHoverable?: boolean
		/** expand table to fit parent 
		 * @default false	*/
		isFullwidth?: boolean
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props))

</script>