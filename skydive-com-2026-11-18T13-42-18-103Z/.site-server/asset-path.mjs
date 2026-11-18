// Where a captured resource lives inside a replay.
//
// The rule is shared by the replay writer and the preview server: if they
// disagree by even one character the file is written in one place and looked
// for in another, which shows up as missing images.

import path from "node:path";
import crypto from "node:crypto";

export const EXTERNAL_PREFIX = "__external";

export function hashQuery(search) {
  return crypto.createHash("sha1").update(String(search)).digest("hex").slice(0, 8);
}

// Image CDNs and optimisers put the real identity in the query string:
// /_vercel/image?url=a.png and ?url=b.png are different pictures at one path.
// Fold the query into the filename so they cannot overwrite each other.
export function localAssetPath(pathname, search = "") {
  let relative = String(pathname || "").replace(/^\/+/, "");
  if (!relative || relative.endsWith("/")) relative += "index.html";

  const query = String(search || "").replace(/^\?/, "");
  if (query) {
    const extension = path.extname(relative);
    const base = extension ? relative.slice(0, -extension.length) : relative;
    relative = `${base}~${hashQuery(query)}${extension}`;
  }
  return relative.split("/").map(shortenSegment).join("/");
}

// File systems refuse names longer than 255 bytes, and some URLs carry a
// token far longer than that. Keep the start readable and hash the rest.
const MAX_SEGMENT = 140;
function shortenSegment(segment) {
  if (Buffer.byteLength(segment) <= MAX_SEGMENT) return segment;
  const extension = path.extname(segment).slice(0, 12);
  return `${segment.slice(0, 60)}~${hashQuery(segment)}${extension}`;
}

// Assets served from another host still belong to the page, so mirror them
// under a folder named after that host.
export function externalAssetPath(host, pathname, search = "") {
  return `${EXTERNAL_PREFIX}/${host}/${localAssetPath(pathname, search)}`;
}

// Content fetched with POST (GraphQL, form-style APIs) has no address of its
// own, so the request body's hash becomes part of the filename.
export function hashBody(body) {
  return crypto.createHash("sha1").update(String(body ?? "")).digest("hex").slice(0, 10);
}

export function postAssetPath(pathname, search, bodyHash) {
  return `${localAssetPath(pathname, search)}~post-${bodyHash}`;
}

// Written into every replay: where the page came from and which query-string
// variants of a path were captured, so the server can pick the right one.
export const INDEX_FILE = ".capture-index.json";

// Some pages never scroll the window: a box the size of the window scrolls
// instead, with the whole page inside it (app-style landing pages). Scrolling
// the window on such a page does nothing, so lazy content never loads and
// every measurement stops at the first screen. Runs in the page; remembers
// the box in window.__csScroller and returns its full height (0 = the window
// itself scrolls). Shared by the clone and by the studio's checks.
export const FIND_PAGE_SCROLLER = `(() => {
  window.__csScroller = null;
  if (document.documentElement.scrollHeight > window.innerHeight + 50) return 0;
  let best = null;
  for (const element of document.querySelectorAll("body, body *")) {
    if (!/auto|scroll|overlay/.test(getComputedStyle(element).overflowY)) continue;
    if (element.clientWidth < window.innerWidth * 0.95 || element.clientHeight < window.innerHeight * 0.7) continue;
    if (element.scrollHeight - element.clientHeight < Math.max(300, element.clientHeight * 0.3)) continue;
    if (!best || element.scrollHeight > best.scrollHeight) best = element;
  }
  window.__csScroller = best;
  return best ? best.scrollHeight : 0;
})()`;
