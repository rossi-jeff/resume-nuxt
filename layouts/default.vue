<template>
	<main id="main" :data-theme="`${pallete}`" class="bg-four text-one">
		<div class="flex flex-col h-screen">
			<header-bar />
			<div class="flex-grow overflow-y-auto h-full p-2">
				<slot />
				<div id="spacer" class="h-12"></div>
			</div>
			<footer-bar
				:palette-names="paletteNames"
				@palette-changed="paletteChanged"
			/>
		</div>
	</main>
</template>

<script lang="ts" setup>
import { palettes } from '../utils/palettes'

const paletteNames = Object.keys(palettes)
let pallete = paletteNames[0]

const paletteChanged = (ev: any) => {
	pallete = paletteNames[ev.target.selectedIndex]
	const main = document.getElementById('main')
	if (main) main.setAttribute('data-theme', pallete)
}
</script>

<style lang="postcss">
strong,
label {
	@apply text-two font-bold;
}
h1 {
	@apply text-two font-bold text-2xl;
}
h2 {
	@apply text-two font-bold text-xl mb-2;
}
h3 {
	@apply text-two font-bold text-lg mb-2;
}
a {
	@apply text-three font-bold;
}
a:hover {
	@apply underline;
}
.card {
	@apply p-2 border-b border-two border-dashed;
}
</style>
