<template>
	<component :is="containerTag(tag)" class="card">
		<header class="card-header">
			<component :is="containerTag(headerTag)" class="card-header-title">
				<slot name="header" />
			</component>
			<!--todo: add bulma icons-->
		</header>
		
		<div :id="guid" class="card-content">
			<div class="content">
				<slot />
			</div>
		</div>
		
		<!--		TODO: complete card-image-->
		<div class="card-image">
			<bulma-image dimensions="24.0" rounded />
		</div>
		
		<footer class="card-footer">
			<slot name="footer">
				<component :is="containerTag(footerTag)" v-for="(item,index) in footer" class="card-footer-item">
					<slot name="footer-item" v-bind="item">
						{{ getLinkText(item) }}
					</slot>
				</component>
			</slot>
		</footer>
	</component>
</template>

<style lang="sass">
//todo: bulma card variables
@import "../../../../node_modules/bulma/sass/components/card"
</style>

<script lang="ts" setup>
	import BulmaImage from '@/lib-components/BulmaImage.vue';
	import {getLinkText, Link} from '../models';
	import {Component} from 'vue';
	
	const props = defineProps<{
		tag?: string | Component;
		headerTag?: string | Component;
		footer?: string | string[] | Link[];
		footerTag?: string | Component;
	}>();
	
	const containerTag = (tag: string | Component) => tag ? tag : 'div';
	
	
	// GUID
	// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	function generateUUID() { // Public Domain/MIT
		let d = new Date().getTime();//Timestamp
		let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = Math.random() * 16;//random number between 0 and 16
			if(d > 0) {//Use timestamp until depleted
				r = (d + r) % 16 | 0;
				d = Math.floor(d / 16);
			}
			else {//Use microseconds since page-load if supported
				r = (d2 + r) % 16 | 0;
				d2 = Math.floor(d2 / 16);
			}
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
	}
	
	const guid = generateUUID();
</script>

