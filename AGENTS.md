<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:hero-section-rules -->
## Hero section layout rule (sm and wider)

Applies to every hero section (the first, above-the-fold two-column section on
a page — left column copy/CTA, right column visual/demo). Site chrome for
context: `AnnouncementBar` (the promo strip) renders above `Navbar` in normal
flow (not sticky); `Navbar` is `sticky top-0` with total height (content +
1px bottom border) of 54px (<640px), 57px (640–1023px), 77px (1024px+).

On viewports **640px and wider** (Tailwind `sm:` breakpoint and up):

1. **Equal-height columns, sized to content — not stretched to fill the
   section.** The two columns must be equal height *to each other*, matching
   whichever column's own natural content is taller (CSS Grid
   `align-items: stretch` on both columns handles this). Do **not** force the
   column-pair row itself to fill the entire fixed hero height (i.e. the grid
   row wrapping both columns needs `flex: 0 1 auto`, sized to its content —
   never `flex: 1 1 auto`, which stretches it to consume all available
   height). Instead, center that naturally-sized row inside the fixed-height
   hero (`justify-content: center` on the hero), so any leftover viewport
   space becomes **one balanced margin above and below the whole content
   block** — not padding stretched out inside each column. Within a column
   whose own content is shorter than the row's height (e.g. copy vs. a
   taller visual widget), cap the gap between its content groups (e.g.
   `gap: clamp(28px, 4vh, 56px)`) and center them (`justify-content: center`)
   so that column's own leftover space stays small and balanced too. Never
   rely on `margin-top: auto` to push a footer block to the bottom of a
   column — that produces a single oversized dead gap instead of evenly
   distributed spacing.
2. **Fixed hero height.** The hero section's own height must equal
   `100svh - navbar height - founder-launch-strip height`, expressed as CSS
   custom properties:
   `--home-hero-h: calc(100svh - var(--home-nav-h) - var(--home-strip-h))`.
   Use `svh` (small viewport), not classic `vh` / `dvh` — those change while
   mobile browser chrome shows/hides and reflow the layout under a sticky
   navbar. `--home-nav-h` must switch value at the *same* breakpoints as
   `Navbar`'s own height (54px → 57px at 640px, 57px → 77px at 1024px) —
   never a single static value across the whole `sm+` range. Prefer driving
   the sticky header's border-box height from `var(--home-nav-h)` so the CSS
   var and the rendered bar cannot drift.
3. **Short-viewport safety valve.** A hero pinned to `100svh - ...` breaks on
   viewports that are wide but short (landscape phones, e.g. ~844×390 or
   ~926×428). Add graduated `max-height` tiers: first tighten
   spacing/type-size, then — below a "genuinely too short" threshold —
   release the fixed height back to `height: auto; min-height: 0` so content
   reflows instead of being clipped.

**Below 640px (mobile):** none of the above applies. Columns stack in a single
column with natural/auto height.

**Known limitation:** the founder-launch-strip height is a hand-measured
constant (`--home-strip-h`, currently `46px` for its `sm:flex-row` single-line
layout), not derived from actual DOM measurement. It can wrap to two lines on
narrow-but-not-mobile widths or with longer localized/currency text, which
would make the hero height calculation off by roughly one line-height.
Follow-up (out of scope for now): measure the strip's real height at runtime
via `ResizeObserver` and set the CSS var dynamically, or constrain the strip
to guarantee single-line layout down to 640px.
<!-- END:hero-section-rules -->

<!-- BEGIN:section-background-rules -->
## Section background alternation rule (sitewide)

Applies to every full-bleed page section rendered directly inside a page's
`<main>` (i.e. every section component in `app/<page>/components/*.tsx`, plus
shared cross-page section components such as `components/FaqSection.tsx` and
`components/FinalCTA.tsx`). Excludes hero sections (see "Hero section layout
rule" above) — a hero keeps its own bespoke background and sits above the
alternating sequence, not inside it.

**The two allowed backgrounds.** Every non-hero section is either:

1. **Purple** — `background: var(--surface)` (`#F4EFFF`, flat light
   lavender; already defined globally at `:root` in `app/globals.css`, no
   gradient, no decorative pattern). Applied via Tailwind v4's CSS-variable
   shorthand `bg-(--surface)` on the section's own root `<section>` element
   — never redeclare `--surface` locally, it already resolves anywhere in
   the stylesheet.
2. **White** (default) — no background override class; the section inherits
   the page's white background as it does today.

**Alternation.** Reading down the page, consecutive sections must alternate
between purple and white — never two purple or two white sections back to
back — *except* where a documented, deliberate exception applies (see below).
Hero sections sit above this sequence entirely and don't count toward
alternation.

**Documented exceptions to strict alternation:**
- A logo-strip section (e.g. a customer/integration logo marquee) placed
  immediately after the hero should stay white rather than participate in
  alternation. Heavy tinted backgrounds behind a logo marquee read poorly in
  B2B marketing design, and most logo marks are designed for a plain white
  canvas.
- Any section whose own inner markup already renders a card/panel at
  `background: var(--surface)` (the exact purple value) must stay white at
  the section level. Painting the section purple too makes that inner
  card/panel visually disappear — it becomes indistinguishable from its own
  background. Check the component's CSS before assigning it purple; if it
  (or any of its inner elements) already uses `var(--surface)` or an
  equivalent tint (e.g. `--violet-tint`, `#F4EFFF`) as a background, leave
  the section white.

**White cards on purple sections.** When a section is purple, cards or
content boxes placed on top of it stay white (`background: #fff`) with a
`1px solid var(--border)` border — never colored/tinted cards. This is the
established pattern (`app/ai-quote-engine/components/Challenge.tsx`'s
`.chal-card`, mirrored by `.cap-card`, `.mach-card`, `.who-card`), and keeps
hierarchy readable: purple marks the *section*, white marks *content grouped
within it*.

**Implementation mechanism: the `purple` prop.** Every section component
accepts an optional boolean `purple` prop, default `false`:

```tsx
export default function SomeSection({ purple = false }: { purple?: boolean }) {
  return (
    <section className={`some-section ${purple ? "bg-(--surface)" : ""}`.trim()}>
      ...
    </section>
  );
}
```

- Omitted or `false` → no override class is added; the section renders
  exactly as it does today (backward-compatible, zero visual change).
- `true` → adds `bg-(--surface)` to the section's root className.
- Shared cross-page components (`FaqSection`, `FinalCTA`, and any future
  shared section) must default `purple` to `false` so every other page that
  already calls them without the prop is unaffected.
- The parent page component decides the sequence by passing `purple` on
  alternating children, e.g. `<HomeCapabilities purple />`.
- **Cascade-layer gotcha:** before wiring up a new section, check whether it
  already has a plain (non-Tailwind, unlayered) CSS rule setting its own
  `background` (e.g. `.final-card-section { background: #fff; }` in
  `app/globals.css`). Tailwind utilities live inside `@layer utilities`, and
  in CSS, unlayered rules *always* win over layered ones regardless of
  specificity — so `bg-(--surface)` would silently do nothing on such a
  section. `components/FinalCTA.tsx` is exactly this case: its `purple` prop
  sets an inline `style={{ background: "var(--surface)" }}` instead of the
  class, since inline styles beat both layered and unlayered stylesheet
  rules. Use the class by default; fall back to an inline style only when a
  competing unlayered background rule already exists on that section.

**Known limitation:** this rule assigns backgrounds per hand-picked
component, not automatically by position — adding, removing, or reordering
sections on a page requires re-checking the alternation and re-assigning
`purple` props by hand. There is no automatic "every other section"
mechanism, since full-bleed section backgrounds are applied via a component
prop, not a structural CSS selector. Relatedly, a decoration element that
happens to reuse the exact `var(--surface)` value (e.g. an accordion's `+`
icon chip) will read with lower contrast on a purple section than on white —
acceptable for legibility (text colors keep strong contrast) but worth a
visual check per component.
<!-- END:section-background-rules -->
