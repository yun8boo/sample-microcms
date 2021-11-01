import type { NextPage, GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import { client } from '@/lib/microcms/client'
import styles from '../styles/Home.module.css'
import { Layout } from '@/components/layouts/Layout'

const Home = ({textManagement}: any) => {
  return (
    <div className={styles.container}>
      <h1>Sample microCMS</h1>
      <h2>テキスト管理</h2>
      <ul>
        <li>
          ファーストビューのテキスト：{textManagement.first_view}
        </li>
        <li>
          お問い合わせボタンのテキスト：{textManagement.inquiry}
        </li>
        <li>
          資料ダウンロードボタンのテキスト：{textManagement.document_request}
        </li>
        <li>
          デモボタンのテキスト：{textManagement.demonstration}
        </li>
      </ul>
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({endpoint: 'text-management'})
  return {
    props: {
      textManagement: data
    }
  }
}