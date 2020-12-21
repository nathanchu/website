import * as React from 'react'
import styles from '../css/about.module.css'
import { aProps } from '../utilities'

const About = () => (
  <div className={styles.about}>
    <span className="anchor" id="about" />
    <h1>About Me</h1>
    <br />
    <p>
      Hello, World! I'm Nathan Chu{' '}
      <a {...aProps} href="https://github.com/nathanchu">
        (@nathanchu on GitHub)
      </a>{' '}
      and this website is my corner of the Internet. I'm a full stack web
      developer who's worked with JavaScript, React, Node.js, HTML, and CSS.
      I've also worked some with PHP and SQL.
    </p>
  </div>
)

export default About
