<template>
	<div v-editable="blok" class="LandingpageHeader">
		<LazyTheIntroduction v-if="introductionBlok" :blok="introductionBlok" />
		<LazySkillList v-if="skillsArray" :skills="skillsArray" />

		<SvgoWaveHeader
			class="LandingpageHeader__backgroundWave"
			aria-hidden="true"
		/>
	</div>
</template>

<script lang="ts" setup>
import type { LandingpageHeader } from '~~/types/types/100825/storyblok-components';

const props = defineProps<{
	blok: LandingpageHeader;
}>();

const introductionBlok = computed(() => props.blok.introduction[0]);
const skillsArray = computed(() => props.blok.skills);
</script>

<style lang="scss">
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.LandingpageHeader {
  padding-top: $space-2xl;
  background-image: url('~/assets/img/header-big.jpg');
  background-size: cover;
  color: $color-white;

  &__backgroundWave {
    display: block;
    width: 100%;
    height: auto;
    stroke: $color-white;
  }
}
</style>
