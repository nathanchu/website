module.exports = {
  siteMetadata: {
    title: 'Nathan Chu',
    titleTemplate: '%s | Nathan Chu',
    description: "I'm Nathan Chu, a Web Developer (@nathanchu on GitHub)",
    siteUrl: 'https://nathanchu.com',
    url: 'https://nathanchu.com',
    image: '/banner.png'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nathan Chu`,
        short_name: `Nathan Chu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4169e1`,
        display: `browser`,
        icon: './src/images/codebackground.svg'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }
  ]
}
