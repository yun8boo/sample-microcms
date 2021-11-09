import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { client } from "@/lib/microcms/client";

const StaticPage: NextPage<{ contents: any[] }> = ({ contents }) => {
  return (
    <div>
      <h1>固定ページ</h1>
      <ul>
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/static-page/${encodeURIComponent(content.id)}`}>
                <a>
                  <li>{content["lp-title"]}</li>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StaticPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({ endpoint: "static-page" });
  return {
    props: {
      contents: data.contents,
    },
  };
};
