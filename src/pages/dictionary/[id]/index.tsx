import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { client } from "@/lib/microcms/client"
import { DictionaryParts } from '@/components/domain/dictionary/DictionaryParts';

const Id: NextPage<any> = ({contents}) => {
  console.log(contents);
  return (
    <div>
      <DictionaryParts contents={contents.contents} />
    </div>
  )
}

export default Id

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<any>({endpoint: "dictionary"})
  const paths = data.contents.map((content: any) => `/dictionary/${content.id}`);
  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const data: any = await client.get({ endpoint: "dictionary", contentId: id as string });

  return {
    props: {
      contents: data,
    },
  };
};