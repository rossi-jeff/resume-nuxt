<template>
	<NuxtLink v-for="(link, index) of links" :key="index" :to="link.to">
		{{ link.text }}
	</NuxtLink>
</template>

<script lang="ts" setup>
import { navigationLinks } from '../utils/navigation-links'
const links = navigationLinks
</script>
