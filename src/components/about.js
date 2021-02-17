import React from 'react'
import { Title } from './text'
import Anchor from './anchor'
import { aProps } from '../utilities'

const About = () => (
  <div
    css={`
      margin-top: 48px;
      text-align: center;
      margin-left: 16.666667vw;
      margin-right: 16.666667vw;
    `}
  >
    <Anchor id="about" />
    <Title
      as="h1"
      css={`
        margin-top: 48px;
        margin-bottom: 24px;
      `}
    >
      About Me
    </Title>
    <br />
    <p
      css={`
        font-size: 1.5rem;
        line-height: 2rem;
      `}
    >
      Hello, World! I&apos;m Nathan Chu{' '}
      <a {...aProps} href="https://github.com/nathanchu">
        (@nathanchu on GitHub)
      </a>{' '}
      and this website is my corner of the Internet. I&apos;m a full stack web
      developer who&apos;s worked with JavaScript, React, Node.js, HTML, and
      CSS. I&apos;ve also worked some with PHP and SQL.
    </p>
  </div>
)

export default About
