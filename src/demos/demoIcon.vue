<template>
	<BulmaBox>
		<BulmaHeading size="2">Icons</BulmaHeading>
		<bulma-heading size="3" type="subtitle">Using FontAwesome<small></small></bulma-heading>
		<!-- Icon basics-->
		<BulmaBlock>
			<BulmaIcon :icon="['fa-cross','fa-spaghetti-monster-flying','fa-brain','fa-brands fa-canadian-maple-leaf']"
			           prefix="fa-solid"/>
			<br/>
			<BulmaIcon icon="fa-solid fa-hat-wizard">Magically prefixes text with icons.</BulmaIcon>
			<br/>
			<BulmaIcon after-text icon="fa-solid fa-car">Or at the end of your content, however you'd like</BulmaIcon>
		</BulmaBlock>
		<!-- Flex Icons -->
		<BulmaBlock>
			<BulmaIcon flex icon="fa-person-running fa-solid">Flex Icons with text</BulmaIcon>
			<BulmaIcon flex icon="fa-square fa-solid">Essentially making them take up a line, flex instead of inline-flex,
				elements
			</BulmaIcon>
		</BulmaBlock>
		<!-- Icon colours-->
		<BulmaBlock>
			<!--				todo wrap light icons in dark background-->
			<BulmaHeading size="4">Icon Colours</BulmaHeading>
			<BulmaHeading size="5.0" type="subtitle">Default</BulmaHeading>
			<BulmaIcon v-for="colour in getColours()" :colour="colour" icon="fa-solid fa-star"/>
			<BulmaHeading size="5.0" type="subtitle">Dark</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('dark')" :colour="colour" icon="fa-solid fa-phone"/>
			<BulmaHeading size="5.0" type="subtitle">Light</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('light')" :colour="colour" icon="fa-solid fa-worm"/>

			<BulmaHeading size="4.0" type="title">Background Colours</BulmaHeading>
			<BulmaHeading size="5" type="subtitle">Default</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('default')" :bg-colour="colour" icon="fa-solid fa-leaf"/>
			<BulmaHeading size="5" type="subtitle">Dark</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('dark')" :bg-colour="colour" icon="fa-solid fa-bible"/>
			<BulmaHeading size="5" type="subtitle">Light</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('light')" :bg-colour="colour" icon="fa-solid fa-earth"/>

			<BulmaHeading size="4.0" type="title">Mix N' Match</BulmaHeading>
			<template v-for="colour in getColours()">
				<BulmaIcon v-for="bg in getColours('dark')" :bg-colour="bg" :colour="colour" icon="fa-solid fa-atom"/>
			</template>
		</BulmaBlock>
		<!-- Icons Sizes-->
		<BulmaHeading size="4">Icon Sizes</BulmaHeading>
		<p>The <a href="https://bulma.io/documentation/elements/icon/#sizes">size prop</a> only affect the container and
			will position the icon within the center of it. To resize the icon is up to you.</p>
		<BulmaIcon container-size="small" icon="fa-solid fa-coffee fa-2xs"/>
		<BulmaIcon container-size="small" icon="fa-solid fa-coffee fa-xs"/>
		<BulmaIcon container-size="" icon="fa-solid fa-coffee fa-sm"/>
		<BulmaIcon container-size="default" icon="fa-solid fa-coffee"/>
		<BulmaIcon container-size="medium" icon="fa-solid fa-coffee fa-lg"/>
		<BulmaIcon container-size="large" icon="fa-solid fa-coffee fa-xl"/>
		<BulmaIcon container-size="large" icon="fa-solid fa-coffee fa-2xl"/>
		<br/>
		<bulma-block>
			<BulmaIcon :icon="['fas fa-camera fa-stack-1x',{icon:'fas fa-ban fa-stack-2x',colour:{colour:'danger'}}]"
			           afterText
			           container-size="large" stacked="fa-stack">
				Also support FontAwesome stacked icons
			</BulmaIcon>
		</bulma-block>
	</BulmaBox>

</template>

<style scoped>

</style>

<script setup lang="ts">
import BulmaBox from "../components/containers/BulmaBox.vue";
import BulmaHeading from "../components/BulmaHeading.vue";
import BulmaIcon from "../components/BulmaIcon.vue";</script>

