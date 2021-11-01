import Link from "next/link"
import { DocumentDownloadButton } from "../DocumentDownloadButton"
import { InquiryDownloadButton } from "../InquiryDownloadButton"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1>TUNAG</h1>
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href={`/case_study`}>
              <a>導入事例</a>
            </Link>
          </li>
          <li>
            <Link href={`/column`}>
              <a>コラム</a>
            </Link>
          </li>
          <li>
            <Link href={`/news`}>
              <a>お知らせ</a>
            </Link>
          </li>
        </ul>
        <DocumentDownloadButton />
        <InquiryDownloadButton />
      </div>
    </header>
  )
}