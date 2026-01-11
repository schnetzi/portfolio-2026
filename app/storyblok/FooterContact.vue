<template>
	<div v-editable="blok" class="FooterContact l-wrapper">
		<h2 class="FooterContact__title">
			{{ blok.title }}
		</h2>
		<p class="FooterContact__text">
			{{ blok.subtitle }}
		</p>
		<a :href="mailableEmail" :title="blok.call_to_action_text">
			{{ blok.call_to_action_text }}
		</a>
	</div>
</template>

<script setup lang="ts">
import type { FooterContact } from '~~/types/types/100825/storyblok-components';

const props = defineProps<{
	blok: FooterContact;
}>();

const mailableEmail = computed(() => `mailto:${props.blok.call_to_action_link?.email}?subject=Request%20from%20Website`);
</script>

<style lang="scss">
@use '~/assets/scss/font' as *;
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.FooterContact {
  @include desktop {
    text-align: center;
  }

  &__title {
    @extend .h2;

    margin-bottom: $space-md;
  }

  &__text {
    margin-bottom: $space-xs;
    max-width: $width-of-footer-content-block;
    line-height: 1.3;
    font-size: $size-heading-h4-minimum;

    @include tablet {
      font-size: $size-heading-h4-maximum;
    }

    @include desktop {
      margin-right: auto;
      margin-left: auto;
    }
  }
}
</style>
