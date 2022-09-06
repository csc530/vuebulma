<template>
	<section class="card">
		<header v-if="$slots.header" class="card-header-title">
			<slot id="header" name="header" />
		</header>
		<div class="card-content">
			<slot />
		</div>
		
		<ul v-if="footerItems &&$slots.footer" class="card-footer">
			<li v-for="item in footerItems" class="card-footer-item">
				<slot id="footer" :data="item" name="footer" />
			</li>
		</ul>
		<footer v-else-if="$slots.footer" class="card-footer">
			<!-- TODO: figure out how to add 'card-footer-item' to the slot better than span -->
			<span class="card-footer-item">
					<slot id="footer" name="footer" />
				</span>
		</footer>
	</section>
</template>

<style>
	.card-content {
		padding-top : 0;
	}
</style>

<script lang="ts" setup>
	
	const props = defineProps<{
		footerItems?: any[];
	}>();

</script>

