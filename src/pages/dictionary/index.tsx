import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '@/lib/microcms/client'

const Column: NextPage<{contents: any[]}> = ({contents}) => {
  console.log(contents);
  return (
    <div>
      <h1>社内制度辞典</h1>
      <ul>
        {contents.map(content => {
          return (
            <li key={content.id}>
              <Link href={`/dictionary/${encodeURIComponent(content.id)}`}>
                <a>{content.id}</a>
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
  const data = await client.get<any>({endpoint: 'dictionary'})
  return {
    props: {
      contents: data.contents
    }
  }
}