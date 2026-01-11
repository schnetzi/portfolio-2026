<template>
	<div class="TimeBubble">
		<span class="TimeBubble__year">{{ fromYear }}</span>
		<span class="TimeBubble__separator" />
		<span class="TimeBubble__year">
			<template v-if="toYear">{{ toYear }}</template>
			<template v-else>now</template>
		</span>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	fromYear: string;
	toYear?: string;
}>();
</script>

<style lang="scss">
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/mixins' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.TimeBubble {
  $minimumSizeOfBubble: 90px;
  $maximumSizeOfBubble: 130px;
  $sizePadding: 10px;

  display: inline;
  padding-right: $sizePadding;
  padding-left: $sizePadding;
  line-height: 1.8;
  border-radius: $size-border-radius;
  /* stylelint-disable-next-line declaration-colon-newline-after */
  background: linear-gradient(
    222.09deg,
    rgba(63, 203, 170, 0.8) 0%,
    rgba(48, 117, 150, 0.8) 100%
  );
  color: $color-white;
  vertical-align: middle;
  text-align: center;
  white-space: pre-line;
  letter-spacing: $letter-spacing-s;
  font-family: $font-family-secondary;

  @include tablet {
    @include fluid-type(
      $minimumSizeOfBubble,
      $maximumSizeOfBubble,
      'height',
      $width-tablet
    );
    @include fluid-type(
      $minimumSizeOfBubble,
      $maximumSizeOfBubble,
      'width',
      $width-tablet
    );
    @include fluid-type(
      $minimumSizeOfBubble,
      $maximumSizeOfBubble,
      'word-spacing',
      $width-tablet
    );

    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  &__year {
    font-family: inherit;

    @include tablet {
      display: block;
    }
  }

  &__separator {
    $sizeWidth: 20px;

    display: inline-block;
    width: $sizeWidth;
    height: 1px;
    background-color: $color-white;
    vertical-align: middle;
  }
}
</style>
