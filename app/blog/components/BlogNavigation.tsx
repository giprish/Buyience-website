import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "../data/posts";

type Props = {
  prev: BlogPost | null;
  next: BlogPost | null;
};

export default function BlogNavigation({ prev, next }: Props) {
  if (!prev && !next) return null;

  return (
    <nav className="blog-nav" aria-label="Adjacent articles">
      {prev ? (
        <Link href={`/blog/${prev.slug}`} className="blog-nav-card blog-nav-card--prev">
          <span className="blog-nav-label">Previous</span>
          <span className="blog-nav-media">
            <Image
              src={prev.coverImage}
              alt=""
              width={320}
              height={155}
              className="blog-nav-img"
              sizes="160px"
            />
          </span>
          <span className="blog-nav-title">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/blog/${next.slug}`} className="blog-nav-card blog-nav-card--next">
          <span className="blog-nav-label">Next blog</span>
          <span className="blog-nav-media">
            <Image
              src={next.coverImage}
              alt=""
              width={320}
              height={155}
              className="blog-nav-img"
              sizes="160px"
            />
          </span>
          <span className="blog-nav-title">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
