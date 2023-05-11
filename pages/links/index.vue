<template>
	<div id="links-page">
		<Head>
			<Title>Jeff Rossi | Links</Title>
		</Head>
		<h2 class="ml-2">Links</h2>
		<link-row v-for="link of links" :key="link.Id" :link="link" />
	</div>
</template>

<script lang="ts" setup>
import { GET_LINKS_QUERY } from '../../graphql/queries/get-links'
import { Link } from '../../types/link.type'
const { data } = await useAsyncQuery<{ getLinks: Link[] }>(GET_LINKS_QUERY)
const links: Link[] = data.value ? data.value.getLinks : []
</script>
