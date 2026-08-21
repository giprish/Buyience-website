import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  source: string;
};

export default function BlogArticleContent({ source }: Props) {
  return (
    <div className="blog-prose">
      <MDXRemote source={source} />
    </div>
  );
}
