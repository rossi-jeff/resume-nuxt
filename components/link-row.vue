<template>
	<div :id="`link-${props.link.Id}`">{{ JSON.stringify(props) }}</div>
</template>

<script lang="ts" setup>
import type { Link } from '../types/link.type'
const props = defineProps<{ link: Link }>()
</script>
