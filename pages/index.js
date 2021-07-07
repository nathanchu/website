import Head from 'next/head'
import { IconContext } from '@react-icons/all-files'
import { GoMarkGithub } from '@react-icons/all-files/go/GoMarkGithub'
import styles from '../styles/Home.module.css'
import useTypewriter from '../components/usetypewriter'
import ReactNotionRenderer from 'notion-react-renderer'

export default function Home(props) {
  const gradientValue = useTypewriter(
    ['amazing', 'wonderful', 'useful', 'weird', 'awesome'],
    { random: true }
  )
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Nathan Chu</title>
      </Head>
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
  return {
    props: {
      notionData: json?.results
    },
    revalidate: 1
  }
}
