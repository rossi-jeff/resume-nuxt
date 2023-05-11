<template>
	<div id="header-bar" class="mx-4 my-4">
		<div class="flex flex-wrap justify-between mb-2">
			<div class="flex flex-wrap">
				<div class="p-0 align-top">
					<h1>Jeff Rossi</h1>
				</div>
				<div class="mx-2 p-0 align-top">&nbsp;|&nbsp;</div>
				<div class="text-three font-light p-0 align-top">Software Developer</div>
			</div>
			<div class="md:hidden">
				<ul id="nav-drop-down">
					<li>
						Menu
						<nav-link-list />
					</li>
				</ul>
			</div>
		</div>
		<div class="hidden md:flex md:flex-wrap md:justify-between">
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

ul#nav-drop-down li {
	@apply min-w-fit px-2 text-right relative h-8 cursor-pointer;
}

ul#nav-drop-down li ul {
	@apply hidden bg-one text-four;
}

ul#nav-drop-down li ul li {
	@apply text-left border-b border-dotted border-four py-1;
}

ul#nav-drop-down li:hover ul,
ul#nav-drop-down li ul:hover {
	@apply block;
}

ul#nav-drop-down li ul li a:hover {
	@apply text-two bg-three;
}
</style>
