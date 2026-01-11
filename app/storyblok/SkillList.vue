<template>
	<section v-editable="skills" class="SkillList l-wrapper">
		<dl
			v-for="skillList in skills"
			:key="skillList._uid"
			v-editable="skillList"
			class="SkillList__block"
		>
			<dt class="SkillList__title">
				<span>{{ skillList.title }}</span>
			</dt>
			<SkillItem
				v-for="skillItemn in skillList.body"
				:key="skillItemn._uid"
				:blok="skillItemn"
			/>
		</dl>
	</section>
</template>

<script lang="ts" setup>
import type { SkillList } from '~~/types/types/100825/storyblok-components';

defineProps<{
	skills: SkillList[];
}>();
</script>

<style lang="scss">
@use '~/assets/scss/font' as *;
@use '~/assets/scss/media-queries' as *;
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.SkillList {
  display: flex;
  margin-top: $space-xl;
  margin-bottom: $space-xl;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @include desktop {
    margin-bottom: $space-xl;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: initial;
  }

  &__title {
    @extend .h4;

    margin-bottom: $space-md;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  &__block {
    max-width: 300px;
    width: 100%;
    vertical-align: top;
    text-align: center;

    @include desktop {
      text-align: left;
    }

    &:not(:first-of-type) {
      margin-top: $space-xl;
    }

    &:nth-child(2) {
      /* stylelint-disable-next-line max-nesting-depth */
      @include desktop {
        margin-top: $space-lg;
        text-align: center;
      }
    }

    &:last-of-type {
      /* stylelint-disable-next-line max-nesting-depth */
      @include desktop {
        margin-top: $space-xl;
        text-align: right;
      }
    }
  }
}
</style>
