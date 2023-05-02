export const GET_LINKS_QUERY = gql`
	query GetLinksQuery {
		getLinks {
			Id
			Url
			Title
			Description
			Type
			Created
			Version
		}
	}
`
