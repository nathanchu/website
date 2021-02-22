import React from 'react'
import styled from 'styled-components'
import logo from '../images/codebackground.svg'
import { Title } from './text'

const Divider = styled.hr`
  width: 100vw;
`

const FooterWrapper = styled.div`
  margin-top: 96px;
  background-image: radial-gradient(rgb(229, 231, 235) 10%, transparent 10%);
  background-size: 25px 25px;
  @media (prefers-color-scheme: dark) {
    background-image: radial-gradient(rgb(55, 65, 75) 10%, transparent 10%);
    color: rgb(249, 250, 251);
  }
`

const FooterContainer = styled.div`
  display: flex;
  padding: 48px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Divider />
      <FooterContainer>
        <div>
          <img css={`height: 100px;`} src={logo} height={100} />
          <span
            css={`
              font-size: 2.5rem;
              font-weight: 700;
            `}
          >
            Nathan Chu
          </span>
        </div>
      </FooterContainer>
    </FooterWrapper>

  )
}

export default Footer