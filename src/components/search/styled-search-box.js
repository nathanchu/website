import styled, { css } from 'styled-components'
import SearchBox from './search-box'

const open = css`
  width: 10em;
  background: ${({ theme }) => theme.background};
  cursor: text;
  margin-left: -32px;
  padding-left: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
`

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -16px;
  padding-left: 16px;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? 'auto' : 'none')};
    font-size: 1em;
    transition: 100ms;
    border-radius: 4px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 16px;
    margin: 8px;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
  }
`
