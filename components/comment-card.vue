<template>
	<div :id="`comment-${props.comment.Id}`">{{ JSON.stringify(props) }}</div>
</template>

<script lang="ts" setup>
import type { Comment } from '../types/comment.type'
const props = defineProps<{ comment: Comment }>()
</script>
