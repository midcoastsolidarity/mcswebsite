// highlights the site nav bar 
window.__afterInclude = function () {
  try {
    // active nav link highlighting
    const links = document.querySelectorAll('.site-nav a');
    const path = location.pathname.replace(/\/$/, '') || '/index.html';
    links.forEach(a => {
      const hrefPath = new URL(a.href, location.origin).pathname.replace(/\/$/, '') || '/index.html';
      if (hrefPath === path) a.classList.add('active');
      else a.classList.remove('active');
    });
  } catch(e) { console.error(e); }
};
