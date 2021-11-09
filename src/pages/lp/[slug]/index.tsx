import type { GetStaticProps, GetStaticPaths } from 'next'
import { client } from '@/lib/microcms/client'

const Lp = ({content}: any) => {
  console.log(content);
  return (
    <div>
      <h1>LP</h1>
      <p>{JSON.stringify(content)}</p>
    </div>
  )
}

export default Lp

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<any>({endpoint: "landing-page"})
  const paths = data.contents.map((content: any) => `/lp/${content.id}`);
  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.slug;
  const data: any = await client.get({ endpoint: "landing-page", contentId: id as string });
  return {
    props: {
      content: data,
    },
  };
};