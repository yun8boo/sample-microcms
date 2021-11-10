import type { GetStaticProps, GetStaticPaths } from 'next'
import { client } from '@/lib/microcms/client'
import { LpParts } from '@/components/domain/lp/LpParts';

const Lp = ({content, globalValue}: any) => {
  console.log(content, globalValue);
  return (
    <div>
      <h1>LP</h1>
      <LpParts displays={content.displays} globalValue={globalValue} />
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
  const textManagement = await client.get<any>({endpoint: 'text-management'})
  return {
    props: {
      content: data,
      globalValue: textManagement
    },
  };
};