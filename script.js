const STORAGE_KEY = 'wbs-lang';

// Google Analytics 4. The tag is gated behind cookie consent — it only loads
// after the visitor clicks Accept on the banner (see setupConsentBanner).
const GA_MEASUREMENT_ID = 'G-ZYK627NZFG';
const CONSENT_KEY = 'wbs-consent';

const whatsappNumber = '972545216416';
const whatsappPrefills = {
  en: "Hi, I'd like to discuss a project",
  he: "שלום, אשמח לדבר על פרויקט"
};

const strings = {
  en: {
    // ── Header navigation ─────────────────────────
    nav_work: 'Work',
    nav_services: 'Services',
    nav_studio: 'Studio',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    skip_to_main: 'Skip to main content',
    accessibility_link: 'Accessibility Statement',

    // ── Logo lockup (stays in EN in both languages) ──
    wordmark: 'white box studio',
    tagline: 'bring the dream to life',

    // ── Hero ──────────────────────────────────────
    hero_eyebrow: 'Atelier of architectural finishes',
    hero_h1_part1: 'Handmade ',
    hero_h1_light: 'architectural',
    hero_h1_part2: ' finishes.',
    hero_sub: 'Plaster, concrete, gold leaf, iron, gypsum, sculpture, applied directly on site, for architects, designers, and the spaces they make.',
    scroll_cue: 'Scroll',

    // ── Selected work section ─────────────────────
    selected_work_eyebrow: 'Nine categories · one studio',
    selected_work_heading: 'Selected work',
    selected_work_note: 'Every piece shown here was made and installed by our own studio.',

    // ── Recurring UI ──────────────────────────────
    cta_start: 'Start a project',
    cta_view: 'View work',
    cta_sec_01: 'Plan your plaster wall',
    cta_sec_02: 'Commission a table',
    cta_sec_03: 'Commission a sculpture',
    cta_sec_04: 'Design your ceiling',
    cta_sec_05: 'Order display pieces',
    cta_sec_06: 'Get the iron look',
    cta_sec_07: 'Add classical detail',
    cta_sec_08: 'Commission a mural',
    cta_sec_09: 'Start a concrete project',
    next_label: 'Next —',
    contact_heading: 'Start a project',

    // ── Section 01 — Plaster ──────────────────────
    sec_01_eyebrow: '01 / Plaster wall finishes',
    sec_01_headline: 'Not paint. Not wallpaper.',
    sec_01_body: 'Every wall can become a canvas. Hand-applied plaster finishes with custom patterns, from bold relief textures like crocodile skin to aged surfaces with delicate decorative overlays. Suited to interiors and exteriors, private homes, restaurants, boutique hotels. Each finish is created on site, directly on the wall.',

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
    sec_04_body: 'Our spaces deserve more than paint. Hand-cast gypsum panels with intricate patterns, from Moroccan geometry overhead to figurative wall mosaics. Designed for living rooms, bedrooms, hotel lobbies, and executive offices. Adds depth, volume, and character to any space.',

    // ── Section 05 — Display & gift ───────────────
    sec_05_eyebrow: '05 / Display, event & gift accessories',
    sec_05_headline: 'The small detail is the whole story.',
    sec_05_body: 'Sometimes it’s the small details that leave the strongest impression. Artistic hand-made hair pins, display stands, and event props for retail, parties, and brand launches. Every piece is designed and produced specifically for your brand, your event, or the person receiving it.',

    // ── Section 06 — Iron-look ────────────────────
    sec_06_eyebrow: '06 / Iron-look coating for doors & walls',
    sec_06_headline: 'Iron. Without the iron.',
    sec_06_body: 'All the presence of forged iron, without the weight or the actual rust. Iron-look coating for doors, walls, and surfaces, in tones of dark patina, warm rust, and smoked metal. Ideal for statement entry doors, accent walls, and spaces with an industrial-luxe edge.',

    // ── Section 07 — Capitals & ornaments ─────────
    sec_07_eyebrow: '07 / Gypsum capitals & architectural ornaments',
    sec_07_headline: 'Gold, gypsum, and a little drama.',
    sec_07_body: 'Classical detail never goes out of style. Corinthian column capitals, baroque scroll wall ornaments, and gold-leaf accents, all made in-house at the studio. Designed for classical and neo-classical spaces, luxury residences, event venues, and commercial facades.',

    // ── Section 08 — Murals ───────────────────────
    sec_08_eyebrow: '08 / Custom wall murals',
    sec_08_headline: 'Every wall is a story that hasn’t been told yet.',
    sec_08_body: 'A wall can tell a story. Hand-painted custom murals, designed specifically for your space, from full narrative scenes (like our “Wild West Last Supper”) to graphic and pattern-based designs. Made for restaurants, bars, boutique hotels, retail, and any private space ready for character.',

    // ── Section 09 — Concrete ─────────────────────
    sec_09_eyebrow: '09 / Decorative concrete works & finishes',
    sec_09_headline: 'Concrete can be the most dramatic material in the room.',
    sec_09_body: 'Concrete doesn’t have to be minimalist. Hand-finished decorative concrete works, from sculptural-functional objects (like our stone-textured candle holders) to flowing, drapery-like wall panels. Made for modern spaces, commercial and residential, that want something raw and refined at once.',

    // ── Studio section ────────────────────────────
    studio_eyebrow: 'THE STUDIO',
    studio_headline: 'Tailored by hand, in our studio.',
    studio_established: 'Established 2005 · two decades of handmade architectural finishes, made and installed across Israel.',
    studio_philosophy: "Built for experts and connoisseurs, The White Box Studio redefines the traditional creative space. We are a true artist's atelier with the unique ability to manifest any concept you can imagine. Through an advanced understanding of material behaviors, history, and aesthetics, we engineer tailored solutions to bring your visions to life.",
    studio_howwework_eyebrow: 'How we work',
    studio_howwework_body: 'We co-design alongside architects, designers, or end clients, then handle full on-site installation. We currently take on projects exclusively in Israel. We strongly prefer early-stage collaboration to guarantee that all required infrastructure is seamlessly planned and executed.',
    studio_pullquote: 'The gaze meets the work, the breath is taken.',

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
    contact_instagram_cta: '@whiteboxstudio9',
    contact_instagram_label: 'Instagram',

    // ── Contact form ──────────────────────────────
    form_name_label: 'Name',
    form_name_ph: 'Your name',
    form_contact_label: 'Email or phone',
    form_contact_ph: 'So we can get back to you',
    form_type_label: 'Project type',
    form_type_default: 'Select a category',
    form_type_other: 'Not sure / other',
    form_message_label: 'Message',
    form_message_ph: 'Tell us about your space, ideas, timeline, or any reference images that inspire you.',
    form_submit_email: 'Send via email',
    form_submit_whatsapp: 'Send via WhatsApp',
    form_alt_label: 'Or reach us directly',
    form_wa_title: 'New project inquiry',
    form_status_required: 'Please add your name and an email or phone so we can reach you.',
    form_status_sending: 'Sending…',
    form_status_success: "Thank you, your message is on its way. We'll be in touch shortly.",
    form_status_error: 'Something went wrong. Please try WhatsApp, or email us at info@white-box.co.il.'
  },

  he: {
    // ── Header navigation ─────────────────────────
    nav_work: 'עבודות',
    nav_services: 'שירותים',
    nav_studio: 'סטודיו',
    nav_faq: 'שאלות נפוצות',
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
    selected_work_note: 'כל יצירה המוצגת כאן נוצרה והותקנה על ידי הסטודיו שלנו.',

    // ── Recurring UI ──────────────────────────────
    cta_start: 'הזמינו פרוייקט',
    cta_view: 'צפו בעבודות',
    cta_sec_01: 'תכננו גימור לקירות',
    cta_sec_02: 'הזמינו פרטי ריהוט',
    cta_sec_03: 'הזמינו עבודת פיסול',
    cta_sec_04: 'תכננו גימור תקרה',
    cta_sec_05: 'הזמינו אביזרי תצוגה/אירועים',
    cta_sec_06: 'הזמינו גימור דמוי ברזל/בטון',
    cta_sec_07: 'הוסיפו עיטורים',
    cta_sec_08: 'הזמינו ציור קיר',
    cta_sec_09: 'הזמינו פרוייקט בבטון',
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
    sec_04_body: 'החללים שלנו ראויים ליותר מצבע. פאנלי גבס בעבודת יד עם תבניות מורכבות, מגיאומטריה מרוקאית בתקרה לפסיפסי דמויות על הקיר. מתאים לסלון, חדר שינה, לובאי מלון ומשרדי הנהלה. מוסיפים לחלל עומק, נפח ואופי.',

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
    studio_established: 'נוסד ב-2005 · שני עשורים של גימורים אדריכליים בעבודת יד, ביצוע והתקנה ברחבי ישראל.',
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
    contact_instagram_cta: '@whiteboxstudio9',
    contact_instagram_label: 'אינסטגרם',

    // ── Contact form ──────────────────────────────
    form_name_label: 'שם',
    form_name_ph: 'השם שלכם',
    form_contact_label: 'אימייל או טלפון',
    form_contact_ph: 'כדי שנוכל לחזור אליכם',
    form_type_label: 'סוג הפרויקט',
    form_type_default: 'בחרו קטגוריה',
    form_type_other: 'לא בטוח/ה / אחר',
    form_message_label: 'הודעה',
    form_message_ph: 'ספרו לנו על החלל, הרעיונות, לוח הזמנים או כל תמונת השראה.',
    form_submit_email: 'שליחה במייל',
    form_submit_whatsapp: 'שליחה בוואטסאפ',
    form_alt_label: 'או צרו קשר ישירות',
    form_wa_title: 'פנייה לפרויקט חדש',
    form_status_required: 'אנא הוסיפו שם ואימייל או טלפון כדי שנוכל לחזור אליכם.',
    form_status_sending: 'שולח…',
    form_status_success: 'תודה, ההודעה בדרך אלינו. נחזור אליכם בהקדם.',
    form_status_error: 'משהו השתבש. נסו בוואטסאפ, או כתבו לנו ל-info@white-box.co.il.'
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

// Point every service link (home work-cards, the Services nav dropdown) at the
// correct language's URL: Hebrew lives at /services/<slug>.html, English at
// /en/services/<slug>.html. The FAQ link follows the same convention. This is
// what makes the bilingual home page link into the right-language sub-pages.
function updateServiceLinks(lang) {
  const base = lang === 'he' ? '/services/' : '/en/services/';
  document.querySelectorAll('[data-svc]').forEach(a => {
    a.setAttribute('href', base + a.getAttribute('data-svc') + '.html');
  });
  document.querySelectorAll('[data-faq-link]').forEach(a => {
    a.setAttribute('href', lang === 'he' ? '/faq.html' : '/en/faq.html');
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

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = dict[key] !== undefined ? dict[key] : fallback[key];
    if (value !== undefined) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}

  updateWhatsAppLinks(lang);
  updateServiceLinks(lang);
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

// ── Lenis smooth scrolling ───────────────────────────────────────────────
// Buttery inertial scroll for the whole page. Returns the instance (or null
// when skipped) so callers know whether smooth scroll is active.
function setupSmoothScroll() {
  // Respect reduced-motion, and bail gracefully if the CDN didn't load.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  if (typeof Lenis === 'undefined') return null;

  // expo-out: instant response, long graceful settle — used for in-page jumps.
  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  const lenis = new Lenis({
    // Continuous lerp follow instead of a fixed duration: the wheel glides and
    // catches up smoothly frame-to-frame, which reads more premium than a timed
    // ease. Lower = smoother/floatier, higher = snappier; 0.08 is a touch
    // smoother than Lenis's 0.1 default.
    lerp: 0.08,
    smoothWheel: true
    // NOTE: Lenis's built-in `anchors` is deliberately NOT used. It resolves
    // targets with document.querySelector(href), and the logo's href="#" makes
    // querySelector('#') THROW. We handle every in-page #link ourselves below.
  });

  // Handle ALL in-page anchor links ourselves (nav, CTAs, next-teasers, scroll
  // cue, and the bare "#" logo). preventDefault stops the native jump; we do NOT
  // stop propagation, so other click handlers (form preselect, menu close) still
  // run. The bare "#" is treated as "scroll to top" — never passed to a selector.
  document.addEventListener('click', (e) => {
    const el = e.target;
    if (!(el instanceof Element)) return;
    const a = el.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;
    e.preventDefault();
    if (href === '#' || href === '#top') {
      // Hero "reappears" smoothly: only when the hero image is actually OFF
      // screen (we're scrolled down) do we hide it — invisible up there, so no
      // blink — then fade it back in slowly as the page glides home. The fade
      // runs concurrently with the scroll, so by the time the hero comes into
      // view it's already easing in. (No ScrollTrigger.refresh() here — it was
      // re-applying the parallax transforms and causing the flicker.)
      const heroImg = document.querySelector('.hero-image img');
      const canFadeHero = heroImg && typeof gsap !== 'undefined' &&
                          heroImg.getBoundingClientRect().bottom < 50;
      if (canFadeHero) {
        gsap.set(heroImg, { opacity: 0 });
        gsap.to(heroImg, { opacity: 1, duration: 1.6, ease: 'power2.out',
                           delay: 0.3, clearProps: 'opacity' });
      }
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: easeOutExpo,
        // Deterministically re-arm the glides so the work pictures (incl. the
        // first card) glide in fresh on the way back down.
        onComplete: () => { if (rearmGlides) rearmGlides(); }
      });
      return;
    }
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    lenis.scrollTo(target, { offset: -100, duration: 1.2, easing: easeOutExpo });
    // Restore the focus move native anchors give, for keyboard/screen-reader users.
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }, false);

  // Canonical Lenis + GSAP integration: drive Lenis from GSAP's ticker and feed
  // every scroll frame to ScrollTrigger so the glide animations track 1:1.
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    // try/catch so a single bad frame can never permanently kill the rAF loop
    // (which would drop the page back to un-smoothed native scrolling).
    gsap.ticker.add((time) => { try { lenis.raf(time * 1000); } catch (_) {} });
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = (time) => { try { lenis.raf(time); } catch (_) {} requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  return lenis;
}

// Module-scoped so the logo "home" handler can DETERMINISTICALLY re-arm the
// glides when you return to the top. (Relying on onLeaveBack to fire during the
// scroll-up proved unreliable on mobile — the first work card stayed revealed
// and never glided again. Rebuilding the triggers forces a clean re-hide.)
let rearmGlides = null;

// ── Scroll-driven "glide into place" reveals (GSAP ScrollTrigger) ─────────
// The work-grid cards deal themselves into their slots; section images glide
// in from alternating sides and settle. Each lands in its own spot — stacked
// in time, never stacked on top of one another.
function setupGlide() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Mirror the horizontal entrance direction for RTL (Hebrew).
  const dirSign = document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1;
  const groups = [];

  // Each group sets its elements to a hidden start state and batch-tweens them
  // to rest with a stagger (a row "deals" into place). clearProps hands each
  // element back to CSS afterwards so :hover lifts keep working.
  // group.build() is re-runnable: it kills the old trigger, re-hides every
  // element, and re-creates the batch — so onEnter fires fresh on the next
  // downward pass. That's how the pictures replay after returning home.
  const glide = (selector, fromState, toVars) => {
    const els = gsap.utils.toArray(selector);
    if (!els.length) return;

    const settle = Object.assign({ overwrite: true, clearProps: 'transform,willChange' }, toVars);
    const group = { els, triggers: [] };

    group.build = () => {
      group.triggers.forEach((t) => t.kill());
      els.forEach((el, i) => { el.__glideFrom = fromState(el, i); gsap.set(el, el.__glideFrom); });
      group.triggers = ScrollTrigger.batch(els, {
        start: 'top 88%',
        onEnter: (batch) => gsap.to(batch, settle),
        // Re-arm on manual upward scrolls too (the rebuild covers the logo home).
        onLeaveBack: (batch) => batch.forEach((el) => gsap.set(el, el.__glideFrom))
      });
    };
    group.build();
    groups.push(group);

    // Reload-mid-page safeguard: elements already scrolled fully past the top
    // never fire onEnter, so reveal those immediately instead of leaving them
    // stuck at their hidden start state.
    requestAnimationFrame(() => {
      els.forEach((el) => {
        if (el.getBoundingClientRect().bottom < 0) {
          gsap.set(el, { clearProps: 'transform,willChange', opacity: 1 });
        }
      });
    });
  };

  // 1) "Selected work" — the 9 asymmetric cards deal into their grid slots.
  glide('.work-card',
    (el, i) => {
      const d = (i % 2 === 0 ? -1 : 1) * dirSign;
      return { opacity: 0, yPercent: 8, xPercent: d * 6, rotation: d * 2.2,
               scale: 0.93, transformOrigin: 'center', willChange: 'transform' };
    },
    { opacity: 1, yPercent: 0, xPercent: 0, rotation: 0, scale: 1,
      duration: 0.9, ease: 'power3.out', stagger: 0.08 }
  );

  // 2) Section imagery — glide in from alternating sides and settle.
  glide('.detail-image, .collage-item, .studio-image',
    (el, i) => {
      const d = (i % 2 === 0 ? -1 : 1) * dirSign;
      return { opacity: 0, xPercent: d * 9, yPercent: 6, scale: 0.96,
               willChange: 'transform' };
    },
    { opacity: 1, xPercent: 0, yPercent: 0, scale: 1,
      duration: 1.0, ease: 'power3.out', stagger: 0.1 }
  );

  // Deterministic re-arm for the logo "home" action: rebuild every group so the
  // pictures (including the first work card) glide in fresh on the way down,
  // regardless of whether onLeaveBack fired during the scroll up.
  rearmGlides = () => groups.forEach((g) => g.build());

  // Recalculate trigger positions once fonts and lazy images have settled.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

// ── Velocity skew (Lenis "special sauce") ─────────────────────────────────
// Section images lean a hair in the scroll direction while you move fast, then
// settle back to flat when you stop — driven by Lenis's live scroll velocity.
// Applied only to detail/collage <img>s (which have no :hover transform), so
// the inline transform never clashes with a hover lift; the work-card images
// are intentionally excluded for that reason.
function setupVelocitySkew(lenis) {
  if (!lenis) return; // null under reduced-motion or if Lenis didn't load
  if (typeof gsap === 'undefined') return;

  const imgs = gsap.utils.toArray('.detail-image img, .collage-item img');
  if (!imgs.length) return;

  gsap.set(imgs, { transformOrigin: 'center center', willChange: 'transform' });

  // Smoothly interpolate each image toward the target skew so it eases in and
  // settles out rather than snapping to raw velocity.
  const skewTo = imgs.map((img) =>
    gsap.quickTo(img, 'skewY', { duration: 0.5, ease: 'power3.out' })
  );

  // Keep it a "hair": cap at ±4° and scale velocity down hard.
  const clampSkew = gsap.utils.clamp(-4, 4);
  lenis.on('scroll', (e) => {
    const skew = clampSkew((e.velocity || 0) * 0.12);
    for (let i = 0; i < skewTo.length; i++) skewTo[i](skew);
  });
}

// ── Hero scroll effects (scroll-cue fade + parallax depth) ────────────────
// Scroll-driven, so GSAP ScrollTrigger (fed by Lenis) owns these. The on-load
// entrance cascade lives in CSS; this is only what depends on scroll position.
// Everything maps to identity at scroll 0, so there's no effect on first paint
// or LCP — the parallax only engages once you start moving.
function setupHeroScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const hero = document.querySelector('.hero');
  if (!hero) return;
  gsap.registerPlugin(ScrollTrigger);

  // The scroll cue has done its job the moment you move — fade it out over the
  // first slice of the hero. (Opacity only, to keep its translateX centering.)
  const cue = document.querySelector('.scroll-cue');
  if (cue) {
    gsap.to(cue, {
      opacity: 0, ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: '22% top', scrub: true }
    });
  }

  // Parallax depth across the hero exit: the soft blobs lag behind while the
  // image and text drift at their own rates. Subtle on purpose.
  const parallax = (selector, yPct) => {
    const el = document.querySelector(selector);
    if (!el) return;
    gsap.to(el, {
      yPercent: yPct, ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
    });
  };
  parallax('.blob-1', 40);   // background blobs lag (drift down as you scroll up)
  parallax('.blob-2', 25);
  parallax('.hero-image', -6);  // foreground image lifts a hair faster
  parallax('.hero-text', -10);

  // NOTE: the hero image's "reappear on return home" is handled in the logo
  // click handler in setupSmoothScroll() (it fades the image in while the page
  // glides up), not here — doing it on scroll meant fighting the parallax and
  // flickering. See the a[href="#"] handler.

  window.addEventListener('load', () => ScrollTrigger.refresh());
}

function setupRevealAnimations() {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Text blocks keep the lightweight CSS reveal. The work cards, section images,
  // and collage tiles are handled by setupGlide() (GSAP) instead — so they're
  // intentionally NOT in this list to avoid two systems fighting over opacity.
  const items = document.querySelectorAll(
    '.detail-headline, ' +
    '.studio-headline, .studio-pullquote, ' +
    '.contact-headline, .contact-card, .contact-ctas'
  );
  items.forEach(el => el.classList.add('reveal'));

  document.querySelectorAll('.contact-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('cf-status');
  const waBtn = document.getElementById('cf-whatsapp');

  // Resolve a string in the current language, falling back to EN.
  const t = (key) => {
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const dict = strings[lang] || strings.en;
    return dict[key] !== undefined ? dict[key] : strings.en[key];
  };

  const getFields = () => ({
    name: form.querySelector('#cf-name').value.trim(),
    contact: form.querySelector('#cf-contact').value.trim(),
    type: form.querySelector('#cf-type').value.trim(),
    message: form.querySelector('#cf-message').value.trim()
  });

  const setStatus = (key, state) => {
    statusEl.textContent = t(key);
    statusEl.className = 'contact-form-status' + (state ? ' is-' + state : '');
  };

  // WhatsApp (secondary) — needs at least a name + message; contact is optional
  // since the conversation continues in WhatsApp itself.
  waBtn.addEventListener('click', () => {
    const f = getFields();
    if (!f.name || !f.contact) {
      setStatus('form_status_required', 'error');
      (f.name ? form.querySelector('#cf-contact') : form.querySelector('#cf-name')).focus();
      return;
    }
    const lines = [
      '*' + t('form_wa_title') + '*',
      t('form_name_label') + ': ' + f.name,
      t('form_contact_label') + ': ' + f.contact,
      t('form_type_label') + ': ' + (f.type || '-'),
      t('form_message_label') + ': ' + (f.message || '-')
    ];
    const url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
  });

  // Email (primary) — Web3Forms AJAX submit, visitor stays on the page.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = getFields();
    if (!f.name || !f.contact) {
      setStatus('form_status_required', 'error');
      return;
    }
    setStatus('form_status_sending', 'sending');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatus('form_status_success', 'success');
          form.reset();
        } else {
          setStatus('form_status_error', 'error');
        }
      })
      .catch(() => setStatus('form_status_error', 'error'));
  });

  // Contextual section CTAs: preselect the matching project type, then the
  // anchor href="#contact" scrolls the visitor straight to the form.
  document.querySelectorAll('[data-project]').forEach(link => {
    link.addEventListener('click', () => {
      const key = link.getAttribute('data-project');
      const select = form.querySelector('#cf-type');
      const opt = select && select.querySelector(`option[data-i18n="${key}"]`);
      if (opt) select.value = opt.value;
    });
  });
}

function setupStickyCta() {
  const sticky = document.getElementById('sticky-cta');
  if (!sticky || !('IntersectionObserver' in window)) return;

  // Top reference = the home hero, or (on service pages) the page hero / main.
  const top = document.querySelector('.hero') ||
              document.querySelector('.svc-hero') ||
              document.querySelector('main');
  const contact = document.getElementById('contact');  // only on the home page
  if (!top) return;

  let pastTop = false;
  let atContact = false;
  const update = () => {
    const show = pastTop && !atContact;
    sticky.classList.toggle('visible', show);
    sticky.setAttribute('aria-hidden', show ? 'false' : 'true');
  };

  new IntersectionObserver(([e]) => { pastTop = !e.isIntersecting; update(); },
    { threshold: 0 }).observe(top);
  // On the home page, hide once the contact section reaches mid-viewport (its own
  // CTAs take over). Service pages have no #contact, so the sticky stays visible.
  if (contact) {
    new IntersectionObserver(([e]) => { atContact = e.isIntersecting; update(); },
      { threshold: 0, rootMargin: '0px 0px -50% 0px' }).observe(contact);
  }
}

// Deep-link landing: when the home page is opened with a hash (e.g. a service page's
// "Contact" → /index.html#contact), scroll to that section AFTER load. The browser's
// native hash jump is unreliable here — Lenis takes over scrolling and lazy images
// shift the layout, so the native jump lands short or snaps back near the top. We
// re-scroll via Lenis with a few corrective passes (to absorb the image shift) and
// bail the moment the visitor scrolls themselves.
function setupInitialHashScroll(lenis) {
  const id = location.hash ? location.hash.slice(1) : '';
  if (!id) return;
  let target;
  try { target = document.getElementById(decodeURIComponent(id)); } catch (_) { target = document.getElementById(id); }
  if (!target) return;

  let cancelled = false;
  const cancel = () => { cancelled = true; };
  ['wheel', 'touchstart', 'keydown'].forEach(ev =>
    window.addEventListener(ev, cancel, { once: true, passive: true }));

  const go = () => {
    if (cancelled) return;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(target, { offset: -100, duration: 0.8 });
    } else {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo(0, y);
    }
  };

  const run = () => { let n = 0; const tick = () => { if (cancelled) return; go(); if (++n < 4) setTimeout(tick, 300); }; tick(); };
  if (document.readyState === 'complete') requestAnimationFrame(run);
  else window.addEventListener('load', () => requestAnimationFrame(run), { once: true });
}

// Accessible "Services" dropdown in the header nav. Hover-opens on desktop (CSS),
// but JS adds click/keyboard control + closes on outside-click / Escape.
function setupNavDropdown() {
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    const btn = dd.querySelector('.nav-dropdown-toggle');
    if (!btn) return;
    const open = (v) => { dd.classList.toggle('open', v); btn.setAttribute('aria-expanded', v ? 'true' : 'false'); };
    btn.addEventListener('click', (e) => { e.preventDefault(); open(!dd.classList.contains('open')); });
    dd.addEventListener('keydown', (e) => { if (e.key === 'Escape') { open(false); btn.focus(); } });
    document.addEventListener('click', (e) => { if (!dd.contains(e.target)) open(false); });
  });
}

// Cookie-consent banner copy. Hebrew is sized up in CSS (Heebo renders smaller).
const consentStrings = {
  en: {
    text: 'We use cookies to see how visitors use the site. Analytics only, never ads.',
    accept: 'Accept',
    decline: 'Decline'
  },
  he: {
    text: 'אנחנו משתמשים בעוגיות כדי להבין איך משתמשים באתר. רק לאנליטיקס, אף פעם לא לפרסום.',
    accept: 'אישור',
    decline: 'לא תודה'
  }
};

// Inject and configure GA4. Guarded so it loads at most once, and never with a
// placeholder ID. Called only after consent is granted.
function loadGA4() {
  if (window.__wbsGALoaded) return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf('G-') !== 0 || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
  window.__wbsGALoaded = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

// Cookie-consent gate. If the visitor already chose, honour it silently;
// otherwise show a dismissible banner and only load GA4 on Accept.
function setupConsentBanner() {
  let choice = null;
  try { choice = localStorage.getItem(CONSENT_KEY); } catch (_) {}
  if (choice === 'granted') { loadGA4(); return; }
  if (choice === 'denied') return;

  const banner = document.createElement('div');
  banner.className = 'wbs-consent';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML =
    '<p class="wbs-consent__text"></p>' +
    '<div class="wbs-consent__actions">' +
      '<button type="button" class="wbs-consent__btn wbs-consent__btn--decline"></button>' +
      '<button type="button" class="wbs-consent__btn wbs-consent__btn--accept"></button>' +
    '</div>';

  const textEl = banner.querySelector('.wbs-consent__text');
  const acceptBtn = banner.querySelector('.wbs-consent__btn--accept');
  const declineBtn = banner.querySelector('.wbs-consent__btn--decline');

  const render = (lang) => {
    const d = consentStrings[lang] || consentStrings.en;
    textEl.textContent = d.text;
    acceptBtn.textContent = d.accept;
    declineBtn.textContent = d.decline;
  };
  render(getSavedLang());

  // Keep the copy in sync if the visitor flips language while the banner is open
  // (home page only; sub-page toggles are <a> links that reload a fresh banner).
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => render(btn.dataset.lang));
  });

  const close = () => {
    banner.classList.remove('is-visible');
    setTimeout(() => banner.remove(), 350);
  };

  acceptBtn.addEventListener('click', () => {
    try { localStorage.setItem(CONSENT_KEY, 'granted'); } catch (_) {}
    loadGA4();
    close();
  });
  declineBtn.addEventListener('click', () => {
    try { localStorage.setItem(CONSENT_KEY, 'denied'); } catch (_) {}
    close();
  });

  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('is-visible'));
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
  setupNavDropdown();
  const lenis = setupSmoothScroll();  // Lenis — drives the GSAP ticker for setupGlide()
  setupHeroScroll();     // hero scroll-cue fade + parallax (top-of-page triggers first)
  setupGlide();          // GSAP ScrollTrigger — cards/images glide into place
  setupVelocitySkew(lenis);  // images lean with scroll velocity, settle at rest
  setupRevealAnimations();
  setupContactForm();
  setupStickyCta();
  setupInitialHashScroll(lenis);  // land on #contact/#work/#studio when arriving from a sub-page
  setupConsentBanner();  // cookie consent → loads GA4 only after Accept
});
