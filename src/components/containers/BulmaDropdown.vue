<template>
	<component :is="tag" :class="[actions,getLeftRightClasses(alignment)]" class="dropdown">
		<component :is="tag" class="dropdown-trigger" @click="onClick?toggleActivation($event, $el):pop(onClick)">
			<slot />
		</component>
		<component :is="tag" class="dropdown-menu is-hoverable">
			<component :is="tag" class="dropdown-content">
				<slot v-for="(item,i) in content" v-if="$slots['dropdown-item']" :key="i" :class="'dropdown-item'"
				      name="dropdown-item" v-bind:data="item" />
				<template v-else>{{ item }}</template>
			</component>
		</component>
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	const pop = (e: any) => {
		console.log(e);
	};
	import {computed} from 'vue';
	import {Alignment, toggleActivation, getLeftRightClasses, LeftRight} from '../../types';
	
	const props = withDefaults(defineProps<{
		tag?: string;
		content?: any[];
		'is-hoverable'?: boolean;
		//? weirdness happens if the prop is surrounded by quotes then it's no longer in the prop obj/proxy weird🧐?
		onClick?: boolean;
		alignment?:LeftRight
	}>(), {
		tag: 'p',
		onClick: true,
	});
	
	const actions = computed(() => {
		return {
			'is-hoverable': props['is-hoverable'],
		};
	});
</script>

