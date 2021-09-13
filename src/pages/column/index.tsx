import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '@/lib/microcms/client'

const Column: NextPage<{contents: any[]}> = ({contents}) => {
  return (
    <div>
      <h1>コラム</h1>
      <ul>
        {contents.map(content => {
          return (
            <li key={content.id}>
              <Link href={`/column/${encodeURIComponent(content.id)}`}>
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

export default Column

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({endpoint: 'column'})
  return {
    props: {
      contents: data.contents
    }
  }
}