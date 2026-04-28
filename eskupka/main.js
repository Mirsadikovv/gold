/* ===== LANGUAGE ===== */
let lang = localStorage.getItem('eskupka_lang') || 'ru';

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
  updateMetaKeywords();
  populateDynamic();
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'ru' ? 'uz' : 'ru';
  localStorage.setItem('eskupka_lang', lang);
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
      ? `© ${new Date().getFullYear()} E-Skupka. Все права защищены.`
      : `© ${new Date().getFullYear()} E-Skupka. Barcha huquqlar himoyalangan.`;
  }

  // Map
  renderMap();

  // JSON-LD
  updateJsonLd();
}

/* ===== YANDEX MAP ===== */
function renderMap() {
  const src = CONFIG.location.mapIframeSrc;
  const container = document.getElementById('mapContainer');
  if (!container) return;

  if (src && src.trim()) {
    const title = lang === 'ru' ? 'Карта расположения E-Skupka' : 'E-Skupka joylashuv xaritasi';
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

/* ===== JSON-LD LocalBusiness ===== */
function updateJsonLd() {
  const c = CONFIG;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": c.business.name,
    "description": c.business.description.ru,
    "url": c.seo.siteUrl,
    "telephone": c.contact.phoneRaw,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ташкент",
      "addressRegion": "Юнусабад",
      "addressCountry": "UZ"
    },
    "geo": {
      "@type": "GeoCoordinates"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": c.hours.weekdays.time.split('–')[0].trim(),
        "closes": c.hours.weekdays.time.split('–')[1].trim()
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": c.hours.weekend.time.split('–')[0].trim(),
        "closes": c.hours.weekend.time.split('–')[1].trim()
      }
    ],
    "priceRange": c.jsonLd.priceRange,
    "currenciesAccepted": c.jsonLd.currenciesAccepted,
    "paymentAccepted": c.jsonLd.paymentAccepted,
    "sameAs": [c.contact.telegramUrl]
  };

  const el = document.getElementById('json-ld-local');
  if (el) el.textContent = JSON.stringify(schema);
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

/* ===== UPDATE META KEYWORDS BY LANG ===== */
function updateMetaKeywords() {
  const meta = document.querySelector('meta[name="keywords"]');
  if (meta) meta.setAttribute('content', CONFIG.seo.keywords[lang] || CONFIG.seo.keywords.ru);
}

/* ===== INIT ===== */
updateMetaKeywords();
applyLang();
