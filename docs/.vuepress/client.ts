import {defineClientConfig} from "vuepress/client";
import DemoBreadcrumb from "../../src/demos/components/DemoBreadcrumb.vue";
import DemoCard from "../../src/demos/components/DemoCard.vue";
import DemoDropdown from "../../src/demos/components/DemoDropdown.vue";
import DemoMenu from "../../src/demos/components/DemoMenu.vue";
import DemoMessage from "../../src/demos/components/DemoMessage.vue";
import DemoModal from "../../src/demos/components/DemoModal.vue";
import DemoNavbar from "../../src/demos/components/DemoNavbar.vue";
import DemoPagination from "../../src/demos/components/DemoPagination.vue";
import DemoPanel from "../../src/demos/components/DemoPanel.vue";
import DemoButton from "../../src/demos/elements/DemoButton.vue";
import DemoHeading from "../../src/demos/elements/DemoHeading.vue";
import DemoIcon from "../../src/demos/elements/DemoIcon.vue";
import DemoImage from "../../src/demos/elements/DemoImage.vue";
import DemoNotification from "../../src/demos/elements/DemoNotification.vue";
import DemoProgressbar from "../../src/demos/elements/DemoProgress.vue";
import DemoTable from "../../src/demos/elements/DemoTable.vue";
import DemoControl from "../../src/demos/form/DemoControl.vue";
import DemoControlGroup from "../../src/demos/form/DemoControlGroup.vue";
import DemoField from "../../src/demos/form/DemoField.vue";
import DemoFileInput from "../../src/demos/form/DemoFileInput.vue";
import DemoInput from "../../src/demos/form/DemoInput.vue";
import DemoSelect from "../../src/demos/form/DemoSelect.vue";
import DemoTextArea from "../../src/demos/form/DemoTextArea.vue";
import DemoButtonGroup from "../../src/demos/layouts/DemoButtonGroup.vue";
import DemoColumns from "../../src/demos/layouts/DemoColumns.vue";
import DemoContainer from "../../src/demos/layouts/DemoContainer.vue";
import DemoHero from "../../src/demos/layouts/DemoHero.vue";
import DemoLevel from "../../src/demos/layouts/DemoLevel.vue";
import DemoMedia from "../../src/demos/layouts/DemoMedia.vue";
import DemoTile from "../../src/demos/layouts/DemoTile.vue";
import IframeVue from "./demoIframe.vue";
import Demo from "../../src/App.vue"

export default defineClientConfig({
    enhance({app}) {
        app.component("demoIframe", IframeVue);
        app.component("DemoBreadcrumb", DemoBreadcrumb);
        app.component("DemoButtonGroup", DemoButtonGroup);
        app.component("DemoControl", DemoControl);
        app.component("DemoControlGroup", DemoControlGroup);
        app.component("DemoDropdown", DemoDropdown);
        app.component("DemoField", DemoField);
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
        app.component('DemoNotification', DemoNotification);
        app.component('DemoProgress', DemoProgressbar);
        app.component('DemoTable', DemoTable);
        app.component('DemoCard', DemoCard)
        app.component('DemoModal', DemoModal);
        app.component('DemoPagination', DemoPagination);
        app.component('DemoPanel', DemoPanel);
        app.component('DemoContainer', DemoContainer);
        app.component('DemoMedia', DemoMedia);
        app.component("DemoHero", DemoHero);
        app.component("DemoLevel", DemoLevel);
        app.component("DemoColumn", DemoColumns);
        app.component("DemoTile", DemoTile);
        app.component("Demo", Demo);
    },
    rootComponents: [
        // register root components
    ],
    setup() {

    },
})