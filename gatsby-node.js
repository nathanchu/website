const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions: { createTypes } }) =>
  createTypes(`
  type SiteSiteMetadata {
    title: String
    titleTemplate: String
    description: String
    siteUrl: String
    url: String
    image: String
    sha: String
    repo: String
  }
`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const query = await graphql(`
    query Posts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (query.errors) {
    reporter.panicOnBuild(
      'createPages > GraphQL Error' + query.errors ? '\n\n' + query.errors : ''
    )
    return
  }

  const { createPage } = actions

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve('./src/templates/post'),
      context: {
        id: node.id
      }
    })
  })

  // const tags = new Set()
  // query.data.allMarkdownRemark.edges.forEach(({ node }) => node.frontmatter.tags.forEach(tag => tags.add(tag)))
  // tags.forEach((tag) => {
  //   createPage({
  //     path: path.posix.join('/tags', tag.toLocaleLowerCase().replace(/[^a-z0-9]+/g), '-'),
  //     component: require.resolve('./src/templates/tag')
  //   })
  // })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = path.posix.join(
      '/posts',
      createFilePath({
        basePath: 'content/posts',
        node,
        getNode,
        trailingSlash: false
      })
    )
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
