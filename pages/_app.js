import React from 'react'
import PropTypes from 'prop-types'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default App
