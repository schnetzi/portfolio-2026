<template>
	<div class="AvatarImage">
		<LazyAssetItem :image="image" resolution="185x185" />
	</div>
</template>

<script lang="ts" setup>
import type { StoryblokAsset } from '~~/types/types/storyblok';

defineProps<{
	image: StoryblokAsset;
}>();
</script>

<style lang="scss">
.AvatarImage {
  $avatar-size: 185px;

  width: $avatar-size;
  height: $avatar-size;
  overflow: hidden;
  border-radius: 50%;
}
</style>
