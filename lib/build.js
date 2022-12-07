// import {default as BulmaCard} from '../src/components/BulmaCard.vue';
import {default as BulmaBreadcrumb} from '../src/components/BulmaBreadcrumb.vue';
import {default as BulmaIcon} from '../src/components/BulmaIcon.vue';
import {default as BulmaImage} from '../src/components/BulmaImage.vue';
import {default as BulmaHeading} from '../src/components/BulmaHeading.vue';
//* Containers
import {default as BulmaBox} from '../src/components/containers/BulmaBox.vue';
import {default as BulmaBlock} from '../src/components/containers/BulmaBlock.vue';
import {default as BulmaDropdown} from '../src/components/containers/BulmaDropdown.vue'


export default {
	install(Vue) {
		Vue.component('BulmaHeading', BulmaHeading);
		Vue.component('BulmaIcon', BulmaIcon);
		Vue.component('BulmaImage', BulmaImage);
		// Vue.component('BulmaCard', BulmaCard);
		Vue.component('BulmaBreadcrumb', BulmaBreadcrumb);
		// * Containers
		Vue.component('BulmaBox', BulmaBox);
		Vue.component('BulmaBlock', BulmaBlock);
		Vue.component('BulmaDropdown', BulmaDropdown);
	}
}

export {BulmaHeading, BulmaIcon, BulmaImage, BulmaBreadcrumb, BulmaBox, BulmaBlock, BulmaDropdown} ;