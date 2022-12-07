<template>
	<BulmaBox>
		<BulmaHeading tag="h2">Image</BulmaHeading>
		<BulmaImage :dimension="16" alt="mario star"
		            src="https://findicons.com/files/icons/2297/super_mario/48/retro_star.png"/>
		<BulmaImage :dimension="24" alt="coins"
		            src="https://cdn4.iconfinder.com/data/icons/24x24-free-pixel-icons/24/Coins.png"/>
		<BulmaImage :dimension="32" alt="mario star" src="https://forums.redflagdeals.com/avatar/13829_1470311369.gif"/>
		<BulmaImage :dimension="48" alt="mario star"
		            src="https://th.bing.com/th/id/OIP.pejwGwwInuu8HcUqEHCDPQAAAA?pid=ImgDet&rs=1"/>
		<BulmaImage :dimension="64" alt="mario star"
		            src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/64/Chrome-icon.png"/>
		<bulma-image alt="bobbing cat" dimension="128.0" src="https://avatarfiles.alphacoders.com/413/thumb-1920-4139.gif"/>
		<bulma-heading size="3">Image with rounded corners & Retina images</bulma-heading>
		<bulma-image alt="bobbing cat" dimension="128" rounded="true"
		             src="https://archive.org/download/ipad-2048x2048-thumbnail_00396-256x256/ipad-2048x2048-thumbnail_00396-256x256.jpg"/>
		<BulmaImage :aspectRatio="'16by9'" :notFullwidth="true" is-rounded>
			<iframe allowfullscreen class="has-ratio" frameborder="0" height="360"
			        src="https://www.youtube.com/embed/oPmdYRJtasc"
			        width="640"></iframe>
		</BulmaImage>
	</BulmaBox>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import BulmaBox from "../components/containers/BulmaBox.vue";
import BulmaImage from "../components/BulmaImage.vue";
import BulmaHeading from "../components/BulmaHeading.vue";</script>

