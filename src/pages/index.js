import * as React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import Main from '../components/main'
import About from '../components/about'
import Projects from '../components/projects'
import '../css/reset.css'
import '../css/index.css'
import SEO from '../components/seo'

const Home = () => {
  return (
    <div style={{ margin: '100px 0' }}>
      <Helmet>
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=family=Source+Code+Pro&display=swap'
          }
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Home" />
      <Nav />
      <Main />
      <About />
      <Projects />
    </div>
  )
}

export default Home
