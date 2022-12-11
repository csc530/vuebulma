<template>
	<bulma-box>
		<component :is="bulmaImg.component" src="https://www.google.com/logo.svg" :alt="3"></component>
		<BulmaHeading :size="2">Navbar</BulmaHeading>
		<bulma-navbar :end-items="end" :middle-items="start" colour="warning" is-tab start-item-tag="div"
		              v-bind:start-items="elems"/>
	</bulma-box>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	import BulmaHeading from "../components/BulmaHeading.vue";
	import BulmaImage from "../components/BulmaImage.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaNavbar from "../components/containers/navbar/BulmaNavbar.vue";
	import {BulmaNavBarItem} from "../types/types";

	const brand = ['Agumon', 'Gabumon', 'Tentomon'];
	const start = ['Home', 'Documentation', 'Blog'];
	const digiP = document.createElement('code');
	digiP.innerText = 'Digimon are creatures that inhabit the Digital World, a parallel universe to the real world. They are born from data and are composed of pure information. They are able to transform into different forms, and can also be combined to form a Mega form.';
	digiP.style.margin = '0';
	digiP.style.padding = '0';
	//wrap text in digiP
	digiP.style.whiteSpace = 'pre-wrap';
	const digimonDD: BulmaNavBarItem = {
		dropdown: {
			link: 'Digimon',
			items: ['Agumon', 'Gabumon', 'Tentomon', 'BlackWarGreymon', digiP, 'MetalGarurumon (X)'],
			isDropUp: true,
			isHoverable: true
		}
	}
	const pokeImg: BulmaNavBarItem & HTMLImageElement = document.createElement('img');
	pokeImg.src = 'https://th.bing.com/th/id/OIP.AQMEsYkmX3ezJK5xiT4diQHaI4?pid=ImgDet&w=201&h=241&c=7&dpr=1.3';
	pokeImg.style.height = '2em';
	pokeImg.style.width = '2em';
	pokeImg.style.margin = '0';
	pokeImg.style.padding = '0';
	pokeImg.style.backgroundColor = 'white';
	pokeImg.style.boxShadow = '0 0 0.5em 0.5em #646CFFAA';

	const pokemonDd: BulmaNavBarItem = {
		dropdown: {
			link: 'Pokemon',
			items: ['Pikachu', 'Charmander', 'Bulbasaur', pokeImg],
			isHoverable: true
		}
	}
	const end = [pokemonDd, digimonDD, 'I love you💝'];

	// create a BulmaImage 'component'
	const bulmaImg: BulmaNavBarItem = {
		component: BulmaImage,
		src: 'https://th.bing.com/th/id/OIP.AQMEsYkmX3ezJK5xiT4diQHaI4?pid=ImgDet&w=201&h=241&c=7&dpr=1.3',
		size: '32x32',
		rounded: true,
		isComponent: true
	}


	let ball = document.createElement('div');
	ball.classList.add('lds-dual-ring');
	let style = `.lds-dual-ring {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n.lds-dual-ring:after {\n  content: " ";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid;\n  border-color: blue transparent red transparent;\n  animation: lds-dual-ring 1.2s linear infinite;\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n`;
	let styleEl = document.createElement('style');
	styleEl.innerHTML = style;

	const elems = [
		bulmaImg,
		ball,
		styleEl
	]
</script>

