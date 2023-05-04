<template>
	<div :id="`comment-${props.comment.Id}`" class="card">
		<div class="mb-2">{{ props.comment.Message }}</div>
		<div class="text-right text-three font-bold">
			-- {{ getAuthor(props.comment) }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Comment } from '../types/comment.type'
import { FormatName } from '../utils/format-name'
const props = defineProps<{ comment: Comment }>()

const getAuthor = (comment: Comment) => {
	let name: string = ''
	if (comment.Admins && comment.Admins.length) {
		name = FormatName(comment.Admins[0].Name)
	} else if (comment.References && comment.References.length) {
		name = FormatName(comment.References[0].Name)
	} else if (comment.Visitors && comment.Visitors.length) {
		name = FormatName(comment.Visitors[0].Name)
	}
	return name
}
</script>
