<template>
    <v-bulma-box>
        <v-bulma-heading>Columns</v-bulma-heading>
        <demo-box>
            <v-bulma-column-group style="min-height: 35cap; height: auto; border: 3px dashed black" :tag="tag" :responsive="breakpointMedia"
                    :is-vcentered="isVCentered" :is-centered="centered" :gap="columnGap" :is-multiline="isMultiline">
                <v-bulma-column v-for="(size, index) in columnSizes" :size="size" :key="index">
                    <v-bulma-box>
                        <p class="has-text-centered">size: {{ size }}</p>
                    </v-bulma-box>
                </v-bulma-column>
            </v-bulma-column-group>
        </demo-box>

        <section>
            <v-bulma-heading type="subtitle">Props</v-bulma-heading>

            <v-bulma-form-field label="Tag" is-horizontal>
                <VBulmaFormControl tag="span">
                    <v-bulma-input v-model="tag" />
                </VBulmaFormControl>
            </v-bulma-form-field>

            <v-bulma-form-field label="Column Gap" is-horizontal>
                <VBulmaFormControl tag="span">
                    <v-bulma-select v-model="columnGap" :options="columnGapOptions" />
                </VBulmaFormControl>
            </v-bulma-form-field>

            <VBulmaFormField is-horizontal label="Multiline">
                <VBulmaFormControl tag="span">
                    <input type="checkbox" v-model="isMultiline" :checked="isMultiline" />
                </VBulmaFormControl>
            </VBulmaFormField>

            <VBulmaFormField is-horizontal label="Responseive Size" help="media size to maintain column layout">
                <VBulmaFormControl tag="span">
                    <v-bulma-select v-model="breakpointMedia" :options="BULMA_MEDIA" is-multiple />
                </VBulmaFormControl>
            </VBulmaFormField>

            <VBulmaFormField is-horizontal label="Centered">
                <VBulmaFormControl tag="span">
                    <input type="checkbox" v-model="centered" :checked="centered" />
                </VBulmaFormControl>
            </VBulmaFormField>

            <VBulmaFormField is-horizontal label="Vertically centered">
                <VBulmaFormControl tag="span">
                    <input type="checkbox" v-model="isVCentered" :checked="isVCentered" />
                </VBulmaFormControl>
            </VBulmaFormField>
        </section>
    </v-bulma-box>
</template>


<script setup lang="ts">
    import {computed, ref} from "vue";
    import {BulmaOption} from "../../types/SelectTypes";
    import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
    import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
    import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
    import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";
    import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
    import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
    import VBulmaColumnGroup from "../../vbComponents/layouts/Columns/VBulmaColumnGroup.vue";
    import VBulmaColumn from "../../vbComponents/layouts/Columns/VBulmaColumn.vue";

    import {BULMA_COLUMN_GAP_SIZES, BULMA_COLUMN_SIZES, BulmaColumnSize} from "../../types/ColumnTypes";
    import DemoBox from "../DemoBox.vue";
    import {BULMA_MEDIA, BulmaMedia} from "../../types";

    let columnGapOptions: BulmaOption[] = [{value: null, label: "default"}];
    columnGapOptions = columnGapOptions.concat(BULMA_COLUMN_GAP_SIZES.flatMap(gap => ({
        label: gap.toString(),
        value: gap
    })));
    const columnGap = ref(columnGapOptions[0].value);
    const isMultiline = ref(true);
    const centered = ref(false);
    const isVCentered = ref(false);
    const tag = ref("div");
    const breakpointMedia = ref<BulmaMedia[]|BulmaMedia>([]);
    const breakpointSize = ref<BulmaColumnSize>("1/3");
    let columnSizes = computed((() => {
        //shuffle the array BULMA_COLUMN_SIZES
        const shuffled = BULMA_COLUMN_SIZES.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6)
    }));
</script>

