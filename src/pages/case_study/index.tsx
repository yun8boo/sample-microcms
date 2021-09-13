import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '@/lib/microcms/client'

const CaseStudy: NextPage<{contents: any[]}> = ({contents}) => {
  return (
    <div>
      <h1>導入事例</h1>
      <ul>
        {contents.map(content => {
          return (
            <li key={content.id}>
              <Link href={`/case_study/${encodeURIComponent(content.id)}`}>
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

export default CaseStudy

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({endpoint: 'case_study'})
  return {
    props: {
      contents: data.contents
    }
  }
}