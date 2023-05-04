<template>
	<main id="main" :data-theme="`${pallete}`" class="bg-four text-one">
		<div class="flex flex-col h-screen">
			<div class="flex flex-wrap justify-between mx-2">
				<nav-links />
			</div>
			<div class="flex-grow overflow-y-auto h-full p-2">
				<slot />
			</div>
			<footer-bar
				:pallete-names="palleteNames"
				v-on:pallete-changed="palleteChanged"
			/>
		</div>
	</main>
</template>

<script lang="ts" setup>
import { palettes } from '../utils/palletes'

const palleteNames = Object.keys(palettes)
let pallete = palleteNames[0]

const palleteChanged = (ev: any) => {
	pallete = palleteNames[ev.target.selectedIndex]
	const main = document.getElementById('main')
	if (main) main.setAttribute('data-theme', pallete)
}
</script>

<style lang="postcss">
strong {
	@apply text-two font-bold;
}
h1 {
	@apply text-two font-bold text-2xl;
}
h2 {
	@apply text-two font-bold text-xl;
}
h3 {
	@apply text-two font-bold text-lg;
}
a {
	@apply text-three font-bold;
}
a:hover {
	@apply underline;
}
</style>
