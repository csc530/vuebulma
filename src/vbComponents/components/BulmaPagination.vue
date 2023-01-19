<template>
	<nav :class="classes" aria-label="pagination" class="pagination">
		<a v-if="prev" :href="prev.link" class="pagination-previous">{{ prev.txt }}</a>
		<a v-if="next" :href="next.link" class="pagination-next">{{ next.txt }}</a>
		<ul class="pagination-list">
			<li>
				<template v-for="item in list">
					<span v-if="!item" class="pagination-ellipsis">&hellip;</span>
					<a v-else :href="item.link" class="pagination-link">{{ item.txt }}</a>
				</template>
			</li>
		</ul>
	</nav>
</template>


<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaAlignment, BulmaSize, getBulmaClassesFromProps} from "../../types";
	import {vbtPagination} from "../../types/PaginationTypes";

	const props = defineProps<{
		/** pagination links */
		list: vbtPagination[]
		/** txt and href for the previous page link */
		prev?: vbtPagination,
		/** txt and href for the next page link */
		next?: vbtPagination,
		/** size of pagination items */
		size?: BulmaSize
		/** The alignment of the pagination items; within the next and previous links */
		alignment?: BulmaAlignment
		/** round the pagination items
		 * @default false */
		isRounded?: boolean
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>