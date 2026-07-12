/* All bilingual copy for the service pages + FAQ. Edit here, then re-run
   `node _tools/build-services.mjs`. Hebrew is written for real search terms,
   not literal translation. */

/* The 3 service families (2026-07-07 regroup). Each service carries a
   `family` key + an `order` (its 01-10 display number). The SERVICES array
   itself stays in its historical order — sort by `order` wherever the
   family-grouped sequence matters (nav menus, sitemap is order-agnostic). */
export const FAMILIES = [
  { key: 'a', he: 'קירות ומשטחים', en: 'Walls & surfaces' },
  { key: 'b', he: 'פיסול ואובייקטים', en: 'Sculpture & objects' },
  { key: 'c', he: 'עיטור ופרטים', en: 'Ornament & detail' }
];

export const SERVICES = [
  {
    slug: 'plaster-walls', family: 'a', order: 1,
    he: {
      title: 'טיח דקורטיבי לקירות בעבודת יד | White Box Studio',
      desc: 'גימורי טיח דקורטיבי בעבודת יד לקירות, טקסטורות תבליט, פטינה מתיישנת ודוגמאות בהתאמה אישית לבתים פרטיים, מסעדות, מלונות בוטיק וחללי מסחר בישראל.',
      serviceType: 'טיח דקורטיבי לקירות', crumb: 'טיח דקורטיבי',
      eyebrow: '01 / טיח דקורטיבי לקירות',
      h1: 'טיח דקורטיבי לקירות, בעבודת יד',
      lead: 'לא צבע. לא טפט. קיר עם נוכחות חומרית.',
      intro: [
        'קיר יכול להיות הרבה יותר מצבע. טיח דקורטיבי בעבודת יד נותן לו טקסטורה ועומק, ומשנה את הדרך שבה האור משתקף ונע לאורך היום.',
        'כל גימור טיח אצלנו נעשה ביד, באתר, ישירות על הקיר. פרויקט אחד דורש תבליט עמוק בטקסטורת עור תנין; אחר דורש פטינה דקה שאת הדקויות שלה ניתן לראות רק מקרוב. אין שני קירות שנראים אותו דבר.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/01_plaster_1.jpg', alt: 'דוגמת סטנסיל דקורטיבית על קיר טיח כחול בגוון פטינה' },
        { src: '/assets/images/01_plaster_2.jpg', alt: 'פרט תבליט טיח בטקסטורת עור תנין' }
      ],
      applicationsTitle: 'איפה טיח דקורטיבי עובד',
      applications: ['קירות כוח ומבואות', 'סלונים וחללי מגורים', 'מסעדות, ברים ובתי קפה', 'חנויות בוטיק וחללי מסחר', 'לובי וקבלה במלונות', 'משטחי חוץ וחזיתות נבחרים'],
      finishesTitle: 'כיווני גימור',
      finishes: ['תבליט עמוק בעל אופי פיסולי (כמו עור תנין)', 'משטחים מתיישנים ופטינה', 'שכבות דקורטיביות עם שפה דוגמתית עדינה', 'טקסטורות בהשראת חומרי טבע או גימורים היסטוריים', 'משטחים גולמיים, מעודנים, דרמטיים או מאופקים'],
      customTitle: 'אפשרויות התאמה',
      custom: 'צבע, טקסטורה, כמה הדוגמה בולטת. הכול נקבע יחד אתכם. תביאו בריף מסודר או כמה תמונות השראה, ואנחנו נגזור מהן את הגימור.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'הבנת החלל', b: 'לומדים את החלל, את ההשראה ואת התחושה הרצויה לחדר.' },
        { t: 'הגדרת הכיוון', b: 'בוחרים טקסטורה, צבע ושפת גימור, ומתכננים את אופן היישום.' },
        { t: 'ביצוע באתר', b: 'הטיח מיושם ידנית, ישירות על הקיר, במידה ובקצב המתאימים לו.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'אפשר ליישם טיח דקורטיבי במגוון טקסטורות?', a: 'כן, מטקסטורה עדינה ומינימליסטית ועד תבליט עשיר ובולט מאוד. כל גימור נבנה בהתאמה אישית לאופי החלל.' },
        { q: 'הטיח הדקורטיבי מתאים לחללים מסחריים?', a: 'בהחלט. אנחנו מבצעים גימורי טיח במסעדות, בתי קפה, חנויות בוטיק, מלונות ומשרדים, בהתאם לאופי הפרויקט.' },
        { q: 'אפשר ליישם טיח דקורטיבי על קירות חוץ?', a: 'כן, על משטחי חוץ נבחרים, בחומרים עמידים, בכפוף לבדיקת התשתית ותנאי החשיפה של הקיר.' },
        { q: 'כמה זמן לוקח ביצוע של קיר טיח דקורטיבי?', a: 'זה תלוי בגודל הקיר ובמורכבות הגימור. לאחר היכרות עם הפרויקט נספק הערכת זמן מדויקת.' },
        { q: 'איך מתחילים פרויקט?', a: 'שולחים לנו תמונות השראה ופרטים על החלל, ואנחנו חוזרים עם כיוון גימור מתאים והצעת מחיר.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו אנחנו לוקחים פרויקטים בישראל בלבד.' }
      ],
      bandH2: 'רוצים קיר עם עומק, רכות ואופי שצבע או טפט לא יכולים לתת?',
      bandP: 'ספרו לנו על החלל, על הרעיונות ועל תמונות ההשראה שמדברות אליכם, ונחזור אליכם עם כיוון מתאים.'
    },
    en: {
      title: 'Decorative Plaster Wall Finishes in Israel | The White Box Studio',
      desc: 'Handmade decorative plaster wall finishes, relief textures, aged patina, and custom patterns for homes, restaurants, hotels, and boutique interiors across Israel.',
      serviceType: 'Decorative plaster wall finishes', crumb: 'Plaster wall finishes',
      eyebrow: '01 / Plaster wall finishes',
      h1: 'Decorative plaster wall finishes, applied by hand',
      lead: 'Not paint. Not wallpaper. A wall with material presence.',
      intro: [
        'A wall can do more than hold a color. Hand-applied plaster gives it texture and depth, and changes the way light moves across it through the day.',
        'We mix and trowel every plaster finish on site, straight onto your wall. One project wants deep, crocodile-skin relief; the next, a thin aged patina you only catch up close. No two walls leave the same.'
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/01_plaster_1.jpg', alt: 'Decorative stencil pattern over patinated blue plaster wall' },
        { src: '/assets/images/01_plaster_2.jpg', alt: 'Crocodile-skin textured plaster relief detail' }
      ],
      applicationsTitle: 'Where plaster works',
      applications: ['Feature walls and entry areas', 'Living rooms and residential spaces', 'Restaurants, bars, and cafés', 'Boutiques and retail interiors', 'Hotel lobbies and reception areas', 'Selected exterior surfaces and façades'],
      finishesTitle: 'Finish directions',
      finishes: ['Deep relief textures with sculptural character (crocodile-skin and more)', 'Aged and weathered surfaces with patina', 'Decorative overlays with a subtle pattern language', 'Textures inspired by natural references or historic finishes', 'Surfaces that read raw, refined, dramatic, or restrained'],
      customTitle: 'Customization',
      custom: "Color, texture, how bold the pattern reads. All of it is yours to set. Bring a detailed brief or a few reference photos, and we'll work the finish out from there.",
      processTitle: 'How we work',
      steps: [
        { t: 'Understand the space', b: 'We study the space, the references, and the feeling the room is meant to hold.' },
        { t: 'Define the direction', b: 'We choose texture, color, and finish language, and plan the application approach.' },
        { t: 'Apply on site', b: 'The plaster is applied by hand, directly on the wall, at the scale and rhythm it calls for.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can plaster be applied in many textures?', a: 'Yes, from a subtle, minimal finish to a richly expressive, high-relief surface. Every finish is built bespoke to the character of the space.' },
        { q: 'Is decorative plaster suitable for commercial spaces?', a: 'Absolutely. We apply plaster finishes in restaurants, cafés, boutiques, hotels, and offices, depending on the project.' },
        { q: 'Can decorative plaster be applied to exterior walls?', a: "Yes, on selected exterior surfaces, with our durable materials, subject to a review of the substrate and the wall's exposure conditions." },
        { q: 'How long does a plaster wall take to complete?', a: 'It depends on the size of the wall and the complexity of the finish. We provide a precise time estimate once we understand the project.' },
        { q: 'How do I start a project?', a: "Send us reference images and details about your space, and we'll come back with a suitable finish direction and a quote." },
        { q: 'Do you work only in Israel?', a: 'Yes, we currently take on projects in Israel only.' }
      ],
      bandH2: 'Looking for a wall with more depth, softness, and individuality than paint or wallpaper can offer?',
      bandP: "Tell us about your space, your ideas, and the reference images that speak to you, and we'll come back with a direction."
    }
  },

  {
    slug: 'coffee-tables', family: 'b', order: 6,
    he: {
      title: 'שולחנות קפה פיסוליים בהזמנה אישית | White Box Studio',
      desc: 'שולחנות קפה פיסוליים בעבודת יד, בסיסים יצוקים בהתאמה אישית, גימורים ייחודיים וצורות פסל לחללי יוקרה, חללי אירוח בבתי מלון וסלונים.',
      serviceType: 'שולחנות קפה פיסוליים', crumb: 'שולחנות קפה פיסוליים',
      eyebrow: '06 / שולחנות קפה פיסוליים',
      h1: 'שולחנות קפה פיסוליים, בהזמנה אישית',
      lead: 'פריט אחד. כל האופי של החדר.',
      intro: [
        'רוב הרהיטים ממלאים חדר. מעטים נותנים לו מרכז כובד. שולחן קפה פיסולי הוא עדיין שולחן, אבל הוא גם הדבר הראשון שרואים בכניסה.',
        'אנחנו מתייחסים לכל שולחן כמו לפסל שבמקרה אפשר להניח עליו כוס. הפרופורציות, הגימור, הצבע וצורת הבסיס נקבעים ביחס לחדר שבו הוא יוצב. אנחנו מייצרים אובייקט אחד, לחדר אחד ולא משהו מהמדף.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/02_tables_1.jpg', alt: 'שולחן קפה פיסולי בצורת ראש סוס בגוון רוז׳-גולד' },
        { src: '/assets/images/02_tables_2.jpeg', alt: 'שולחן קפה כחול ססגוני מעוצב עם פולי קפה' }
      ],
      applicationsTitle: 'למי זה מתאים',
      applications: ['מעצבי פנים שמחפשים פריט מגדיר', 'לקוחות פרטיים', 'לובי וחללי אירוח במלונות', 'סלונים וחללי קונספט', 'חללי מסחר יוקרתיים'],
      finishesTitle: 'שפת עיצוב',
      finishes: ['מונוליטי ופיסולי', 'מטאלי ומבריק', 'רך וזורם', 'בסיסים יצוקים בהתאמה אישית', 'גוונים ססגוניים ועזים', 'צורות אורגניות או אדריכליות'],
      customTitle: 'אפשרויות התאמה',
      custom: 'מידות, גובה, צללית, גימור, צבע, כמה נועז יהיה הפריט. הכול מותאם לחדר ולמה שאתם מחפשים.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'הבנת החלל', b: 'לומדים את הקונטקסט הפנימי, הפרופורציות וההפניות.' },
        { t: 'פיתוח כיוון', b: 'מגבשים כיוון לצורה ולגימור לפני הייצור.' },
        { t: 'ייצור הפריט', b: 'יוצרים את השולחן הסופי בעבודת יד.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'אפשר להתאים את המידות?', a: 'כן, לפי החדר ומערך הישיבה.' },
        { q: 'אפשר להתאים את הגימור לפלטת הצבעים של החלל?', a: 'בהחלט.' },
        { q: 'אלה פריטים מהמדף?', a: 'לא, כל שולחן נוצר בהזמנה אישית לפרויקט.' },
        { q: 'כמה זמן לוקח?', a: 'תלוי במורכבות; נספק הערכה לאחר היכרות עם הפרויקט.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'רוצים שולחן שמרגיש ייחודי, אמנותי ומיוצר במיוחד לחדר שלכם?',
      bandP: 'שלחו לנו את פרטי הפרויקט ותמונות השראה, ונחזור אליכם עם כיוון.'
    },
    en: {
      title: 'Custom Sculptural Coffee Tables | The White Box Studio',
      desc: 'Custom sculptural coffee tables with hand-finished surfaces, cast bases, and statement forms for premium interiors, hotel lobbies, and living rooms in Israel.',
      serviceType: 'Sculptural coffee tables', crumb: 'Sculptural coffee tables',
      eyebrow: '06 / Sculptural coffee tables',
      h1: 'Sculptural coffee tables that define the room',
      lead: 'One piece. The whole character of the room.',
      intro: [
        'Some pieces support a room. Others give it its centre of gravity. A sculptural coffee table belongs to the second category: functional, yes, but also atmospheric, expressive, and impossible to ignore.',
        "We treat each table as a sculpture that happens to be useful. Proportions, finish, color, the shape of the base. We set them up against the room it'll sit in. You get one object made for one space, not a catalogue piece."
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/02_tables_1.jpg', alt: 'Rose-gold sculptural horse-head coffee table' },
        { src: '/assets/images/02_tables_2.jpeg', alt: 'Iridescent blue coffee table styled with coffee beans' }
      ],
      applicationsTitle: 'Who this is for',
      applications: ['Interior designers seeking a defining piece', 'Private clients', 'Hotel lobbies and hospitality spaces', 'Living rooms and concept spaces', 'Premium retail environments'],
      finishesTitle: 'Design language',
      finishes: ['Monolithic and sculptural', 'Metallic and reflective', 'Soft-edged and organic', 'Custom-cast bases', 'Iridescent or bold color', 'Organic or architectural forms'],
      customTitle: 'Customization',
      custom: "Size, height, silhouette, finish, color, how loud or quiet it reads. All set to the room and what you're after.",
      processTitle: 'How we work',
      steps: [
        { t: 'Understand the space', b: 'We study the interior context, proportions, and references.' },
        { t: 'Develop the direction', b: 'We shape a direction for form and finish before fabrication.' },
        { t: 'Make the piece', b: 'We craft the final table by hand.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can dimensions be adjusted?', a: 'Yes, to fit the room and seating layout.' },
        { q: 'Can the finish match the interior palette?', a: 'Absolutely.' },
        { q: 'Are these off-the-shelf pieces?', a: 'No, each table is made bespoke per project.' },
        { q: 'How long does it take?', a: 'It depends on complexity; we provide an estimate once we know the project.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Want a coffee table that feels collected, artistic, and built for one room only?',
      bandP: "Send us your project details and visual references, and we'll come back with a direction."
    }
  },

  {
    slug: 'custom-sculpture', family: 'b', order: 5,
    he: {
      title: 'פיסול בהזמנה אישית בישראל | White Box Studio',
      desc: 'עבודות פיסול בהזמנה אישית בישראל, מדמויות קלאסיות ועיטוריות ועד פסלים עכשוויים, ראשי חיות ומשטחי תבליט, בעבודת יד.',
      serviceType: 'פיסול בהזמנה אישית', crumb: 'פיסול בהזמנה אישית',
      eyebrow: '05 / פיסול בהזמנה אישית',
      h1: 'פיסול בהזמנה אישית, מעוצב ומיוצר בעבודת יד',
      lead: 'אם אפשר לדמיין את זה, אפשר לפסל את זה.',
      intro: [
        'פסל בהזמנה אישית משנה את האופן שבו חלל מרגיש. הוא יכול לעגן כניסה, לתת פוקוס לחלל, או פשוט לגרום לחדר להרגיש מושלם. בניגוד לאובייקט מהמדף, הפסל המוזמן מיוצר ביד במיוחד לחלל אחד מוגדר, בקנה מידה אחד, מסיבה אחת.',
        'תנו לנו סקיצה, תמונה, או אפילו משפט אחד ונפסל אותם ביד. גילפנו "דוד" שלם. ייצרנו פריטים שובבים חד-פעמיים שהגיוניים רק למי שהזמין אותם. קלאסי או מוזר, עשינו ואהבנו את שניהם.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/03_sculpture_2.jpeg', alt: 'ראש אריה מפוסל גדול' },
        { src: '/assets/images/03_sculpture_1.png', alt: 'שעתוק מגולף בעבודת יד של "דוד" של מיכלאנג׳לו', transparent: true }
      ],
      applicationsTitle: 'איפה פיסול עובד',
      applications: ['בתים פרטיים', 'חללי אירוח ומלונות', 'חללי מסחר וחנויות', 'פינות כניסה וקירות כוח', 'חללים ממותגים או מבוססי-אירוע'],
      finishesTitle: 'מה אפשר ליצור',
      finishes: ['פיסול פיגורטיבי', 'צורות בהשראה קלאסית', 'ראשי חיות ופריטים דקורטיביים', 'לוחות תבליט וגילופי קיר', 'אובייקטים פיסוליים עכשוויים', 'הזמנות לפי תמונות או קונספט מקורי'],
      customTitle: 'קנה מידה וחומר',
      custom: 'מאובייקטים דקורטיביים קטנים ועד פריטי הצהרה גדולים, בכל חומר. נעזור לכם להגדיר את קנה המידה, הגימור והמיקום, כך שהעבודה תשתלב בחדר ולא רק תקשט אותו.',
      processTitle: 'תהליך ההזמנה',
      steps: [
        { t: 'קונספט', b: 'כל פסל מתחיל ברעיון, בהפניה או בסקיצה.' },
        { t: 'פיתוח', b: 'מגדירים קנה מידה, חומר וגימור.' },
        { t: 'יצירה והתקנה', b: 'מפסלים, עושים גימורים ומתכננים את ההתקנה.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'אפשר לעבוד לפי תמונות או סקיצות?', a: 'כן.' },
        { q: 'איזה קנה מידה אפשרי?', a: 'מאובייקטים דקורטיביים ועד פריטי הצהרה גדולים.' },
        { q: 'אפשר לשעתק דמויות קלאסיות?', a: 'כן, אפילו "דוד" של מיכלאנג׳לו.' },
        { q: 'איך מתחילים?', a: 'משתפים קונספט, הפניות ופרטי חלל.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'יש לכם רעיון ברור לפסל, או שאתם בשלב גיבוש הרעיון?',
      bandP: 'שתפו אותנו בהשראה שלכם, בקונספט ובפרטי החלל.'
    },
    en: {
      title: 'Custom Sculpture in Israel | Bespoke Commissions by White Box',
      desc: 'Bespoke sculpture commissions in Israel, from classical and ornamental forms to contemporary objects, animal busts, and relief panels, all made by hand.',
      serviceType: 'Custom sculpture', crumb: 'Custom sculpture',
      eyebrow: '05 / Sculpture Commission',
      h1: 'Custom sculpture, designed and made by hand',
      lead: 'If you can imagine it, we can sculpt it.',
      intro: [
        'Custom sculpture changes how a space feels. It can anchor an entrance, hold a focal point, or just make a room feel finished. Unlike something off a shelf, a commissioned piece is made for one setting, at one scale, for one reason.',
        "We sculpt by hand, turning a brief or a rough sketch into a finished form. We've done classical and ornamental work, and we've done pieces that are contemporary, playful, or built around one client's private references, including a hand-carved David."
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/03_sculpture_2.jpeg', alt: 'Large sculptural lion head detail' },
        { src: '/assets/images/03_sculpture_1.png', alt: "Hand-carved replica of Michelangelo's David", transparent: true }
      ],
      applicationsTitle: 'Where sculpture works',
      applications: ['Private homes', 'Hospitality spaces and hotels', 'Retail environments', 'Entry areas and feature walls', 'Event-driven or branded interiors'],
      finishesTitle: 'What can be created',
      finishes: ['Figurative sculpture', 'Classical-inspired forms', 'Animal busts and decorative pieces', 'Relief panels and carved wall elements', 'Contemporary sculptural objects', 'Commissions from references or original concepts'],
      customTitle: 'Scale and material',
      custom: "From small decorative objects to large statement pieces, in any material. We'll help work out the scale, the finish, and where it sits, so it belongs in the room rather than decorating it.",
      processTitle: 'The commission process',
      steps: [
        { t: 'Concept', b: 'Every sculpture begins with an idea, a reference, or a sketch.' },
        { t: 'Development', b: 'We define scale, material, and finish.' },
        { t: 'Making and install', b: 'We sculpt, finish, and plan the installation.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can you work from references or sketches?', a: 'Yes.' },
        { q: 'What scale is possible?', a: 'From decorative objects to larger statement pieces.' },
        { q: 'Can you reproduce classical figures?', a: "Yes, even Michelangelo's David." },
        { q: 'How do I start?', a: 'Share your concept, references, and space details.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Have a sculpture idea, clear or still forming?',
      bandP: 'Share your references, concept, and space details with us.'
    }
  },

  {
    slug: 'gypsum-panels', family: 'c', order: 9,
    he: {
      title: 'פאנלים דקורטיביים מגבס לקירות ולתקרות | White Box Studio',
      desc: 'פאנלי גבס דקורטיביים בעבודת יד לקירות ולתקרות בישראל, דוגמאות מותאמות אישית, תבליט אדריכלי ומשטחים עיטוריים.',
      serviceType: 'פאנלי גבס דקורטיביים', crumb: 'פאנלי גבס',
      eyebrow: '09 / פאנלים מגבס לקירות ולתקרות',
      h1: 'פאנלים מגבס לקירות ולתקרות, מיוצרים בעבודה ידנית',
      lead: 'תקרה לא חייבת להיות חלקה.',
      intro: [
        'חלק מרגעי העיצוב החזקים ביותר קורים מעל גובה העיניים, על המשטחים הגדולים והשקטים שרוב החדרים משאירים חלקים. פאנל גבס הופך תקרה או קיר לאובייקט בפני עצמו, עם עומק ודוגמה אמיתיים.',
        'אנחנו יוצקים פאנלים מגבס לקירות ולתקרות, חלקם גיאומטריים ומדויקים, חלקם פיגורטיביים או קלאסיים. פאנל אחד שיצקנו היה דיוקן של מרילין מונרו בפסיפס; אחר, דוגמה מרוקאית על פני תקרה שלמה.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/04_gypsum_1.jpg', alt: 'דיוקן מרילין מונרו, פסיפס קיר יצוק מגבס' },
        { src: '/assets/images/04_gypsum_2.jpg', alt: 'תקרת גבס דקורטיבית בדוגמה מרוקאית, פאנלים תלת-ממדיים יצוקים' }
      ],
      applicationsTitle: 'יישומים',
      applications: ['תקרות כוח', 'קירות הצהרה', 'חללי כניסה', 'חללי אירוח ומלונות', 'פרויקטים למגורים', 'חדרי אוכל ולובי'],
      finishesTitle: 'כיווני עיצוב',
      finishes: ['מערכות גיאומטריות ומבוססות דפוס חוזר', 'מוטיבים עיטוריים קלאסיים', 'קומפוזיציות פיגורטיביות או מבוססות-תבליט', 'גימורי קיר מודולריים חוזרים', 'עיצובים מותאמים להשראה או לפלטת החומרים של הפרויקט'],
      customTitle: 'למה לבחור בפאנלי גבס',
      custom: 'תקרה חלקה הופכת לדבר שהחדר בנוי סביבו, ולא רק רקע. אתם מחליטים מה הדוגמה וקנה המידה.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'לימוד החלל', b: 'בוחנים מידות, קונטקסט והפניות.' },
        { t: 'הגדרת כיוון', b: 'מגדירים את הדוגמה ואת קנה המידה.' },
        { t: 'ייצור ושילוב', b: 'מייצרים את הפאנל ומכינים לשילוב בחלל.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'אפשר לעצב פאנלים גם לקירות וגם לתקרות?', a: 'כן.' },
        { q: 'אפשר להתאים דוגמה וקנה מידה?', a: 'כן, באופן מלא.' },
        { q: 'הפאנלים מתאימים לחללים מסחריים?', a: 'כן, בהתאם לפרויקט.' },
        { q: 'איך מתחילים?', a: 'שולחים את פרטי החלל ותמונות השראה.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'צריך קיר או תקרה עם יותר נוכחות, מבנה ואימפקט?',
      bandP: 'שתפו אותנו בפרטי החלל, ונחזור אליכם עם כיוון.'
    },
    en: {
      title: 'Decorative Gypsum Panels for Walls & Ceilings in Israel | White Box Studio',
      desc: 'Hand-cast decorative gypsum panels for walls and ceilings in Israel, bespoke patterns, architectural relief, and ornamental surfaces, custom-made for interiors.',
      serviceType: 'Decorative gypsum panels', crumb: 'Gypsum panels',
      eyebrow: '09 / Gypsum panels for walls & ceilings',
      h1: 'Hand-cast gypsum panels for walls and ceilings',
      lead: "A ceiling doesn't have to be flat.",
      intro: [
        'Some of the best design moments happen above eye level, on the big quiet surfaces most rooms leave blank. A gypsum panel turns a ceiling or a wall into a feature in its own right, with real depth and pattern.',
        'We cast gypsum panels for walls and ceilings, some strict and geometric, some figurative or classical. One recent panel was a Marilyn Monroe portrait built up as a mosaic; another, a Moroccan lattice across a whole ceiling.'
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/04_gypsum_1.jpg', alt: 'Marilyn Monroe portrait, hand-cast gypsum wall mosaic' },
        { src: '/assets/images/04_gypsum_2.jpg', alt: 'Moroccan-pattern decorative gypsum ceiling, hand-cast 3D panels' }
      ],
      applicationsTitle: 'Applications',
      applications: ['Feature ceilings', 'Statement walls', 'Entrance spaces', 'Hospitality interiors', 'Residential projects', 'Dining rooms and lobbies'],
      finishesTitle: 'Design directions',
      finishes: ['Geometric and pattern-based systems', 'Classical ornamental motifs', 'Figurative or relief-based compositions', 'Repeating modular wall treatments', 'Custom designs from references or the project palette'],
      customTitle: 'Why choose gypsum panels',
      custom: 'A flat ceiling stops being background and becomes the thing the room is built around. Pattern and scale are yours to set.',
      processTitle: 'How we work',
      steps: [
        { t: 'Study the space', b: 'We review dimensions, context, and references.' },
        { t: 'Define the direction', b: 'We set the pattern and scale.' },
        { t: 'Produce and integrate', b: 'We make the panel and prepare it for the space.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can panels be designed for both walls and ceilings?', a: 'Yes.' },
        { q: 'Can pattern and scale be customized?', a: 'Yes, fully.' },
        { q: 'Are the panels suitable for commercial spaces?', a: 'Yes, depending on the project.' },
        { q: 'How do I start?', a: 'Send space details and reference images.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Need a wall or ceiling with more presence, structure, and impact?',
      bandP: 'Share the space details with us, and we will come back with a direction.'
    }
  },

  {
    slug: 'display-accessories', family: 'b', order: 7,
    he: {
      title: 'אביזרי תצוגה, אירועים ומתנה בהזמנה אישית | White Box Studio',
      desc: 'אביזרי תצוגה, פרופים לאירועים, מתנות ממותגות ופריטים דקורטיביים בעבודת יד לקמעונאות, השקות ואירועים פרטיים בישראל.',
      serviceType: 'אביזרי תצוגה ומתנות', crumb: 'אביזרי תצוגה ומתנות',
      eyebrow: '07 / אביזרי תצוגה, אירועים ומתנה',
      h1: 'חפצים קטנים שמשנים את כל האווירה',
      lead: 'הפרטים הקטנים הם הסיפור.',
      intro: [
        'לא כל פרויקט מתחיל בקיר או בחדר. לפעמים החלק הזכור ביותר בחוויה הוא חפץ קטן יותר: סטנד תצוגה, פרופ, אביזר בעבודת יד, כלי הגשה, או פריט דקורטיבי שמחזיק יחד את כל הטון של האירוע או הסביבה.',
        'סטנדים, פרופים, כלי הגשה, מתנות ותפאורות לאירועים. אנחנו מייצרים אותם בהזמנה אישית לחנויות, להשקות ולאירועים. אולי זה לא הדבר הכי גדול בחדר אבל זה כמעט תמיד הדבר שבסוף מצלמים.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/05_display_tables.jpg', alt: 'שולחנות תצוגה עגולים מוזהבים בעבודת יד' },
        { src: '/assets/images/05_display_flowers.jpg', alt: 'קישוטי פרחים צבעוניים בעבודת יד' },
        { src: '/assets/images/05_display_hairpins.jpg', alt: 'סיכת ראש מוזהבת בעבודת יד משובצת פנינים' }
      ],
      applicationsTitle: 'שימושים',
      applications: ['פריטי תצוגה לקמעונאות ולמוצרים', 'פרופים לאירועים והתקנות מעוצבות', 'אביזרים דקורטיביים להשקות ולרגעים ממותגים', 'חפצים למתנות בעבודת יד', 'חפצים קטנים שמשלימים חלל או עריכת שולחן'],
      finishesTitle: 'מה אפשר להתאים',
      finishes: ['נושא ופלטת צבעים', 'מקרה השימוש', 'הזהות החזותית', 'שפת החומר', 'כמות, פריט בודד או סדרה'],
      customTitle: 'פריט בודד או סדרה',
      custom: 'אפשר ליצור פריט בודד או סדרה שלמה, מותאמים למותג, לאירוע או לאדם שמקבל אותם.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'מטרת הפריט', b: 'מבינים את המטרה ואת האווירה שיש ליצור.' },
        { t: 'הגדרת כיוון', b: 'מגדירים השראות, צורה ושפת חומר.' },
        { t: 'פיתוח וייצור', b: 'עוברים לפיתוח ולייצור.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'אפשר ליצור פריט בודד או רק סטים?', a: 'שניהם אפשריים.' },
        { q: 'זה מתאים לקמעונאות ולאירועים?', a: 'כן.' },
        { q: 'אפשר להתאים למיתוג ספציפי?', a: 'בהחלט.' },
        { q: 'איך מתחילים?', a: 'משתפים את הקונספט.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'צריך חפץ מותאם אישית שייתן לאירוע, לתצוגה או למתנה את הזהות שלהם?',
      bandP: 'שתפו אותנו בקונספט, ונחזור אליכם עם כיוון.'
    },
    en: {
      title: 'Custom Display, Event & Gift Accessories | White Box Studio',
      desc: 'Handmade display accessories, event props, gift elements, and branded decorative pieces for retail, launches, private events, and styled interiors in Israel.',
      serviceType: 'Display, event & gift accessories', crumb: 'Display & gift accessories',
      eyebrow: '07 / Display, event & gift accessories',
      h1: 'Small-scale objects that carry the whole atmosphere',
      lead: 'The small detail is the whole story.',
      intro: [
        'Not every project begins with a wall or a room. Sometimes the most memorable part of an experience is a smaller object: a display stand, a prop, a handmade accessory, a presentation element, or a decorative piece that holds the tone of the entire event or setting together.',
        "We make small and large custom pieces for retail displays, launches, event decorations, gifts, display stands, props and presentation details. They could be small or large, but they're usually the thing people end up photographing."
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/05_display_tables.jpg', alt: 'Gold scalloped-edge display side tables' },
        { src: '/assets/images/05_display_flowers.jpg', alt: 'Colorful handmade jewelled flower fixtures' },
        { src: '/assets/images/05_display_hairpins.jpg', alt: 'Handmade gilded hair pin comb with pearl details' }
      ],
      applicationsTitle: 'Use cases',
      applications: ['Retail and product display pieces', 'Event props and styled installations', 'Decorative accessories for launches and branded moments', 'Handmade gift elements', 'Small objects that complete a space or table setting'],
      finishesTitle: 'What can be tailored',
      finishes: ['Theme and color palette', 'Use case', 'Visual identity', 'Material expression', 'Quantity, a single piece or a set'],
      customTitle: 'One piece or a set',
      custom: "We can make a single piece or a full set, built around your brand, your event, or whoever's receiving it.",
      processTitle: 'How we work',
      steps: [
        { t: 'Purpose of the piece', b: 'We understand its purpose and the atmosphere it must create.' },
        { t: 'Define the direction', b: 'We set references, form, and material language.' },
        { t: 'Develop and produce', b: 'We move into development and production.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can you create a single piece or only sets?', a: 'Both are possible.' },
        { q: 'Is this suitable for retail and events?', a: 'Yes.' },
        { q: 'Can it be tailored to specific branding?', a: 'Absolutely.' },
        { q: 'How do I start?', a: 'Share the concept with us.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Need a custom detail piece to give an event, display, or gift its identity?',
      bandP: 'Share the concept with us, and we will come back with a direction.'
    }
  },

  {
    slug: 'iron-look-coating', family: 'a', order: 3,
    he: {
      title: 'ציפוי דמוי ברזל לדלתות ולקירות בישראל | White Box Studio',
      desc: 'ציפוי דמוי ברזל לדלתות, קירות ומשטחים בישראל, גימורי פטינה עשירים עם נוכחות של ברזל מחושל, בלי המשקל של ברזל מלא.',
      serviceType: 'ציפוי דמוי ברזל', crumb: 'ציפוי דמוי ברזל',
      eyebrow: '03 / ציפוי דמוי ברזל לדלתות וקירות',
      h1: 'ציפוי דמוי ברזל עם נוכחות של מתכת מחושלת',
      lead: 'ברזל. בלי הברזל.',
      intro: [
        'ברזל מושך את העין: האפלוליות, המשקל, התחושה שהוא היה שם תמיד. אבל ברזל מלא לא תמיד מעשי. ציפוי דמוי ברזל נותן את המראה של המתכת, עם הרבה יותר חופש למיקום ולאופן היישום.',
        'אנחנו מיישמים ציפוי דמוי ברזל על דלתות, קירות ומשטחים נבחרים, ובונים גימור שנראה כמו מתכת מחושלת, חלודה חמה או פלדה מעושנת. העין מתרשמת מהמשקל והעומק של ברזל, אך הפריט עצמו אינו נושא משקל כבד.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/06_iron_1.jpg', alt: 'דלת כניסה בציפוי דמוי ברזל חלוד' },
        { src: '/assets/images/06_iron_2.jpg', alt: 'רשת דוגמיות של טקסטורת דמוי ברזל' }
      ],
      applicationsTitle: 'איפה זה עובד',
      applications: ['דלתות ודלתות כניסה', 'קירות כוח', 'לובי', 'חללי מסחר', 'חללי אירוח ומלונות', 'פרטי ריהוט ואדריכלות נבחרים'],
      finishesTitle: 'כיווני גימור',
      finishes: ['פטינה כהה ומתכת מעושנת', 'גוונים בהשראת חלודה חמה', 'אופי פחם וברזל מחושל', 'משטחי מתכת מתיישנים ועדינים', 'גימורים שכבתיים עם תנועה ורמזי חמצון'],
      customTitle: 'היתרון',
      custom: 'שליטה הרבה יותר טובה בגוון ובטקסטורה מכל מוצר מתכת מהמדף. אנו מאפשרים להביא את מראה הברזל למקומות שבהם ברזל אמיתי כבד מדי או פשוט לא מתאים הנדסית להתקנה כמו בדלת פנים.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'הגדרת המשטח', b: 'מגדירים את המשטח, האווירה וכיוון ההשראות.' },
        { t: 'בחירת אפקט', b: 'קובעים את אפקט המתכת ורמת העוצמה.' },
        { t: 'יישום', b: 'מיישמים את הציפוי באתר.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'אפשר להשתמש בזה על דלתות וקירות?', a: 'כן.' },
        { q: 'אפשר לשלוט בגוון?', a: 'כן, מעדין ועד דרמטי.' },
        { q: 'זה עמיד?', a: 'הגימור מותאם לשימוש ולמיקום; נייעץ לפי הפרויקט.' },
        { q: 'איך מתחילים?', a: 'שולחים פרטי משטח ותמונות השראה.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'צריך את העוצמה והאווירה של מתכת, בלי המשקל המלא של ברזל?',
      bandP: 'שתפו אותנו בפרטי המשטח ובהשראות.'
    },
    en: {
      title: 'Iron-Look Coating for Doors & Walls in Israel | White Box Studio',
      desc: 'Decorative iron-look coating for doors, walls, and surfaces in Israel, patina-rich finishes with the visual power of forged metal, without the weight of solid iron.',
      serviceType: 'Iron-look coating', crumb: 'Iron-look coating',
      eyebrow: '03 / Iron-look coating for doors & walls',
      h1: 'Iron-look coating with the presence of forged metal',
      lead: 'Iron. Without the iron.',
      intro: [
        "Iron pulls you in: the darkness, the weight, the sense that it's been there forever. But solid iron isn't always practical. An iron-look coating gives you the look of the metal with far more freedom in how and where it goes on.",
        'We apply iron-look coatings to doors, walls, and select surfaces, building up finishes that read as forged metal, warm rust, or smoked steel. You get the weight and depth of iron on the eye, without the weight on the hinges.'
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/06_iron_1.jpg', alt: 'Rusted iron-look coated entry door' },
        { src: '/assets/images/06_iron_2.jpg', alt: 'Iron-look texture sample grid' }
      ],
      applicationsTitle: 'Where it works',
      applications: ['Doors and entry doors', 'Accent walls', 'Entry moments', 'Commercial interiors', 'Hospitality spaces', 'Selected furniture or architectural details'],
      finishesTitle: 'Finish directions',
      finishes: ['Dark patina and smoked metal', 'Warm rust-inspired tones', 'Charcoal and forged-iron character', 'Subtle aged-metal surfaces', 'Layered finishes with movement and oxidation references'],
      customTitle: 'The benefit',
      custom: "You get more control over tone and texture than any off-the-shelf metal. And you can apply the look of iron where real iron would be too heavy or just won't go, like an interior door.",
      processTitle: 'How we work',
      steps: [
        { t: 'Define the surface', b: 'We define the surface, atmosphere, and reference direction.' },
        { t: 'Choose the effect', b: 'We determine the metal effect and intensity.' },
        { t: 'Apply', b: 'We apply the coating on site.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can this be used on doors and walls?', a: 'Yes.' },
        { q: 'Can the tone be adjusted?', a: 'Yes, from subtle to dramatic.' },
        { q: 'Is it durable?', a: 'The finish is matched to use and location; we advise per project.' },
        { q: 'How do I start?', a: 'Send surface details and reference images.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Need the strength and atmosphere of metal, without solid iron?',
      bandP: 'Share the surface details and references with us.'
    }
  },

  {
    slug: 'capitals-ornaments', family: 'c', order: 10,
    he: {
      title: 'כותרות ועיטורים דקורטיביים מגבס בישראל | White Box Studio',
      desc: 'כותרות עמודים דקורטיביות, עיטורי גבס ואלמנטים אדריכליים בהזמנה אישית בישראל, פרטים קלאסיים, עיטורים ועבודות עלי זהב.',
      serviceType: 'כותרות ועיטורים מגבס', crumb: 'כותרות ועיטורים',
      eyebrow: '10 / כותרות ועיטורים מגבס',
      h1: 'כותרות ועיטורים בדיוק פיסולי',
      lead: 'זהב, גבס, וקצת דרמה.',
      intro: [
        'יש חללים שמבקשים ריסון. אחרים מבקשים פרטים וקצת טקס. כותרות ועיטורים שייכים לסוג השני, זה שבו קרניז, ראש עמוד או פס פרופיל עושים את העבודה.',
        'כותרת קורינתית, פאנל פרחוני מגולף, פס פרופיל בעלה זהב, אנחנו עושים את הפרטים העיטוריים שרוב הקבלנים מדלגים עליהם. יש חדר שמטופל מהרצפה לתקרה. יש כזה שדורש פרט זהב אחד וזהו. שניהם נכונים.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/07_capitals_2.jpg', alt: 'כותרת עמוד מגבס בסגנון קורינתי' },
        { src: '/assets/images/07_capitals_1.jpeg', alt: 'פאנל תבליט פרחוני מגולף בעבודת יד' }
      ],
      applicationsTitle: 'יישומים',
      applications: ['תקרות ועמודים', 'לובי', 'פרטי מסגור', 'קומפוזיציות קיר', 'חזיתות מסחריות', 'אזורי מוקד'],
      finishesTitle: 'כיווני עיצוב',
      finishes: ['כותרות וקרניזים בהשראה קלאסית', 'מוטיבים עיטוריים מגבס', 'פרטים עם דגשים בעלי זהב', 'עיטורים משולבים במערכות תקרה או קיר', 'פריטים עיטוריים מותאמים לאדריכלות הפרויקט'],
      customTitle: 'מאופק או תיאטרלי',
      custom: 'אקספרסיבי ותיאטרלי, או עדין ומשולב, העבודה הדקורטיבית מותאמת לחדר ולטון הרצוי.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'לימוד התוכנית האדריכלית', b: 'בוחנים את החלל, ההפניות והאיזון של החדר.' },
        { t: 'הגדרת רמת הפירוט', b: 'קובעים את אופי הקישוט והמיקום.' },
        { t: 'פיתוח והכנה', b: 'מפתחים את האלמנטים ומכינים להתקנה.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'האם יש מנעד לפרטים עיטוריים, מעדין ועד עשיר?', a: 'כן.' },
        { q: 'האם פרטי הקישוט האלו יכולים לעמוד בפני עצמם?', a: 'כן, או כחלק מקומפוזיציה רחבה.' },
        { q: 'אתם עובדים עם עלי זהב?', a: 'כן.' },
        { q: 'איך מתחילים?', a: 'משתפים תמונות השראה ופרטי חלל.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'צריך פריט דקורטיבי עם אלגנטיות, דיוק ואופי?',
      bandP: 'שתפו אותנו בהפניות.'
    },
    en: {
      title: 'Decorative Capitals & Gypsum Ornaments in Israel | White Box Studio',
      desc: 'Bespoke decorative capitals, gypsum ornaments, and architectural embellishments in Israel, classical detail, ornamental features, and custom-made elements.',
      serviceType: 'Capitals and gypsum ornaments', crumb: 'Capitals & ornaments',
      eyebrow: '10 / Gypsum capitals & ornaments',
      h1: 'Capitals and ornaments with sculptural precision',
      lead: 'Gold, gypsum, and a little drama.',
      intro: [
        'Some interiors want restraint. Others want detail and a bit of ceremony. Capitals and ornaments are for the second kind, where a cornice, a column head, or a run of moulding is doing the talking.',
        'Corinthian capitals, carved floral panels, a line of gold-leafed trim. We make the ornamental detail most builders skip. Some rooms wear it head to toe. Some want one gold accent and not a thing more. Both are right.'
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/07_capitals_2.jpg', alt: 'Corinthian-style gypsum column capital' },
        { src: '/assets/images/07_capitals_1.jpeg', alt: 'Hand-carved floral relief panel detail' }
      ],
      applicationsTitle: 'Applications',
      applications: ['Ceilings and columns', 'Entrances', 'Framing details', 'Wall compositions', 'Commercial façades', 'Feature areas'],
      finishesTitle: 'Design directions',
      finishes: ['Classical-inspired capitals and trim', 'Decorative gypsum motifs', 'Gold-leaf accented details', 'Embellishments integrated into ceiling or wall systems', 'Bespoke pieces adapted to the project architecture'],
      customTitle: 'Subtle or theatrical',
      custom: 'Highly expressive and theatrical, or subtle and integrated, the decorative work is adapted to the room and the desired tone.',
      processTitle: 'How we work',
      steps: [
        { t: 'Study the architecture', b: 'We study the space, references, and balance of the room.' },
        { t: 'Define the level of detail', b: 'We set the level of ornament and placement.' },
        { t: 'Develop and prepare', b: 'We develop the elements and prepare for installation.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can ornamental detail range from subtle to ornate?', a: 'Yes.' },
        { q: 'Can these work as standalone accents?', a: 'Yes, or as part of a wider composition.' },
        { q: 'Do you work with gold leaf?', a: 'Yes.' },
        { q: 'How do I start?', a: 'Share references and space details.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Need decorative detail with elegance, precision, and character?',
      bandP: 'Share your references with us.'
    }
  },

  {
    slug: 'wall-murals', family: 'a', order: 4,
    he: {
      title: 'ציורי קיר בהזמנה אישית בישראל | White Box Studio',
      desc: 'ציורי קיר בעבודת יד בהזמנה אישית לבתים פרטיים, חללי אירוח, קמעונאות ומסחר בישראל, עיצוב נראטיבי, גרפי ומבוסס-דוגמה לחללים ייחודיים.',
      serviceType: 'ציורי קיר בהזמנה אישית', crumb: 'ציורי קיר',
      eyebrow: '04 / ציורי קיר בהזמנה אישית',
      h1: 'ציורי קיר בהזמנה אישית, מעוצבים לחלל שלכם',
      lead: 'כל קיר הוא סיפור.',
      intro: [
        'ציור קיר הופך קיר מרקע לסיפור. הוא יכול להכניס תנועה, אווירה או קצת שובבות לחדר בדרך שאף אלמנט אחר לא יכול. כשהוא מצויר במיוחד לחלל, הוא נתפס כחלק מהתכנון האדריכלי ולא כקישוט שנוסף בדיעבד.',
        'אנחנו מציירים על קירות בבתים, מסעדות, חנויות וחללי אירוח, מסצנה שלמה מבוססת-סיפור ועד דוגמה חוזרת ושקטה. כל ציור מבוצע על הקיר המסוים ונותן את המענה לאווירה המבוקשת.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/08_murals_1.jpg', alt: 'ציור קיר בעבודת יד בנושא "הסעודה האחרונה" בנוסח המערב הפרוע' }
      ],
      applicationsTitle: 'לאילו חללים ציורי קיר מתאימים',
      applications: ['קירות כוח', 'מסעדות וברים', 'חדרי ילדים', 'חנויות בוטיק', 'חללי אירוח', 'חדרי מדרגות, לובי וחללים ממותגים'],
      finishesTitle: 'כיווני עיצוב',
      finishes: ['סצנות שמספרות סיפור', 'קונספטים גרפיים ואיוריים', 'דפוסים חוזרים', 'מוטיבים דקורטיביים', 'קומפוזיציות ספציפיות לחלל', 'קונספטים מתוך תמונות השראה, סקיצות או רגש'],
      customTitle: 'מעדין ועד אקספרסיבי',
      custom: 'ציור קיר יכול להיות גדול ודרמטי או שקט ומאופק, פיגורטיבי או גרפי. כך או כך, הוא מצויר לפרופורציות של הקיר שעליו הוא יושב.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'החדר ומטרת הקיר', b: 'מתחילים בחלל, בתפקיד של הקיר ובאווירה שרוצים להשיג.' },
        { t: 'כיוון העיצוב', b: 'מגבשים קומפוזיציה, טון ושפה חזותית.' },
        { t: 'ביצוע בעבודת יד', b: 'מציירים את הקיר ידנית בהתאמה לחלל.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'ציורי הקיר בהתאמה אישית מלאה?', a: 'כן.' },
        { q: 'האם יש לכם מגוון, מעדין מאוד ועד אקספרסיבי?', a: 'כן.' },
        { q: 'אתם עובדים בחללים מסחריים?', a: 'כן, בהתאם לבריף.' },
        { q: 'איך מתחילים?', a: 'משתפים את הרעיון.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'רוצים שקיר יישא יותר מצבע, סיפור, אווירה או זהות?',
      bandP: 'שתפו אותנו ברעיון.'
    },
    en: {
      title: 'Custom Wall Murals in Israel | Hand-Painted Murals by White Box',
      desc: 'Hand-painted custom wall murals for homes, hospitality, retail, and commercial interiors in Israel, narrative, graphic, and pattern-based mural design.',
      serviceType: 'Custom wall murals', crumb: 'Wall murals',
      eyebrow: '04 / Commission wall murals',
      h1: 'Custom wall murals designed for your space',
      lead: "Every wall is a story.",
      intro: [
        'A mural turns a wall from a background into a story. It can bring movement, mood, or a bit of mischief into a room in a way nothing else can. Painted for the space, it reads as part of the architecture rather than something added afterwards.',
        'We hand-paint murals for homes, restaurants, shops, and hospitality spaces, anything from a full narrative scene (we once painted a Wild West take on the Last Supper) to a quiet repeating pattern. Each one is drawn for the specific wall and what it needs to do.'
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/08_murals_1.jpg', alt: "Hand-painted 'Wild West Last Supper' mural" }
      ],
      applicationsTitle: 'Where murals work',
      applications: ['Feature walls', 'Restaurants and bars', "Children's rooms", 'Boutiques', 'Hospitality spaces', 'Stairwells, entrances, and branded environments'],
      finishesTitle: 'Design directions',
      finishes: ['Narrative scenes', 'Graphic and illustrative concepts', 'Pattern-based mural systems', 'Decorative motifs', 'Site-specific compositions', 'Concepts from references, sketches, or a broad emotional direction'],
      customTitle: 'Subtle to expressive',
      custom: "A mural can be big and dramatic or quiet and restrained, figurative or graphic. Either way it's drawn to the proportions of the wall it's on.",
      processTitle: 'How we work',
      steps: [
        { t: 'The room and the wall', b: "We start with the space, the wall's purpose, and the intended atmosphere." },
        { t: 'Design direction', b: 'We shape composition, tone, and visual language.' },
        { t: 'Hand-paint', b: 'We execute the mural by hand to fit the space.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Can murals be fully bespoke?', a: 'Yes.' },
        { q: 'Can they range from subtle to expressive?', a: 'Yes.' },
        { q: 'Do you work in commercial spaces?', a: 'Yes, depending on the brief.' },
        { q: 'How do I start?', a: 'Share the idea with us.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Want a wall to carry more than color, story, atmosphere, or identity?',
      bandP: 'Share the idea with us.'
    }
  },

  {
    slug: 'decorative-concrete', family: 'a', order: 2,
    he: {
      title: 'עבודות וגימורים בבטון דקורטיבי בישראל | White Box Studio',
      desc: 'עבודות וגימורים בבטון דקורטיבי בעבודת יד בישראל, מאובייקטים פיסוליים-שימושיים ועד ציפוי קירות במראה ייחודי, לחללים מודרניים, מסחריים ולמגורים.',
      serviceType: 'בטון דקורטיבי', crumb: 'בטון דקורטיבי',
      eyebrow: '02 / עבודות וגימורים בבטון דקורטיבי',
      h1: 'עבודות וגימורים בבטון דקורטיבי',
      lead: 'בטון שזורם כמו בד.',
      intro: [
        'בטון לא חייב להיות קר או מינימליסטי. בעבודת יד הוא מקבל טקסטורה ותנועה, ויכול להיות גולמי ומעודן באותו הרגע.',
        'לבטון יצא שם של חומר קר, וזה לא מגיע לו. אנחנו מעבדים אותו ביד ומייצרים מגוון של אלמנטים, מפמוטים שמרגישים כמו אבן גולמית או אבן מגולפת, ועד ציפוי קירות כך שנראה שתלינו עליהם בד. זה אותו הבטון כמו בחניון תת-קרקעי, אבל אנחנו גורמים לו לשדר עוצמה ורוך בו-זמנית.'
      ],
      ctaHero: 'התחילו פרויקט',
      images: [
        { src: '/assets/images/09_concrete_1.jpeg', alt: 'קיר בטון דקורטיבי בטקסטורת בד זורם' },
        { src: '/assets/images/09_concrete_2.jpeg', alt: 'קיר בטון דקורטיבי עם מנורה פיסולית' }
      ],
      applicationsTitle: 'יישומים',
      applications: ['קירות כוח', 'קירות עם הצהרה', 'חללי מסחר ואירוח', 'חללי מגורים מודרניים', 'אובייקטים פיסוליים-שימושיים', 'פאנלי קיר ומשטחים', 'פרטי אדריכלות'],
      finishesTitle: 'כיווני גימור',
      finishes: ['משטחים גולמיים ומעודנים', 'טקסטורות זורמות בסגנון בד', 'טקסטורת אבן ומגע מינרלי', 'פריטים פיסוליים-שימושיים', 'פאנלי קיר בהתאמה אישית', 'גוונים ופטינות מותאמים'],
      customTitle: 'גולמי ומעודן',
      custom: 'מהמשטח הגולמי ועד הפרט המעודן, צבע, טקסטורה, צורה וקנה מידה מותאמים לחלל ולכוונה.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'לימוד החלל', b: 'בוחנים את החלל, ההפניות והתחושה הרצויה.' },
        { t: 'הגדרת כיוון', b: 'מגדירים טקסטורה, גוון וצורה.' },
        { t: 'ביצוע בעבודת יד', b: 'יוצרים את העבודה ידנית.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'בטון דקורטיבי מתאים גם לפנים וגם לחוץ?', a: 'כן, בהתאם לפרויקט ולתשתית.' },
        { q: 'אפשר להזמין פריטים פיסוליים שעומדים בפני עצמם?', a: 'כן, מפריטים שימושיים ועד פסלים.' },
        { q: 'אפשר להתאים גוון וטקסטורה?', a: 'כן, באופן מלא.' },
        { q: 'איך מתחילים?', a: 'שולחים את פרטי החלל ותמונות השראה.' },
        { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו.' }
      ],
      bandH2: 'מחפשים חומר שהוא גם גולמי וגם מעודן, ומשדר תחושה של בחירה מכוונת ועשייה מוקפדת?',
      bandP: 'שתפו אותנו בפרטי החלל.'
    },
    en: {
      title: 'Decorative Concrete Works & Finishes in Israel | White Box Studio',
      desc: 'Handmade decorative concrete works and finishes in Israel, from sculptural-functional objects to flowing wall panels, for modern residential and commercial spaces.',
      serviceType: 'Decorative concrete works', crumb: 'Decorative concrete',
      eyebrow: '02 / Decorative concrete works & finishes',
      h1: 'Decorative concrete works, finished by hand',
      lead: 'Concrete that flows like fabric.',
      intro: [
        "Concrete doesn't have to be cold or minimal. Worked by hand it gets texture and movement, and can feel raw and refined at the same time.",
        "Concrete gets a cold reputation it doesn't deserve. We make it by hand, from candle holders that feel like carved stone, wall panels that hang like fabric caught mid-fold. Same material as a parking garage. Nothing like it."
      ],
      ctaHero: 'Start a project',
      images: [
        { src: '/assets/images/09_concrete_1.jpeg', alt: 'Drapery-flow textured decorative concrete wall' },
        { src: '/assets/images/09_concrete_2.jpeg', alt: 'Decorative concrete wall with sculptural menorah' }
      ],
      applicationsTitle: 'Applications',
      applications: ['Feature and statement walls', 'Commercial and hospitality spaces', 'Modern residential interiors', 'Sculptural-functional objects', 'Wall panels and surfaces', 'Architectural details'],
      finishesTitle: 'Finish directions',
      finishes: ['Raw and refined surfaces', 'Flowing, drapery-like textures', 'Stone texture and mineral touch', 'Sculptural-functional objects', 'Bespoke wall panels', 'Custom tones and patinas'],
      customTitle: 'Raw and refined',
      custom: "From a raw surface to a fine detail, color, texture, form, and scale are all set to the space and what you're going for.",
      processTitle: 'How we work',
      steps: [
        { t: 'Study the space', b: 'We study the space, references, and intended feeling.' },
        { t: 'Define the direction', b: 'We set texture, tone, and form.' },
        { t: 'Make by hand', b: 'We create and finish the work by hand.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is decorative concrete suitable for both interior and exterior?', a: 'Yes, depending on the project and substrate.' },
        { q: 'Can you make standalone sculptural objects?', a: 'Yes, from functional pieces to sculptures.' },
        { q: 'Can tone and texture be customized?', a: 'Yes, fully.' },
        { q: 'How do I start?', a: 'Send space details and reference images.' },
        { q: 'Do you work only in Israel?', a: 'Yes, currently.' }
      ],
      bandH2: 'Want a material that is raw and refined, and reads as intentional and crafted?',
      bandP: 'Share the space details with us.'
    }
  },
  {
    slug: 'concrete-judaica', family: 'b', order: 8,
    ctaHref: 'https://white-box-holy.com',
    he: {
      title: 'תשמישי קדושה מבטון בעבודת יד בישראל | White Box Studio',
      desc: 'תשמישי קדושה מבטון בעבודת יד בישראל, מגביעי קידוש ונטלות ועד בתי מזוזה, כלי הבדלה ולוחות ברכה, כל פריט יצוק ביד.',
      serviceType: 'תשמישי קדושה מבטון', crumb: 'תשמישי קדושה מבטון',
      eyebrow: '08 / תשמישי קדושה מבטון',
      h1: 'תשמישי קדושה מבטון, בגימור ועבודת יד',
      lead: 'מנהג של כל יום, מהחומר הכי כן שיש.',
      intro: [
        'תשמישי קדושה לא חייבים להרגיש שבירים או עמוסים בקישוט. כאשר הם עשויים מבטון, בעבודת יד, הם מקבלים משקל שנותן תחושה של שקט ויציבות ואריכות ימים.',
        'אנחנו יוצקים כל פריט בנפרד, מגביעי קידוש עם פליז, נטלות ובתי מזוזות, ועד כלי הבדלה ולוחות ברכה. מנהג שאפשר להחזיק ביד בחומר שנושא את משקל המשמעות שלו.'
      ],
      ctaHero: 'לרכישה בחנות Holy',
      images: [
        { src: '/assets/images/10_judaica_1.jpg', alt: 'סט תשמישי קדושה מבטון בעבודת יד: נטלה, גביע קידוש, מזוזה וכלי הבדלה' },
        { src: '/assets/images/10_judaica_2.jpg', alt: 'גביע קידוש מבטון בעבודת יד עם פנים פליז' }
      ],
      applicationsTitle: 'מה אנחנו יוצרים',
      applications: ['גביעי קידוש', 'נטלות', 'בתי מזוזה', 'כלי הבדלה', 'לוחות ברכה', 'פמוטי שבת'],
      finishesTitle: 'כיווני גימור',
      finishes: ['משטחים גולמיים ומעודנים', 'גוונים מינרליים חמים', 'שילובי פליז ועלי זהב', 'טקסטורות מט בסגנון אבן', 'צבע ופטינה בהתאמה אישית', 'חריטה ופרט אישי'],
      customTitle: 'בהזמנה אישית',
      custom: 'מפריט אחד ועד סט שלם, הצורה, הגוון והפרט נקבעים לבית ולמסורת שלכם. חלק מהפריטים האלה נמצאים גם באוסף Holy שלנו ב<a href="https://white-box-holy.com" target="_blank" rel="noopener">white-box-holy.com</a>.',
      processTitle: 'תהליך העבודה',
      steps: [
        { t: 'בוחרים את הפריט', b: 'מתחילים מהתשמיש ומהתחושה שתרצו שיישדר.' },
        { t: 'מגדירים גימור', b: 'קובעים גוון, טקסטורה וכל פרט פליז או זהב.' },
        { t: 'יוצקים ביד', b: 'יוצקים, עושים גימור ובודקים כל פריט ביד.' }
      ],
      faqTitle: 'שאלות נפוצות',
      faq: [
        { q: 'בטון בטוח לשימוש טקסי ולמגע עם מזון?', a: 'כן, הפריטים אטומים וגמורים בהתאם לשימוש.' },
        { q: 'אפשר להזמין פריט בודד או רק סט?', a: 'שניהם, מפריט אחד ועד סט שלם.' },
        { q: 'אפשר להתאים צבע ופרטים?', a: 'כן, גוון, טקסטורה ושילובי פליז או זהב, הכול בהזמנה אישית.' },
        { q: 'אתם מייצרים פריטים למתנות ולאירועים?', a: 'כן, כולל חריטה אישית.' },
        { q: 'איך מתחילים?', a: 'שולחים את הפריט הרצוי ותמונות השראה.' }
      ],
      bandH2: 'רוצים תשמישי קדושה עם משקל אמיתי, יצוקים ביד?',
      bandP: 'ספרו לנו מה אתם מחפשים.'
    },
    en: {
      title: 'Handmade Concrete Judaica in Israel | White Box Studio',
      desc: 'Handmade concrete Judaica in Israel, from Kiddush goblets and Netalah to mezuzah cases, Havdalah sets and blessing plaques, each ritual piece cast and finished by hand.',
      serviceType: 'Concrete Judaica', crumb: 'Concrete Judaica',
      eyebrow: '08 / Handmade concrete Judaica',
      h1: 'Concrete Judaica, cast and finished by hand',
      lead: 'Everyday ritual, made from the most honest material there is.',
      intro: [
        'Sacred objects do not have to feel fragile or heavy with ornament. Made from concrete, by hand, they gain a weight that carries a sense of calm, stability, and longevity.',
        'We cast each piece one at a time, from Kiddush goblets with brass and Netalah to mezuzah cases, Havdalah sets and blessing plaques. Ritual you can hold, in a material that carries it.'
      ],
      ctaHero: 'Shop the Holy collection',
      images: [
        { src: '/assets/images/10_judaica_1.jpg', alt: 'Handmade concrete Judaica set with Netalah, Kiddush goblet, mezuzah and Havdalah dish' },
        { src: '/assets/images/10_judaica_2.jpg', alt: 'Handmade concrete Kiddush goblet with brass interior' }
      ],
      applicationsTitle: 'Pieces we make',
      applications: ['Kiddush cups and goblets', 'Netalah', 'Mezuzah cases', 'Havdalah sets', 'Blessing plaques', 'Shabbat candlesticks'],
      finishesTitle: 'Finish directions',
      finishes: ['Raw and refined surfaces', 'Warm mineral tones', 'Brass and gold-leaf accents', 'Stone-like matte textures', 'Custom color and patina', 'Personal engraving and detail'],
      customTitle: 'Made to order',
      custom: 'From a single piece to a full set, form, tone, and detail are set to your home and your tradition. Some of these pieces also live in our Holy collection at <a href="https://white-box-holy.com" target="_blank" rel="noopener">white-box-holy.com</a>.',
      processTitle: 'How we work',
      steps: [
        { t: 'Choose the piece', b: 'We start from the ritual object and the feeling you want it to carry.' },
        { t: 'Set the finish', b: 'We define tone, texture, and any brass or gold detail.' },
        { t: 'Cast by hand', b: 'We cast, finish, and check each piece by hand.' }
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is concrete safe for ritual and food use?', a: 'Yes, pieces are sealed and finished for their use.' },
        { q: 'Can I order a single piece or only a set?', a: 'Both, from one piece to a full set.' },
        { q: 'Can you customize color and detail?', a: 'Yes, tone, texture, and brass or gold accents are all made to order.' },
        { q: 'Do you make pieces for gifts and events?', a: 'Yes, including personal engraving.' },
        { q: 'How do I start?', a: 'Send the piece you want and any reference images.' }
      ],
      bandH2: 'Want ritual pieces with real weight, cast by hand?',
      bandP: 'Tell us what you are looking for.'
    }
  }
];

export const FAQ = {
  he: {
    title: 'שאלות נפוצות | White Box Studio',
    desc: 'שאלות ותשובות על עבודה עם White Box Studio, תהליך, התאמה אישית, חומרים, אזורי שירות ואיך מתחילים פרויקט.',
    crumb: 'שאלות נפוצות',
    h1: 'שאלות נפוצות',
    lead: 'כל מה שכדאי לדעת לפני שמתחילים.',
    intro: 'ריכזנו כאן את השאלות הנפוצות ביותר על עבודה עם הסטודיו, מהתהליך ועד אזורי השירות. לא מצאתם תשובה? דברו איתנו ונשמח לעזור.',
    faq: [
      { q: 'באילו תחומי עשייה אתם עוסקים?', a: 'אנחנו סטודיו לאמנות וגימורים אדריכליים בעבודת יד, טיח דקורטיבי, פיסול, פאנלי גבס, ציפויים דמויי ברזל, ציורי קיר, בטון דקורטיבי, כותרות ועיטורים, שולחנות פיסוליים ואביזרי תצוגה.' },
      { q: 'העבודות בהתאמה אישית?', a: 'כן. כמעט כל מה שאנחנו עושים מעוצב ומיוצר במיוחד עבור החלל, הלקוח והכוונה.' },
      { q: 'אתם עובדים עם אדריכלים ומעצבי פנים?', a: 'בהחלט. אנחנו עובדים בשיתוף פעולה עם אדריכלים, מעצבים ולקוחות סופיים, ומבצעים את ההתקנה המלאה באתר.' },
      { q: 'איך מתחילים פרויקט?', a: 'שולחים לנו תמונות השראה, סוג הפרויקט, לוח זמנים ופרטי חלל בוואטסאפ או במייל, ואנחנו חוזרים עם כיוון והצעה.' },
      { q: 'אתם מתקינים באתר?', a: 'כן, אנחנו מבצעים התקנה מלאה באתר הלקוח.' },
      { q: 'מאיזה שלב כדאי להזמין אצלכם את העבודה?', a: 'עדיף מוקדם ככל האפשר, שילוב בשלב התכנון מאפשר לוודא שכל התשתיות הנדרשות מתוכננות מראש.' },
      { q: 'אתם עובדים בחללים מסחריים ופרטיים?', a: 'כן, שניהם, בתים, מסעדות, מלונות, חנויות ומשרדים.' },
      { q: 'אתם עובדים רק בישראל?', a: 'כן, נכון לעכשיו אנחנו לוקחים פרויקטים בישראל בלבד.' },
      { q: 'כמה עולה פרויקט?', a: 'כל פרויקט מתומחר בנפרד לפי היקף, חומרים ומורכבות. נספק הצעת מחיר לאחר היכרות עם הפרויקט.' },
      { q: 'מתי הסטודיו נוסד?', a: 'הסטודיו נוסד ב-2005, עם שני עשורים של אמנות וגימורים אדריכליים בעבודת יד.' }
    ],
    bandH2: 'יש לכם רעיון לפרויקט?',
    bandP: 'ספרו לנו עליו, ונחזור אליכם עם כיוון מתאים.'
  },
  en: {
    title: 'Frequently Asked Questions | White Box Studio',
    desc: 'Questions and answers about working with White Box Studio, process, customization, materials, service area, and how to start a project.',
    crumb: 'FAQ',
    h1: 'Frequently asked questions',
    lead: 'Everything worth knowing before you start.',
    intro: "We've gathered the questions we're asked most about working with the studio, from process to service area. Can't find your answer? Get in touch and we'll be glad to help.",
    faq: [
      { q: 'What services do you offer?', a: "We're a studio for handmade architectural finishes, decorative plaster, sculpture, gypsum panels, iron-look coating, wall murals, decorative concrete, capitals and ornaments, sculptural tables, and display accessories." },
      { q: 'Is the work bespoke?', a: 'Yes. Almost everything we make is designed and produced specifically for the space, the client, and the intent.' },
      { q: 'Do you work with architects and interior designers?', a: 'Absolutely. We co-design alongside architects, designers, and end clients, and handle full on-site installation.' },
      { q: 'How do I start a project?', a: "Send us reference images, the project type, timeline, and space details by WhatsApp or email, and we'll come back with a direction and a quote." },
      { q: 'Do you install on site?', a: "Yes, we carry out full installation at the client's site." },
      { q: 'When should I bring you in?', a: 'As early as possible, involving us at the planning stage ensures all required infrastructure is planned in advance.' },
      { q: 'Do you work in commercial and private spaces?', a: 'Yes, both, homes, restaurants, hotels, retail, and offices.' },
      { q: 'Do you work only in Israel?', a: 'Yes, we currently take on projects in Israel only.' },
      { q: 'How much does a project cost?', a: 'Each project is priced individually by scope, materials, and complexity. We provide a quote once we understand the project.' },
      { q: 'When was the studio established?', a: 'The studio was founded in 2005, with two decades of handmade architectural finishes.' }
    ],
    bandH2: 'Have a project in mind?',
    bandP: "Tell us about it, and we'll come back with a direction."
  }
};
