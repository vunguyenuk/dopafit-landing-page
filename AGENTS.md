# Dopafit landing page — persistent project instructions

## Mandatory fidelity rules from the user

- Treat the supplied Figma design and the reference folders in this project as the source of truth.
- Do not invent, reinterpret, redesign, or creatively adapt the UI or motion. Change only what the user explicitly asks to change.
- Reuse the actual relevant code from the supplied reference folders. Do not replace source animation with a newly invented approximation. Record the source file and extracted function/block so its origin can be reviewed.
- Preserve the previously accepted UI, card geometry, spacing and layout unless the user explicitly requests a specific adjustment.
- Hero cards stay upright: NO rotate, tilt, spin or new perspective treatment.
- Hero must follow the Skydive concept and source sequence: floating messy cards; gradual outward spread; only then reveal the copy; scroll progressively lights the words; finish the entire hero animation before the next section enters. Use a pinned scroll scene and preserve its complete scroll duration.
- Finish the source hero exit before section 2 enters: the previous heading and floating photos must not remain visible above the next section. Do not stop the source clock at exitAt; include exitSpan and finish the visible photo exit. End at the fade completion without an extra empty scroll tail.
- Use unique real photographs. No repeated photo within a section or between sections, and no AI-generated replacement photos.
- Section 1 photographs must depict the heading's pain points: inconsistent attendance, arriving without a plan, uncertainty about exercises/equipment/target muscles, and concern about incorrect technique or injury. Generic successful exercise/action imagery belongs to later feature sections, not this pain-point hero.
- Keep photographic lighting/colour treatment visually consistent with the supplied Pliability reference.
- Verify initial, middle, final and next-section transition states against the reference before reporting completion.

These instructions were explicitly requested by the user after rejecting repeated images, invented rotations and an animation that let the next section enter too early. Carry them forward in all subsequent work on this project.

- Hero-to-section-2 handoff must be continuous: remove any empty scroll tail after fade-out and pull section 2 into view immediately. Do not leave an all-black viewport between sections.

- Section 2 must enter gently and naturally after the hero exit: short eased upward motion tied continuously to scroll, no abrupt visibility switch, fast viewport-sized leap, spring or overshoot. Its fan/phone animation must be visible to the viewer rather than consumed behind the hero.

- Section 2 fan opens sequentially from left to right; alternate male and female athletes. Preserve natural green/lime accents found in the Pliability photography instead of globally desaturating them.
- Phone motion must be checked against the supplied video frame sequence: vertical rise near centre, yaw through frontal, then slow settling; do not add unsupported lateral flight, roll, pitch, scale flourish or bounce. Record any manually estimated motion values honestly.

- Use the user-supplied Radial Card Fan CSS motion for section 2: .95s, cubic-bezier(.2,.8,.2,1), .13s stagger, translate(-160px,90px)/rotate(-55deg)/scale(.5) → translate(0,0)/rotate(--r)/scale(1), opacity 1 at 65%. Trigger once when the fan is visible; preserve accepted final photo positions with outer slots. Do not replace it with the previous custom scroll interpolation.
