/* Title-only extraction from captured chande-settings~3a15b7d1.js.
   Values and CHANDE_SETTINGS_APPLY are copied verbatim. */
window.CHANDE_SETTINGS = {
  "titlefx.accent": "#85fc56",
  "titlefx.baseAlpha": 0.08,
  "titlefx.ditherSize": 1,
  "titlefx.start": 0.94,
}

window.CHANDE_SETTINGS_APPLY = (mod, config) => {
  for (const [key, value] of Object.entries(window.CHANDE_SETTINGS || {})) {
    if (!key.startsWith(`${mod}.`)) continue
    const path = key.slice(mod.length + 1).split('.')
    const last = path.pop()
    const parent = path.reduce((o, k) => (o == null ? o : o[k]), config)
    if (parent != null && typeof parent === 'object') parent[last] = structuredClone(value)
  }
}
