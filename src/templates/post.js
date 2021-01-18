import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import './post.css'
import '../css/nord.css'
import { CommentCount, DiscussionEmbed } from 'disqus-react'

export default ({ data }) => {
  const disqusConfig = {
    shortname: 'nathanchu',
    config: {
      title: data.markdownRemark.frontmatter.title,
      url: data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug,
      identifier: data.markdownRemark.fields.slug,
      language: 'us_EN'
    }
  }

  return (
    <Layout article title={data.markdownRemark.frontmatter.title}>
      <div>
        <div className="mt-32 md:px-24 mx-auto">
          <div className="mx-auto max-w-3xl bg-gray-50 shadow-card dark:bg-black-light dark:text-gray-50 rounded-lg p-12 text-center mb-12">
            <h1 className="text-6xl font-bold">
              {data.markdownRemark.frontmatter.title}
            </h1>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {' '}
              By: {data.markdownRemark.frontmatter.author} | Date: {(new Date(data.markdownRemark.frontmatter.date)).toDateString()} |
              Tags: [{' '}
              {data.markdownRemark.frontmatter.tags
                .map(e => e.charAt(0).toUpperCase() + e.substr(1))
                .join(', ')}{' '}
              ] |{' '}
              <a href="#disqus_thread">
                <CommentCount {...disqusConfig}>Comments</CommentCount>
              </a>
            </span>
          </div>
          <div className="flex justify-center">
            <div className="max-w-5xl min-w-xl flex-auto w-max">
              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <br />
              <br />
              <hr />
              <br />
              <br />
              <DiscussionEmbed {...disqusConfig} />
            </div>
            <div
              className="hidden table-of-contents ml-16 my-8 lg:block"
              style={{ flexBasis: '12rem' }}
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.tableOfContents
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Posts($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        title
        tags
        author
      }
      fields {
        slug
      }
      html
      tableOfContents(absolute: false)
    }
  }
`
