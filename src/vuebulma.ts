import BulmaBreadcrumb from './vbComponents/components/BulmaBreadcrumb.vue';
import BulmaDropdown from './vbComponents/components/BulmaDropdown.vue'
import BulmaMenu from './vbComponents/components/BulmaMenu.vue'
import BulmaMessage from './vbComponents/components/BulmaMessage.vue'
import BulmaNavbar from "./vbComponents/components/navbar/BulmaNavbar.vue";
import BulmaBlock from './vbComponents/elements/BulmaBlock.vue';
import BulmaBox from './vbComponents/elements/BulmaBox.vue';
import BulmaButton from "./vbComponents/elements/BulmaButton.vue";
import BulmaDelete from "./vbComponents/elements/BulmaDelete.vue";
import BulmaHeading from './vbComponents/elements/BulmaHeading.vue';
import BulmaIcon from './vbComponents/elements/BulmaIcon.vue';
import BulmaImage from './vbComponents/elements/BulmaImage.vue';
import BulmaFileInput from "./vbComponents/form/BulmaFileInput.vue";
import BulmaInput from "./vbComponents/form/BulmaInput.vue";
import BulmaSelect from "./vbComponents/form/BulmaSelect.vue";
import BulmaTextArea from "./vbComponents/form/BulmaTextArea.vue";
import BulmaFormControl from "./vbComponents/form/groups/BulmaFormControl.vue";
import BulmaFormControlGroup from "./vbComponents/form/groups/BulmaFormControlGroup.vue";
import BulmaFormField from "./vbComponents/form/groups/BulmaFormField.vue";
import BulmaButtonGroup from "./vbComponents/layouts/BulmaButtonGroup.vue";

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
	BulmaHeading as vbHeading,
	BulmaIcon as vbIcon,
	BulmaImage as vbImage,
	BulmaBreadcrumb as vbBreadcrumb,
	BulmaBox as vbBox,
	BulmaBlock as vbBlock,
	BulmaDropdown as vbDropdown,
	BulmaTextArea as vbTextArea,
	BulmaMessage as vbMessage,
	BulmaMenu as vbMenu,
	BulmaNavbar as vbNavbar,
	BulmaButton as vbButton,
	BulmaButtonGroup as vbButtonGroup,
	BulmaFileInput as vbFileInput,
	BulmaInput as vbInput,
	BulmaSelect as vbSelect,
	BulmaFormControl as vbFormControl,
	BulmaFormField as vbFormField,
	BulmaFormControlGroup as vbFormControlGroup,
	BulmaDelete as vbDelete,
	vuebulma
};