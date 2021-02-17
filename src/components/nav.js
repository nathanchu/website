import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import Search from './search'
import { Title } from './text'

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

const ExtraItem = styled.li`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
  margin: ${({ divider }) => (divider ? '0 4px' : '0 24px')};
`

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 80px;
  padding: 0 24px;
  z-index: 10;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: rgb(249, 250, 251);
  @media (prefers-color-scheme: dark) {
    background-color: rgb(48, 48, 48);
    color: rgb(249, 250, 251);
  }
`

const NavItem = styled.li`
  ${({ extra }) =>
    extra &&
    css`
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    `}
  ${({ divider }) =>
    divider
      ? css`
          margin: 0 4px;
        `
      : css`
          margin: 0 24px;
        `}
`

const Nav = () => {
  const { site } = useStaticQuery(query)
  const { siteMetadata } = site
  const { sha, repo } = siteMetadata
  return (
    <NavWrapper>
      <Title
        css={`
          font-size: 1.875rem;
          line-height: 2.25rem;
        `}
      >
        Nathan Chu
      </Title>
      <ul
        css={`
          display: flex;
          align-items: center;
        `}
      >
        {nav.map(({ name, link }, index) => (
          <NavItem
            key={index}
            extra={link && link.includes('#')}
            divider={!link}
          >
            {link ? (
              <Link
                css={`
                  text-decoration: none;
                `}
                to={link}
              >
                {name}
              </Link>
            ) : (
              name
            )}
          </NavItem>
        ))}
        {sha && repo && (
          <>
            <ExtraItem divider>|</ExtraItem>
            <ExtraItem>
              <a href={`https://github.com/${repo}/commit/${sha}`}>
                {sha.substring(0, 7)}
              </a>
            </ExtraItem>
          </>
        )}
        <ExtraItem divider>|</ExtraItem>
        <ExtraItem>
          <Search />
        </ExtraItem>
      </ul>
    </NavWrapper>
  )
}

export default Nav
