<template>
	<div v-if="blok" v-editable="blok" class="WorkItem">
		<div class="WorkItem__description">
			<p class="WorkItem__date">
				<span v-if="blok.start_date">
					{{ toMonthAndYear(blok.start_date) }}
				</span>
				<span>-</span>
				<span v-if="blok.end_date">
					{{ toMonthAndYear(blok.end_date) }}
				</span>
				<span v-else>now</span>
			</p>
			<h3 class="WorkItem__title">
				{{ blok.title }} at {{ blok.company_name }}
			</h3>
			<!-- eslint-disable vue/no-v-html -->
			<div
				class="WorkItem__content"
				:class="{ 'WorkItem__content--full': !blok.sources }"
				v-html="blok.description"
			/>
			<!-- eslint-enable vue/no-v-html -->
		</div>
		<AssetItem
			v-if="blok.image && blok.image.id"
			:class="{ 'WorkItem__image--left': leftImage }"
			class="WorkItem__image"
			:image="blok.image"
			resolution="400x0"
		/>
	</div>
</template>

<script lang="ts" setup>
import { toMonthAndYear } from '~/utils/toMonthAndYear';
import type { WorkItem } from '~~/types/types/100825/storyblok-components';

withDefaults(defineProps<{
	blok: WorkItem;
	leftImage?: boolean;
}>(), {
	leftImage: false,
});
</script>

<style lang="scss">
@use '~/assets/scss/font' as *;
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.WorkItem {
  display: flex;
  flex-direction: column;

  @include tablet {
    flex-direction: row;
  }

  &__date {
    @extend .h3;

    display: flex;
    margin-bottom: $space-sm;
    color: $color-gray;
    font-family: $font-family-secondary;

    span {
      /* stylelint-disable-next-line max-nesting-depth */
      &:not(:first-of-type) {
        margin-left: $space-2xs;
      }
    }
  }

  &__title {
    @extend .h4;
  }

  &__content {
    max-width: 100%;
    line-height: 1.45;
    color: $color-gray;
    text-align: justify;
    letter-spacing: $letter-spacing-s;
  }

  &__description {
    order: 1;

    @include tablet {
      order: 0;
    }
  }

  &__image {
    $size-image-spacing: $space-lg;

    display: flex;
    margin-bottom: $space-md;
    align-items: center;

    @include tablet {
      margin-left: $size-image-spacing;
      max-width: 400px;
      flex-shrink: 0.4;
    }

    @include desktop {
      flex-shrink: 0;
    }

    &--left {
      order: -1;

      /* stylelint-disable-next-line max-nesting-depth */
      @include tablet {
        margin-right: $size-image-spacing;
        margin-left: 0;
      }
    }
  }
}
</style>
