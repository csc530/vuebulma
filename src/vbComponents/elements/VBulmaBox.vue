<template>
    <component :is="tag" class="box">
        <slot />
    </component>
</template>

<script lang="ts" setup>
    withDefaults(defineProps<{
            tag?: string
        }>(),
        {
            tag: "section"
        });
</script>

