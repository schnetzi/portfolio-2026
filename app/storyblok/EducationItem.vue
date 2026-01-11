<template>
	<div v-if="blok" v-editable="blok" class="EducationItem">
		<div class="EducationItem__timeBubble">
			<LazyTimeBubble
				v-if="blok.start_year"
				:from-year="blok.start_year"
				:to-year="blok.end_year"
			/>
		</div>
		<div class="EducationItem__information">
			<header>
				<h3 class="EducationItem__title">
					{{ blok.title }}<span v-if="blok.degree">, {{ blok.degree }}</span>
				</h3>
				<h4 class="EducationItem__university">
					{{ blok.university }}
				</h4>
			</header>
			<p class="EducationItem__description">
				{{ blok.description }}
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { EducationItem } from '~~/types/types/100825/storyblok-components';

defineProps<{
	blok: EducationItem;
}>();
</script>

<style lang="scss">
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/font' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.EducationItem {
  display: flex;
  flex-direction: column;

  @include tablet {
    padding: 0;
    flex-direction: row;
  }

  &__information {
    max-width: 100%;

    @include tablet {
      padding-left: 30px;
    }
  }

  &__university {
    @extend .h4;
  }

  &__timeBubble {
    flex-shrink: 0;
  }

  &__description {
    max-width: 100%;
    line-height: 1.45;
    color: $color-gray;
    text-align: justify;
    letter-spacing: $letter-spacing-s;
  }

  &__title {
    @extend .h3;

    margin-bottom: $space-xs;
    color: $color-gray;
    font-weight: $font-weight-regular;
  }
}
</style>
