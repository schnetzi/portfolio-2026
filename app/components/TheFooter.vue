<template>
	<footer v-editable="blok" class="TheFooter">
		<SvgoWaveFooter
			class="TheFooter__backgroundWave"
			aria-hidden="true"
		/>

		<LazyFooterContact
			v-if="footerContactData"
			:blok="footerContactData"
			class="TheFooter__FooterContact"
		/>

		<section class="TheFooter__icons">
			<LazyExternalIconLink
				v-for="icon in externalIcons"
				:key="icon._uid"
				:icon="icon"
			/>
		</section>

		<section class="TheFooter__navigation" role="navigation">
			<ClientOnly>
				<span>&copy;{{ new Date().getFullYear() }}</span>
			</ClientOnly>
			<NuxtLink to="/">{{ blok.copyright }}</NuxtLink>

			<template v-for="link in blok.links" :key="link._uid">
				<template v-if="link.link && link.link.cached_url">
					|
					<NuxtLink
						:to="link.link.cached_url"
						class="TheFooter__link"
					>
						{{ link.link.cached_url }}
					</NuxtLink>
				</template>
			</template>
		</section>
	</footer>
</template>

<script setup lang="ts">
import type { TheFooter } from '~~/types/types/100825/storyblok-components';

const props = defineProps<{
	blok: TheFooter;
}>();

const externalIcons = computed(() => {
	return props.blok.externalIcons || [];
});

const footerContactData = computed(() => {
	return props.blok.contact?.[0] ?? null;
});
</script>

<style lang="scss">
@use 'sass:color';
@use '~/assets/scss/spacing' as *;
@use '~/assets/scss/variables' as *;

.TheFooter {
  margin-top: $space-lg;
  // Ensure this image exists in your public/ or assets/ folder
  background-image: url('~/assets/img/header-big.jpg');
  background-size: cover;
  color: $color-white;

  a,
  a:visited {
    color: $color-white;

    &:hover {
      color: color.adjust($color-white, $lightness: -10%);
    }
  }

  &__backgroundWave {
    margin-top: -1px; // fix to not have a blue line
    // Stroke works here because we are using a real SVG component, not an <img> tag
    stroke: $color-white;
    width: 100%;
    height: auto;
  }

  &__FooterContact {
    margin-top: $space-xl;
  }

  &__icons {
    margin-top: $space-2xl;
    margin-bottom: $space-lg;
    text-align: center;
  }

  &__navigation {
    padding-bottom: $space-xl;
    text-align: center;
  }

  &__link {
    text-transform: capitalize;
  }
}
</style>
