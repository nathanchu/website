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
`

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export default () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [inputFocused, setInputFocused] = React.useState(false)
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
    <SearchBox>
      <SearchInputContainer>
        <SearchIcon />
        <input
          className="bg-gray-100 p-2 pl-8 w-40"
          onChange={e => setSearchTerm(e?.target?.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          value={searchTerm}
        />
      </SearchInputContainer>
      <SearchResults
        focused={focused}
        className="absolute right-0 w-96 z-20 bg-gray-50 py-2 px-6 shadow-card rounded-lg max-h-96 overflow-scroll"
      >
        {search.search(searchTerm).map(({ slug, title, body }, i) => (
          <div className="my-4" key={i}>
            <Link to={slug}>
              <h4 className="font-normal pb-2">{title}</h4>
            </Link>
            <Link to={slug}>
              <p className="font-light h-24 overflow-scroll">{body}</p>
            </Link>
          </div>
        ))}
      </SearchResults>
    </SearchBox>
  )
}
