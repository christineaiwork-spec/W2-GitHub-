# Gradient Design System

**Subtle, beautiful, and minimalistic.**

Gradient is a design system whose source of truth is a single markdown file. The uploaded
`uploads/DESIGN.md` — a plain-text design system meant to be dropped into a project root and read by
design agents — is the complete specification; this project is that document compiled into shipping
form: CSS custom properties, React primitives, specimen cards, and three UI kits.

The governing idea: **gradients are atmosphere, not decoration.** No decorative gradient may exceed
an 8% lightness delta between its endpoints; gradients above that threshold belong to primary action
surfaces only. A gradient you consciously notice on a card has failed. A gradient you notice on a
Save button has worked.

## Sources

| Source | What it gave us | Access |
|--------|-----------------|--------|
| `uploads/DESIGN.md` | The entire system: 9 sections covering theme, colour, type, components, layout, depth, guardrails, responsive behaviour and agent prompts | In this project |
| Bricolage Grotesque, Inter, IBM Plex Mono | The three typefaces (all OFL) | Loaded from Google Fonts — **no binaries were supplied** |
| Lucide icons | Icon glyphs | Packaged locally in `Icon.jsx`, no CDN — **a flagged substitution**, see Iconography |

No Figma file, GitHub repository, codebase, slide template or logo was provided. Nothing here is
recreated from a screenshot, and no brand mark has been drawn or approximated.

### Products represented

DESIGN.md describes its own product surfaces rather than a third-party app, so the kits cover the
three surfaces the document itself implies:

1. **Preview catalog** (`ui_kits/catalog/`) — the `preview.html` / `preview-dark.html` specimen page
   that DESIGN.md says ships beside the document.
2. **Marketing site** (`ui_kits/marketing/`) — landing, pricing and docs pages, built to §5 layout
   rules and the §9 "New page" prompt.
3. **Console app** (`ui_kits/console/`) — the signed-in application surface implied by §4's top bar,
   sidebar, tabs, table, modal and toast specifications.

---

## Index

| Path | What it is |
|------|-----------|
| `styles.css` | Global entry point — nothing but `@import` lines. Consumers link this one file. |
| `tokens/colors.css` | Foundation, ink, accent, gradient partners, semantics, gradients, dark theme, semantic aliases |
| `tokens/typography.css` | Type scale, weights, tracking, responsive step-downs |
| `tokens/spacing.css` | 4px spacing scale, radii, containers, breakpoints, control heights |
| `tokens/elevation.css` | `e0`–`e4` ink-tinted shadows |
| `tokens/motion.css` | Durations, easings, reduced-motion collapse |
| `tokens/fonts.css` | Webfont loading + family stacks |
| `components/components.css` | Component state styling (hover / focus-visible / active / disabled) |
| `components/core/` | Button, IconButton, Badge, Card, Rule, Icon |
| `components/forms/` | Field, Input, Textarea, Select, Checkbox, Radio (+ RadioGroup), Switch |
| `components/navigation/` | TopBar, NavLink, Sidebar (+ SidebarSection, SidebarItem), Tabs, Breadcrumbs, Pagination |
| `components/data/` | Table (responsive `stack` / `scroll` modes) |
| `components/feedback/` | Banner, Toast (+ ToastStack), Modal, EmptyState, Skeleton |
| `guidelines/*.card.html` | 22 foundation specimen cards (Colors, Type, Spacing, Depth, Brand) |
| `ui_kits/catalog/` | Preview catalog with a light/dark toggle |
| `ui_kits/marketing/` | Landing, pricing and docs pages |
| `ui_kits/console/` | Sign-in, overview, deployments, settings — click-through |
| `templates/marketing-landing/` | Template — marketing landing page (Design Component) |
| `templates/console-dashboard/` | Template — console dashboard shell (Design Component) |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills front matter, for use in Claude Code |

### Components

Full inventory, grouped by concern. Every family in DESIGN.md §4 is implemented.

**core** — `Button`, `IconButton`, `Badge`, `Card`, `Rule`, `Icon`
**forms** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `RadioGroup`, `Switch`
**navigation** — `TopBar`, `NavLink`, `Sidebar`, `SidebarSection`, `SidebarItem`, `Tabs`, `Breadcrumbs`, `Pagination`
**data** — `Table` — defaults to `responsive="stack"` (rows reflow into cards below `md`); pass `responsive="scroll"` with a `label` for comparison-heavy grids
**feedback** — `Banner`, `Toast`, `ToastStack`, `Modal`, `EmptyState`, `Skeleton`

Import them from the compiled bundle: `const { Button, Card } = window.GradientDesignSystem_46fafe`.

#### Intentional additions

DESIGN.md specifies styling, not a component list, so these four wrappers were added to make the
spec usable — each is a mechanical consequence of a rule in the document, not a new design:

- `Icon` — the spec sets icon sizes (16 / 18 / 48) and a hairline stroke but names no icon set.
- `IconButton` — §4 specifies an 8px icon gap and 44px touch targets but no icon-only control.
- `Field` — the label / helper / error scaffold §4 describes in prose, factored out so every control
  shares it.
- `Rule` — the dissolving rule is called the system's signature element; it needed a component.

---

## Content fundamentals

**Voice.** Plain, declarative, engineering-adjacent. The system explains itself by stating the rule
and the reason, in that order: *"Space is the primary grouping mechanism; borders are the last
resort."* Assertions, not invitations.

**Person.** Second person for instructions to the reader ("Copy this file into your project root"),
third person for descriptions of the system ("Dividers do not terminate; they fade out"). First
person plural is avoided — the system has no personality to project.

**Casing.** Sentence case everywhere: headings, buttons, labels, table headers (which are then
uppercased typographically by the `overline` style, never in the copy itself). Title Case appears
only in proper nouns and token names.

**Buttons and labels.** Label the action that happens: "Save changes", not "Submit". "Delete
environment", not "Confirm". "Start free", not "Get started now".

**Length.** Card descriptions run one sentence. Banner bodies run one or two. Marketing paragraphs
cap at three sentences and 65–75 characters per line. If a sentence needs a semicolon and a comma,
split it.

**Numbers.** Always concrete and always in mono: "42s", "1.4 TB", "174 tokens", "8% lightness
delta". Vague quantifiers ("blazing fast", "dramatically fewer") do not appear.

**Punctuation.** No exclamation marks. Em dashes for asides, set tight. Ellipsis only in build
output. Serial commas.

**Emoji.** Never — not in UI copy, not in docs, not in commit-style strings. Status is carried by an
icon plus a word ("Failed", with a danger dot), never by a glyph standing alone.

**Error and empty copy.** State what happened, then what to do. *"Module not found:
./tokens/colors.css — the import path changed in a91f3c2."* Empty states name the trigger that will
fill them: *"Push to any branch and a preview URL appears here."*

**Marketing tone.** Confident and quiet, in the same register as the visuals: *"A design system that
never raises its voice."* Claims are constraints, not superlatives.

---

## Visual foundations

**Mood.** A well-lit room at midday, not a stage with a spotlight. Quiet, spacious, engineered.
Hierarchy is carried by space and weight; colour volume is never the mechanism.

**Colour.** Cool neutral base — violet-leaning greys (`canvas #F7F7FB`, `surface #FFFFFF`,
`surface-sunken #F1F1F7`). A single accent (`accent #5B4FE9`) covering primary action, link, active
state and focus ring. Four ink values, no opacity-based text. Semantics come in pairs: a solid hue
for text and icons, a `*-soft` tint for backgrounds. Two colours — `haze #C9D8F2` and `ember
#F5D9C8` — exist *only* as gradient endpoints and never as flat fills. Nothing outside this palette
is introduced; pure `#000` and `#FFF` are never used for text.

**Type.** Bricolage Grotesque for display (weight 500, used at most twice per page — typically
once), Inter for everything else, IBM Plex Mono for numbers, code, shortcuts and the uppercase
overline. Weights 400 / 500 / 600 only; no 700+, no italics outside quoted material. Negative
tracking scales with size (≥24px gets it, ≤14px does not). Measure caps at 72ch for body, 40ch for
display. Numeric columns use `tabular-nums`.

**Spacing.** 4px base, scale steps only. If a value is not divisible by four, it is a bug. Related
elements at ≤`space-4`, unrelated at ≥`space-10`; inner-to-outer ratio on any container at least 1:2.
Section gaps run `space-16` default, `space-20` on marketing, `space-12` in dense views.

**Backgrounds.** No photography, no illustration, no repeating pattern, no texture, no grain. The
canvas is either flat `canvas` or `gradient-veil` — a 160° three-stop drift from cool paper through
faint blue to the barest warm tint, all within an 8% lightness band. Hero content sits over
`gradient-halo`, an ambient radial glow anchored at 25% from the upper left. Light always enters from
the upper left and drifts faintly warm on its way out; never the reverse. Full-bleed imagery is not
part of the system — where a product photo would go, the system puts space.

**Gradients.** Five, each with exactly one job: `gradient-veil` (page canvas, hero, large panels),
`gradient-surface` (cards at elevation 3+), `gradient-accent` (primary buttons *only* — never a
card, header, background or text fill), `gradient-rule` (the dissolving divider), `gradient-halo`
(ambient glow). Two stops, three at the absolute limit. No rainbow, multi-stop or animated
gradients, and never a gradient behind body copy.

**The dissolving rule.** The signature element. Dividers do not terminate — they fade to transparent
at both ends, so structure exists without hard edges. `space-16` above and below at full size; the
rule sits in the middle of its own breathing room. Tabs use one as their track; card footers use one
as their separator.

**Borders.** One hairline (`#E4E4EC`) and one stronger variant (`#D3D3E0`) for focus and active
rules, always 1px. Space is the primary grouping mechanism; a border is what you reach for after
space has failed. Bordered containers are never nested — an inner block becomes `surface-sunken`
instead.

**Corner radii.** 5 (checkbox, tag) / 8 (nav item, chip) / 10 (buttons, inputs — the default) /
14 (cards, panels) / 18 (modals, sheets) / full (pills, avatars, switches). Nested radius = outer
radius − padding, floored at 5px. Media inside a card clips to a 13px inner radius.

**Cards.** `surface`, 1px hairline, 14px radius, 24px padding, elevation `e1`. At elevation 3+ the
fill becomes `gradient-surface`. Interactive cards hover to `e3` with `hairline-strong` and a −2px
lift over 200ms. Title at `h3`, description at `body-s` in `ink-muted`, footer separated by a
dissolving rule.

**Shadows.** Tinted with the ink hue `rgba(22,22,29,·)`, never black — black turns the violet base
grey and muddy. Every elevation above 0 pairs a tight ambient shadow with a wide diffuse one: `e1`
resting cards, `e2` primary buttons, `e3` popovers and hovered cards, `e4` modals and toasts. At most
two elevation levels visible per viewport, overlays excluded. Inner shadows are not used; wells are
expressed as `surface-sunken` fills instead. In dark mode shadows stop reading, so elevation becomes
a 1px inset top highlight — `inset 0 1px 0 rgba(255,255,255,0.06)` — plus a lifted background tint.

**Transparency and blur.** Two places only: the sticky top bar (`surface` at 80% with a 12px
backdrop blur) and the modal scrim (`#16161D` at 32% with a 4px blur). Text is never set on a blurred
surface, and content is never faded to convey state — that is what `ink-muted` is for. There are no
protection gradients; overlaid text is not part of the system because full-bleed imagery is not.

**Animation.** Four durations, two easings: 160ms `cubic-bezier(0.2,0,0,1)` for hover, focus and
colour; 200ms same easing for dropdowns and tooltips; 280ms `cubic-bezier(0.16,1,0.3,1)` for modals
and drawers; 320ms for page transitions. No bounce, no spring, no overshoot. Travel never exceeds
8px. Everything collapses to opacity-only under `prefers-reduced-motion`. The only looping animation
in the system is the skeleton shimmer (1.4s), which holds static when motion is reduced.

**Hover states.** Solid accent surfaces *flatten* — the gradient resolves to `accent-hover` and the
shadow steps up a level. Secondary and ghost surfaces fill with `surface-sunken`; secondary also
strengthens its border. Cards lift 2px. Links darken to `accent-deep` and gain an underline at 3px
offset. Nothing changes opacity on hover, and nav links never underline.

**Press states.** Colour deepens to `accent-deep` (or 12% darker for destructive), the element moves
`translateY(1px)`, and the shadow drops one level — pressed things sit closer to the page. No scale
transforms.

**Focus.** One universal two-layer ring — `0 0 0 2px canvas, 0 0 0 4px accent` — applied via
`:focus-visible` only, on every interactive element, and never removed. Destructive controls swap the
outer layer for `danger`.

**Disabled.** Primary and destructive surfaces drop to 38% of their fill and lose their shadow;
secondary, ghost and link go to 45% opacity. Disabled inputs go `surface-sunken` with `ink-faint`
text and `cursor: not-allowed`.

**Layout.** 12 columns, 24px gutter (16px below 768px). Content max-width 1200px, wide container
1440px, prose column 720px. Page padding 24 / 40 / 64px. The top bar is the only fixed element;
sidebars are sticky within their own column, and nothing else is pinned. Mobile-first, every query a
`min-width`. Touch targets 44×44px minimum with 8px between neighbours.

**Imagery.** There is no photographic or illustrative style, because the system uses none. Empty
states may take a monochrome line illustration — never a stock graphic, never colour. Product
screenshots, when a consumer supplies them, sit inside a card at `e3` and clip to the 13px inner
radius; nothing is overlaid on them.

---

## Iconography

**No icon set was supplied.** DESIGN.md specifies icon *sizes* (16px in dense UI and buttons, 18px
in banners and toasts, 48px in empty states), a hairline visual weight and monochrome treatment, but
names no library and ships no SVGs, no icon font and no sprite.

**Substitution — please confirm.** The system uses **Lucide** (ISC licence) at `strokeWidth: 1.5` on
Lucide's 24px grid. It is the closest available match to the specified weight: outline-only, round
caps and joins, geometric, no fills. **If Gradient has its own icon set, send it and the substitution
goes away.**

**Packaged, not fetched.** The 31 glyphs in use are inlined in the `GLYPHS` map inside
`components/core/Icon.jsx`. There is no CDN request, no network dependency and no runtime fetch —
icons render offline and on first paint. Adding a glyph means pasting the inner markup of its Lucide
SVG into that map under the same Lucide slug; call sites never change. An unpackaged name renders an
empty box and logs a console warning.

Rules in force wherever icons appear:

- Monochrome only. Icons take `ink-faint` at rest, `ink` when their row is hovered, `accent` when the
  item is active, and the semantic hue inside banners and toasts.
- Stroke weight stays 1.5px at every size; icons are never filled and never two-tone.
- An icon never carries meaning alone. Status pairs an icon or a dot *with* a word.
- **No emoji, anywhere.** No unicode glyphs used as icons either — the two exceptions are the ⌘
  symbol in keyboard shortcuts and the ✓ / ✗ marks inside mono build-log output, both of which are
  text, not iconography.
- Decorative icons render `aria-hidden`; meaningful ones require a `label`.

Glyphs packaged (31): `arrow-right`, `bell`, `check`, `chevron-down`, `chevron-right`,
`circle-alert`, `circle-check`, `circle-user`, `credit-card`, `external-link`, `file-text`, `folder`,
`gauge`, `git-branch`, `github`, `info`, `inbox`, `layout-dashboard`, `mail`, `minus`,
`move-horizontal`, `panel-left-close`, `panel-left-open`, `plus`, `rocket`, `rotate-ccw`, `search`,
`settings`, `terminal`, `triangle-alert`, `x`.

**Logo.** None was provided, so none was drawn. Wherever a mark would go — top bars, the login card,
the footer, the homepage tile — the system sets the word **Gradient** in Bricolage Grotesque 500 at
−0.025em. See `guidelines/brand-wordmark.card.html`. Send a real logo and it drops straight in.

---

## Primary action budget

One primary button per view. A second `gradient-accent` surface in the same viewport means the
hierarchy is wrong — demote one of them.

**A persistent navigation CTA is exempt, conditionally.** A purchase or sign-up button that lives in
the sticky top bar sits outside the page's action hierarchy and does not count against the budget
**as long as it uses a secondary or lower-emphasis style**. Style it `gradient-accent` and the
exemption ends: the page now has two primaries. The same applies to a sticky mobile action bar.

Open items and known gaps are tracked in `backlog.md`.

---

## Substitutions and gaps

1. **Fonts.** No binaries were supplied. Bricolage Grotesque, Inter and IBM Plex Mono are all OFL
   and load from Google Fonts via `tokens/fonts.css`. **Send the font files** and that `@import`
   becomes local `@font-face` rules.
2. **Icons.** Lucide, packaged locally as described above. Flagged pending your own set.
3. **Logo.** Absent by design — wordmark only.
4. **Imagery.** No photography or illustration exists in the source, so none was invented. Cards that
   would hold media are shown without it.
