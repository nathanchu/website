import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <div>
        <h1>Nathan Chu</h1>
        <h2>A web developer</h2>
        <br />
        <a
          href="http://github.com/nthnchu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Github: @nthnchu</h3>
        </a>
        <br />
        <h5>More coming soon!</h5>
      </div>
    </header>
    <main>
      <div className={`${styles.projects} ${styles.nmbr}`}>
        <div>
          <a
            href="http://github.com/rayyansaidi-com/app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 id="rayyansaidi-com-app">rayyansaidi-com/app</h2>
          </a>
          <br />
          <h5>
            The app for rayyansaidi.com. Uses Bootstrap, and a great deal of
            HTML, CSS, and JavaScript.
          </h5>
          <br />
          <br />
          <br />
          <img
            src="https://rayyansaidi.com/download/rayyansaidi-desktop.png"
            alt="rayyansaidi-com/app"
          />
        </div>
      </div>
      <div className={`${styles.projects} ${styles.nmbr}`}>
        <div>
          <a
            href="http://github.com/issuekit/action"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 id="issuekit-action">issuekit/action</h2>
          </a>
          <br />
          <h5>A simple GitHub action that helps you comment on issues.</h5>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className={`${styles.projects} ${styles.nmbr}`}>
        <div>
          <a
            href="http://github.com/issuekit/core.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 id="issuekit-core-js">issuekit/core.js</h2>
          </a>
          <br />
          <h5>
            A npm module that makes interacting with the GitHub issues api
            easier.
            <br />
            <br />
            <a
              href="https://npmjs.com/@issuekit/core"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://npmjs.com/@issuekit/core
            </a>
          </h5>
          <br />
          <br />
          <br />
        </div>
      </div>
    </main>
  </div>
)

export default Home
