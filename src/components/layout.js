import React from 'react'
import Nav from './nav'
import SEO from './seo'

export default ({ title, description, image, article, children, ...rest }) => {
  return (
    <div {...rest}>
      <SEO
        title={title}
        description={description}
        image={image}
        article={article}
      />
      <Nav />
      {children}
    </div>
  )
}
