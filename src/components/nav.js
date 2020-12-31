import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
  const {
    site: {
      siteMetadata: { sha, repo }
    }
  } = useStaticQuery(query)
  return (
    <div className="flex justify-between items-center px-6 z-50 fixed inset-0 h-20 shadow-xl bg-gray-50 dark:bg-black-light dark:text-gray-50">
      <span className="text-3xl font-bold">Nathan Chu</span>
      <nav>
        <ul className="flex items-center">
          {nav.map(({ name, link }, index) => (
            <li
              key={index}
              className={`${link && link.includes('#') ? "hidden sm:block" : ""} ${
                !link ? "hidden sm:block mx-1" : ""
              } mx-6`}
            >
              {link ? <Link className="no-underline" to={link}>{name}</Link> : name}
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
          {/* Dark Mode (shh...): */}
          {/* <li className="hidden sm:block mx-1">|</li>
          <li className="hidden sm:block mx-6">
            <label>
              <input type="checkbox" id="dark-mode-checkbox" defaultChecked={document.documentElement.classList.contains('dark')} name="dark-mode-checkbox" onChange={e => {
                  if (e.target.checked) {
                    document.documentElement.classList.add('dark')
                    if ('localStorage' in window) window.localStorage.setItem('theme', 'dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                    if ('localStorage' in window) window.localStorage.setItem('theme', 'light')
                  }
              }} />
              &nbsp;
              Dark
            </label>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
