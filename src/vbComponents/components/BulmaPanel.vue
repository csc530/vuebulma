<template>
	<component :is="tag" class="panel" :class="classes">
		<p class="panel-heading">
			<slot name="header">{{ title }}</slot>
		</p>
		<template v-for="(item,i) in panels">
			<p v-if="getItemType(item) === 'tabs'" class="panel-tabs">
				<slot :name="`tab${i}`">
					<a v-for="tab in item.vbTabs" :href="tab.vbLink">
						<slot name="tab-text" v-bind:data="tab">{{ tab.vbTxt || item.vbTxt }}</slot>
					</a>
				</slot>
			</p>
			<div v-else class="panel-block">
				<slot :name="`block${i}`">
					<slot name="block" v-bind:data="item">{{ item.vbTxt }}</slot>
				</slot>
			</div>
		</template>
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaColour, BulmaPanelOptions, exhaustion, getBulmaClassesFromProps} from "../../types";
	import {BulmaPanelItem, BulmaPanelType} from "../../types/PanelTypes";
	// todo panel icon support in block
	const props = withDefaults(defineProps<{
		/** Text to place in panel header */
		title?: string;
		/** Items to display within the panel */
		items?: BulmaPanelType[] | BulmaPanelOptions | BulmaPanelItem[];
		/** colour of the panel header*/
		colour?: BulmaColour;
		tag?: string;
	}>(), {tag: 'nav'});
	const classes = computed(() => getBulmaClassesFromProps(props));
	const panels = computed(() => {
		if(!props.items)
			return [] as BulmaPanelType[];
		if(Array.isArray(props.items))
			return props.items;
		else if(typeof props.items === 'object')
			return props.items.number;
		else
			exhaustion(props.items);
	});

	function getItemType(item: BulmaPanelType | BulmaPanelOptions | BulmaPanelItem | number): "block" | "tabs" {
		if(typeof item === 'number')
			if(props.items && !Array.isArray(props.items))
				return props.items.vbType;
			else
				return 'block';
		else if(typeof item === 'object')
			return item.vbType;
		else
			return item
		// return exhaustion(item);

	}
</script>