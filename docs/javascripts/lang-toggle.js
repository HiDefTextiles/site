(function () {
  const STORAGE_KEY = 'preferred_lang'; // 'is' or 'en'
  const root = document.documentElement;

  function setLang(lang) {
    root.classList.remove('lang-is', 'lang-en');
    root.classList.add(`lang-${lang}`);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    document.querySelectorAll('[data-lang-btn]')
      .forEach(btn =>
        btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang)
      );
  }

  function detectInitial() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'is' || saved === 'en') return saved;
    } catch (e) {}

    const navlang = (navigator.language || 'is').toLowerCase();
    if (navlang.startsWith('is')) return 'is';
    return 'en';
  }

  function injectToggle() {
    const header = document.querySelector('.md-header__inner');
    if (!header || header.querySelector('.lang-toggle')) return;

    const wrap = document.createElement('div');
    wrap.className = 'lang-toggle';
    wrap.innerHTML = `
      <span>Tungumál / Language:</span>
      <button type="button" data-lang-btn="is">IS</button>
      <button type="button" data-lang-btn="en">EN</button>
    `;
    header.appendChild(wrap);

    header.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () =>
        setLang(btn.getAttribute('data-lang-btn'))
      );
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectToggle();
    setLang(detectInitial() || 'is');
  });
})();
