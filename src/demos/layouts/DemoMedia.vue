<template>
  <bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
    <bulma-media-object>
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
          tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
      <template #left>
        <bulma-image dimensions="128.0"><img alt="Bloons tower defense image"
                                             src="https://cdn.akamai.steamstatic.com/steam/apps/960090/capsule_616x353.jpg?t=1634303522">
        </bulma-image>
      </template>
      <bulma-media-object>
        <template #right>
          <bulma-button label="Reply" colour="success" is-outlined is-inverted/>
        </template>
        <bulma-text-area default="I'm a nested media object"/>
      </bulma-media-object>
    </bulma-media-object>
  </bulma-box>
</template>

<script lang="ts" setup>

import BulmaMediaObject from "../../vbComponents/layouts/BulmaMediaObject.vue";
import BulmaTextArea from "../../vbComponents/form/BulmaTextArea.vue";
import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
import BulmaButton from "../../vbComponents/elements/BulmaButton.vue";
import BulmaImage from "../../vbComponents/elements/BulmaImage.vue";

</script>

