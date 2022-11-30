import {default as BulmaCard} from '../src/components/BulmaCard.vue';
import {default as BulmaBreadcrumb} from '../src/components/BulmaBreadcrumb.vue';
import {default as BulmaIcon} from '../src/components/BulmaIcon.vue';
import {default as BulmaImage} from '../src/components/BulmaImage.vue';
import {default as BulmaHeading} from '../src/components/BulmaHeading.vue';
//* Containers
import {default as BulmaBox} from '../src/components/containers/BulmaBox.vue';
import {default as BulmaBlock} from '../src/components/containers/BulmaBlock.vue';

export default {
	install(Vue) {
		Vue.component('BulmaHeading', BulmaHeading);
		Vue.component('BulmaIcon', BulmaIcon);
		Vue.component('BulmaImage', BulmaImage);
		Vue.component('BulmaCard', BulmaCard);
		Vue.component('BulmaBreadcrumb', BulmaBreadcrumb);
		Vue.component('BulmaBox', BulmaBox);
		Vue.component('BulmaBlock', BulmaBlock);
	}
}

export {BulmaHeading, BulmaIcon, BulmaImage, BulmaCard, BulmaBreadcrumb, BulmaBox, BulmaBlock} ;