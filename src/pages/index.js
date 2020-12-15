import * as React from 'react'
import { Helmet } from 'react-helmet'
import Main from '../components/Main'
import '../css/reset.css'
import '../css/index.css'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&amp;family=family=Source+Code+Pro&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Home" />
      <Main />
    </>
  )
}

export default Home
