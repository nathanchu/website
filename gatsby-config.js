module.exports = {
  siteMetadata: {
    title: 'Nathan Chu',
    titleTemplate: '%s | Nathan Chu',
    description:
      "Hello, World! I'm Nathan Chu and this is my corner of the Internet. I'm a full stack web developer who's worked with JavaScript, React, Node.js, HTML, and CSS. You can find me as @nathanchu on GitHub!",
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nathan Chu',
        short_name: 'Nathan Chu',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#4169e1',
        display: 'standalone',
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
