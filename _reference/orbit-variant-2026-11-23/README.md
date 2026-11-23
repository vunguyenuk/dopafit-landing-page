# Orbit layout comparison — 2026-11-23

Request: enable/disable the team's alternative layout as one option: video + recovery on the left, set logging + strength progress on the right, clockwise ring progression.

## Implementation and source

- `assets/figma/orbit-variant.js`: shared native button (`role="switch"`), default on, remembers the explicit on/off choice in `localStorage` (`dopafit-orbit-team-layout`). The visible label is “Đổi bên nội dung”. Storage failure keeps the in-memory switch usable.
- `assets/figma/orbit-scene.js`: `setVariant()` snapshots accepted outer-box coordinates after the existing placement code, then reflects only each outer box's x coordinate about the existing Figma ring centre (969 design px). Images, videos, text and app screen pixels remain upright. Off restores captured x coordinates; side-dependent offsets and existing `placeZoom()` fit are recalculated. Scene duration, source clock, tool order and app UI interaction functions are retained.
- Existing motion source is `skydive-com-2026-11-17T07-40-36-989Z/assets/main-goXeaETJ.js`; extracted `SH()` reveal schedule and the `mps()` side-panel opacity/translation block remain in the scene/CSS. No replacement reveal animation was introduced.
- `assets/figma/orbit-ring.js`: reuses its measured Figma half-circle/icon geometry and existing SVG reveal mask. The optional direction uses the positive screen-coordinate angle and removes the mask's Y reflection; off restores its original counter-clockwise mask. Source order remains video → recovery → set log/rest → strength, which now travels clockwise around the mirrored icons. Existing 28° lead, dash sizes and timings are unchanged estimates from the previous implementation.
- `assets/mobile/mobile.js`: keeps the accepted single-panel mobile layout, reflects compact figure icons using the clone's original inline coordinates, and shares the same switch/state. UI fit reserves the actual caption/heading space after adding the control so panels stay inside the viewport.
- `assets/figma/orbit.css`: native switch appearance, 14px physical text / minimum 40px control height, visible keyboard focus. Desktop control is anchored below the rendered heading with inverse compensation for existing canvas/stage zoom. It does not affect scene geometry or scroll distance.

Header, footer, intro phone, hero, fan and other section sources are outside this change.

## Verification

Browser checks and screenshots are recorded alongside this file after validation. Tests cover both modes, exact outer-box restoration, clockwise slot order/reverse scroll, unchanged scroll position on toggle, native click/Space activation, stored state after reload, tablet/mobile fitting and reduced-motion side switching.


Result: passed in local headless Chrome at 1440×900 and 1024×768; all four mobile slots also fit at 390×844 and 320×568. The short mobile viewport uses compact orbit-only spacing/type to preserve room for the switch and native UI. Entry/end/next-section screenshots were inspected. No runtime exceptions or HTTP resource errors were recorded.

Clockwise arc fractions for the four source slots: 0.0777778 → 0.256980 → 0.465497 → 0.609406; reverse scrolling returned through the same fractions. Off → on → off restored every tested outer panel rectangle within 0.1 physical px. Toggling kept scrollY unchanged and scene progress within 0.00001 (fractional layout rounding). Native pointer click, Space key activation, and stored state on reload passed. Reduced-motion validation checks side switching only; existing static scene geometry is retained.
