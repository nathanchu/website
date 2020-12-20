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
