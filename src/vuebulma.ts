import {default as BulmaBreadcrumb} from './components/BulmaBreadcrumb.vue';
import {default as BulmaIcon} from './components/BulmaIcon.vue';
import {default as BulmaImage} from './components/BulmaImage.vue';
import {default as BulmaHeading} from './components/BulmaHeading.vue';
//* Containers
import {default as BulmaBox} from './components/containers/BulmaBox.vue';
import {default as BulmaBlock} from './components/containers/BulmaBlock.vue';
import {default as BulmaDropdown} from './components/containers/BulmaDropdown.vue'

const vuebulma = {
	install(Vue: any) {
		Vue.component('BulmaHeading', BulmaHeading);
		Vue.component('BulmaIcon', BulmaIcon);
		Vue.component('BulmaImage', BulmaImage);
		Vue.component('BulmaBreadcrumb', BulmaBreadcrumb);
		// * Containers
		Vue.component('BulmaBox', BulmaBox);
		Vue.component('BulmaBlock', BulmaBlock);
		Vue.component('BulmaDropdown', BulmaDropdown);
	}
};

export {BulmaHeading, BulmaIcon, BulmaImage, BulmaBreadcrumb, BulmaBox, BulmaBlock, BulmaDropdown, vuebulma};