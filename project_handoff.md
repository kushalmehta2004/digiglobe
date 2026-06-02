# Digiglobe Portfolio — Full Project Handoff Summary

> **Purpose**: This document summarises everything that has been built in the Digiglobe portfolio website so that a new agent or developer can immediately understand the architecture, conventions, and current state of the project.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16.2.6** (App Router, Turbopack, TypeScript) |
| Styling | **Tailwind CSS v4** (utility-first, inline classes) |
| Animation | **Framer Motion** (`motion`, `AnimatePresence`) |
| Icons | **Lucide React** |
| Smooth scroll | **Lenis** (via `LenisScroller` wrapper component) |
| Custom cursor | `CustomCursor.tsx` component |
| Font loading | Local `@font-face` in `globals.css` + Next.js `next/font/google` for Plus Jakarta Sans |

---

## Project File Structure (Key Files)

```
src/
  app/
    globals.css           ← @font-face declarations, Tailwind theme tokens, CSS variables
    layout.tsx            ← Root layout: Plus Jakarta Sans via next/font, Lenis, CustomCursor, Nav, Footer
    page.tsx              ← Homepage (hero, work section, contact etc.)
  lib/
    constants.ts          ← ALL brand data: ProjectData type + every brand config + SMM post arrays
  components/
    ProjectModal.tsx      ← The modal shown when a work card is clicked. Contains all tab renderers.
    Nav.tsx               ← Top navigation
    Footer.tsx            ← Footer
    CustomCursor.tsx      ← Custom cursor
    HolographicGrid.tsx   ← Decorative canvas background
    ParticleCanvas.tsx    ← Particle canvas background
    LenisScroller.tsx     ← Lenis smooth scroll wrapper

public/
  brand-logos/            ← Brand logo PNG/JPG files (referenced in constants.ts)
  social-previews/        ← Social post preview images (used by legacy social[] array)
  shoot/                  ← Photo shoot images for Bayroute
  fonts/
    kiona/Kiona.ttf       ← Kiona font (used for Bunkout primary font)
    butler/Butler-Regular.otf ← Butler font (used for The Travel Library primary font)
  branding/
    Brand Style Guide bunkout.pdf
```

---

## Core Data Architecture (`src/lib/constants.ts`)

### `ProjectData` Type

Every brand card in the portfolio is defined by a `ProjectData` object. The key fields are:

```ts
type ProjectData = {
  title: string;              // Display name of the project
  category: string;           // Subtitle shown in the modal header
  web: { url, title, desc, gradient, meta[] } | null;   // Website tab data
  social: { type, copy, bg, link?, image?, video? }[];  // Legacy static social cards
  brand: {
    name: string;
    colors: string[];          // Array of hex values (up to 4)
    colorNames: string[];      // Human-readable names for each color
    font: string;              // Primary/header font-family name
    bodyFont?: string;         // Secondary/body font-family name (optional)
    style: string;             // Pipe-separated descriptors e.g. 'Modern · Cozy · Luxurious'
    logo?: string;             // Path to logo in /public (e.g. '/brand-logos/BUNKOUT.png')
    logoLink?: string;         // External link to full logo drive folder
    details?: string;          // Long brand description text
    tagline?: string;          // Short brand tagline
  };
  shoot?: string[];            // Array of image paths for photo shoot tab
  instaReels?: string;         // Google Drive folder URL for reels
  campaign?: { name, video, theme };  // Campaign video data
  smmPosts?: { id, name, type, link }[][];  // SMM carousel posts (array of posts, each is an array of images/videos)
  smmDriveLink?: string;       // Google Drive link for "view more" button
  tabs?: string[];             // Custom tab list for the modal (overrides defaults)
  magazines?: { name, link, id }[];  // Magazine editions for the Magazine tab
  conceptText?: string;        // Free-text concept description
  airbnb?: { url, title, desc, meta[] };  // Airbnb listing tab data
};
```

### Named SMM Post Arrays

Large Google Drive SMM carousels are pre-defined as named constants at the top of `constants.ts`, then referenced in the brand object:

```ts
export const BUNKOUT_SMM_POSTS = [ /* 12 posts */ ];
export const UTOPIAN_VILLAS_SMM_POSTS = [ /* 3 posts */ ];
// ...then in the brand object:
smmPosts: BUNKOUT_SMM_POSTS,
```

Each post is an **array of media items** (carousel slides):
```ts
{ id: 'googleDriveFileId', name: 'filename', type: 'image'|'video', link: 'fullDriveUrl' }
```

Images are served via Google's thumbnail CDN:
```
https://lh3.googleusercontent.com/d/{fileId}=w600
```

---

## The Modal System (`src/components/ProjectModal.tsx`)

### How It Works
- A `ProjectModal` component receives a `project: ProjectData` prop and renders all tabs.
- **Tabs are driven by `project.tabs`** — if `tabs` is set, those exact strings are used as tab labels and `activeTab` is initialized to `tabs[0]`.
- If `tabs` is not set, a legacy auto-detection system based on brand name kicks in.

### Tab Renderers
The modal renders different UI based on `activeTab`. Each renderer is a conditional JSX block inside the content area:

| `activeTab` (contains) | Renders |
|---|---|
| `"web"` or `"website"` | Browser mockup with gradient background, logo, title, desc, meta cards |
| `"airbnb"` | Same browser mockup style but with Airbnb coral gradient and SVG logo |
| `"social"` or `"social media"` | If `social[]` has items → legacy styled cards; else → SMM carousel grid (`smmPosts`) |
| `"brand"`, `"logo"`, or `"branding"` | Brand guidelines UI (see below) |
| `"magazine"` | Horizontal magazine cards with cover thumbnail + button |
| `"shoot"` | Photo shoot grid or SMM carousel grid |
| `"insta posts"` | Hyro-specific social post grid |
| `"insta reels"` | Drive folder link card |
| `"reel concept"` | Free text concept card |
| `"concept"` or `"campaign"` | Campaign video player or concept text |
| `"theme"` | Coca-Cola theme text |
| *(anything else)* | Generic placeholder card saying "content coming soon" |

> **Important**: The fallback placeholder runs when `activeTab` doesn't match any known prefix. The list of known prefixes is in the `CUSTOM TABS FALLBACK` block. If you add a new custom tab type, add its prefix to that exclusion list.

---

## Brand-Specific Branding Tab Implementations

### Bunkout — Custom Branding Tab
- **Condition**: `project.brand.name.toLowerCase() === "bunkout"`
- **Content**:
  - **Row 1**: Submark card (`/brand-logos/bunkout-submark.png`) + Wordmark card (`/brand-logos/bunkout-wordmark.png`) on white backgrounds
  - **Row 2**: Primary Font specimen (Kiona, `fontFamily: 'Kiona'`) + Paragraph Font specimen (Montserrat)
  - **Row 3**: Colour palette with 3 swatches (Green `#123E3F`, Beige `#C4A56F`, Ivory `#F7F8F8`)

### The Travel Library — Custom Branding Tab
- **Condition**: `project.brand.name.toLowerCase().includes("travel library")`
- **State variables used**: `ttlLogoView` (`"primary" | "submark" | "wordmark"`) and `ttlBgTheme` (`"dark" | "light"`)
- **Content**:
  - **Interactive Logo Showcase**: Left side has 3 selector buttons (01 Primary Logo, 02 Brand Submark, 03 Brand Wordmark). Right side is a live render panel with a Dark Navy / Ivory Light theme toggle. The logo is rendered using pure CSS + Butler font (not an image).
  - **Typography Specimens**: Side-by-side cards for Butler (header, rendered with `fontFamily: 'Butler'`) and Montserrat (body)
  - **Colour Palette**: Blue `#1D2439`, Gold `#D2BB95 + #A88F71`, Ivory `#F4F2F0`

### All Other Brands — Generic Branding Tab
- Shows: Brand details text block + a 4-column grid of: Logo & Identity card, Brand Colours card, Brand Typography card (`Aa Bb Cc` in `project.brand.font`), Brand Personality card

---

## Local Fonts (`src/app/globals.css`)

Two fonts are self-hosted locally in `/public/fonts/`:

```css
@font-face {
  font-family: 'Kiona';
  src: url('../../public/fonts/kiona/Kiona.ttf') format('truetype');
  font-weight: normal; font-style: normal; font-display: swap;
}

@font-face {
  font-family: 'Butler';
  src: url('../../public/fonts/butler/Butler-Regular.otf') format('opentype');
  font-weight: normal; font-style: normal; font-display: swap;
}
```

These are used inline via `style={{ fontFamily: 'Kiona' }}` or `style={{ fontFamily: 'Butler' }}` in JSX — NOT via Tailwind classes.

**Plus Jakarta Sans** is loaded globally via Next.js `next/font/google` in `layout.tsx` and is the default body font.

---

## SMM Carousel Component (`SMMPostCard`)

A self-contained sub-component at the top of `ProjectModal.tsx`. It:
- Receives a `post` (array of media objects), `postIndex`, `brandName`, `brandLogo`, `brandUrl`
- Manages its own `currentIdx` state for carousel navigation
- Shows chevron buttons on hover to navigate slides
- Shows dot indicators at the bottom
- Renders images via the Google thumbnail CDN URL pattern

---

## Brand Tab Configurations Summary

| Brand | Key in `PROJECTS` | Custom `tabs` |
|---|---|---|
| Durfshan | `durfshan` | `['Website', 'Social Media']` |
| Bayroute | `bayroute` | `['Concept', 'Shoot']` |
| Utopian Villas | `utopianvillas` | `['Website', 'Social Media', 'Airbnb Listing']` |
| Hyro Realty | `hyro` | `['AI Campaign', 'Social Media', 'Shoot']` |
| Bunkout | `bunkout` | `['Website', 'Branding & Logo', 'Social Media']` |
| The Travel Library | `travellibrary` | `['Website', 'Branding & Logo', 'Social Media', 'Magazine']` |
| Nogah | `nogah` | `['Social Media', 'Packaging']` |

All other brands use legacy auto-tab detection based on what data they have.

---

## Airbnb Listing Tab (Utopian Villas)

- Tab name: `"Airbnb Listing"`
- Detected by: `activeTab.toLowerCase().includes("airbnb")`
- Data: `project.airbnb.url`, `.title`, `.desc`, `.meta[]`
- Design: Same browser mockup as the Website tab but with an Airbnb coral gradient (`#FF385C` → `#050B1A`), SVG Bélo logo, and meta cards
- URL shown in browser bar: `airbnb.co.in/users/profile/1469222464763297439`
- Live link: `https://www.airbnb.co.in/users/profile/1469222464763297439?previous_page_name=PdpHomeMarketplace`

---

## Magazine Tab (The Travel Library)

- Tab name: `"Magazine"`
- Detected by: `activeTab.toLowerCase().includes("magazine")`
- Data: `project.magazines[]` — each item has `{ name, link, id }`
- Cover thumbnail served via: `https://lh3.googleusercontent.com/d/{mag.id}=w600`
- Design: Compact horizontal row cards (`flex-row`, `h-[160px]`) — cover on left (120px wide), name + description + "Read Magazine" button on right. Button uses brand Gold `#D2BB95` background with navy text. No scrolling needed.
- Brand colours used: Gold `#D2BB95`, hover border `#D2BB95/60`

---

## Key Conventions to Follow

1. **To add a new brand**, add its object to `export const PROJECTS` in `constants.ts`. Use the existing brands as templates.
2. **To add SMM posts from Google Drive**, create a new named constant array (like `BUNKOUT_SMM_POSTS`) and reference it in the brand object as `smmPosts: MY_POSTS`. Each post is an array of `{ id, name, type, link }` objects where `id` is the Google Drive file ID.
3. **To get Google Drive file IDs**, use `gdown` with `skip_download=True` and the folder URL. Example: `python -c "import gdown; gdown.download_folder('URL', skip_download=True)"`. File naming convention used: `Row X Post Y [a/b/c/...]` (the suffix letter is the carousel slide index).
4. **Custom tab names** are case-insensitive strings. The modal detects them via `.toLowerCase().includes(prefix)`. If a tab name doesn't match any built-in prefix, it falls through to the generic placeholder. Always add any new non-standard tab type to the exclusion list in the `CUSTOM TABS FALLBACK` block in `ProjectModal.tsx`.
5. **Branding tab has a conditional chain**: Bunkout check → Travel Library check → generic fallback. Add new brand-specific branding layouts by inserting an `else if` before the final `else`.
6. **Scrollbars are hidden** via the `.custom-scrollbar` CSS class (defined inline in the modal). The content area scrolls but hides the bar. Do NOT add `overflow-y-auto` to inner wrappers inside the content area — the outer container handles scrolling.
7. **The "View more of our work" button** is conditionally hidden for Bunkout: `project.smmDriveLink && project.brand.name.toLowerCase() !== 'bunkout'`.
8. **Fonts used in JSX** must be set via inline `style={{ fontFamily: 'FontName' }}` — Tailwind does not know about custom local fonts.

---

## What Still Needs Content (Placeholders)

The following tabs are configured but show the generic placeholder until content is added:

| Brand | Placeholder Tab |
|---|---|
| The Travel Library | `Branding & Logo` — **DONE** (custom interactive layout) |
| The Travel Library | `Social Media` — `smmPosts` not yet populated |
| Nogah | `Packaging` — no content yet |
| Hyro Realty | `AI Campaign` — no content yet |

To fill a placeholder tab, add the relevant data to the brand's config in `constants.ts` and add a renderer block in `ProjectModal.tsx` if the tab requires a completely custom layout.

---

## Git Repository

- **Remote**: `https://github.com/kushalmehta2004/digiglobe.git`
- **Branch**: `main`
- **Dev command**: `npm run dev` (runs on `localhost:3000`)
- **Build command**: `npm run build` — always run this to verify no TypeScript errors before pushing

---

## Recent Commit History (What Was Done)

The latest commit (`584414d`) on `main` includes all of the following work:

1. **Bunkout brand updates**: Custom colors, Kiona font, tagline, and branding tab with Submark, Wordmark, typography specimens (Kiona + Montserrat), and colour palette
2. **Bunkout SMM**: 12 posts (4×3 grid) fully populated with Google Drive file IDs. Post 11 has 10 carousel images, Post 12 has 8. "View more" button hidden for Bunkout only.
3. **Utopian Villas**: Custom tabs `['Website', 'Social Media', 'Airbnb Listing']`. Social Media uses 3-post SMM carousel (from `UTOPIAN_VILLAS_SMM_POSTS`). Airbnb tab implemented as a browser mockup with coral gradient and host profile link.
4. **The Travel Library**: Custom tabs `['Website', 'Branding & Logo', 'Social Media', 'Magazine']`. Brand updated to Butler font, navy-gold-ivory palette. Interactive branding tab with live logo renderer and theme toggle. Magazine tab with 2 editions in compact horizontal card layout. Magazine tab fits fully without scrolling.
5. **Local fonts**: Butler (`public/fonts/butler/Butler-Regular.otf`) and Kiona (`public/fonts/kiona/Kiona.ttf`) self-hosted and registered via `@font-face` in `globals.css`.
