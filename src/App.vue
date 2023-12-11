<template>
	<demo-columns />
	<demo-image />
	<demo-breadcrumb />
	<demo-button />
	<DemoTile />
	<DemoCard />
	<demo-button-group />
	<demo-tag />
	<DemoContainer />
	<DemoModal />
	<DemoDropdown />
	<DemoTable />
	<DemoPagination />
	<DemoTable />
	<DemoInput />
	<DemoTextArea />
	<DemoSelect />
	<demo-progress />
	<DemoPanel />
	<DemoNotification />
	<DemoNavbar />
	<DemoMessage />
	<DemoMenu />
	<DemoMedia />
	<DemoLevel />
	<DemoIcon />
	<DemoHero />
	<DemoHeading />
	<DemoFileInput />
	<DemoField />
	<DemoDelete />
	<DemoControlGroup />
</template>

<script>
	import {defineComponent} from "vue";
	import DemoIframe from "../docs/.vuepress/demoIframe.vue";
	import DemoBreadcrumb from "./demos/components/DemoBreadcrumb.vue";
	import DemoCard from "./demos/components/DemoCard.vue";
	import DemoDropdown from "./demos/components/DemoDropdown.vue";
	import DemoMenu from "./demos/components/DemoMenu.vue";
	import DemoMessage from "./demos/components/DemoMessage.vue";
	import DemoModal from "./demos/components/DemoModal.vue";
	import DemoNavbar from "./demos/components/DemoNavbar.vue";
	import DemoPagination from "./demos/components/DemoPagination.vue";
	import DemoPanel from "./demos/components/DemoPanel.vue";
	import DemoBox from "./demos/DemoBox.vue";
	import DemoButton from "./demos/elements/DemoButton.vue";
	import DemoDelete from "./demos/elements/DemoDelete.vue";
	import DemoHeading from "./demos/elements/DemoHeading.vue";
	import DemoIcon from "./demos/elements/DemoIcon.vue";
	import DemoImage from "./demos/elements/DemoImage.vue";
	import DemoNotification from "./demos/elements/DemoNotification.vue";
	import DemoProgress from "./demos/elements/DemoProgress.vue";
	import DemoTable from "./demos/elements/DemoTable.vue";
	import DemoTag from "./demos/elements/DemoTag.vue";
	import DemoControlGroup from "./demos/form/DemoControlGroup.vue";
	import DemoField from "./demos/form/DemoField.vue";
	import DemoFileInput from "./demos/form/DemoFileInput.vue";
	import DemoInput from "./demos/form/DemoInput.vue";
	import DemoSelect from "./demos/form/DemoSelect.vue";
	import DemoTextArea from "./demos/form/DemoTextArea.vue";
	import DemoButtonGroup from "./demos/layouts/DemoButtonGroup.vue";
	import DemoColumns from "./demos/layouts/DemoColumns.vue";
	import DemoContainer from "./demos/layouts/DemoContainer.vue";
	import DemoHero from "./demos/layouts/DemoHero.vue";
	import DemoLevel from "./demos/layouts/DemoLevel.vue";
	import DemoMedia from "./demos/layouts/DemoMedia.vue";
	import DemoTile from "./demos/layouts/DemoTile.vue";

	export default defineComponent({
		components: {
			DemoBox,
			DemoControlGroup,
			DemoDelete,
			DemoField,
			DemoFileInput,
			DemoHeading,
			DemoHero,
			DemoIcon,
			DemoIframe,
			DemoLevel,
			DemoMedia,
			DemoMenu,
			DemoMessage,
			DemoNavbar,
			DemoNotification,
			DemoPanel,
			DemoContainer,
			DemoTag,
			DemoButtonGroup,
			DemoModal,
			DemoDropdown,
			DemoPagination,
			DemoInput,
			DemoSelect,
			DemoCard,
			DemoTable, DemoTextArea, DemoProgress, DemoTile, DemoButton, DemoBreadcrumb, DemoColumns, DemoImage
		}
	});
</script>