import * as React from 'react'
import { Helmet } from 'react-helmet'
// import Nav from '../components/nav'
import Main from '../components/main'
import About from '../components/about'
import '../css/reset.css'
import '../css/index.css'
import SEO from '../components/seo'

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&amp;family=family=Source+Code+Pro&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Home" />
      {/* <Nav /> */}
      <Main />
      <About />
    </div>
  )
}

export default Home
