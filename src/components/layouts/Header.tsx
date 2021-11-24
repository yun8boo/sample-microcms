import Link from 'next/link';
import styles from './Header.module.css';

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
          <li>
            <Link href={`/lp`}>
              <a>lp</a>
            </Link>
          </li>
          <li>
            <Link href={`/dictionary`}>
              <a>社内制度辞典</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
