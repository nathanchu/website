import * as React from 'react'
import Nav from './nav'
import SEO from './seo'

export default ({ title, description, image, article, children, ...rest }) => {
  // // dark mode (shh...):
  // if ('matchMedia' in window) {
  //   const change = ({ matches }) => {
  //     if (matches) document.documentElement.classList.add('dark')
  //     else document.documentElement.classList.remove('dark')
  //   }
  //   change(window.matchMedia('(prefers-color-scheme: dark)'))
  //   window.matchMedia('(prefers-color-scheme: dark)')
  //     .addEventListener('change', change)
  // }
  // if ('localStorage' in window) {
  //   const localTheme = window.localStorage.getItem('theme')
  //   if (localTheme) {
  //     if (localTheme === 'dark') document.documentElement.classList.add('dark')
  //     else document.documentElement.classList.remove('dark')  
  //   }
  // }
  return (
    <div {...rest}>
      <SEO title={title} description={description} image={image} article={article} />
      <Nav />
      {children}
    </div>
  )
}