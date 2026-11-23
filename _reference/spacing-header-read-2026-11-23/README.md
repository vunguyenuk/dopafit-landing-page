# Spacing, header alignment and sentence reading — 2026-11-23

Requests: orbit overview needs breathing room; header/menu/logo/CTA need centring and equal CTA edge padding; centred sentences change too quickly. Correction: add actual space, do not shrink accepted UI/cards/model.

## Final orbit correction (supersedes first spacing attempt)

`assets/figma/orbit-scene.js` retains the pre-spacing fit bounds, 1.30 centre scale, active tool zoom and 1.12 overview panel scale. Native card dimensions and typography are restored. Comparing body and every panel rectangle against `_reference/orbit-variant-2026-11-23/validation.json` confirms width/height within 0.15 physical px at 1440×900 and 1024×768. Active tool UI sizes also match the pre-spacing captures.

Extra overview space is positional: 160 design px below the heading, 192 design px between the rest/strength groups, and 32 design px outward separation from copy (16 below 1200px viewport width). The larger composition travels vertically during the existing 1.1-viewport together hold so the lower UI can be read at its original size. The title naturally leaves the top as the viewer advances down the taller composition. No new scroll tail or scale-to-fit reduction. The overview content translation reuses the existing source panel translate duration/easing. Clockwise option and reverse scroll are preserved. Single-tool geometry stays unchanged.

At 1440×900 the rest/strength groups now have about 42px of clear vertical space; previously their overview rectangles overlapped. At 1024×768 the gap is about 47px. Full-size snapshots at start/middle/end of the overview are included.

## Header and reading fixes retained

- `assets/figma/brand.css`: height follows the grid row, equal fractional side columns around the centred logo, 12 physical px top/right/bottom CTA insets. Native 40px CTA and 15px navigation sizing stays. Fixed host includes the taller row for the existing hide transform. Logo animation unchanged.
- `assets/vendor/skydive-hero-source.js`: accepted glyph wave/source phase parameters retained. Adapter adds 0.8 viewport height per sentence only inside the reading interval; four sentences add 3.2 viewport heights, total scene 620svh. Entrance, full source exit and handoff retain their original travel. This reading allocation is an implementation estimate for slower pacing, not extracted from the video.

## Source and validation

Existing source: `skydive-com-2026-11-17T07-40-36-989Z/assets/main-goXeaETJ.js`; orbit `SH()` schedule and `mps()` panel translation, hero `Eoe` phase easing and exit boundary remain. No new reveal concept.

`validation.json` records header/read assertions and the superseded first spacing attempt. Use `fullsize.json`, `active-validation.json`, `tablet-final.json` and the `fullsize-*` images for the FINAL orbit correction. The earlier `orbit-team-*`/`orbit-original-*` reduced-size images have been removed to avoid confusion.

Browser checks: 1440×900, 1920×1080, 1024×768 desktop; 390×844 reading. Header centres and equal 12px insets pass. Each sentence remains individually readable, reverses to the same sentence, and complete exit hides all hero photos/copy before the main content is revealed. Both orbit variants retain all active slots, reverse correctly, and release into the next section. Runtime/network checks recorded zero errors.
