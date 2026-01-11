<template>
	<NuxtPicture
		:width="width"
		:height="height"
		:src="path"
		:img-attrs="{ alt: image.alt, title: image.alt, loading: 'lazy' }"
		class="AssetItem"
	/>
</template>

<script lang="ts" setup>
import type { StoryblokAsset } from '~~/types/types/storyblok';

const props = defineProps<{
	image: StoryblokAsset;
	resolution: string;
}>();

const path = computed(() => props.image.filename);
const resolutionArray = computed(() => props.resolution.split('x'));
const width = computed(() => resolutionArray.value[0]);
const height = computed(() => resolutionArray.value[1]);
</script>

<style lang="scss">
.AssetItem {
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
