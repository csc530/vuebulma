<template>
    <DemoBox>
        <v-bulma-icon :colour="{colour: colour, shade: colourShade}" :colour-text="colourText" :text="text" :container-size="size" :flex="flex">
            <i class="fas fa-house"></i>
        </v-bulma-icon>

    </DemoBox>

    <v-bulma-form-field is-horizontal label="Text" label-width="2">
        <v-bulma-input v-model="text" />
    </v-bulma-form-field>

    <v-bulma-form-field is-horizontal label="Colour">
        <v-bulma-select v-model="colour" :options="getBulmaStateColours()" />
    </v-bulma-form-field>
    <v-bulma-form-field is-horizontal label="Colour Shade">
        <v-bulma-select v-model="colourShade" :options="getBulmaShades()" />
    </v-bulma-form-field>


    <v-bulma-form-field is-horizontal label="Container Size">
        <v-bulma-select v-model="size" :options="BULMA_SIZES" />
    </v-bulma-form-field>

    <v-bulma-form-field help="" is-horizontal label="Flex">
        <input v-model="flex" type="checkbox" />
    </v-bulma-form-field>

    <v-bulma-form-field help="" is-horizontal label="Colour Text">
        <input v-model="colourText" type="checkbox" />
    </v-bulma-form-field>

</template>


<script lang="ts" setup>
    import {ref} from "vue";
    import {
        BulmaShade,
        BulmaSize,
        BulmaStateColour,
        getBulmaShades,
        BULMA_SIZES,
        getBulmaStateColours
    } from "../../types";
    import VBulmaIcon from "../../vbComponents/elements/VBulmaIcon.vue";
    import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
    import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
    import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";
    import DemoBox from "../../demos/DemoBox.vue";

    const text = ref<string>("A house icon");
    const colour = ref<BulmaStateColour>("default");
    const colourShade = ref<BulmaShade>("default");
    const size = ref<BulmaSize>("default");
    const flex = ref<boolean>(false);
    const colourText = ref<boolean>(false);

</script>

