import Head from 'next/head'
import { GoMarkGithub } from '@react-icons/all-files/go/GoMarkGithub'
import styles from '../styles/Home.module.css'
import useTypewriter from '../components/usetypewriter'
import ReactNotionRenderer from 'notion-react-renderer'
import { useState } from 'react'

const RandomizeBackgroundButton = props => {
  const [colors, setColors] = useState(props.colors)

  const [positions, setPositions] = useState(props.positions)
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #${colors[0]};
          ${colors && positions
            ? `
              background-image: ${
                Array(7)
                  .fill()
                  .map(
                    (_, i) =>
                      `radial-gradient(at ${positions[i][0]}% ${
                        positions[i][1]
                      }%, #${colors[i + 1]} 0, transparent 50%)`
                  )
                  .join(',') + ';'
              };
            `
            : ''}
        }
      `}</style>
      <button
        onClick={() => {
          setColors(
            Array(8)
              .fill()
              .map(() =>
                Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, '0')
              )
          )
          setPositions(
            Array(7)
              .fill()
              .map(() =>
                Array(2)
                  .fill()
                  .map(() => Math.floor(Math.random() * 101))
              )
          )
        }}
        className={styles.rainbowButton}
      >
        Randomize Background
      </button>
    </>
  )
}

const Header = () => {
  const gradientValue = useTypewriter(
    ['amazing', 'wonderful', 'useful', 'weird', 'awesome'],
    { random: true }
  )

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerName}>
        Hi <span className={styles.wave}>&#128075;</span> , I&apos;m
        <br />
        <span className={styles.gradientName}>Nathan Chu</span>.
      </h1>

      <h1 className={styles.headerVariable}>
        I code <br />
        <span className={styles.gradientVariable}>{gradientValue}</span>
        <span className={styles.cursor}>_</span>
        <br />
        things.
      </h1>
      <h1 className={styles.headerGitHubLink}>
        <a href="https://github.com/nathanchu">
          <GoMarkGithub aria-label="GitHub" />
        </a>
      </h1>
    </div>
  )
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Nathan Chu</title>
      </Head>

      <Header />

      <hr />

      <div className={styles.markdownBody}>
        {props.notionData ? (
          <ReactNotionRenderer blocks={props.notionData} />
        ) : (
          <span>
            Oh no, an error! Report it in my{' '}
            <a href="https://github.com/nathanchu/website/issues">
              issue tracker
            </a>
            .
          </span>
        )}
      </div>
      <br />
      <RandomizeBackgroundButton
        colors={props.colors}
        positions={props.positions}
      />
      <br />
      <h1 className={styles.footerGitHubLink}>
        <a href="https://github.com/nathanchu">
          <GoMarkGithub aria-label="GitHub" />
        </a>
      </h1>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch(
    'https://api.notion.com/v1/blocks/7bd7debc18004e2184442b0627b09438/children',
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2021-05-13'
      }
    }
  )
  const json = await data.json()
  const colors = Array(8)
    .fill()
    .map(() =>
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
    )
  const positions = Array(7)
    .fill()
    .map(() =>
      Array(2)
        .fill()
        .map(() => Math.floor(Math.random() * 101))
    )

  return {
    props: {
      notionData: json?.results,
      colors,
      positions
    },
    revalidate: 1
  }
}
