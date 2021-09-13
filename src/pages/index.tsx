import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Sample microCMS</h1>
      <ul>
        <Link href={`/case_study`}>
          <a><li>導入事例</li></a>
        </Link>
        <Link href={`/column`}>
          <a><li>コラム</li></a>
        </Link>
        <Link href={`/news`}>
          <a><li>お知らせ</li></a>
        </Link>
      </ul>
    </div>
  )
}

export default Home