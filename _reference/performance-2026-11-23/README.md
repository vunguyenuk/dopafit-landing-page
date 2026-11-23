# Landing page performance — 2026-11-23

## Measurement

Local Chrome, fresh browser pages at 1440×900 and 390×844, network cache disabled. Snapshot after the intro phone becomes ready plus 5 seconds; resource transfer includes media loaded by that point. Baseline and optimized runs use the same script and local server. These are cold-load resource/idle-main-thread measurements, not Lighthouse or field Core Web Vitals. Original 3D rendering quality, geometry, motion duration and viewport layout are unchanged.

`comparison.json` records 13.54→6.00MB desktop (-55.7%, 135→85 resources) and 13.91→6.81MB mobile (-51.1%, 151→105). Initial WebGL contexts are reduced from 2 to 1. This defers below-fold cost; the additional phone still loads when approached.

## Changes and sources

- Existing `assets/figma/phone.js` renderer/GLTF initialization and mobile `phone3d-mobile.js` callback are delayed until their host is within1200px of the viewport. The existing pose, materials, lighting and screen pipelines are reused. Desktop retains the last scroll state while waiting. No replacement animation.
- `assets/phone/recording-player.js` creates videos with preload:none; its existing warm/choose logic loads only the requested view when the tracking scene is near. Updates while far away retain the requested feature without fetching it. Existing last-good-screen crossfade stays.
- Imported below-fold HTML images use loading:lazy. Existing hero photos are assigned their original sources once the hero is within800px, early enough before its entry, rather than racing the visible intro on startup.
- Original intro posters were encoded as WebP quality92 with lossless alpha, original1248×1408 dimensions. Initial poster1150015→55470 bytes; settled poster1298243→66358 bytes. `exercise-screen.webp` is a lossless conversion of the exact768×1664 source PNG. Strength reference uses quality95 WebP, same1294×1084 dimensions,642436→90240 bytes; both HTML and CSS references use it. Original files are retained.
- Intro phone size is measured on ResizeObserver and reused for decoded video frames. Scroll changes translate only; video playback no longer asks for a fresh bounding rectangle on every frame. DPR/resolution unchanged.

## Verification

`flow-validation.json`: forward traversal and reverse on both viewports. Lower phone is absent on initial load and becomes ready before the active area; all14 original hero photographs decode; all four desktop tracking focus screens remain reachable; calendar model mounts; intro video pauses offscreen and resumes on reverse. No runtime errors or failed resource requests. Screenshots from both reverse handoffs visually inspected. `node --check` changed JS modules and `git diff --check` pass.

No source Blender files or accepted UI/motion layout were removed. Raw baseline/optimized resource lists provide request-level evidence. Remaining startup payload is primarily the visible 3D phone model, Three.js and required exercise video; desktop idle CPU is essentially unchanged, so this work does not claim a measured FPS gain.
