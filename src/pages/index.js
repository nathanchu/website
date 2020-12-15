import * as React from 'react'
import { Helmet } from 'react-helmet'
import Main from '../components/Main'
import '../css/reset.css'
import '../css/index.css'

const Home = () => {
  const [ dark, setDark ] = React.useState(false)
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&amp;family=family=Source+Code+Pro&amp;display=swap"
          rel="stylesheet"
        />
        <title>Nathan Chu | Web Developer</title>
      </Helmet>
      <Main />
    </>
  )
}

export default Home
