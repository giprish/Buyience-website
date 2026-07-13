export interface BlogPost {
  id: string;
  category: "b2b" | "technology" | "product" | "trends";
  categoryLabel: string;
  title: string;
  excerpt: string;
  authorInitials: string;
  authorName: string;
  readTime: string;
  isFeatured?: boolean;
}

export const blogPostsData: BlogPost[] = [
  {
    id: "universal-commerce-protocol",
    category: "b2b",
    categoryLabel: "B2B",
    title: "The Universal Commerce Protocol Is Here. Most B2B Platforms Aren't Ready for It",
    excerpt:
      "What agent-driven commerce actually demands from your pricing, quoting, and inventory infrastructure — and why the readiness gap is wider than most operators think.",
    authorInitials: "JF",
    authorName: "Jordian F.",
    readTime: "8 min read",
    isFeatured: true,
  },
  {
    id: "composable-commerce",
    category: "b2b",
    categoryLabel: "B2B",
    title: "Composable Commerce for B2B — A Decision Guide",
    excerpt:
      "The composable commerce conversation in B2B has focused almost entirely on architecture. The harder question — and the one most teams skip — is whether the workflows underneath are composable too.",
    authorInitials: "JF",
    authorName: "Jordian F.",
    readTime: "11 min read",
  },
  {
    id: "ai-quote-generation",
    category: "b2b",
    categoryLabel: "B2B",
    title: "AI Quote Generation in B2B — What's Real vs Marketing",
    excerpt:
      "Every B2B quoting vendor now claims AI capabilities. Most are automating the wrong layer. Until your pricing data is structured, governed, and real-time, AI quoting is just faster guessing.",
    authorInitials: "JF",
    authorName: "Jordian F.",
    readTime: "9 min read",
  },
  {
    id: "mach-architecture",
    category: "technology",
    categoryLabel: "TECHNOLOGY",
    title: "What Is MACH Architecture, and Why It's Revolutionizing Digital Platforms",
    excerpt:
      "Microservices, API-first, cloud-native, headless — what each part actually buys you, and where monolithic commerce platforms stop being able to keep up.",
    authorInitials: "B",
    authorName: "Buyience",
    readTime: "7 min read",
  },
];
