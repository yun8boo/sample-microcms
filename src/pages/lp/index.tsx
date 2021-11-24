import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { client } from '@/lib/microcms/client';

const LpList: NextPage<{ contents: any[] }> = ({ contents }) => {
  return (
    <div>
      <h1>sample lp</h1>
      <ul>
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/lp/${encodeURIComponent(content.id)}`}>
                <a>{content.id}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LpList;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({ endpoint: 'landing-page' });
  return {
    props: {
      contents: data.contents,
    },
  };
};
