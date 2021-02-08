import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Search from './search'

const nav = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/#about'
  },
  {
    name: 'Projects',
    link: '/#projects'
  },
  {
    name: '|'
  },
  {
    name: 'Posts',
    link: '/posts'
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
  const { site } = useStaticQuery(query)
  const { siteMetadata } = site
  const { sha, repo } = siteMetadata
  return (
    <div className="flex justify-between items-center px-6 z-10 fixed inset-0 h-20 shadow-xl bg-gray-50 dark:bg-black-light dark:text-gray-50">
      <span className="text-3xl font-bold font-title">Nathan Chu</span>
      <nav>
        <ul className="flex items-center">
          {nav.map(({ name, link }, index) => (
            <li
              key={index}
              className={`${
                link && link.includes('#') ? 'hidden md:block' : ''
              } ${!link ? 'hidden md:block mx-1' : 'mx-6'}`}
            >
              {link ? (
                <Link className="no-underline" to={link}>
                  {name}
                </Link>
              ) : (
                name
              )}
            </li>
          ))}
          {sha && repo && (
            <>
              <li className="hidden sm:block mx-1">|</li>
              <li className="hidden sm:block mx-6">
                <a href={`https://github.com/${repo}/commit/${sha}`}>
                  {sha.substring(0, 7)}
                </a>
              </li>
            </>
          )}
          <li className="hidden sm:block mx-1">|</li>
          <li className="hidden sm:block mx-6">
            <Search />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
