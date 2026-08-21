import type { BlogPost } from "../data/posts";
import BlogCard from "./BlogCard";

type Props = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="blog-related" aria-labelledby="related-heading">
      <h2 id="related-heading">Related articles</h2>
      <div className="blog-related-grid">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
