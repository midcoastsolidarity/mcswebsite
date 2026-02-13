// populate copyright year
try {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
} catch (e) { console.error(e); }
