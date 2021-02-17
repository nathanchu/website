import React from 'react'
import codebackground from '../images/codebackground.svg'
import Highlight from './highlight'
import { aProps } from '../utilities'
import styled from 'styled-components'
import { Title } from './text'
import { Small as SmallAd } from './ads'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 96px;
  margin-top: 144px;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 12rem;
  }
  @media (min-width: 1536px) {
    margin: 192px;
    margin-bottom: 96px;
  }
`

const StyledHighlight = styled(Highlight)`
  font-family: 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, 'Liberation Mono', 'Courier New', monospace;
  border-radius: 12px;
  padding: 24px;
  font-size: 1.25rem;
  line-height: 1.5rem;
`

const CodeBackground = styled.img.attrs({
  src: codebackground,
  alt: 'Abstract Triangles Background'
})`
  position: absolute;
  top: 50%;
  z-index: -10;
  height: auto;
  width: 208px;
  right: 256px;
  transform: translateY(-50%);
  @media (min-width: 1024px) {
    width: 320px;
  }
`

const Main = () => {
  return (
    <MainWrapper id="home">
      <div
        css={`
          text-align: center;
        `}
      >
        <Title
          as="h1"
          css={`
            font-size: 4.5rem;
            line-height: 1;
          `}
        >
          Nathan Chu
        </Title>
        <br />
        <hr />
        <br />
        <h2
          css={`
            font-size: 2.25rem;
            line-height: 2.5rem;
            font-weight: 300;
          `}
        >
          A web developer |{' '}
          <a {...aProps} href="https://github.com/nathanchu">
            GitHub
          </a>
        </h2>
        <br />
        <br />
        <SmallAd />
      </div>
      <div
        css={`
          position: relative;
          padding-top: 48px;
          @media (min-width: 1024px) {
            margin-left: 192px;
          }
        `}
      >
        <StyledHighlight
          code={JSON.stringify(
            {
              person: {
                name: 'Nathan Chu',
                skills: ['JavaScript', 'React', 'CSS', 'HTML']
              },
              website: {
                colors: ['#4169e1', '#fada5e']
              }
            },
            null,
            2
          )}
        />
        <CodeBackground />
      </div>
    </MainWrapper>
  )
}

export default Main
