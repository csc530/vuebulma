<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueBulmaSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VueBulmaSample,
  // }
});
</script>

<template>
  <div id="app">
    <vue-bulma-sample />
  </div>
</template>
