# Follow-ups: reference text sweep, centred D and review cards

## Supplied reference

- User video: `/Users/vunguyen/Downloads/From Klickpin.com- Bookmark these 14 Polished bridal shower decor ideas that bring together comfort beauty and useful ideas you will actually try.mp4`.
- SHA-256: `3c9e811810a30eb64c4b554a42b521618eb1b686051beb685854732e6aa92b88`.
- Original736×414,30fps,7.338005s. `reference.mp4` is an unchanged copy. Contact sheet samples2fps; detail sheets10fps, text crop x68/y140/w600/h130, second sheet starts2.5s.
- Observed sequence: “motion” → “makes” → “brands” → “stand out” → “sell faster” → “grow bigger” → final name. Incoming glyphs brighten left to right through an accent colour, briefly enlarge/glow, settle white; departing glyphs dim left to right. These are manual frame observations. No source HTML/JS accompanies this video.

## Adapted code and scope

- `assets/vendor/skydive-hero-source.js` → `mount()`/`draw()`: preserves original `Eoe` section timing, `$I` easing, photos, source card motion, full pin, exit and next-section handoff. Replaces only the pain-copy emphasis rendering with the requested video-style glyph sweep. The existing four Figma sentences, layout/font sizes and small upward pass remain.
- Word wrappers preserve normal Vietnamese word wrapping. `Intl.Segmenter('vi', {granularity:'grapheme'})` keeps each tone mark with its letter; NFC code-point fallback is used when unavailable. One visually hidden original sentence per row supplies accessible text; the glyph rendering is aria-hidden.
- Sampled from the same scroll read clock, not a timer: focus−.45→last-index+.18; glyph entry spread .34 focus units, individual span .20; exit spread .36/span .22. Accent is existing app primary#b8f24a, peaks at mid-entry then settles white. Max local scale1.14, glow10px; inactive/previous text retains the accepted small/dim treatment. These are manual visual matching values, not extracted source code or measured original easing.
- The reference’s changing full-screen background is not added: this request changes text animation inside the accepted hero. No new page layout, photos or scroll travel. A cached scroll sample and WeakMap of glyph style strings avoid idle text repaint/style writes. Reduced motion exposes all sentences in white without glyph scale/glow or upward movement.

## Other steering in the same task

- Logo: legacy D is centred in its reserved logo box (left50%, translateX−50%) throughout its existing animation. Only at the original `dp-sweep` completion does the existing official letter reveal start. `dp-wordmark-track` then retreats311.5046→0 SVG units over1s using the existing source easing;311.5046 places the actual Figma D bounds centre at x380 of the760-unit viewBox. The original SVG/path data, header/footer dimensions and O/P/A/F/I/T stagger remain unchanged. The hidden legacy mark resets to the centre immediately after completion, so replay cannot begin partway through a return transition. Values are an explicit user-requested positioning adjustment.
- Reviews: user explicitly requested removing visible estimate labels and showing only4–5 selections based on Excel comments. `reviews.js` now filters the existing editorial estimates ≥4:57 Vietnamese quotes (41 assigned5,16 assigned4). No low score is increased; all91 imported records and estimate provenance remain unchanged in data. No visible numeric/estimate label or extra section note. Accessible text retains the estimate basis; no App Store/Google Play score claim or rating structured data is introduced.
- Review radius24px reuses `.places-card` in `assets/figma/sections.css`; original card background, padding, type, columns and opposite scrolling remain.

## Validation

`validation.json` contains desktop1440×900/mobile390×844 checks: glyph emphasis and primary-colour sweep, exact reverse samples, hold on stopped scrolling, original sentences/word wrapping, initial/read/exit/handoff screenshots, no overflow; D starts centred and wordmark moves left only during expansion on both header and footer;57 selected reviews,4/5 lit-star masks,24px radius, absence of visible estimate labels, original opposite marquee directions; reduced-motion static text/logo; no JS exceptions or failed requests.

`logo-realtime-validation.json` samples actual wall-clock animation without seeking: centred legacy D, monotone left retreat during stagger, complete original SVG after T, stable completion. The animation-seeking screenshots are supplemental deterministic inspection frames, not timing measurements.
