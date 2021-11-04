import type { GetStaticProps, GetStaticPaths } from 'next'
import { client } from '@/lib/microcms/client'

const Lp = ({content}: any) => {
  console.log(content);
  return (
    <div>
      <h1>Sample microCMS</h1>
      <h2>lp-テキスト管理</h2>
      <ul>
        <li>
          <p>メニュー名1：{content['page-menu-txt-01']}</p>
          <p>メニューリンク１：<a style={{color: 'blue'}} href={content['page-menu-link-01']}>{content['page-menu-link-01']}</a></p>
        </li>
        <li>
          メニュー名2：{content['page-menu-txt-02']}
          <p>メニューリンク２：<a style={{color: 'blue'}} href={content['page-menu-link-02']}>{content['page-menu-link-02']}</a></p>
        </li>
        <li>
          メニュー名3：{content['page-menu-txt-03']}
          <p>メニューリンク３：<a style={{color: 'blue'}} href={content['page-menu-link-03']}>{content['page-menu-link-03']}</a></p>
        </li>
      </ul>
    </div>
  )
}

export default Lp

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<any>({endpoint: "page"})
  console.log(data);
  
  const paths = data.contents.map((content: any) => `/lp/${content.id}`);
  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.slug;
  const data: any = await client.get({ endpoint: "page", contentId: id as string });
  return {
    props: {
      content: data,
    },
  };
};