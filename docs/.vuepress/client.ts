import {defineClientConfig} from '@vuepress/client'
import DemoBreadcrumb from '../../src/demos/components/DemoBreadcrumb.vue'
import DemoDropdown from "../../src/demos/components/DemoDropdown.vue";
import DemoMenu from "../../src/demos/components/DemoMenu.vue";
import DemoMessage from "../../src/demos/components/DemoMessage.vue";
import DemoNavbar from "../../src/demos/components/DemoNavbar.vue";
import DemoButton from "../../src/demos/elements/DemoButton.vue";
import DemoDelete from "../../src/demos/elements/DemoDelete.vue";
import DemoHeading from "../../src/demos/elements/DemoHeading.vue";
import DemoIcon from "../../src/demos/elements/DemoIcon.vue";
import DemoImage from "../../src/demos/elements/DemoImage.vue";
import DemoNotification from "../../src/demos/elements/DemoNotification.vue";
import DemoControl from "../../src/demos/form/DemoControl.vue";
import DemoControlGroup from "../../src/demos/form/DemoControlGroup.vue";
import DemoField from "../../src/demos/form/DemoField.vue";
import DemoFileInput from "../../src/demos/form/DemoFileInput.vue";
import DemoInput from "../../src/demos/form/DemoInput.vue";
import DemoSelect from "../../src/demos/form/DemoSelect.vue";
import DemoTextArea from "../../src/demos/form/DemoTextArea.vue";
import DemoButtonGroup from "../../src/demos/layouts/DemoButtonGroup.vue";
import IframeVue from "./demoIframe.vue";
import DemoProgressbar from "../../src/demos/elements/DemoProgress.vue";
import DemoTable from "../../src/demos/elements/DemoTable.vue";

export default defineClientConfig({
	enhance({app}) {
		app.component('demoIframe', IframeVue);
		app.component('DemoBreadcrumb', DemoBreadcrumb);
		app.component('DemoButtonGroup', DemoButtonGroup)
		app.component('DemoControl', DemoControl);
		app.component('DemoControlGroup', DemoControlGroup);
		app.component('DemoDropdown', DemoDropdown);
		app.component('DemoField', DemoField);
		app.component('DemoFileInput', DemoFileInput);
		app.component('DemoHeading', DemoHeading);
		app.component('DemoIcon', DemoIcon);
		app.component('DemoImage', DemoImage);
		app.component('DemoInput', DemoInput);
		app.component('DemoMenu', DemoMenu);
		app.component('DemoMessage', DemoMessage);
		app.component('DemoNavbar', DemoNavbar);
		app.component('DemoSelect', DemoSelect);
		app.component('DemoTextArea', DemoTextArea);
		app.component('DemoButton', DemoButton);
		app.component('DemoDelete', DemoDelete);
		app.component('DemoNotification', DemoNotification);
		app.component('DemoProgressbar', DemoProgressbar);
		app.component('DemoTable', DemoTable);
	}
})