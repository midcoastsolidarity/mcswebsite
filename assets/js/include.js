// unified nav bar header
async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error('Include failed: ' + r.status);
    el.innerHTML = await r.text();
    if (window.__afterInclude) window.__afterInclude();
  } catch (e) {
    console.error(e);
  }
}
// Insert header from absolute path so it resolves from any page depth
includeHTML('#site-header','/_includes/header.html');
