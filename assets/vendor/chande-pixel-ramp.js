/* Shared pixel ramp for the hero text. Copied verbatim from the captured
   chande-title-source.js: BAYER + ramps + ramp(cols, color). Same 8×8 threshold
   pattern as the large training-plan heading; captured title script unchanged. */
(() => {
  'use strict';
  const BAYER = [0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22,
    3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21]
  const ramps = new Map()
  function ramp(cols, color) {
    const key = `${cols}|${color}`
    let url = ramps.get(key)
    if (url) return url
    const c = document.createElement('canvas')
    c.width = cols
    c.height = 8
    const g = c.getContext('2d')
    g.fillStyle = color
    for (let x = 0; x < cols; x++) {
      const t = (x + 0.5) / cols
      for (let y = 0; y < 8; y++) if ((BAYER[y * 8 + (x % 8)] + 0.5) / 64 < 1 - t) g.fillRect(x, y, 1, 1)
    }
    url = `url(${c.toDataURL()})`
    if (ramps.size > 200) ramps.clear()
    ramps.set(key, url)
    return url
  }

  window.DopafitChandePixelRamp=ramp;
})();
