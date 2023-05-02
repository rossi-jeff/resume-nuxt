import { defineApolloClient } from '@nuxtjs/apollo'

export default defineApolloClient({
	httpEndpoint: 'https://resume-gql.jeff-rossi.com/graphql',
})
