# English landing page and bounded typography — 2026-11-25

User scope: keep normal typography on large displays, shorten/constrain the long headings, and translate the whole landing page, including its app screens, into English. This supersedes the previous Vietnamese-only copy request. No design or motion replacement.

## Typography

- `assets/figma/typography.js`, `apply()`: removed the unbounded `84.994 * innerWidth / 1920` branch for the training-plan heading. Peer headings now share the existing 40–64px physical size rule.
- Heading widths have physical maxima and wrap at word boundaries. Removed the obsolete `white-space: nowrap; width: max-content` override in `typography.css`.
- Page copy retains its accepted design size below 1920px and stops growing beyond that width. The source stage transforms still fit the layout. App screen type remains attached to its device and scales with the device, rather than being independently resized.
- Intro title/body stop at 84.994px/24px. Review typography also has physical caps. Header/footer remain 14–16px.
- Footer fine print is placed 32px below the lowest column, avoiding a collision with the privacy link after localization.

## English content

- Literal translation of the existing Figma-mapped copy in `index.html`, `content.js`, `landing.js`, `mobile.js`, and `orbit-ui.js`; labels, buttons, FAQ answers, alt text, dialog and accessible names included.
- `assets/en/reviews-data.js`: translations of the same 57 selected workbook rows. Original text/title, source row and pre-existing rating provenance are retained; no new authors, dates or ratings were introduced.
- English title/description, HTML language, Open Graph locale, structured data, and social-preview artwork. Production URL remains unset, as before; no domain was guessed.

## Native app artwork

- `assets/en/ui-translations.json` records each original image, text region, English label and typography. `scripts/render-english-assets.cjs` renders only UI labels over the original screen artwork, preserving the original photographs, illustrations, dimensions and panel locations. Background-only regions are sampled where appropriate. Reviewable PNG working renders are under `rendered/`; served assets are lossless WebP.
- The four existing focus clips are screenshot holds. English versions preserve each clip's original duration and 710×1534 output dimensions. The existing crossfades, focus outlines and scroll controller are reused. These are localized artwork, **not newly recorded interactions from an English build of the app**.
- `assets/intro/exercise-screen.js`, `loadExerciseArtwork()`: existing native display canvas, live hammer-curl footage, segmented control and bottom navigation translated in place. No changes to its exercise video, glass shader or 3D motion.
- `scripts/render-english-posters.py` opens the existing `assets/intro/dopafit-intro.blend`, changes the screen texture to the same English artwork, and renders the original frame 0/60 fallback poses. No reconstruction or new pose values.
- `calendar-renderer.js`, `mountCalendar3D()`: English month/day textures embedded in a copy of the same Blender export using `scripts/build-english-calendar.py`. All non-image buffer hashes, node transforms, meshes, shape keys and animations are verified unchanged (`calendar-integrity.json`). Clip timing, camera and lighting are unchanged. The original English January artwork is retained as the non-WebGL calendar fallback.
- Asset remapping is recorded in `asset-map.json`; original source assets remain intact.

## Validation

- Browser checks at 390, 1440, 1920 and 2560 CSS pixels: `qa/validation.json` and PNG captures. No horizontal overflow or JavaScript/resource errors. Major desktop headings remain approximately 64px across the three desktop widths.
- All four native tracking screens, source orbit states and reduced-motion fallback inspected.
- Source and translated artwork OCR: `ocr-source.jsonl`, `ocr-history.jsonl`, `ocr-english.jsonl`. Spot-checking supplements OCR because dates, numbers and tiny UI glyphs can produce false positives.

- Final full-page checks: `qa/final-flow.json` confirms calendar 3D readiness, reverse native tracking focus (3 → 2 → 1 → 0), intro video resumption, footer column clearance, and no JavaScript or HTTP resource errors at 1440/2560px plus mobile overflow checks.
- Final full-meaning exercise heading (“in one app” included) stays on two lines at 1440 and 2560px without overflow (`qa/heading-final.json`). Final visual captures: `verified-exercise-heading-*`, `verified-calendar`, `verified-reviews`. Temporary Chrome profiles removed from the project.
