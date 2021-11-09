import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import cheerio from "cheerio";
import hljs from "highlight.js";
import { client } from "@/lib/microcms/client";

const Id: NextPage<any> = ({ content }: any) => {
  return (
    <div>
      <h1>{content["lp-title"]}</h1>
      <div>{content.lp_text_content}</div>
    </div>
  );
};

export default Id;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<any>({ endpoint: "static-page" });
  const paths = data.contents.map(
    (content: any) => `/static-page/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const data: any = await client.get({
    endpoint: "static-page",
    contentId: id as string,
  });
  return {
    props: {
      content: data,
    },
  };
};
