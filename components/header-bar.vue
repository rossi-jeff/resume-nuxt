<template>
	<div id="header-bar" class="mx-4 my-4">
		<div class="flex flex-wrap mb-2">
			<div class="p-0 align-top">
				<h1>Jeff Rossi</h1>
			</div>
			<div class="mx-2 p-0 align-top">&nbsp;|&nbsp;</div>
			<div class="text-three font-light p-0 align-top">Software Developer</div>
		</div>
		<div class="flex flex-wrap justify-between">
			<nav-links />
		</div>
	</div>
</template>

<style lang="postcss">
#header-bar a {
	@apply px-2 py-1;
}
#header-bar a.router-link-active {
	@apply bg-one text-four rounded;
}
</style>
