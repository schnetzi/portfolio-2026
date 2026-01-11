<template>
	<div v-editable="blok" class="TheHeader">
		<section class="l-wrapper">
			<h1 class="TheHeader__title">
				{{ blok.title }}
			</h1>
		</section>

		<SvgoWaveHeader
			class="TheHeader__backgroundWave"
			aria-hidden="true"
		/>
	</div>
</template>

<script lang="ts" setup>
import type { TheHeader } from '~~/types/types/100825/storyblok-components';

defineProps<{
	blok: TheHeader;
}>();
</script>

<style lang="scss">
@use '~/assets/scss/font' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.TheHeader {
  padding-top: $space-2xl;
  background-image: url('~/assets/img/header-big.jpg');
  background-size: cover;
  color: $color-white;

  &__title {
    @extend .fluid-h1;

    margin-bottom: $space-lg;
    line-height: 1.1;
    letter-spacing: 1px;
    font-weight: $font-weight-bold;
  }

  &__backgroundWave {
    display: block;
    width: 100%;
    height: auto;
    stroke: $color-white;
  }
}
</style>
