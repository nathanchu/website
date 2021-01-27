import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { CommentCount } from 'disqus-react'

export default ({ data }) => {
  return (
    <Layout>
      <div className="mt-24">
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Link key={i} to={node.fields.slug}>
            <div className="mx-auto max-w-4xl bg-gray-50 shadow-card dark:bg-black-light dark:text-gray-50 rounded-lg p-12 my-16">
              <h1 className="text-4xl font-bold font-title">
                {node.frontmatter.title}
              </h1>
              <br />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {' '}
                By: {node.frontmatter.author} | Date:{' '}
                {new Date(node.frontmatter.date).toDateString()} | Tags: [{' '}
                {node.frontmatter.tags
                  .map(e => `'${e.replace("'", "\\'")}'`)
                  .join(', ')}{' '}
                ] |{' '}
                <CommentCount
                  shortname="nathanchu"
                  config={{
                    title: node.frontmatter.title,
                    url: data.site.siteMetadata.siteUrl + node.fields.slug,
                    identifier: node.fields.slug,
                    language: 'us_EN'
                  }}
                >
                  Comments
                </CommentCount>
              </span>
              <br />
              <br />
              <br />
              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            author
            tags
          }
          excerpt(pruneLength: 350)
          fields {
            slug
          }
        }
      }
    }
  }
`
