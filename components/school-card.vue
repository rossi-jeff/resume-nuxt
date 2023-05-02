<template>
	<div :id="`school-${props.school.Id}`">{{ JSON.stringify(props) }}</div>
</template>

<script lang="ts" setup>
import type { School } from '../types/school.type'
const props = defineProps<{ school: School }>()
</script>
