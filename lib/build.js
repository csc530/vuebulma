import {default as BulmaCard} from '../src/components/BulmaCard.vue';
import {default as BulmaBreadcrumb} from '../src/components/BulmaBreadcrumb.vue';
import {default as BulmaIcon} from '../src/components/BulmaIcon.vue';
import {default as BulmaImage} from '../src/components/BulmaImage.vue';
import {default as BulmaHeading} from '../src/components/BulmaHeading.vue';
//* Containers
import {default as BulmaBox} from '../src/components/containers/BulmaBox.vue';
import {default as BulmaBlock} from '../src/components/containers/BulmaBlock.vue';


export default {
	install: (app: any, options: any): void => {
		app.component('BulmaHeading', BulmaHeading);
		app.component('BulmaIcon', BulmaIcon);
		app.component('BulmaImage', BulmaImage);
		app.component('BulmaCard', BulmaCard);
		app.component('BulmaBreadcrumb', BulmaBreadcrumb);
		app.component('BulmaBox', BulmaBox);
		app.component('BulmaBlock', BulmaBlock);
	}
};

export {BulmaHeading, BulmaIcon, BulmaImage, BulmaCard, BulmaBreadcrumb, BulmaBox, BulmaBlock} ;