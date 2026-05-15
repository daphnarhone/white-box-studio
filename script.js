const STORAGE_KEY = 'wbs-lang';

const whatsappNumber = '972545216416';
const whatsappPrefills = {
  en: "Hi, I'd like to discuss a project",
  he: "שלום, אשמח לדבר על פרויקט"
};

const strings = {
  en: {
    // ── Header navigation ─────────────────────────
    nav_work: 'Work',
    nav_studio: 'Studio',
    nav_contact: 'Contact',
    skip_to_main: 'Skip to main content',
    accessibility_link: 'Accessibility Statement',

    // ── Logo lockup (stays in EN in both languages) ──
    wordmark: 'white box studio',
    tagline: 'live your dreams',

    // ── Hero ──────────────────────────────────────
    hero_eyebrow: 'Atelier of architectural finishes',
    hero_h1_part1: 'Handmade ',
    hero_h1_light: 'architectural',
    hero_h1_part2: ' finishes.',
    hero_sub: 'Plaster, concrete, gold leaf, iron, gypsum, sculpture — applied directly on site, for architects, designers, and the spaces they make.',
    scroll_cue: 'Scroll',

    // ── Selected work section ─────────────────────
    selected_work_eyebrow: 'Nine categories · one studio',
    selected_work_heading: 'Selected work',

    // ── Recurring UI ──────────────────────────────
    cta_start: 'Start a project',
    cta_view: 'View work',
    next_label: 'Next —',
    contact_heading: 'Start a project',

    // ── Section 01 — Plaster ──────────────────────
    sec_01_eyebrow: '01 / Plaster wall finishes',
    sec_01_headline: 'Not paint. Not wallpaper.',
    sec_01_body: 'Every wall can become a canvas. Hand-applied plaster finishes with custom patterns, from bold relief textures like crocodile skin to aged surfaces with delicate decorative overlays. Suited to interiors and exteriors — private homes, restaurants, boutique hotels. Each finish is created on site, directly on the wall.',

    // ── Section 02 — Tables ───────────────────────
    sec_02_eyebrow: '02 / Sculptural coffee tables',
    sec_02_headline: 'Not just a table. A statement.',
    sec_02_body: 'One piece, the whole character of the room. Sculptural coffee tables with custom-cast bases (horse heads, organic forms) and signature finishes, from deep iridescent blue to soft rose-gold metallic. Each table is co-designed in form and finish. Made for hotel lobbies, living rooms, and concept spaces.',

    // ── Section 03 — Sculpture ────────────────────
    sec_03_eyebrow: '03 / Custom sculpture',
    sec_03_headline: 'If you can imagine it, we can sculpt it.',
    sec_03_body: 'Bespoke sculpture, made by hand. From classical figures (yes, even Michelangelo’s David) to contemporary pieces, animal busts, and richly carved relief panels. Any scale, any finish, any material. Made for homes, hotels, retail, and public spaces.',

    // ── Section 04 — Gypsum panels ────────────────
    sec_04_eyebrow: '04 / Gypsum panels for walls & ceilings',
    sec_04_headline: 'A ceiling doesn’t have to be flat.',
    sec_04_body: 'Our spaces deserve more than paint. Hand-cast gypsum panels with intricate patterns — from Moroccan geometry overhead to figurative wall mosaics. Designed for living rooms, bedrooms, hotel lobbies, and executive offices. Adds depth, volume, and character to any space.',

    // ── Section 05 — Display & gift ───────────────
    sec_05_eyebrow: '05 / Display, event & gift accessories',
    sec_05_headline: 'The small detail is the whole story.',
    sec_05_body: 'Sometimes it’s the small details that leave the strongest impression. Artistic hand-made hair pins, display stands, and event props for retail, parties, and brand launches. Every piece is designed and produced specifically for your brand, your event, or the person receiving it.',

    // ── Section 06 — Iron-look ────────────────────
    sec_06_eyebrow: '06 / Iron-look coating for doors & walls',
    sec_06_headline: 'Iron. Without the iron.',
    sec_06_body: 'All the presence of forged iron, without the weight or the actual rust. Iron-look coating for doors, walls, and surfaces — in tones of dark patina, warm rust, and smoked metal. Ideal for statement entry doors, accent walls, and spaces with an industrial-luxe edge.',

    // ── Section 07 — Capitals & ornaments ─────────
    sec_07_eyebrow: '07 / Gypsum capitals & architectural ornaments',
    sec_07_headline: 'Gold, gypsum, and a little drama.',
    sec_07_body: 'Classical detail never goes out of style. Corinthian column capitals, baroque scroll wall ornaments, and gold-leaf accents — all made in-house at the studio. Designed for classical and neo-classical spaces, luxury residences, event venues, and commercial facades.',

    // ── Section 08 — Murals ───────────────────────
    sec_08_eyebrow: '08 / Custom wall murals',
    sec_08_headline: 'Every wall is a story that hasn’t been told yet.',
    sec_08_body: 'A wall can tell a story. Hand-painted custom murals, designed specifically for your space — from full narrative scenes (like our “Wild West Last Supper”) to graphic and pattern-based designs. Made for restaurants, bars, boutique hotels, retail, and any private space ready for character.',

    // ── Section 09 — Concrete ─────────────────────
    sec_09_eyebrow: '09 / Decorative concrete works & finishes',
    sec_09_headline: 'Concrete can be the most dramatic material in the room.',
    sec_09_body: 'Concrete doesn’t have to be minimalist. Hand-finished decorative concrete works, from sculptural-functional objects (like our stone-textured candle holders) to flowing, drapery-like wall panels. Made for modern spaces — commercial and residential — that want something raw and refined at once.',

    // ── Studio section ────────────────────────────
    studio_eyebrow: 'THE STUDIO',
    studio_headline: 'Tailored by hand, in our studio.',
    studio_philosophy: "Built for experts and connoisseurs, The White Box Studio redefines the traditional creative space. We are a true artist's atelier with the unique ability to manifest any concept you can imagine. Through an advanced understanding of material behaviors, history, and aesthetics, we engineer tailored solutions to bring your visions to life.",
    studio_howwework_eyebrow: 'How we work',
    studio_howwework_body: 'We co-design alongside architects, designers, or end clients, then handle full on-site installation. We currently take on projects exclusively in Israel. We strongly prefer early-stage collaboration to guarantee that all required infrastructure is seamlessly planned and executed.',
    studio_pullquote: 'The gaze meets the work — the breath is taken.',

    // ── Contact section ───────────────────────────
    contact_eyebrow: 'START A PROJECT',
    contact_headline: "Let's make a dream come true.",
    contact_body: "Ready to turn your concept into visual reality? Call or WhatsApp us with your ideas, project needs, and any reference imagery that inspires you. We'll instantly decode your vision, determine the optimal structural approach, and select the finest materials and artisanal crafts to bring your dream to life.",
    contact_whatsapp_label: 'WhatsApp',
    contact_email_label: 'Email',
    contact_phone_label: 'Phone',
    contact_visit_label: 'Visit',
    contact_hours_label: 'Hours',
    contact_address: 'Leibovitz 7, Rishon LeZion, Israel',
    contact_hours_value: 'Sunday–Thursday 10:00–17:00 · Friday 10:00–14:00',
    contact_whatsapp_cta: 'WhatsApp us',
    contact_email_cta: 'Email us',
    contact_instagram_cta: 'Instagram',
    contact_instagram_label: 'Instagram'
  },

  he: {
    // ── Header navigation ─────────────────────────
    nav_work: 'עבודות',
    nav_studio: 'סטודיו',
    nav_contact: 'צרו קשר',
    skip_to_main: 'דלג לתוכן הראשי',
    accessibility_link: 'הצהרת נגישות',

    // ── Logo lockup ───────────────────────────────
    wordmark: 'white box studio',
    tagline: 'להחיות את החלום',

    // ── Hero ──────────────────────────────────────
    hero_eyebrow: 'סטודיו לעיצוב אומנותי אדריכלי',
    hero_h1_part1: 'עיצוב וגימור ',
    hero_h1_light: 'בעבודת יד',
    hero_h1_part2: '',
    hero_sub: 'עבודה בגבס, טיח דקורטיבי, צמנט, ברזל, אפוקסי, אקריל ועוד. מותקן באתר הלקוח, למען אדריכלים, מעצבי פנים והחללים הייחודיים שלהם.',
    scroll_cue: 'גלילה',

    // ── Selected work section ─────────────────────
    selected_work_eyebrow: 'תשע קטגוריות · סטודיו אחד',
    selected_work_heading: 'עבודות נבחרות',

    // ── Recurring UI ──────────────────────────────
    cta_start: 'הזמינו פרוייקט',
    cta_view: 'צפו בעבודות',
    next_label: 'הבא —',
    contact_heading: 'הזמינו פרוייקט',

    // ── Section 01 — Plaster ──────────────────────
    sec_01_eyebrow: '01 / גימור קירות בטיח דקורטיבי',
    sec_01_headline: 'לא צבע. לא טפט.',
    sec_01_body: 'כל קיר יכול להפוך לקנבס. גימורי טיח בעבודת יד עם דוגמאות מותאמות אישית, מטקסטורות נועזות בסגנון עור תנין ועד ציפויים עתיקים עם דוגמאות עיצוביות עדינות. מתאים לפנים ולחוץ, לבתים פרטיים, מסעדות ומלונות בוטיק. כל גימור מבוצע אצלכם, ישירות על הקיר.',

    // ── Section 02 — Tables ───────────────────────
    sec_02_eyebrow: '02 / שולחנות קפה פיסוליים',
    sec_02_headline: 'לא רק שולחן. הצהרה.',
    sec_02_body: 'רהיט אחד, מוסיף אופי לחלל. שולחנות קפה בעיצוב פיסולי עם בסיסים מעוצבים (ראש סוס, צורות אורגניות) וגימורים ייחודיים בגוונים של כחול אירידיסנטי, רוז’-גולד מטאלי ועוד. כל שולחן מותאם אישית בצורה ובגימור. מושלם ללובאים, סלון או חללי קונספט.',

    // ── Section 03 — Sculpture ────────────────────
    sec_03_eyebrow: '03 / פיסול על פי דרישה',
    sec_03_headline: 'אם אפשר לדמיין את זה, אפשר לפסל את זה.',
    sec_03_body: 'פיסול בעבודת יד לפי דרישה. מדמויות קלאסיות (כן, אפילו דוד של מיכלאנג’לו) ועד עבודות פיסול מודרניות, ראשי חיות ופאנלי קיר עשירים ודקורטיביים. ניתן להזמין בכל גודל, גימור וחומר. מתאים לבית, מלון, חנות ומרחב מסחרי או ציבורי.',

    // ── Section 04 — Gypsum panels ────────────────
    sec_04_eyebrow: '04 / פאנלים מגבס לקירות ולתקרות',
    sec_04_headline: 'התקרה לא חייבת להיות שטוחה.',
    sec_04_body: 'החללים שלנו ראויים ליותר מצבע. פאנלי גבס בעבודת יד עם תבניות מורכבות — מגיאומטריה מרוקאית בתקרה לפסיפסי דמויות על הקיר. מתאים לסלון, חדר שינה, לובאי מלון ומשרדי הנהלה. מוסיפים לחלל עומק, נפח ואופי.',

    // ── Section 05 — Display & gift ───────────────
    sec_05_eyebrow: '05 / אביזרי תצוגה ומתנה',
    sec_05_headline: 'הפרט הקטן הוא הסיפור.',
    sec_05_body: 'לפעמים הפרט הקטן הוא זה שמשאיר את הרושם. סיכות שיער אומנותיות בעבודת יד, סטנדים ואביזרי תצוגה לחנויות, אירועים, מסיבות והשקות מותג. כל פריט מעוצב ומיוצר במיוחד עבור המותג, האירוע או האדם שמקבל אותו.',

    // ── Section 06 — Iron-look ────────────────────
    sec_06_eyebrow: '06 / ציפוי דמוי ברזל לדלתות וקירות',
    sec_06_headline: 'ברזל. בלי הברזל.',
    sec_06_body: 'כל הנוכחות של ברזל מחושל, בלי המשקל ובלי החלודה האמיתית. ציפוי דמוי ברזל לדלתות, קירות ומשטחים, בגוונים של פטינה כהה, חלודה חמה ומתכת מעושנת. מתאים לדלתות כניסה דרמטיות, קירות בולטים וחללים עם אופי תעשייתי-יוקרתי.',

    // ── Section 07 — Capitals & ornaments ─────────
    sec_07_eyebrow: '07 / כותרות ועיטורים מגבס',
    sec_07_headline: 'זהב, גבס, וקצת דרמה.',
    sec_07_body: 'קלאסיקה לא יוצאת מהאופנה. כותרות עמודים בסגנון קורינתי, עיטורי קיר ברוקיים ועבודות עלה זהב, כולם מיוצרים בייצור עצמי בסטודיו. מתאים לחללים בסגנון קלאסי וניאו-קלאסי, בתי לוקס פרטיים, אולמות אירועים וחזיתות מסחריות.',

    // ── Section 08 — Murals ───────────────────────
    sec_08_eyebrow: '08 / ציורי קיר על פי דרישה',
    sec_08_headline: 'כל קיר הוא סיפור שלא סופר עדיין.',
    sec_08_body: 'קיר יכול לספר סיפור. ציורי קיר בעבודת יד, מאוירים במיוחד עבור החלל שלכם. מסצנות נראטיביות שלמות (כמו “הסעודה האחרונה” שלנו בנוסח המערב הפרוע) ועד דוגמאות גרפיות ועיצוביות. מתאים למסעדות, ברים, מלונות בוטיק, חנויות ומרחבים פרטיים שרוצים אופי.',

    // ── Section 09 — Concrete ─────────────────────
    sec_09_eyebrow: '09 / עבודות וגימורים בבטון דקורטיבי',
    sec_09_headline: 'בטון יכול להיות הכי דרמטי שבחומרים.',
    sec_09_body: 'בטון לא חייב להיות מינימליסטי. עבודות וגימורים מבטון דקורטיב בעבודת יד, מאובייקטים שימושיים-פיסוליים (כמו מחזיק נרות בטקסטורת אבן) ועד פאנלי קיר זורמים בסגנון פיסולי. מתאים לחללים מודרניים, מסחריים ומגורים, שמחפשים מגע גולמי ומעודן בו זמנית.',

    // ── Studio section ────────────────────────────
    studio_eyebrow: 'הסטודיו',
    studio_headline: 'רוקמים חלומות, בסטודיו שלנו',
    studio_philosophy: 'סטודיו The White Box מגדיר מחדש את אפשרויות העיצוב והיצירתיות עבור מעצבי פנים, אדריכלים ולמחפשים נראות מיוחדת. כסטודיו אומנים אמיתי יש לנו יכולת ייחודית להגשים כל קונספט שתוכלו לדמיין. באמצעות הבנה מתקדמת של התנהגויות חומרים, ההיסטוריה שלהם והאסתטיקה, אנו מתכננים פתרונות מותאמים אישית כדי להגשים את החזונות שלכם.',
    studio_howwework_eyebrow: 'איך אנחנו עובדים',
    studio_howwework_body: 'אנחנו עובדים ישירות עם אדריכלים, מעצבים ולקוחות סופיים, החל משלב התכנון המשותף ועד להתקנה באתר. כיום אנו מתמקדים בפרויקטים בתוך ישראל. נשמח להתחיל את התכנון בשלבים הראשונים של הפרויקט כדי להבטיח שכל התשתיות הנדרשות מתוכננות ומשולבות בצורה מושלמת.',
    studio_pullquote: 'המבט פוגש ביצירה - הנשימה נעתקת',

    // ── Contact section ───────────────────────────
    contact_eyebrow: 'הזמינו פרוייקט',
    contact_headline: 'בואו נתחיל לייצר את החלום',
    contact_body: 'מוכנים להפוך את החלום למציאות חזותית? התקשרו או שלחו לנו וואטסאפ עם הרעיונות, צרכי הפרויקט וכל תמונה שמעוררת בכם השראה. בשאר אנחנו נטפל. ניצור צורה, צבע וטקסטורה לפי החזון שלכם, נוודא מבניות אופטימלית, ונבחר וניישם עם החומרים הטובים ביותר כדי להחיות את החלום',
    contact_whatsapp_label: 'וואטסאפ',
    contact_email_label: 'אימייל',
    contact_phone_label: 'טלפון',
    contact_visit_label: 'כתובת',
    contact_hours_label: 'שעות',
    contact_address: 'לייבוביץ 7, ראשון לציון',
    contact_hours_value: 'ראשון–חמישי 10:00–17:00 · שישי 10:00–14:00',
    contact_whatsapp_cta: 'שלחו וואטסאפ',
    contact_email_cta: 'שלחו אימייל',
    contact_instagram_cta: 'אינסטגרם',
    contact_instagram_label: 'אינסטגרם'
  }
};

function getSavedLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'he' ? 'he' : 'en';
  } catch (_) {
    return 'en';
  }
}

function updateWhatsAppLinks(lang) {
  const text = encodeURIComponent(whatsappPrefills[lang] || whatsappPrefills.en);
  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  document.querySelectorAll('[data-whatsapp-link]').forEach(el => {
    el.setAttribute('href', url);
  });
}

function applyLang(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

  const dict = strings[lang] || strings.en;
  const fallback = strings.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value !== undefined) {
      el.textContent = value;
    } else if (fallback[key] !== undefined) {
      el.textContent = fallback[key];
    }
  });

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}

  updateWhatsAppLinks(lang);
}

function setupMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  // Elements made inert while the menu is open, so Tab can't escape
  // the overlay into hidden-but-still-tabbable content behind it.
  const inertElements = [
    document.querySelector('.skip-link'),
    document.querySelector('main'),
    document.querySelector('footer.site-footer'),
    document.querySelector('body > header > a'),           // logo link
    document.querySelector('body > header .nav-right > .lang-toggle')  // header lang toggle
  ].filter(Boolean);

  const open = () => {
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
    inertElements.forEach(el => { el.inert = true; });
    // Move focus into the menu so AT announces the change.
    const firstLink = menu.querySelector('.mobile-menu-nav a');
    if (firstLink) firstLink.focus();
  };

  const close = (returnFocus = true) => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    inertElements.forEach(el => { el.inert = false; });
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    if (document.body.classList.contains('menu-open')) close();
    else open();
  });

  // Tapping a nav link closes the menu (hash nav still proceeds).
  // Pass returnFocus=false so we don't fight with the browser's natural
  // focus handling for in-page anchors.
  menu.querySelectorAll('.mobile-menu-nav a').forEach(a => {
    a.addEventListener('click', () => close(false));
  });

  // Escape closes and returns focus to the hamburger.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      close();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('contact-footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  applyLang(getSavedLang());

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
    });
  });

  setupMobileMenu();
});
