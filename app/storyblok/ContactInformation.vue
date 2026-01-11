<template>
	<div>
		<h2>{{ blok.headline }}</h2>
		<p>{{ blok.name }}</p>
		<p>{{ blok.street }}</p>
		<p>{{ blok.postalCode }} {{ blok.city }}</p>
		<a v-if="blok.email" :href="mailableEmail">{{ blok.email.email }}</a>
		<a v-if="blok.telephone" :href="callablePhone">{{ blok.telephone }}</a>
	</div>
</template>

<script setup lang="ts">
import type { ContactInformation } from '~~/types/types/100825/storyblok-components';

const props = defineProps<{
	blok: ContactInformation;
}>();

const callablePhone = computed(() => `tel:${props.blok.telephone?.replace(/\s/g, '')}`);
const mailableEmail = computed(() => `mailto:${props.blok.email?.email}`);
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '~/assets/scss/font' as *;
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

h2 {
  @extend .h2;

  margin-bottom: $space-sm;
}

a {
  display: block;
  margin-top: $space-2xs;
  width: max-content;

  &:hover {
    color: color.adjust($color-gray, $lightness: -20%);
  }
}
</style>
