import * as React from 'react'
import styles from '../css/about.module.css'
import { aProps } from '../utilities'

const About = () => (
  <div className={styles.about}>
    <h1>About Me</h1>
    <br />
    <p>
      Hello, World! I'm Nathan Chu{' '}
      <a {...aProps} href="https://github.com/nathanchu">
        (@nathanchu on GitHub)
      </a>{' '}
      and this is my corner of the Internet. I'm a full stack web developer
      who's worked with JavaScript, React, Node.js, HTML, and CSS.
    </p>
  </div>
)

export default About
