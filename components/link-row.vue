<template>
	<div :id="`link-${props.link.Id}`" class="p-2">
		<div class="flex flex-wrap">
			<div class="flex-grow">{{ props.link.Title }}</div>
			<div class="w-20">{{ props.link.Type }}</div>
			<div class="w-20 text-right">
				<a :href="props.link.Url" target="_blank">Visit</a>
			</div>
		</div>
		<div>{{ props.link.Description }}</div>
	</div>
</template>

<script lang="ts" setup>
import type { Link } from '../types/link.type'
const props = defineProps<{ link: Link }>()
</script>
