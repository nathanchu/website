module.exports = [
  {
    query: `{
      pages: allMdx {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
            excerpt(pruneLength: 5000)
          }
        }
      }
    }`,
    transformer: ({ data }) =>
      data.pages.edges.map(
        ({ node: { id, frontmatter, fields, ...rest } }) => ({
          objectID: id,
          ...frontmatter,
          ...fields,
          ...rest
        })
      ),
    indexName: 'website',
    settings: { attributesToSnippet: ['excerpt:20'] }
  }
]
