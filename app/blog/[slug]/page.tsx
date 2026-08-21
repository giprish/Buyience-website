import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingLayout from "@/components/MarketingLayout";
import BlogArticleHeader from "../components/BlogArticleHeader";
import BlogArticleContent from "../components/BlogArticleContent";
import BlogAuthor from "../components/BlogAuthor";
import BlogNavigation from "../components/BlogNavigation";
import RelatedPosts from "../components/RelatedPosts";
import {
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "../lib/posts";
import { getPostMdxSource } from "../lib/mdx";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.authorName],
      images: [{ url: post.coverImage, width: 1488, height: 720, alt: post.coverImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const source = await getPostMdxSource(slug);
  const { prev, next } = getAdjacentPosts(slug);
  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Buyience",
      url: "https://buyience.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://buyience.com/blog/${post.slug}`,
    },
  };

  return (
    <MarketingLayout
      mainClassName="blog-page blog-article-page"
      cta={{
        id: "trial",
        title: (
          <>
            Ready to stop fighting{" "}
            <span className="final-card-accent">your platform?</span>
          </>
        ),
        description:
          "Start your 14-day free trial. No credit card required. Full access to all features.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="blog-article">
        <div className="container blog-article-inner">
          <BlogArticleHeader post={post} />
          {source ? (
            <BlogArticleContent source={source} />
          ) : (
            <div className="blog-prose">
              <p>{post.excerpt}</p>
              <p>
                This article is part of the Buyience knowledge base on modern B2B commerce. For the
                full product story, see Nova Core — AI quoting, inventory, and storefronts on MACH
                architecture.
              </p>
            </div>
          )}
          <BlogAuthor
            name={post.authorName}
            initials={post.authorInitials}
            image={post.authorImage}
          />
          <BlogNavigation prev={prev} next={next} />
          <RelatedPosts posts={related} />
        </div>
      </article>
    </MarketingLayout>
  );
}
