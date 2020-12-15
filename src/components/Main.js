import * as React from 'react'
import codebackground from '../images/codebackground.svg'
import Highlight from './highlight'
import styles from '../css/index.module.css'

const Main = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <h1>Nathan Chu</h1>
      <hr />
      <h2>
        A web developer | <a href="https://github.com/nathanchu">GitHub</a>
      </h2>
    </div>
    <div className={styles.codewrapper}>
      <div className={styles.codecontainer}>
        <Highlight
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
          className={styles.codeblock}
        />
        <img src={codebackground} alt="" className={styles.codebackground} />
      </div>
    </div>
  </div>
)

export default Main
