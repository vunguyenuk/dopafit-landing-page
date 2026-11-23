# Footer logo left anchor — 2026-11-23

User: keep the footer D at the left throughout the animation.

Reused existing `assets/figma/brand.js` functions `play`, `revealWordmark`, `schedule` and existing mark/letter keyframes. Footer-only overrides in `assets/content-2026-11-23/content.css` keep the mark at left:0 in every stage and disable the centred-to-left translation of `.dp-wordmark-track`. Individual letters still reveal sequentially and the existing visible-only loop remains. Header retains its centred D sequence.

Checked desktop 1440×900 and mobile 390×844: mark, wordmark and complete stages have left:0; wordmark expansion translation is disabled only for the footer. No runtime or asset errors.
