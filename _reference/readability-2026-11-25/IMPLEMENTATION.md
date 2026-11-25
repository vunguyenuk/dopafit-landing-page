# Requested readability and iPhone mockup corrections — 25/11/2026

Scope: user screenshots11:50/11:50:57/12:03. Existing site at127.0.0.1:8102; no deployment. Adapt/Typeset applied to requested typography. No hero/fan/camera/photo or global redesign.

- `assets/content-2026-11-23/content.css`: FAQ questions32→28 design px; compact20→18px. Existing accordion rows/plus icons unchanged. The later content stylesheet was overriding typography.css.
- `assets/figma/typography.js`: physical orbit descriptions16–18px (previous18–20), titles20–22px (previous21–23), laptop→2K. Existing zoom normalization retained. Measured descriptions16px at1440px viewport, not the larger pre-transform computed value.
- `assets/figma/orbit-ui.js`, `goalTpl`: recreated this one damaged phone presentation with live SF text and inline vector symbols in the existing390×844 art. CSS bezel/status/navigation replace the raster phone background and cropped icon sprites. Native example numbers722/17/303/1708/47.5 and1/7,0/7 remain copied from Figma211:1679, `assets/orbit-ui/strength-reference.png`. Chart uses the unchanged English reference bitmap cropped to its original chart; no new chart samples/results.
- Blank unlabeled source card omitted. Body-composition metric cards complete within the scroll area. Original source values and labels preserved. The phone is an illustrative presentation, not a new working Health integration.
- Existing source scroll clock/reversible smoothstep remains. Inner travel now measures scrollHeight minus viewport height (527–528px after font rounding), replacing the manual720px crop distance. No extension of source scene duration.
- Added cache versions for changed files inindex.html.

## Validation

Native Chrome CUA + DevTools UI on the local preview.390×844 and1440×844 emulation, not a real phone or Safari.390FAQ measured18px, no page horizontal overflow.1440FAQ computed28designpx; orbit body physical16px; no page horizontal overflow. Phone start/reverse and final chart/Health/metrics/tab states inspected; final scroll-528px desktop, -527px mobile. No old blank card or clipped sprite tab symbols in final presentation. JavaScript syntax and diff whitespace checks pass.

Mobile FAQ was opened via DOM state for layout inspection; attempted AX disclosure click did not produce an observable close, so this is not claimed as a successful physical accordion tap-through. FAQ handlers/semantics are unchanged. Native browser screenshots include DevTools and occasional compositor white padding; not pixel-parity evidence. `strength-desktop-end.png` was replaced after correcting the QA target from sourceSH progress to normalized scene.progress; no implementation motion changed for that correction.

Evidence:faq-mobile-390.png,faq-desktop-1440.png,strength-mobile-390-end.png,strength-desktop-start.png,strength-desktop-end.png. Initialfaq-before.png is a mispositioned calendar capture, not a same-viewport FAQ comparison. Extension resource errors were visible in the user's Chrome; no blanket zero-console-error claim.
