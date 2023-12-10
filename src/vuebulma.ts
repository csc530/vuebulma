import VBulmaBreadcrumb from "./vbComponents/components/VBulmaBreadcrumb.vue";
import VBulmaCard from "./vbComponents/components/VBulmaCard.vue";
import VBulmaDropdown from "./vbComponents/components/VBulmaDropdown.vue";
import VBulmaMenu from "./vbComponents/components/VBulmaMenu.vue";
import VBulmaMessage from "./vbComponents/components/VBulmaMessage.vue";
import VBulmaModal from "./vbComponents/components/VBulmaModal.vue";
import VBulmaModalCard from "./vbComponents/components/VBulmaModalCard.vue";
import VBulmaPagination from "./vbComponents/components/VBulmaPagination.vue";
import VBulmaPanel from "./vbComponents/components/VBulmaPanel.vue";
import VBulmaNavbar from "./vbComponents/components/navbar/VBulmaNavbar.vue";
import VBulmaBlock from "./vbComponents/elements/VBulmaBlock.vue";
import VBulmaBox from "./vbComponents/elements/VBulmaBox.vue";
import VBulmaButton from "./vbComponents/elements/VBulmaButton.vue";
import VBulmaDelete from "./vbComponents/elements/VBulmaDelete.vue";
import VBulmaHeading from "./vbComponents/elements/VBulmaHeading.vue";
import VBulmaIcon from "./vbComponents/elements/VBulmaIcon.vue";
import VBulmaImage from "./vbComponents/elements/VBulmaImage.vue";
import VBulmaNotification from "./vbComponents/elements/VBulmaNotification.vue";
import VBulmaProgressbar from "./vbComponents/elements/VBulmaProgressbar.vue";
import VBulmaTable from "./vbComponents/elements/VBulmaTable.vue";
import VBulmaTag from "./vbComponents/elements/VBulmaTag.vue";
import VBulmaFileInput from "./vbComponents/form/VBulmaFileInput.vue";
import VBulmaInput from "./vbComponents/form/VBulmaInput.vue";
import VBulmaSelect from "./vbComponents/form/VBulmaSelect.vue";
import VBulmaTextArea from "./vbComponents/form/VBulmaTextArea.vue";
import VBulmaFormControl from "./vbComponents/form/groups/VBulmaFormControl.vue";
import VBulmaFormControlGroup from "./vbComponents/form/groups/VBulmaFormControlGroup.vue";
import VBulmaFormField from "./vbComponents/form/groups/VBulmaFormField.vue";
import VBulmaButtonGroup from "./vbComponents/layouts/VBulmaButtonGroup.vue";
import VBulmaHero from "./vbComponents/layouts/VBulmaHero.vue";
import VBulmaTagGroup from "./vbComponents/layouts/VBulmaTagGroup.vue";
import VBulmaTile from "./vbComponents/layouts/VBulmaTile.vue";
import VBulmaColumn from "./vbComponents/layouts/Columns/VBulmaColumn.vue";
import VBulmaColumnGroup from "./vbComponents/layouts/Columns/VBulmaColumnGroup.vue";
import VBulmaLevel from "./vbComponents/layouts/Level/VBulmaLevel.vue";
import {App} from "vue";

const vuebulma = {
	install(Vue: App){
		// 	components
		Vue.component("VBulmaBreadcrumb", VBulmaBreadcrumb);
		Vue.component("VBulmaCard", VBulmaCard);
		Vue.component("VBulmaDropdown", VBulmaDropdown);
		Vue.component("VBulmaMenu", VBulmaMenu);
		Vue.component("VBulmaMessage", VBulmaMessage);
		Vue.component("VBulmaModal", VBulmaModal);
		Vue.component("VBulmaModalCard", VBulmaModalCard);
		Vue.component("VBulmaPagination", VBulmaPagination);
		Vue.component("VBulmaPanel", VBulmaPanel);
		Vue.component("VBulmaNavbar", VBulmaNavbar);
		Vue.component("VBulmaBlock", VBulmaBlock);
		Vue.component("VBulmaBox", VBulmaBox);
		Vue.component("VBulmaButton", VBulmaButton);
		Vue.component("VBulmaDelete", VBulmaDelete);
		Vue.component("VBulmaHeading", VBulmaHeading);
		Vue.component("VBulmaIcon", VBulmaIcon);
		Vue.component("VBulmaImage", VBulmaImage);
		Vue.component("VBulmaNotification", VBulmaNotification);
		Vue.component("VBulmaProgressbar", VBulmaProgressbar);
		Vue.component("VBulmaTable", VBulmaTable);
		Vue.component("VBulmaTag", VBulmaTag);
		Vue.component("VBulmaFileInput", VBulmaFileInput);
		Vue.component("VBulmaInput", VBulmaInput);
		Vue.component("VBulmaSelect", VBulmaSelect);
		Vue.component("VBulmaTextArea", VBulmaTextArea);
		Vue.component("VBulmaFormControl", VBulmaFormControl);
		Vue.component("VBulmaFormControlGroup", VBulmaFormControlGroup);
		Vue.component("VBulmaFormField", VBulmaFormField);
		Vue.component("VBulmaButtonGroup", VBulmaButtonGroup);
		Vue.component("VBulmaHero", VBulmaHero);
		Vue.component("VBulmaTagGroup", VBulmaTagGroup);
		Vue.component("VBulmaTile", VBulmaTile);
		Vue.component("VBulmaColumn", VBulmaColumn);
		Vue.component("VBulmaColumnGroup", VBulmaColumnGroup);
		Vue.component("VBulmaLevel", VBulmaLevel);
	}
};

export {
	vuebulma,
	VBulmaBreadcrumb,
	VBulmaCard,
	VBulmaDropdown,
	VBulmaMenu,
	VBulmaMessage,
	VBulmaModal,
	VBulmaModalCard,
	VBulmaPagination,
	VBulmaPanel,
	VBulmaNavbar,
	VBulmaBlock,
	VBulmaBox,
	VBulmaButton,
	VBulmaDelete,
	VBulmaHeading,
	VBulmaIcon,
	VBulmaImage,
	VBulmaNotification,
	VBulmaProgressbar,
	VBulmaTable,
	VBulmaTag,
	VBulmaFileInput,
	VBulmaInput,
	VBulmaSelect,
	VBulmaTextArea,
	VBulmaFormControl,
	VBulmaFormControlGroup,
	VBulmaFormField,
	VBulmaButtonGroup,
	VBulmaHero,
	VBulmaTagGroup,
	VBulmaTile,
	VBulmaColumn,
	VBulmaColumnGroup,
	VBulmaLevel
};