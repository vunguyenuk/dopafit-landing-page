# Single-sentence scroll sequence and looping logo

## User corrections

- Latest text instruction: the four lines should not all remain shown. Use the supplied video’s one-phrase-at-a-time presentation.
- Logo must repeat its full D → wordmark sequence.
- The previous completed review changes remain:57 selected4–5 editorial ratings from Excel sentiment, no visible estimate labels,24px card radius, opposite column movement. No new review edits in this follow-up.

## Text source and implementation

Reference: unchanged user video recorded in `../text-scroll-2026-11-23/reference.mp4`,736×414/30fps/7.338005s. Contact/detail sheets and hash are in that folder. Only a video is supplied; no source JS accompanies its glyph effect. This update is an explicitly requested visual adaptation; timings below are manual matching values, not original source-code extraction.

`assets/vendor/skydive-hero-source.js` → `mount()` / `draw()` retains the captured Skydive `Eoe` enter/write/exit interval, `$I` easing, photo transforms, full pin duration, complete source exit and handoff. It now samples a sentence sequence0→3.58 from the same reading interval. `content.css` overlays all four rows in one grid cell; glyphs of noncurrent sentences have zero opacity and their row is hidden, so only the current sentence is visible during each reading hold. There is a short outgoing/incoming overlap at phrase changes, matching the reference; no persistent dim copies of the other sentences.

Per-sentence local phase: incoming glyphs sweep left→right over .22 sequence units with .18 per-glyph span, then hold white; outgoing sweep starts at .72 with .24 spread and .20 span. Final sentence ends the reading interval at local .58, so it fully settles before the existing source exit. Accent, glow, glyph scale, word wrappers and Vietnamese grapheme segmentation reuse the adapter from the immediately previous video update. Whole-row shrinking/dimming and the cumulative34px read lift are removed by this explicit correction. The source34px entrance and44px exit displacement remain.

Photo layout preservation: although the displayed text uses one grid cell, the surrounding photo exclusion envelope is measured as the previously accepted four-row box (desktop1.9em/mobile3.1em per row, or taller wrapped text). This keeps the accepted surrounding photo spread and sizes. No new image, rotation or perspective treatment. Reduced motion presents all four readable sentences statically with no moving glyphs or added scroll.

## Logo loop

`assets/figma/brand.js` → `schedule()` / `start()` retain the actual source `.arrive` D animation and official SVG letter-reveal blocks. The D remains centred at the start; only the wordmark expansion retreats left. The final T animationend commits the original official logo, holds it2400ms, then schedules the next complete D sequence. The hold is a user-requested loop pacing estimate; source mark duration/stagger/easing are unchanged.

IntersectionObserver tracks the stable logo wrapper separately for desktop/mobile header and footer. Offscreen logos and hidden documents clear the pending hold timer and pause the active source/letter animations together using `.is-loop-paused`; they resume when visible. No global interval or animation clock runs on invisible logos. Hover/focus may replay a completed visible mark, and clears its pending loop timer. Reduced-motion and existing motion=off mode show the static original wordmark without timers. `data-brand-cycle` records actual starts for QA.

## Verification

`validation.json` records desktop1440×900/mobile390×844: all four full-white sentence holds individually, exactly one visible row at each hold, fixed shared centre, unchanged sentence text, left→right partial entry, frozen text when scroll stops, exact reverse samples, initial hidden copy, completed photo/text exit and visible next-section handoff, no horizontal overflow. Header/footer each repeat at least twice in a12.3s real-time sampling window, with centred D and visible full-wordmark hold. Footer cycles stop after scrolling offscreen. The existing visibilitychange handler is tested through a temporary document.hidden override; it is lifecycle-handler coverage, not a claim of a real background-tab CDP capture. Reduced motion verifies four static sentences and a nonlooping official logo. No JS exceptions or failed asset requests.

Screenshots capture every sentence, phrase transition, final handoff and footer state. These supersede the former four-row screenshots for the requested text presentation. Earlier reference folders retain the history/provenance; their older four-row visibility assertions are not current expectations.
