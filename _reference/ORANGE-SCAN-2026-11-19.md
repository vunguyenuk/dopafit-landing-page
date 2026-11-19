# Orange muscle reveal — 2026-11-19

User request: the orange region climbs too quickly at the end of the orbit section.

Source reused: the existing `assets/figma/orbit.css` `.orbit-body-active` clip-path and `.ui-body-scan` line/gradient (baseline commit `f3771ad`). Its existing provenance is the supplied dev `band` / `activate` / `.scan` effect, recorded in `assets/figma/orbit-ui.js`. No new artwork or scan geometry was introduced.

Cause: `[data-on=true]` launched a 1.2-second wall-clock transition with `cubic-bezier(.16,.84,.24,1)`, plus an independent scan animation. The orange reveal continued even while scrolling stopped and completed almost immediately after entering the together state.

Change: `orbit-scene.js` maps the existing together-state scroll range to the same bottom-to-top inset. The colour and lime scan share that progress and reverse together. The first 90% of the existing together range reveals the muscles, leaving the last 10% fully lit before release. This 90% distribution is a manual pacing adjustment requested by the user, not an extracted source value. No added scroll distance; SH tool thresholds, stage fit, exit translation, cards and phone remain unchanged. Mobile uses the same fraction of its existing together range. Reduced motion displays the final colour without the moving scan.

Validation: see `orange-scan-validation.json`. Browser checks cover desktop 1440×900 / 1512×600, mobile 390×844, paused scroll, progression, reverse and completed-state release.

Measured comparison at the same early together-state stop: the previous 1.2s transition advanced from 95.62% colour coverage to 100% while stationary; the new reveal stayed at 6.43% coverage until further scroll. At the mid-stop it stayed at 50.08%, and the reverse visit recovered exactly the same inset. Both desktop sizes passed stationary, reverse, pinned-geometry and release checks; mobile passed seven forward/reverse samples. JavaScript exceptions: zero.
