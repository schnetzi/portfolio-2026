<template>
	<div v-if="blok" v-editable="blok" class="TheIntroduction">
		<AvatarImage class="TheIntroduction__AvatarImage" :image="blok.image" />
		<div class="TheIntroduction__text">
			<h1 class="TheIntroduction__title">
				<span class="TheIntroduction__titleText">
					{{ blok.title }}
				</span>
				<span class="TheIntroduction__titleBox" />
			</h1>
			<h2 class="TheIntroduction__subtitle">
				<span class="TheIntroduction__subtitleText">
					{{ blok.subtitle }}
				</span>
				<span class="TheIntroduction__subtitleBox" />
			</h2>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Introduction } from '~~/types/types/100825/storyblok-components';

defineProps<{
	blok: Introduction;
}>();
</script>

<style lang="scss">
@use '~/assets/scss/font' as *;
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.TheIntroduction {
  $animation-time-title: 0.5s;
  $animation-delay-title: 0.3s;
  $animation-time-subtitle: $animation-time-title;
  $animation-delay-subtitle: 0.5s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include tablet {
    margin-right: $space-lg;
    margin-left: $space-lg;
    flex-direction: row;
  }

  &__title {
    @extend .fluid-h1;

    position: relative;
    margin-bottom: $space-md;
    height: 100%;
    line-height: 1.1;
    letter-spacing: 1px;
    font-weight: $font-weight-bold;
  }

  &__titleText,
  &__subtitleText {
    opacity: 0;
    /* stylelint-disable declaration-colon-newline-after */
    animation: show-after-delay 0s linear
      (calc($animation-time-title / 2) + $animation-delay-title) normal forwards;
    /* stylelint-enable declaration-colon-newline-after */
  }

  &__subtitleText {
    animation-delay: (
      calc($animation-time-subtitle / 2) + $animation-delay-subtitle
    );
  }

  &__titleBox,
  &__subtitleBox {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: $color-white;
    /* stylelint-disable declaration-colon-newline-after */
    animation: grow-shrink $animation-time-title ease-in $animation-delay-title
      normal forwards;
    /* stylelint-enable declaration-colon-newline-after */
  }

  &__subtitleBox {
    animation-duration: $animation-time-subtitle;
    animation-delay: $animation-delay-subtitle;
  }

  &__subtitle {
    position: relative;
    height: 100%;
    line-height: 1.3;
    font-size: $size-heading-h4-maximum;
  }

  &__AvatarImage {
    flex-shrink: 0;

    @include tablet {
      margin-right: $space-lg;
    }

    @include desktop {
      margin-right: $space-xl;
    }
  }

  &__text {
    padding-top: $space-lg;
    padding-right: $space-md;
    padding-left: $space-md;
    max-width: 100%;
    width: $width-of-content-block-s;
    text-align: center;

    @include tablet {
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;
      text-align: left;
    }
  }
}

@keyframes grow-shrink {
  0% {
    right: 0;
    width: 0;
  }

  45% {
    right: 0;
    left: auto;
    width: 100%;
  }

  55% {
    right: auto;
    left: 0;
    width: 100%;
  }

  100% {
    left: 0;
    width: 0;
  }
}

@keyframes show-after-delay {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
