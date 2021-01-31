const path = require('path')
const axios = require('axios')
const {
  createFilePath,
  createRemoteFileNode
} = require('gatsby-source-filesystem')

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
      allMdx {
        edges {
          node {
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
      `createPages > GraphQL Error${query.errors ? '\n\n' + query.errors : ''}`
    )
    return
  }

  const { createPage } = actions

  query.data.allMdx.edges.forEach(({ node }) => {
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
exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  cache,
  store
}) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === 'Mdx') {
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

  if (node.internal.type === 'Ad' && node.imageUrl) {
    const fileNode = await createRemoteFileNode({
      url: node.imageUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store // Gatsby's Redux store
    })

    if (fileNode) {
      node.image___NODE = fileNode.id
    }
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/nathanchu/advertise/main/ads.json'
  )

  data.forEach((ad, index) => {
    actions.createNode({
      ...ad,
      id: createNodeId(`nathanchu-com-ads-${index}`),
      parent: null,
      children: [],
      internal: {
        type: 'Ad',
        mediaType: 'nathanchu-com-ads',
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data)
      }
    })
  })
}
