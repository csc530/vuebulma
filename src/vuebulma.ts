import BulmaBreadcrumb from './components/BulmaBreadcrumb.vue';
import BulmaHeading from './components/BulmaHeading.vue';
import BulmaIcon from './components/BulmaIcon.vue';
import BulmaImage from './components/BulmaImage.vue';
import BulmaMessage from './components/BulmaMessage.vue'
import BulmaButton from "./components/button/BulmaButton.vue";
import BulmaButtons from "./components/button/BulmaButtons.vue";
import BulmaBlock from './components/containers/BulmaBlock.vue';
import BulmaBox from './components/containers/BulmaBox.vue';
import BulmaDropdown from './components/containers/BulmaDropdown.vue'
import BulmaMenu from './components/containers/BulmaMenu.vue'
import BulmaNavbar from "./components/containers/navbar/BulmaNavbar.vue";
import BulmaFileInput from "./components/form/BulmaFileInput.vue";
import BulmaInput from "./components/form/BulmaInput.vue";
import BulmaSelect from "./components/form/BulmaSelect.vue";
import BulmaFormControl from "./components/form/groups/BulmaFormControl.vue";
import BulmaFormGroup from "./components/form/groups/BulmaFormGroup.vue";
import BulmaFormField from "./components/form/groups/BulmaFormField.vue";

const vuebulma = {
	install(Vue: any) {
		Vue.component('BulmaHeading', BulmaHeading);
		Vue.component('BulmaIcon', BulmaIcon);
		Vue.component('BulmaImage', BulmaImage);
		Vue.component('BulmaBreadcrumb', BulmaBreadcrumb);
		Vue.component('BulmaMessage', BulmaMessage);
		Vue.component('BulmaBox', BulmaBox);
		Vue.component('BulmaBlock', BulmaBlock);
		Vue.component('BulmaDropdown', BulmaDropdown);
		Vue.component('BulmaNavBar', BulmaNavbar);
		Vue.component('BulmaMenu', BulmaMenu);
		Vue.component('BulmaButton', BulmaButton);
		//todo: come up with a better name than buttonS to make the difference and use clear
		Vue.component('BulmaButtons', BulmaButtons);
		Vue.component('BulmaFileInput', BulmaFileInput);
		Vue.component('BulmaInput', BulmaInput);
		Vue.component('BulmaSelect', BulmaSelect);

	}
};

export {
	BulmaHeading,
	BulmaIcon,
	BulmaImage,
	BulmaBreadcrumb,
	BulmaBox,
	BulmaBlock,
	BulmaDropdown,
	BulmaMessage,
	BulmaMenu,
	BulmaNavbar,
	BulmaButton,
	BulmaButtons,
	BulmaFileInput,
	BulmaInput,
	BulmaSelect,
	vuebulma
};