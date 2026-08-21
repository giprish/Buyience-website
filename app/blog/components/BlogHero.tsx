import SectionCapsule from "@/components/SectionCapsule";

export default function BlogHero() {
  return (
    <header className="blog-hero relative overflow-hidden bg-hero-grid">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="container relative z-10">
        <SectionCapsule>Our Blogs</SectionCapsule>
        <h1>
          B2B Commerce Insights from <span className="grad-text">Buyience</span>
        </h1>
        <p className="lede">
          Practical insights on B2B commerce, AI-powered quoting, and scalable architecture — built
          for teams running modern B2B sales operations.
        </p>
      </div>
    </header>
  );
}
