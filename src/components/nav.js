import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from '../css/nav.module.css'

const nav = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/#about'
  }
]

const query = graphql`
  query Nav {
    site {
      siteMetadata {
        sha
        repo
      }
    }
  }
`

const Nav = () => {
  const { site: { siteMetadata: { sha, repo } } } = useStaticQuery(query)
  return (
    <div className={styles.nav}>
      <span className={styles.title}>Nathan Chu</span>
      <nav>
        <ul>
          {nav.map(({ name, link }, index) => (
            <li
              key={index}
              className={`${link && link.includes('#') && styles.extraLink} ${
                !link && `${styles.displayLink} ${styles.extraLink}`
              }`}
            >
              {link ? <Link to={link}>{name}</Link> : name}
            </li>
          ))}
          <li className={`${styles.extraLink} ${styles.displayLink}`}>|</li>
          <li className={styles.extraLink}><a href={`https://github.com/${repo}/commit/${sha}`}>{sha.substring(0, 7)}</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
