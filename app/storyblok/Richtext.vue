<template>
	<div v-editable="blok" class="Richtext">
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div v-html="richtext" />
	</div>
</template>

<script lang="ts" setup>
import type { Richtext } from '~~/types/types/100825/storyblok-components';

const props = defineProps<{
	blok: Richtext;
}>();

const richtext = computed(() => props.blok.text
	? renderRichText(props.blok.text)
	: '');
</script>

<style lang="scss">
@use '~/assets/scss/font' as *;
@use '~/assets/scss/spacing' as *;

.Richtext {
  h2 {
    @extend .h2;

    &:not(:first-of-type) {
      margin-top: $space-xl;
    }
  }

  h3 {
    @extend .h3;

    margin-top: $space-lg;
    margin-bottom: $space-sm;
  }

  p {
    margin-top: $space-xs;
  }
}
</style>
