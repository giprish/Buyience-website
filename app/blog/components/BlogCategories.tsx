"use client";

import type { BlogCategory, BlogCategoryId } from "../data/categories";

type Props = {
  categories: BlogCategory[];
  counts: Record<BlogCategoryId, number>;
  active: BlogCategoryId;
  onChange: (id: BlogCategoryId) => void;
};

export default function BlogCategories({ categories, counts, active, onChange }: Props) {
  return (
    <div className="blog-cats" role="group" aria-label="Filter by category">
      {categories.map((cat) => {
        const count = counts[cat.id] ?? 0;
        const pressed = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            className="blog-cat-chip"
            data-cat={cat.id}
            aria-pressed={pressed}
            onClick={() => onChange(cat.id)}
          >
            {cat.label}
            <span className="blog-cat-n">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
