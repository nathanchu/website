import React from 'react'
import Layout from '../components/layout'

export default () => {
  return (
    <Layout className="flex content-center items-center w-screen h-screen">
      <div className="mx-auto text-center">
        <div className="text-8xl">404</div>
        <div className="text-xl">The page you requested was not found</div>
      </div>
    </Layout>
  )
}
