export type BlogCategoryId = "all" | "b2b" | "technology" | "product" | "trends";

export type BlogCategory = {
  id: BlogCategoryId;
  label: string;
};

export const blogCategories: BlogCategory[] = [
  { id: "all", label: "All" },
  { id: "b2b", label: "B2B" },
  { id: "product", label: "Product Information" },
  { id: "technology", label: "Technology" },
  { id: "trends", label: "Trends and Insights" },
];
