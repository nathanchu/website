import * as React from 'react'
import Main from '../components/main'
import About from '../components/about'
import Projects from '../components/projects'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout title="Home" className="my-24">
      <Main />
      <About />
      <Projects />
    </Layout>
  )
}

export default Home
