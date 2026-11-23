# SEO metadata and browser icon — 2026-11-23

## Source and implementation

- Title and description: exact Vietnamese copy from the user's 21:07 screenshot; 57 and 183 characters respectively.
- Static metadata lives in `index.html`, available before JavaScript executes: title, description, Open Graph title/description/type/locale/site name, Twitter card/title/description, application name and robots preview directive.
- JSON-LD: Organization, MobileApplication and FAQPage. FAQ questions come from the six existing Figma HTML rows; answers are extracted from `assets/figma/landing.js`. No inferred review ratings, prices or store download URLs are added.
- `assets/seo/config.json` is the editable metadata source. Run `node scripts/update-seo.cjs` after copy or FAQ changes. This rebuilds only the marked SEO head block and leaves the page UI/motion intact.
- Production URL is pending user confirmation. Once confirmed, set `productionUrl` to the public HTTPS landing-page URL, then rerun the builder. It adds canonical, og:url, absolute share-image URLs, absolute schema IDs/logo/URLs and generates robots.txt plus sitemap.xml. No guessed domain or localhost URL is indexed as the canonical.

## Favicon and social preview

- `assets/brand/favicon.svg`: exact D paths extracted from the supplied `assets/brand/dopafit-wordmark.svg` group D, colored with the existing primary #B8F24A; dark square backing for legibility in both browser themes.
- `favicon.ico`: embedded PNG sizes 16, 32 and 48; SVG favicon and 180px Apple touch icon are linked in the head.
- `assets/seo/share.svg` / share.png: existing Figma wordmark and current hero heading, 1200×630. Ready for the confirmed domain.
- `render-assets.cjs` captures these code-native SVGs through local Chrome; it does not generate or alter photography.

## Validation

`validation.json`: checked static HTML and live Chrome at 1440×900 and 390×844. Exactly one title and description, title/OG/Twitter parity, six live FAQ questions/answers matching JSON-LD, icon URLs HTTP 200, ICO embedded sizes 16/32/48, no horizontal overflow or runtime/network errors. SVG/PNG previews visually inspected. Builder rerun is idempotent.

Reference documentation: https://developers.google.com/search/docs/appearance/title-link , https://developers.google.com/search/docs/appearance/structured-data/software-app , https://schema.org/MobileApplication . Schema markup alone does not assert search-result display eligibility.
