<template>
	<main v-editable="blok" class="TheContent">
		<div class="l-wrapper">
			<component
				:is="loopBlok.component"
				v-for="loopBlok in blok.body"
				:key="loopBlok._uid"
				class="TheContent__item"
				:class="{
					'TheContent__item--headline': loopBlok.component === 'richtext',
				}"
				:blok="loopBlok"
				:left-image="isWorkComponentAndLeftImage(loopBlok)"
			/>
		</div>
	</main>
</template>

<script lang="ts" setup>
import type {
	ContactInformation,
	EducationItem,
	Richtext,
	TheContent,
	WorkItem,
} from '~~/types/types/100825/storyblok-components';

let workItemIndex = -1;

const props = defineProps<{
	blok: TheContent;
}>();

function isWorkComponentAndLeftImage(currentBlok: (WorkItem | EducationItem | Richtext | ContactInformation)) {
	if (currentBlok.component !== 'work-item' || !props.blok.work_image_alternate) {
		return false;
	}

	workItemIndex++;

	return workItemIndex % 2 !== 0;
};
</script>

<style lang="scss">
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.TheContent {
  margin-top: calc(-1 * #{$space-xs});
  padding-bottom: $space-lg;
  background-color: $color-white;

  @include tablet {
    margin-top: calc(-1 * #{$space-lg});
  }

  &__item {
    $item: &;

    &:not(:last-child) {
      margin-bottom: $space-xl;

      @include desktop {
        margin-bottom: $space-2xl;
      }

      &#{$item}--headline {
        margin-bottom: $space-lg;
      }
    }
  }
}
</style>
