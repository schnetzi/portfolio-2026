<template>
	<a
		v-editable="icon"
		:href="url"
		class="ExternalIconLink"
		rel="noopener"
		target="_blank"
		:title="icon.title"
		:aria-label="icon.title"
	>
		<img
			class="ExternalIconLink__icon"
			:src="icon.icon.filename ?? undefined"
			:alt="icon.icon.alt || icon.title"
			width="65"
			height="65"
			loading="lazy"
		>
		<img
			class="ExternalIconLink__icon--filled"
			:src="icon.icon_hover?.filename ?? undefined"
			:alt="icon.icon_hover?.alt || icon.title"
			width="65"
			height="65"
		>
	</a>
</template>

<script setup lang="ts">
import type { FooterIcon } from '~~/types/types/100825/storyblok-components';

const props = defineProps<{
	icon: FooterIcon;
}>();

const url = computed(() => props.icon.link?.linktype === 'email'
	? `mailto:${props.icon.link.email}`
	: props.icon.link?.url);
</script>

<style lang="scss">
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.ExternalIconLink {
  $root: &;

  display: inline-block;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: $space-lg;
  }

  &:hover {
    #{$root}__icon {
      display: none;
    }

    #{$root}__icon--filled {
      display: block;
    }
  }

  &__icon--filled {
    display: none;
  }
}
</style>
