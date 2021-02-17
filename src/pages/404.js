import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { centerCss } from '../components/center'

const _404Wrapper = styled(Layout)`
  ${centerCss}
  width: 100vw;
  height: 100vh;
`

const _404 = () => {
  return (
    <_404Wrapper>
      <div
        css={`
          text-align: center;
        `}
      >
        <div
          css={`
            font-size: 6rem;
            line-height: 1;
          `}
        >
          404
        </div>
        <div
          css={`
            font-size: 1.25rem;
            line-height: 1.75rem;
          `}
        >
          The page you requested was not found
        </div>
      </div>
    </_404Wrapper>
  )
}

export default _404
