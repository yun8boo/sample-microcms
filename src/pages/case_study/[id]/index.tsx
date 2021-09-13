import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import { client } from "@/lib/microcms/client"

const Id: NextPage<any> = ({content, highlightedBody}) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${highlightedBody}`,
        }}
      />
    </div>
  )
}

export default Id

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<any>({endpoint: "case_study"})
  const paths = data.contents.map((content: any) => `/case_study/${content.id}`);
  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const data: any = await client.get({ endpoint: "case_study", contentId: id as string });
  const $ = cheerio.load(data.body);    // data.bodyはmicroCMSから返されるリッチエディタ部分
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  

  return {
    props: {
      content: data,
      highlightedBody: $.html()
    },
  };
};