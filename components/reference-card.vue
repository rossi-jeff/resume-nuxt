<template>
	<div :id="`reference-${props.reference.Id}`">{{ JSON.stringify(props) }}</div>
</template>

<script lang="ts" setup>
import type { Reference } from '../types/reference.type'
const props = defineProps<{ reference: Reference }>()
</script>
