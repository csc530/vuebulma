<template>
	<nav :class="classes" aria-label="pagination" class="pagination">
		<a v-if="prev" :href="prev.vbLink" class="pagination-previous">{{ prev.vbTxt }}</a>
		<a v-if="next" :href="next.vbLink" class="pagination-next">{{ next.vbTxt }}</a>
		<ul class="pagination-list">
			<li>
				<template v-for="item in list">
					<span v-if="!item" class="pagination-ellipsis">&hellip;</span>
					<a v-else :href="item.vbLink" class="pagination-link">{{ item.vbTxt }}</a>
				</template>
			</li>
		</ul>
	</nav>
</template>


<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaAlignment, BulmaLink, BulmaSize, getBulmaClassesFromProps} from "../../types";

	const props = defineProps<{
		/** pagination links */
		list: BulmaLink[]
		/** txt and href for the previous page link */
		prev?: BulmaLink,
		/** txt and href for the next page link */
		next?: BulmaLink,
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