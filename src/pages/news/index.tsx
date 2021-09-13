import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '@/lib/microcms/client'

const News: NextPage<{contents: any[]}> = ({contents}) => {
  return (
    <div>
      <h1>お知らせ</h1>
      <ul>
        {contents.map(content => {
          return (
            <li key={content.id}>
              <Link href={`/news/${encodeURIComponent(content.id)}`}>
                <a>
                  <li>{content.title}</li>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default News

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({endpoint: 'news'})
  return {
    props: {
      contents: data.contents
    }
  }
}