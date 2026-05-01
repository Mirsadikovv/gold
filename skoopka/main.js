/* ===== LANGUAGE ===== */
let lang = localStorage.getItem('skoopka_lang') || 'ru';

function t(key) {
  const parts = key.split('.');
  let obj = CONFIG;
  for (const p of parts) {
    if (obj == null) return '';
    obj = obj[p];
  }
  if (typeof obj === 'object' && obj !== null) return obj[lang] || obj['ru'] || '';
  return obj || '';
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang] || el.dataset.ru;
  });
  document.getElementById('langLabel').textContent = lang === 'ru' ? 'UZ' : 'RU';
  populateDynamic();
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'ru' ? 'uz' : 'ru';
  localStorage.setItem('skoopka_lang', lang);
  applyLang();
});

/* ===== POPULATE DYNAMIC CONTENT ===== */
function populateDynamic() {
  const c = CONFIG;

  // Phone links
  const phoneHref = `tel:${c.contact.phoneRaw}`;
  const tgHref = c.contact.telegramUrl;

  ['heroPhone', 'callBtn', 'floatPhone', 'contactPhone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = phoneHref;
  });
  ['heroTelegram', 'tgBtn', 'floatTg', 'contactTelegram'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = tgHref;
  });

  const phoneDisplay = document.getElementById('phoneDisplay');
  if (phoneDisplay) phoneDisplay.textContent = c.contact.phone;

  const tgDisplay = document.getElementById('telegramDisplay');
  if (tgDisplay) tgDisplay.textContent = c.contact.telegram;

  // Address
  const addressEl = document.getElementById('address');
  if (addressEl) addressEl.textContent = c.location.address[lang] || c.location.address.ru;

  const landmarkEl = document.getElementById('landmark');
  if (landmarkEl) {
    const lm = c.location.landmark[lang] || c.location.landmark.ru;
    landmarkEl.textContent = lm;
    landmarkEl.style.display = lm ? 'block' : 'none';
  }

  // Hours
  const hw = document.getElementById('hoursWeekdays');
  if (hw) hw.textContent = `${c.hours.weekdays.label[lang] || c.hours.weekdays.label.ru}: ${c.hours.weekdays.time}`;

  const hwe = document.getElementById('hoursWeekend');
  if (hwe) hwe.textContent = `${c.hours.weekend.label[lang] || c.hours.weekend.label.ru}: ${c.hours.weekend.time}`;

  // SEO text block
  const seoRu = document.getElementById('seoTextRu');
  const seoUz = document.getElementById('seoTextUz');
  if (seoRu) seoRu.style.display = lang === 'ru' ? 'block' : 'none';
  if (seoUz) seoUz.style.display = lang === 'uz' ? 'block' : 'none';

  // Footer copyright
  const footerCopy = document.getElementById('footerCopy');
  if (footerCopy) {
    footerCopy.textContent = lang === 'ru'
      ? `© ${new Date().getFullYear()} Skoopka. Все права защищены.`
      : `© ${new Date().getFullYear()} Skoopka. Barcha huquqlar himoyalangan.`;
  }

  // Map
  renderMap();
}

/* ===== YANDEX MAP ===== */
function renderMap() {
  const src = CONFIG.location.mapIframeSrc;
  const container = document.getElementById('mapContainer');
  if (!container) return;

  if (src && src.trim()) {
    const title = lang === 'ru' ? 'Карта расположения Skoopka' : 'Skoopka joylashuv xaritasi';
    container.innerHTML = `<iframe src="${src}" title="${title}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  } else {
    const placeholder = document.getElementById('mapPlaceholder');
    if (placeholder) {
      const p = placeholder.querySelector('p');
      if (p) p.textContent = lang === 'ru'
        ? 'Карта появится после указания адреса'
        : 'Manzil ko\'rsatilgandan so\'ng xarita paydo bo\'ladi';
    }
  }
}

/* ===== BURGER MENU ===== */
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

/* ===== SCROLL: header shadow ===== */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,0.5)'
    : 'none';
}, { passive: true });

/* ===== INIT ===== */
applyLang();
