<template>
    <v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
        <v-bulma-notification :colour="col" :is-light="light" :tag="t">
            <template v-if="del" #delete>
                <v-bulma-button is-delete />
            </template>
            Hey just letting you know <em>this a notification</em> courtesy of <a href="https://bulma.io">Bulma</a>
            brought to
            you by me Chris 😃
        </v-bulma-notification>
    </v-bulma-box>

    <v-bulma-box>
        <v-bulma-heading>Props</v-bulma-heading>
        <fieldset
                class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse">
            <VBulmaFormField is-horizontal label="Colour">
                <v-bulma-select v-model="col" :options="getBulmaColours()" />
            </VBulmaFormField>


            <VBulmaFormField is-horizontal label="Light colour">
                <input v-model="light" type="checkbox" />
            </VBulmaFormField>
            <VBulmaFormField is-horizontal label="Delete">
                <input v-model="del" type="checkbox" />
            </VBulmaFormField>


            <VBulmaFormField is-horizontal label="Tag">
                <v-bulma-input v-model="t" />
            </VBulmaFormField>
        </fieldset>
    </v-bulma-box>
</template>
<script lang="ts" setup>
    import {ref} from "vue";
    import {BulmaColour, getBulmaColours} from "../../types";
    import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
    import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
    import VBulmaNotification from "../../vbComponents/elements/VBulmaNotification.vue";
    import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
    import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
    import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

    const t = ref("div");
    const col = ref<BulmaColour>("default");
    const light = ref(false);
    const del = ref(false);
</script>