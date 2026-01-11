<template>
	<div>
		<TheHeader v-if="error?.statusMessage" :blok="{ title: error?.statusMessage }" />
		<div class="l-wrapper">
			<a @click="handleError()">Back to the homepage</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
	error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<style lang="scss" scoped>
a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
