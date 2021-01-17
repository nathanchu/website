import * as React from 'react'
import { aProps } from '../utilities'

const About = () => (
  <div className="mt-12 text-center mx-screen-x-1/6">
    <span className="href-anchor" id="about" />
    <h1 className="mt-12 mb-6 font-bold text-6xl">About Me</h1>
    <br />
    <p className="text-2xl">
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
