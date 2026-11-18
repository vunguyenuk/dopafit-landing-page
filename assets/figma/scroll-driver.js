/* Smooth-scroll block copied from the supplied dev-dopafit-app/index.html.
   DopafitScroll exposes the same driver to feature controls and the frame scheduler. */
(() => {
  const reduce={matches:matchMedia('(prefers-reduced-motion: reduce)').matches||new URLSearchParams(location.search).get('motion')==='off'};
  /* ---------- Smooth scroll ---------- */
  let lenis = null;
  if (!reduce.matches && typeof window.Lenis === 'function') {
    lenis = new window.Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true });
    const loop = (time) => { lenis.raf(time); window.DopafitScroll?.flush?.(); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }
  // Lets preview tooling jump to a position without fighting the smoothing.
  window.dopafitJump = (y) => (lenis ? lenis.scrollTo(y, { immediate: true, force: true }) : scrollTo(0, y));
  const scrollToY = (y) => {
    if (lenis) lenis.scrollTo(y, { duration: 1.3 });
    else scrollTo({ top: y, behavior: reduce.matches ? 'auto' : 'smooth' });
  };
  window.DopafitScroll={lenis,scrollTo:scrollToY};
})();
