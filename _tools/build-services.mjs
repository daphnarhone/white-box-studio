/* ════════════════════════════════════════════════════════════════════════
   White Box — service-page generator.
   Single source of truth for all 9 bilingual service pages + the FAQ page.
   EDIT THE COPY HERE, then run:  node _tools/build-services.mjs
   It writes /services/<slug>.html (HE) + /en/services/<slug>.html (EN)
   and /faq.html + /en/faq.html. Never hand-edit the generated files.
   ════════════════════════════════════════════════════════════════════════ */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const VER = '20260607i';
const ORIGIN = 'https://white-box.co.il';
const WA = '972545216416';

// Per-language shared chrome strings.
const UI = {
  he: {
    skip: 'דלג לתוכן הראשי', work: 'עבודות', studio: 'סטודיו', contact: 'צרו קשר',
    home: 'בית', services: 'שירותים', faq: 'שאלות נפוצות', start: 'התחילו פרויקט', whatsapp: 'וואטסאפ',
    a11y: 'הצהרת נגישות', menu: 'פתח תפריט', mobileNav: 'ניווט נייד', bcAria: 'מסלול ניווט',
    waText: 'שלום, אשמח לדבר על פרויקט'
  },
  en: {
    skip: 'Skip to main content', work: 'Work', studio: 'Studio', contact: 'Contact',
    home: 'Home', services: 'Services', faq: 'FAQ', start: 'Start a project', whatsapp: 'WhatsApp',
    a11y: 'Accessibility Statement', menu: 'Open menu', mobileNav: 'Mobile navigation', bcAria: 'Breadcrumb',
    waText: "Hi, I'd like to discuss a project"
  }
};

const heUrl = slug => `${ORIGIN}/services/${slug}.html`;
const enUrl = slug => `${ORIGIN}/en/services/${slug}.html`;
const waHref = lang => `https://wa.me/${WA}?text=${encodeURIComponent(UI[lang].waText)}`;

function head({ lang, title, desc, canonical, altHe, altEn, ogImg, ogUrl, ldBlocks }) {
  const dir = lang === 'he' ? 'rtl' : 'ltr';
  const ld = ldBlocks.map(b => `<script type="application/ld+json">\n${JSON.stringify(b, null, 2)}\n</script>`).join('\n');
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="UTF-8">
<script>
  /* Service pages are language-specific files. Force THIS page's language so the
     shared chrome and RTL/LTR always match the static content, regardless of a
     visitor's previously-saved preference. */
  (function(){ try { localStorage.setItem('wbs-lang','${lang}');
    document.documentElement.lang='${lang}'; document.documentElement.dir='${dir}'; } catch(e){} })();
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">

<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="he" href="${altHe}">
<link rel="alternate" hreflang="en" href="${altEn}">
<link rel="alternate" hreflang="x-default" href="${altHe}">

<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${ogImg}">
<meta property="og:url" content="${ogUrl}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#F2EDE3">

<link rel="icon" type="image/svg+xml" href="/assets/logo.svg">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&family=Heebo:wght@300;400;700;800&display=swap" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&family=Heebo:wght@300;400;700;800&display=swap"></noscript>
<link rel="stylesheet" href="/styles.css?v=${VER}">

${ld}
</head>`;
}

const svcHref = (slug, lang) => (lang === 'he' ? `/services/${slug}.html` : `/en/services/${slug}.html`);
const faqHref = lang => (lang === 'he' ? '/faq.html' : '/en/faq.html');

function chrome({ lang, hrefHe, hrefEn }) {
  const u = UI[lang];
  const enActive = lang === 'en' ? ' class="active" aria-current="page"' : '';
  const heActive = lang === 'he' ? ' class="active" aria-current="page"' : '';
  const toggle = `<div class="lang-toggle" role="group" aria-label="Language">
      <a href="${hrefEn}" lang="en" hreflang="en"${enActive}>EN</a>
      <span class="lang-divider" aria-hidden="true">·</span>
      <a href="${hrefHe}" lang="he" hreflang="he"${heActive}>עב</a>
    </div>`;
  const dropdownItems = SERVICES.map(s =>
    `          <a role="menuitem" data-svc="${s.slug}" href="${svcHref(s.slug, lang)}">${s[lang].eyebrow}</a>`).join('\n');
  const mobileItems = SERVICES.map(s =>
    `      <a data-svc="${s.slug}" href="${svcHref(s.slug, lang)}">${s[lang].eyebrow}</a>`).join('\n');

  return `<body>

<a class="skip-link" href="#main" data-i18n="skip_to_main">${u.skip}</a>

<header>
  <a href="/index.html" aria-label="The White Box Studio — ${u.home}">
    <img class="header-icon" src="/assets/logo.svg" alt="">
  </a>
  <nav class="nav-right">
    <div class="nav-links">
      <a href="/index.html#work" data-i18n="nav_work">${u.work}</a>
      <div class="nav-dropdown">
        <button type="button" class="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true" data-i18n="nav_services">${u.services}</button>
        <div class="nav-dropdown-menu" role="menu">
${dropdownItems}
        </div>
      </div>
      <a href="/index.html#studio" data-i18n="nav_studio">${u.studio}</a>
      <a data-faq-link href="${faqHref(lang)}" data-i18n="nav_faq">${UI[lang].faq || 'FAQ'}</a>
      <a href="/index.html#contact" data-i18n="nav_contact">${u.contact}</a>
    </div>
    ${toggle}
    <button class="menu-toggle" type="button" aria-label="${u.menu}" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <nav class="mobile-menu-nav" aria-label="${u.mobileNav}">
    <a href="/index.html#work" data-i18n="nav_work">${u.work}</a>
    <a href="/index.html#studio" data-i18n="nav_studio">${u.studio}</a>
    <a data-faq-link href="${faqHref(lang)}" data-i18n="nav_faq">${UI[lang].faq || 'FAQ'}</a>
    <a href="/index.html#contact" data-i18n="nav_contact">${u.contact}</a>
  </nav>
  <div class="mobile-services">
    <p class="mobile-services-title" data-i18n="nav_services">${u.services}</p>
    <div class="mobile-services-list">
${mobileItems}
    </div>
  </div>
  ${toggle}
</div>`;
}

function footer(lang) {
  const u = UI[lang];
  return `<footer class="site-footer">
  <span class="site-footer-copy">© <span id="contact-footer-year">2026</span> White Box Studio</span>
  <span class="site-footer-sep" aria-hidden="true">·</span>
  <a href="/accessibility.html" class="site-footer-link" data-i18n="accessibility_link">${u.a11y}</a>
</footer>

<div class="sticky-cta" id="sticky-cta" aria-hidden="true">
  <a href="/index.html#contact" class="cta-pill cta-pill--filled" data-i18n="cta_start">${u.start}</a>
  <a data-whatsapp-link href="${waHref(lang)}" target="_blank" rel="noopener" class="sticky-cta-wa" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.873-1.017zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>
  </a>
</div>

<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>
<script src="/script.js?v=${VER}" defer></script>
<script src="https://cdn.jsdelivr.net/npm/sienna-accessibility/dist/sienna-accessibility.umd.js" async></script>
</body>
</html>`;
}

const li = items => items.map(t => `          <li>${t}</li>`).join('\n');
const faqDetails = faq => faq.map(f => `        <details class="faq-item">
          <summary class="faq-q">${f.q}</summary>
          <p class="faq-a">${f.a}</p>
        </details>`).join('\n');
const galleryFigs = imgs => imgs.map(im =>
  `      <figure class="detail-image${im.transparent ? ' detail-image--transparent' : ''}">
        <img src="${im.src}" alt="${im.alt}" loading="lazy">
      </figure>`).join('\n');
const steps = arr => arr.map((s, i) => `        <div class="svc-step">
          <div class="svc-step-num">0${i + 1}</div>
          <p class="svc-step-title">${s.t}</p>
          <p class="svc-step-body">${s.b}</p>
        </div>`).join('\n');

function renderService(s, lang) {
  const d = s[lang], u = UI[lang];
  const canonical = lang === 'he' ? heUrl(s.slug) : enUrl(s.slug);
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Service', serviceType: d.serviceType, name: d.h1,
      description: d.desc, areaServed: { '@type': 'Country', name: 'Israel' },
      provider: { '@type': 'LocalBusiness', name: 'The White Box Studio', url: `${ORIGIN}/`,
        telephone: '+972-3-509-9959',
        address: { '@type': 'PostalAddress', streetAddress: 'Leibovitz 7', addressLocality: 'Rishon LeZion', addressCountry: 'IL' } },
      url: canonical },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: u.home, item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: d.crumb, item: canonical } ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: d.faq.map(f =>
      ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  ];
  const body = `${chrome({ lang, hrefHe: `/services/${s.slug}.html`, hrefEn: `/en/services/${s.slug}.html` })}

<main id="main" tabindex="-1" class="svc-main">
  <div class="svc-inner">

    <nav class="breadcrumb" aria-label="${u.bcAria}">
      <a href="/index.html">${u.home}</a>
      <span class="breadcrumb-sep" aria-hidden="true">${lang === 'he' ? '›' : '›'}</span>
      <a href="/index.html#work">${u.services}</a>
      <span class="breadcrumb-sep" aria-hidden="true">›</span>
      <span aria-current="page">${d.crumb}</span>
    </nav>

    <div class="svc-hero">
      <p class="eyebrow svc-eyebrow">${d.eyebrow}</p>
      <h1 class="svc-h1">${d.h1}</h1>
      <p class="svc-lead">${d.lead}</p>
${d.intro.map(p => `      <p class="svc-body">${p}</p>`).join('\n')}
      <a href="/index.html#contact" class="cta-pill cta-pill--filled">${d.ctaHero}</a>
    </div>

    <div class="svc-gallery">
${galleryFigs(d.images)}
    </div>

    <div class="svc-section svc-cols">
      <div>
        <h2 class="svc-h2">${d.applicationsTitle}</h2>
        <ul class="svc-list">
${li(d.applications)}
        </ul>
      </div>
      <div>
        <h2 class="svc-h2">${d.finishesTitle}</h2>
        <ul class="svc-list">
${li(d.finishes)}
        </ul>
      </div>
    </div>

    <div class="svc-section">
      <h2 class="svc-h2">${d.customTitle}</h2>
      <p class="svc-body">${d.custom}</p>
    </div>

    <div class="svc-section">
      <h2 class="svc-h2">${d.processTitle}</h2>
      <div class="svc-process">
${steps(d.steps)}
      </div>
    </div>

    <div class="svc-section">
      <h2 class="svc-h2">${d.faqTitle}</h2>
      <div class="faq-list">
${faqDetails(d.faq)}
      </div>
    </div>

  </div>
</main>

<section class="svc-cta-band">
  <div class="svc-inner">
    <h2>${d.bandH2}</h2>
    <p>${d.bandP}</p>
    <div class="svc-cta-row">
      <a href="/index.html#contact" class="cta-pill cta-pill--filled">${u.start}</a>
      <a data-whatsapp-link href="${waHref(lang)}" target="_blank" rel="noopener" class="cta-pill cta-pill--outline">${u.whatsapp}</a>
    </div>
  </div>
</section>

${footer(lang)}`;

  return head({ lang, title: d.title, desc: d.desc, canonical,
    altHe: heUrl(s.slug), altEn: enUrl(s.slug),
    ogImg: `${ORIGIN}${d.images[0].src}`, ogUrl: canonical, ldBlocks: ld }) + '\n' + body + '\n';
}

function renderFaq(f, lang) {
  const d = f[lang], u = UI[lang];
  const canonical = lang === 'he' ? `${ORIGIN}/faq.html` : `${ORIGIN}/en/faq.html`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: u.home, item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: d.crumb, item: canonical } ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: d.faq.map(q =>
      ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })) }
  ];
  const body = `${chrome({ lang, hrefHe: '/faq.html', hrefEn: '/en/faq.html' })}

<main id="main" tabindex="-1" class="svc-main">
  <div class="svc-inner">

    <nav class="breadcrumb" aria-label="${u.bcAria}">
      <a href="/index.html">${u.home}</a>
      <span class="breadcrumb-sep" aria-hidden="true">›</span>
      <span aria-current="page">${d.crumb}</span>
    </nav>

    <div class="svc-hero">
      <h1 class="svc-h1">${d.h1}</h1>
      <p class="svc-lead">${d.lead}</p>
      <p class="svc-body">${d.intro}</p>
    </div>

    <div class="svc-section">
      <div class="faq-list">
${faqDetails(d.faq)}
      </div>
    </div>

  </div>
</main>

<section class="svc-cta-band">
  <div class="svc-inner">
    <h2>${d.bandH2}</h2>
    <p>${d.bandP}</p>
    <div class="svc-cta-row">
      <a href="/index.html#contact" class="cta-pill cta-pill--filled">${u.start}</a>
      <a data-whatsapp-link href="${waHref(lang)}" target="_blank" rel="noopener" class="cta-pill cta-pill--outline">${u.whatsapp}</a>
    </div>
  </div>
</section>

${footer(lang)}`;

  return head({ lang, title: d.title, desc: d.desc, canonical,
    altHe: `${ORIGIN}/faq.html`, altEn: `${ORIGIN}/en/faq.html`,
    ogImg: `${ORIGIN}/assets/images/three-horses.jpg`, ogUrl: canonical, ldBlocks: ld }) + '\n' + body + '\n';
}

// ──────────────────────────────────────────────────────────────────────────
import { SERVICES, FAQ } from './services-data.mjs';

mkdirSync(resolve(ROOT, 'services'), { recursive: true });
mkdirSync(resolve(ROOT, 'en/services'), { recursive: true });

let n = 0;
for (const s of SERVICES) {
  writeFileSync(resolve(ROOT, `services/${s.slug}.html`), renderService(s, 'he'));
  writeFileSync(resolve(ROOT, `en/services/${s.slug}.html`), renderService(s, 'en'));
  n += 2;
}
writeFileSync(resolve(ROOT, 'faq.html'), renderFaq(FAQ, 'he'));
writeFileSync(resolve(ROOT, 'en/faq.html'), renderFaq(FAQ, 'en'));
n += 2;

// ── sitemap.xml (with hreflang alternates) + robots.txt ────────────────────
const today = '2026-06-07';
// A bilingual pair → two <url> entries, each carrying the same set of xhtml:link
// alternates (he, en, x-default→he). Single-URL pages (home, accessibility) stand alone.
const pair = (he, en) => [he, en].map(loc => `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="he" href="${he}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${he}"/>
    <lastmod>${today}</lastmod>
  </url>`).join('\n');
const solo = loc => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;

const urls = [
  solo(`${ORIGIN}/`),
  ...SERVICES.map(s => pair(heUrl(s.slug), enUrl(s.slug))),
  pair(`${ORIGIN}/faq.html`, `${ORIGIN}/en/faq.html`),
  solo(`${ORIGIN}/accessibility.html`)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
writeFileSync(resolve(ROOT, 'sitemap.xml'), sitemap);
writeFileSync(resolve(ROOT, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);

console.log(`Wrote ${n} pages for ${SERVICES.length} services + FAQ (HE + EN), plus sitemap.xml + robots.txt.`);
