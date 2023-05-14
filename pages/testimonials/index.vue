<template>
	<div id="testimonals-page">
		<Head>
			<Title>Jeff Rossi | Testimonials</Title>
		</Head>
		<h2 class="ml-2">Testimonials</h2>
		<comment-card
			v-for="comment of comments"
			:key="comment.Id"
			:comment="comment"
		/>
	</div>
</template>

<script lang="ts" setup>
import { GET_COMMENTS_QUERY } from '../../graphql/queries/get-comments'
import { Comment } from '../../types/comment.type'
const { data } = await useAsyncQuery<{ getComments: Comment[] }>(
	GET_COMMENTS_QUERY
)
const comments: Comment[] = data.value ? data.value.getComments : []
</script>
