import type { GetStaticProps, GetStaticPaths } from 'next'
import { client } from '@/lib/microcms/client'
import { EmbeddedHtml } from '@/components/common/EmbeddedHtml';

const StaticPage = ({ content }: any) => {
  return (
    <div>
      <EmbeddedHtml html={content.lp_content[0].html} />
    </div>
  )
}

export default StaticPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<any>({endpoint: "static-page"})
  const paths = data.contents.map((content: any) => `/static_page/${content.id}`);
  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.slug;
  const data: any = await client.get({ endpoint: "static-page", contentId: id as string });
  return {
    props: {
      content: data,
    },
  };
};