<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:hero-section-rules -->
## Hero section layout rule (sm and wider)

Applies to every hero section (the first, above-the-fold two-column section on
a page — left column copy/CTA, right column visual/demo). Site chrome for
context: `AnnouncementBar` (the promo strip) renders above `Navbar` in normal
flow (not sticky); `Navbar` is `sticky top-0` with total height (content +
1px bottom border) of 49px (<640px), 57px (640–1023px), 77px (1024px+).

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
   `100vh - navbar height - founder-launch-strip height`, expressed as CSS
   custom properties:
   `--home-hero-h: calc(100vh - var(--home-nav-h) - var(--home-strip-h))`.
   `--home-nav-h` must switch value at the *same* breakpoints as `Navbar`'s
   own height classes (49px → 57px at 640px, 57px → 77px at 1024px) — never a
   single static value across the whole `sm+` range.
3. **Short-viewport safety valve.** A hero pinned to `100vh - ...` breaks on
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
