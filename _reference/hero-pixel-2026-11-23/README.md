# Hero pixel texture — 2026-11-23

Request: use the same pixel pattern as the large training-plan heading.

`assets/vendor/chande-pixel-ramp.js` contains the exact `BAYER` array, `ramps` cache and `ramp(cols,color)` function copied from the captured `assets/vendor/chande-title-source.js`. A byte-for-byte substring check verifies the extracted block. The original Chande title script remains unchanged.

The hero reuses that generator directly on native glyphs (no duplicate text). Cells remain 2px desktop and 1.5px mobile: 32 source columns × 8 rows display at 64×16px / 48×12px.

At 21:21 the user reported the fixed texture looked broken/checkered. Replaced that fixed-density overlay with the captured Chande `build` block's two backgrounds (`ramp(cols,fin)`, `ramp(cols,acc)`, accent/base gradient) and `paint` sweep formula `x=-2*b+p*(glyphWidth+2*b)`, rounded to device pixels. White→lime and lime→base ramps now travel together as each glyph's accepted entry progress advances; finished glyphs are solid white. The adaptation clips to existing native glyphs to preserve the accepted per-character wave/layout, instead of adding the source's separate line layers. Glyph widths are batched on resize/font readiness, not read between per-frame style writes.

The lime source ramp uses #b8f24a; final ramp #fff and base #161616. No rectangular backing or stroke. Existing sentence reading travel, scale, order, exit/handoff remain unchanged. Reduced-motion is static white.

Verified in local Chrome at 1440×900 and 390×844: native ramp is loaded, pixel highlight is visible, completed sentence holds white, reverse scroll restores highlight, no horizontal overflow. Reduced-motion removes texture. Zero runtime/network errors recorded.
