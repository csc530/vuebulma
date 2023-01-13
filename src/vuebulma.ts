import BulmaBreadcrumb from './vuebulma components/components/BulmaBreadcrumb.vue';
import BulmaDropdown from './vuebulma components/components/BulmaDropdown.vue'
import BulmaMenu from './vuebulma components/components/BulmaMenu.vue'
import BulmaMessage from './vuebulma components/components/BulmaMessage.vue'
import BulmaNavbar from "./vuebulma components/components/navbar/BulmaNavbar.vue";
import BulmaBlock from './vuebulma components/elements/BulmaBlock.vue';
import BulmaBox from './vuebulma components/elements/BulmaBox.vue';
import BulmaButton from "./vuebulma components/elements/BulmaButton.vue";
import BulmaHeading from './vuebulma components/elements/BulmaHeading.vue';
import BulmaIcon from './vuebulma components/elements/BulmaIcon.vue';
import BulmaImage from './vuebulma components/elements/BulmaImage.vue';
import BulmaFileInput from "./vuebulma components/form/BulmaFileInput.vue";
import BulmaInput from "./vuebulma components/form/BulmaInput.vue";
import BulmaSelect from "./vuebulma components/form/BulmaSelect.vue";
import BulmaTextArea from "./vuebulma components/form/BulmaTextArea.vue";
import BulmaFormControl from "./vuebulma components/form/groups/BulmaFormControl.vue";
import BulmaFormControlGroup from "./vuebulma components/form/groups/BulmaFormControlGroup.vue";
import BulmaFormField from "./vuebulma components/form/groups/BulmaFormField.vue";
import BulmaButtonGroup from "./vuebulma components/layouts/BulmaButtonGroup.vue";


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
		Vue.component('BulmaButtonGroup', BulmaButtonGroup);
		Vue.component('BulmaFileInput', BulmaFileInput);
		Vue.component('BulmaInput', BulmaInput);
		Vue.component('BulmaSelect', BulmaSelect);
		Vue.component('BulmaFormControl', BulmaFormControl);
		Vue.component('BulmaFormField', BulmaFormField);
		Vue.component('BulmaFormControlGroup', BulmaFormControlGroup);
		Vue.component('BulmaTextArea', BulmaTextArea);
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
	BulmaTextArea,
	BulmaMessage,
	BulmaMenu,
	BulmaNavbar,
	BulmaButton,
	BulmaButtonGroup,
	BulmaFileInput,
	BulmaInput,
	BulmaSelect,
	BulmaFormControl,
	BulmaFormField,
	BulmaFormControlGroup,
	vuebulma
};