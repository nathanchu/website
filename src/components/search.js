import React from 'react'
import styled from 'styled-components'
import {
  Search as JsSearch,
  PrefixIndexStrategy,
  LowerCaseSanitizer,
  TfIdfSearchIndex
} from 'js-search'
import { graphql, Link, useStaticQuery } from 'gatsby'

const createSearch = data => {
  const search = new JsSearch('id')
  search.indexStrategy = new PrefixIndexStrategy()
  search.sanitizer = new LowerCaseSanitizer()
  search.searchIndex = new TfIdfSearchIndex('id')
  search.addIndex('title')
  search.addIndex('author')
  search.addIndex('date')
  search.addIndex('tags')
  search.addIndex('slug')
  search.addIndex('body')
  search.addDocuments(data)
  return search
}

const useClickOutside = (ref, onClickOutside) => {
  const onClick = event => {
    if (!ref?.current?.contains(event.target)) onClickOutside()
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', onClick)
    document.addEventListener('touchstart', onClick)

    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('touchstart', onClick)
    }
  }, [ref, onClickOutside])
}

const SearchIconSvg = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: -24px;
  z-index: 20;
`

const SearchIcon = () => (
  <SearchIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <path
      fill="#9AAAB4"
      d="M27.388 24.642L24.56 27.47l-4.95-4.95 2.828-2.828z"
    />
    <path
      fill="#66757F"
      d="M34.683 29.11l-5.879-5.879c-.781-.781-2.047-.781-2.828 0l-2.828 2.828c-.781.781-.781 2.047 0 2.828l5.879 5.879c1.562 1.563 4.096 1.563 5.658 0 1.56-1.561 1.559-4.094-.002-5.656z"
    />
    <circle fill="#8899A6" cx="13.586" cy="13.669" r="13.5" />
    <circle fill="#BBDDF5" cx="13.586" cy="13.669" r="9.5" />
  </SearchIconSvg>
)

const query = graphql`
  query Search {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }
`

const SearchBox = styled.div`
  position: relative;
`

const SearchResults = styled.div`
  display: ${({ focused }) => (focused ? 'block' : 'none')};
  position: absolute;
  right: 0;
  width: 384px;
  z-index: 20;
  background-color: rgb(249, 250, 251);
  padding: 8px 24px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-height: 384px;
  overflow: scroll;
`

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`

const Search = () => {
  const ref = React.createRef()
  const [searchTerm, setSearchTerm] = React.useState('')
  const [inputFocused, setInputFocused] = React.useState(false)
  useClickOutside(ref, () => setInputFocused(false))
  const focused = searchTerm && searchTerm.length > 0 && inputFocused
  const data = useStaticQuery(query)
  const transform = data =>
    data.allMdx.edges.map(({ node }) => {
      const { frontmatter, fields, excerpt, ...rest } = node
      return { ...frontmatter, ...fields, body: excerpt, ...rest }
    })
  const searchData = transform(data)
  const search = createSearch(searchData)
  return (
    <SearchBox ref={ref}>
      <SearchInputContainer>
        <SearchIcon />
        <input
          css={`
            background-color: rgb(243, 244, 246);
            padding: 8px;
            padding-left: 32px;
            width: 160px;
          `}
          onChange={e => setSearchTerm(e?.target?.value || '')}
          onFocus={() => setInputFocused(true)}
          onClick={() => setInputFocused(true)}
          value={searchTerm}
          aria-label="Search"
        />
      </SearchInputContainer>
      <SearchResults
        focused={focused}
      >
        {search.search(searchTerm).map(({ slug, title, body }, i) => (
          <div
            css={`
              margin: 16px 0;
            `}
            key={i}
          >
            <Link to={slug}>
              <h4
                css={`
                  padding-bottom: 8px;
                `}
              >
                {title}
              </h4>
            </Link>
            <Link to={slug}>
              <p
                css={`
                  font-weight: 300;
                  height: 96px;
                  overflow: scroll;
                `}
              >
                {body}
              </p>
            </Link>
          </div>
        ))}
      </SearchResults>
    </SearchBox>
  )
}

export default Search
