// prevent framing (frame-bust)
try {
  if (window.top !== window.self) window.top.location.replace(window.self.location.href);
} catch (e) { /* ignore cross-origin frame errors */ }
