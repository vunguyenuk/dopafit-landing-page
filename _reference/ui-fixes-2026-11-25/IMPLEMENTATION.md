# Follow-up UI fixes — 2026-11-25

Scope: English intro copy overlap, workout button artifacts, larger orbit captions at 2K, and integration glow rectangular backing.

- `assets/intro/intro.css`: retained the intro source motion and final phone position; widened desktop title/body boxes to 65% and centred them. Mobile heading uses 32–36px to retain two readable lines. No new animation.
- `assets/en/ui-translations.json`, workout job: replaced edge-sampled text-only fills for six controls with complete rounded control backgrounds at the original source bounds. Geometry taken from `assets/phone/recordings/journey.webp`; radii/fill values manually matched to the native screenshot. Chevron paths retain the same control purpose. `scripts/render-english-assets.cjs` supports these controls and selective regeneration (`ASSET_ONLY=workout`). Original photos and screen layout retained.
- `assets/figma/typography.js`, `apply()`: requested orbit caption sizes grow 25% from 1920 to 2560px and cap beyond that; other heading/copy rules unchanged. At 2560px measured body ~20px, feature title ~23px.
- `assets/figma/sections.css`, `.integrations-glow`: retained original `b3c7a.png` and scroll trajectory, added soft radial mask and screen blend so its near-black rectangular edge disappears. No asset substitution.
- Updated cache versions for changed styles/scripts and workout texture.

Validation: screenshot inspection + geometry checks at 821×451, 1440×900, 2560×1440, 390×844. Intro title/body do not overlap. Final mobile heading/body gap 35.6px. Final live WebGL workout screen inspected (`phone-workout-fixed.png`); no stripes across controls. Larger orbit copy and integration fade inspected (`orbit-2k.png`, `integrations.png`). No JavaScript or HTTP resource errors. Syntax and diff whitespace checks passed.


## Follow-up: shorter intro, full guide focus, readable laptop captions, strength UI

- Intro description shortened at the user's request; maximum width 40rem (640px at default settings), balanced wrapping. Verified 2560px and 390px: no overflow or proof overlap.
- Guide focus bounds in `journey-timeline.js` now end at normalized y=0.90, covering all English instructions while stopping above the native tab labels. Original focus projection, line drawing and source scroll controller retained.
- Orbit descriptions now have a physical 18px floor on laptop screens and cap at 20px at 2K; titles 21–23px. Laptop caption boxes widened outward, using the existing icon-relative layout. The guide starts after actual caption scrollHeight, avoiding text/video overlap. Stage fit bounds retain the prior phone height so increasing the strength phone does not shrink other panels.
- Strength phone wrapper increased from 340 to 390 design px (14.7%). Existing source before/after crop method and `setStrengthProgress` remain. The join stops before the duplicate 1RM value. English label origins moved inside the crop, old half-erased info glyph preserved, flat panel fills matched to the source.
- Fixed native bottom navigation uses original source icon pixels and DOM English labels. Two existing metric cards are completed below the crop using their source titles/counts (1/7 and 0/7); the inner scroll ends after these cards with space above the fixed tab bar. No extra content or chart data introduced. New local scroll extent 720px is manually fitted; same source clock/easing and reverse behavior.
- Validation: `final-followup-validation.json` (1440/2560px, both toggle layouts), `checked-strength.json` and screenshots for first/middle/final states. Captions 18/20px, no page overflow or JS/resource errors. Final video/text gaps >11px at 1440px and >54px at 2560px. Bottom metric cards verified entirely above navigation. Original images, source animation files and design references retained.
