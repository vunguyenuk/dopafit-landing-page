# Orbit arc / icon light synchronization — 2026-11-23

User: the arc should reach each circular icon before that icon lights; the arc currently feels slow.

Reused `assets/figma/orbit-ring.js` mount/measure/update and its existing SVG circle mask, plus the unchanged Skydive tool reveal/lift/opacity schedule in orbit-scene.js and mobile.js. The target and accepted geometry/order/direction toggle remain unchanged.

- Arc transition shortened from 1.1s to .45s with the existing project ease-out curve (.22,1,.36,1), an estimated timing chosen for the requested faster response.
- `syncIcons` reads the mask's actually interpolated strokeDasharray on animation frames. The icon stays dark (brightness .28) until the leading edge reaches its circular boundary. Boundary uses its actual animated size, so the source lift/scale remains intact.
- Re-measuring preserves the current drawn arc rather than jumping to the previous destination. The first reveal also starts from zero.
- Same logic follows reverse scroll, both direction variants and mobile. The animation-frame follower stops after settling and pauses when the tab is hidden. Reduced-motion remains static without the pending dim treatment.

Validation: Chrome 1440×900 and 390×844, both toggle variants. Sampled forward and reverse transitions: every reached flag matches the drawn arc/contact threshold; the next active icon waits before lighting, then lights after contact; transition .45s. No runtime/network errors. Final desktop/mobile scene screenshots visually inspected.
