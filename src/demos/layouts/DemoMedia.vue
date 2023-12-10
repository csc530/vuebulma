<template>
  <v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
    <v-bulma-media-object>
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
          tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
      <template #left>
        <v-bulma-image dimensions="128.0"><img alt="Bloons tower defense image"
                                             src="https://cdn.akamai.steamstatic.com/steam/apps/960090/capsule_616x353.jpg?t=1634303522">
        </v-bulma-image>
      </template>
      <v-bulma-media-object>
        <template #right>
          <v-bulma-button label="Reply" colour="success" is-outlined is-inverted/>
        </template>
        <v-bulma-text-area default="I'm a nested media object"/>
      </v-bulma-media-object>
    </v-bulma-media-object>
  </v-bulma-box>
</template>

<script lang="ts" setup>
import VBulmaMediaObject from "../../vbComponents/layouts/VBulmaMediaObject.vue";
import VBulmaTextArea from "../../vbComponents/form/VBulmaTextArea.vue";
import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
import VBulmaImage from "../../vbComponents/elements/VBulmaImage.vue";

</script>

