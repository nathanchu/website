import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Home.module.css'
import useTypewriter from '../components/usetypewriter'

export default function Home() {
  const gradientValue = useTypewriter(
    ['amazing', 'wonderful', 'useful', 'weird', 'awesome'],
    { random: true }
  )
  return (
    <div className={styles.container}>
      <h1>
        Hi <span className={styles.wave}>&#128075;</span> , I&apos;m{' '}
        <span className={styles.gradientName}>Nathan Chu</span>. I code{' '}
        <span className={styles.gradientVariable}>{gradientValue}</span>
        <span className={styles.cursor}>_</span> things.
      </h1>

      <hr />

      <h1>
        <a href="https://github.com/nathanchu">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '32px' }} />
        </a>
      </h1>
    </div>
  )
}
