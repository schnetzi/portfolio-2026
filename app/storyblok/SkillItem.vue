<template>
	<dd v-editable="blok" class="SkillItem">
		{{ blok.title }}
	</dd>
</template>

<script lang="ts" setup>
import type { SkillItem } from '~~/types/types/100825/storyblok-components';

defineProps<{
	blok: SkillItem;
}>();
</script>

<style lang="scss">
@use '~/assets/scss/font' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.SkillItem {
  @extend .fluid-h4;

  margin-bottom: $space-xs;
  line-height: 1.5;
  font-family: $font-family-secondary;
}
</style>
