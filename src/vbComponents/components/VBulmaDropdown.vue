<template>
    <component :is="tag" ref="dropdown" :class="[classes]" class="dropdown">

		<component :is="triggerTag" @click="toggleActiveClass($refs.dropdown)">
			<slot />
		</component>

        <component :is="tag" class="dropdown-menu">
            <component :is="tag" class="dropdown-content">

                <template v-for="item in content" class="dropdown-item">
                    <hr v-if="item === VBDROPDOWN_DIVIDER" class="dropdown-divider" />
                    <slot v-else name="dropdown-item" v-bind:data="item">
                        <component :is="itemTag" class="dropdown-item">{{ item }}</component>
                    </slot>
                </template>

            </component>
        </component>
    </component>
</template>

<script lang="ts" setup>

    import {computed, ref} from 'vue';
    import {BulmaLeftRight, getBulmaClassesFromProps, toggleActiveClass} from '../../types';
    import {VBDROPDOWN_DIVIDER} from "../../types/DropdownTypes";

    const props = withDefaults(defineProps<{
        alignment?: BulmaLeftRight,
        content: (unknown | typeof VBDROPDOWN_DIVIDER)[],
        tag?: string,
        triggerTag?: string,
        itemTag?: string,
        isHoverable?: boolean,
        isDropup?: boolean
    }>(), {
        content: [],
        tag: 'div',
        itemTag: 'p',
        triggerTag: 'button',
    });

    const dropdown = ref<HTMLElement | null>(null);
    const classes = computed(() => getBulmaClassesFromProps(props));
</script>

