# White Box — Humanizer rewrite suggestions (HE + EN)

Source: `_tools/services-data.mjs` · Generated 2026-06-08 · Method: humanizer pass on the originality-scanner flags

## How to use this doc
- Each block shows the **field** (matches a key in `services-data.mjs`), the **ORIGINAL**, and a **SUGGESTED** rewrite.
- Mark each: leave `[ ]` to reject, change to `[x]` to approve, or edit the SUGGESTED text directly.
- Anything not listed here (most **leads**, the **FAQ answers**, image alt-text) I judged already-human — left untouched.
- After you approve: I edit `services-data.mjs` → `node _tools/build-services.mjs` → deploy via `wbs-deploy.sh`.

## What this pass changes (the 5 global fixes)
1. **Breaks the triads** — the "X, Y, and Z" list ran ~once every other sentence. Cut to pairs/singletons.
2. **Varies the templated opener** — every service's 2nd intro paragraph opened "White Box creates…" / "בסטודיו White Box אנחנו יוצרים…". Now each opens differently.
3. **Thins "some… / others…"** parallelism (kept 1–2, rewrote the rest).
4. **Pulls real specifics into the prose** — crocodile-skin, Michelangelo's David, Marilyn portrait, Wild West Last Supper, candle holders — they were hiding in alt-text.
5. **Cuts em-dashes and recycled "bespoke / בהתאמה אישית".**

> ⚠️ **Typo to fix regardless of the rewrites:** service 05 (display) HE intro[0] reads "החלק **הזכיר** ביותר בחוויה" — looks like a typo for "הזכור ביותר" / "הבלתי-נשכח". Corrected in the suggestion below.

---

# 01 · Plaster walls / טיח דקורטיבי

**[ ] EN · intro[1]**
ORIGINAL: White Box creates decorative plaster wall finishes tailored to the character of the space. Some projects call for bold relief textures and sculptural depth; others need softer movement, aged patina, or delicate overlays that reveal themselves slowly. In every case, the result is custom, site-specific, and made by hand — directly on the wall.
SUGGESTED: We mix and trowel every plaster finish on site, straight onto your wall. One project wants deep, crocodile-skin relief; the next, a thin aged patina you only catch up close. No two walls leave the same.

**[ ] EN · custom**
ORIGINAL: Colour, texture scale, pattern intensity, surface movement, and overall mood can all be adapted. We can work from a detailed brief or from reference images you bring — translating them into a finish language that is precise to your space.
SUGGESTED: Colour, texture, how bold the pattern reads — all of it is yours to set. Bring a detailed brief or just a few reference photos, and we'll work the finish out from there.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים גימורי טיח דקורטיבי בהתאמה אישית לאופי של כל חלל. יש פרויקטים שדורשים טקסטורות תבליט נועזות ועומק פיסולי; אחרים מבקשים תנועה עדינה, פטינה מתיישנת או שכבות דקות שמתגלות לאט. בכל מקרה — התוצאה ייחודית, נוצרת באתר, ישירות על הקיר.
SUGGESTED: כל גימור טיח אצלנו נמרח ביד, באתר, ישירות על הקיר. פרויקט אחד מבקש תבליט עמוק בטקסטורת עור תנין; אחר מבקש פטינה דקה שמתגלה רק מקרוב. אין שני קירות שיוצאים אותו דבר.

**[ ] HE · custom**
ORIGINAL: צבע, גודל הטקסטורה, עוצמת הדוגמה, תנועת המשטח והאווירה הכללית — כולם ניתנים להתאמה אישית. אפשר לעבוד מתוך בריף מפורט או מתוך תמונות השראה שתביאו, ואנחנו נתרגם אותן לשפת גימור מדויקת לחלל שלכם.
SUGGESTED: צבע, טקסטורה, כמה הדוגמה בולטת — הכול נקבע יחד אתכם. תביאו בריף מסודר או כמה תמונות השראה, ואנחנו נגזור מהן את הגימור.

---

# 02 · Coffee tables / שולחנות קפה

**[ ] EN · intro[0]**
ORIGINAL: Some pieces support a room. Others give it its centre of gravity. A sculptural coffee table belongs to the second category: functional, yes — but also atmospheric, expressive, and impossible to ignore.
SUGGESTED: Most furniture fills out a room. A few pieces anchor it. A sculptural coffee table is the second kind — it still holds your coffee, but it's also the first thing a guest looks at.

**[ ] EN · intro[1]**
ORIGINAL: White Box creates coffee tables as sculptural objects in their own right. The proportions, finish, colour, and base form are all considered as part of the visual identity of the space. The result is a bespoke focal point rather than a standard furniture item.
SUGGESTED: We treat each table as a sculpture that happens to be useful. Proportions, finish, colour, the shape of the base — we set them against the room it'll sit in. You get one object made for one space, not a catalogue piece.

**[ ] EN · custom**
ORIGINAL: Dimensions, height, silhouette, finish, palette, and level of visual boldness can all be tailored to the room and the client's intent.
SUGGESTED: Size, height, silhouette, finish, colour, how loud or quiet it reads — all set to the room and what you're after.

**[ ] HE · intro[0]**
ORIGINAL: יש רהיטים שתומכים בחדר. יש כאלה שנותנים לו את מרכז הכובד. שולחן קפה פיסולי שייך לקטגוריה השנייה — פונקציונלי, כן, אבל גם אטמוספרי, אקספרסיבי ובלתי אפשרי להתעלמות.
SUGGESTED: רוב הרהיטים ממלאים חדר. מעטים נותנים לו מרכז כובד. שולחן קפה פיסולי הוא מהסוג השני — הוא עדיין שולחן, אבל הוא גם הדבר הראשון שרואים בכניסה.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים שולחנות קפה כאובייקטים פיסוליים בפני עצמם. הפרופורציות, הגימור, הצבע וצורת הבסיס נשקלים כחלק מהזהות החזותית של החלל. התוצאה היא נקודת מוקד בהתאמה אישית, לא פריט רהיט סטנדרטי.
SUGGESTED: אנחנו מתייחסים לכל שולחן כמו לפסל שבמקרה אפשר להניח עליו כוס. הפרופורציות, הגימור, הצבע וצורת הבסיס נקבעים מול החדר שבו הוא יעמוד. יוצא אובייקט אחד, לחדר אחד — לא משהו מהמדף.

**[ ] HE · custom**
ORIGINAL: מידות, גובה, צללית, גימור, פלטת צבעים ורמת הנועזות החזותית — כולם מותאמים לחדר ולכוונה של הלקוח.
SUGGESTED: מידות, גובה, צללית, גימור, צבע, כמה הוא נועז — הכול מותאם לחדר ולמה שאתם מחפשים.

---

# 03 · Custom sculpture / פיסול בהזמנה אישית

**[ ] EN · intro[0]**
ORIGINAL: Custom sculpture brings a different kind of presence into a space. It can anchor an entrance, create a focal moment, add symbolism, introduce drama, or simply make a room feel more collected and complete. Unlike off-the-shelf decorative objects, a commissioned sculpture is made for a specific setting, scale, and intention.
SUGGESTED: Custom sculpture changes how a space feels. It can anchor an entrance, hold a focal point, or just make a room feel finished. Unlike something off a shelf, a commissioned piece is made for one setting, at one scale, for one reason.

**[ ] EN · intro[1]**
ORIGINAL: White Box creates bespoke sculptural work by hand, translating ideas into form with craft, interpretation, and attention to detail. Commissions range from classical and ornamental to contemporary, playful, symbolic, or highly specific to a client's visual world.
SUGGESTED: We sculpt by hand, turning a brief or a rough sketch into a finished form. We've done classical and ornamental work, and we've done pieces that are contemporary, playful, or built around one client's private references — including a hand-carved David.

**[ ] EN · custom**
ORIGINAL: From decorative objects to larger statement pieces, in any finish and material. We help define the right scale, material language, and placement so the work feels fully integrated into its environment.
SUGGESTED: From small decorative objects to large statement pieces, in any material. We'll help work out the scale, the finish, and where it sits so it belongs in the room rather than decorating it.

**[ ] HE · intro[0]**
ORIGINAL: פסל בהזמנה אישית מכניס לחלל נוכחות מסוג אחר. הוא יכול לעגן כניסה, ליצור רגע מוקד, להוסיף סמליות, להכניס דרמה, או פשוט לגרום לחדר להרגיש שלם ואסוף יותר. בניגוד לאובייקטים דקורטיביים מהמדף, פסל מוזמן נוצר עבור חלל, קנה מידה וכוונה ספציפיים.
SUGGESTED: פסל בהזמנה אישית משנה את האופן שבו חלל מרגיש. הוא יכול לעגן כניסה, להחזיק נקודת מוקד, או פשוט לגרום לחדר להרגיש גמור. בניגוד לאובייקט מהמדף, פסל מוזמן נעשה לחלל אחד, בקנה מידה אחד, מסיבה אחת.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים עבודות פיסול בעבודת יד, מתרגמים רעיונות לצורה בעזרת מלאכת יד, פרשנות ותשומת לב לפרט. ההזמנות נעות מקלאסי ועיטורי ועד עכשווי, שובב, סמלי או ייחודי לעולם החזותי של הלקוח.
SUGGESTED: אנחנו מפסלים ביד, והופכים בריף או סקיצה גסה לצורה גמורה. עשינו עבודות קלאסיות ועיטוריות, ועשינו פסלים עכשוויים, שובבים, או כאלה שבנויים סביב ההפניות הפרטיות של לקוח — כולל שעתוק מגולף של "דוד" של מיכלאנג׳לו.

---

# 04 · Gypsum panels / פאנלי גבס

**[ ] EN · intro[1]**
ORIGINAL: White Box creates decorative gypsum panels for walls and ceilings that add depth, pattern, rhythm, and material presence. Some panels are geometric and ordered; others are figurative, classical, or richly textured.
SUGGESTED: We cast gypsum panels for walls and ceilings — some strict and geometric, some figurative or classical. One recent panel was a Marilyn Monroe portrait built up in relief; another, a Moroccan lattice across a whole ceiling.

**[ ] EN · custom** *(the single worst line in the scan — double triad)*
ORIGINAL: They turn a blank wall into architecture, give a ceiling identity, and create a finished feeling that reads as intentional, crafted, and custom. Pattern and scale can be fully customized.
SUGGESTED: A flat ceiling stops being background and becomes the thing the room is built around. Pattern and scale are yours to set.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים פאנלי גבס דקורטיביים לקירות ולתקרות שמוסיפים עומק, דוגמה, קצב ונוכחות חומרית. יש פאנלים גיאומטריים ומסודרים, ואחרים פיגורטיביים, קלאסיים או עשירים בטקסטורה.
SUGGESTED: אנחנו יוצקים פאנלי גבס לקירות ולתקרות — חלקם גיאומטריים ומדויקים, חלקם פיגורטיביים או קלאסיים. פאנל אחד שיצקנו היה דיוקן של מרילין מונרו בתבליט; אחר, דוגמה מרוקאית על פני תקרה שלמה.

**[ ] HE · custom**
ORIGINAL: הם הופכים קיר חלק לאדריכלות, נותנים לתקרה זהות, ויוצרים תחושת גימור שנקראת כמכוונת, מלאכת-יד ובהתאמה אישית. הדוגמה וקנה המידה ניתנים להתאמה מלאה.
SUGGESTED: תקרה שטוחה מפסיקה להיות רקע והופכת לדבר שהחדר בנוי סביבו. הדוגמה וקנה המידה — שלכם להחליט.

---

# 05 · Display & gift accessories / אביזרי תצוגה ומתנה

**[ ] EN · intro[1]**
ORIGINAL: White Box creates custom accessories and small-scale decorative elements for retail displays, launches, events, gifts, and branded experiences. These pieces may be modest in scale, but they often carry the emotional or visual focus of the whole environment.
SUGGESTED: We make small custom pieces for retail displays, launches, events, and gifts — display stands, props, presentation details. They're small, but they're usually the thing people end up photographing.

**[ ] EN · custom**
ORIGINAL: We can create a single piece or a full set, tailored to your brand, your event, or the person receiving it.
SUGGESTED: We can make a single piece or a full set, built around your brand, your event, or whoever's receiving it.

**[ ] HE · intro[0]** *(also fixes the "הזכיר" typo)*
ORIGINAL: לא כל פרויקט מתחיל בקיר או בחדר. לפעמים החלק הזכיר ביותר בחוויה הוא אובייקט קטן יותר: סטנד תצוגה, פרופ, אביזר בעבודת יד, אלמנט הגשה, או פריט דקורטיבי שמחזיק יחד את כל הטון של האירוע או הסביבה.
SUGGESTED: לא כל פרויקט מתחיל בקיר או בחדר. לפעמים הדבר שהכי זוכרים מהחוויה הוא אובייקט קטן: סטנד תצוגה, פרופ, אביזר בעבודת יד, או פריט הגשה שמחזיק את כל הטון של האירוע.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים אביזרים מותאמים אישית ואלמנטים דקורטיביים בקנה מידה קטן לתצוגות קמעונאיות, השקות, אירועים, מתנות וחוויות ממותגות. הפריטים האלה אולי צנועים בגודלם, אבל לעיתים קרובות הם נושאים את המוקד הרגשי או החזותי של הסביבה כולה.
SUGGESTED: אנחנו מייצרים פריטים קטנים בהזמנה אישית לתצוגות קמעונאיות, השקות, אירועים ומתנות — סטנדים, פרופים, אלמנטים להגשה. הם קטנים, אבל בדרך כלל הם מה שבסוף מצלמים.

---

# 06 · Iron-look coating / ציפוי דמוי ברזל

**[ ] EN · intro[1]**
ORIGINAL: White Box creates iron-look coatings for doors, walls, and selected surfaces, developing finishes that evoke forged metal, aged patina, warm rust, or smoked industrial tones. The result is a surface with presence and depth — without the physical weight of actual iron.
SUGGESTED: We apply iron-look coatings to doors, walls, and select surfaces, building up finishes that read as forged metal, warm rust, or smoked steel. You get the weight and depth of iron on the eye, without the weight on the hinges.

**[ ] EN · custom**
ORIGINAL: More control over tone and texture than a standard metal product. The visual language of iron can be brought into places where real iron might be impractical, too heavy, or too limiting.
SUGGESTED: You get more control over tone and texture than any off-the-shelf metal. And you can put the look of iron where real iron would be too heavy or just won't go — an interior door, for one.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים ציפויים דמויי ברזל לדלתות, קירות ומשטחים נבחרים, ומפתחים גימורים שמזכירים מתכת מחושלת, פטינה מתיישנת, חלודה חמה או גוונים תעשייתיים מעושנים. התוצאה — משטח עם נוכחות ועומק, בלי המשקל הפיזי של ברזל אמיתי.
SUGGESTED: אנחנו מיישמים ציפוי דמוי ברזל על דלתות, קירות ומשטחים נבחרים, ובונים גימור שנראה כמו מתכת מחושלת, חלודה חמה או פלדה מעושנת. מקבלים את המשקל והעומק של ברזל לעין — בלי המשקל על הצירים.

**[ ] HE · custom**
ORIGINAL: שליטה רבה יותר בגוון ובטקסטורה מאשר מוצר מתכת סטנדרטי. אפשר להביא את שפת הברזל למקומות שבהם ברזל אמיתי היה לא מעשי, כבד מדי או מגביל מדי.
SUGGESTED: שליטה הרבה יותר טובה בגוון ובטקסטורה מכל מוצר מתכת מהמדף. ואפשר להביא את מראה הברזל למקומות שבהם ברזל אמיתי כבד מדי או פשוט לא הולך — דלת פנים, למשל.

---

# 07 · Capitals & ornaments / כותרות ועיטורים

**[ ] EN · intro[0]**
ORIGINAL: Some interiors ask for restraint. Others ask for detail, flourish, and a little ceremony. Capitals and ornaments belong to that second world — the one where a room is elevated by rhythm, embellishment, and a carefully placed sense of drama.
SUGGESTED: Some interiors want restraint. Others want detail and a bit of ceremony. Capitals and ornaments are for the second kind — where a cornice, a column head, or a run of moulding is doing the talking.

**[ ] EN · intro[1]**
ORIGINAL: White Box creates decorative capitals, gypsum ornaments, and architectural embellishments that bring refinement, richness, and sculptural character into a space. Some projects lean classical and ornate; others use decorative details more selectively, as accents that sharpen the identity of the room.
SUGGESTED: We make column capitals, gypsum mouldings, and architectural detail — Corinthian capitals, carved floral panels, gold-leafed trim. Some rooms carry it head to toe; others want a single accent and nothing more.

**[ ] HE · intro[0]**
ORIGINAL: יש חללים שמבקשים ריסון. אחרים מבקשים פרט, פריחה וקצת טקס. כותרות ועיטורים שייכים לעולם השני — זה שבו חדר מתעלה בזכות קצב, קישוט ותחושת דרמה ממוקמת בקפידה.
SUGGESTED: יש חללים שמבקשים ריסון. אחרים מבקשים פרט וקצת טקס. כותרות ועיטורים שייכים לסוג השני — זה שבו קרניז, ראש עמוד או פס פרופיל עושים את העבודה.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים כותרות עמודים דקורטיביות, עיטורי גבס ואלמנטים אדריכליים שמכניסים לחלל עידון, עושר ואופי פיסולי. יש פרויקטים שנוטים לקלאסי ועשיר-עיטורים, ואחרים שמשתמשים בפרטים דקורטיביים בצורה סלקטיבית, כאקצנטים שמחדדים את זהות החדר.
SUGGESTED: אנחנו יוצרים כותרות עמודים, עיטורי גבס ופרטים אדריכליים — כותרת קורינתית, פאנל פרחוני מגולף, פרופיל בעלה זהב. יש חדר שנושא את זה מהרצפה לתקרה, ויש כזה שמבקש אקצנט אחד וזהו.

---

# 08 · Wall murals / ציורי קיר

**[ ] EN · intro[0]**
ORIGINAL: A mural can transform a wall from background into narrative. It can introduce movement, atmosphere, memory, playfulness, symbolism, or visual identity — often in a way no other element in the room can. When it is designed specifically for the space, it becomes part of the architecture rather than decoration applied after the fact.
SUGGESTED: A mural turns a wall from background into a story. It can bring movement, mood, or a bit of mischief into a room in a way nothing else can. Painted for the space, it reads as part of the architecture rather than something added afterwards.

**[ ] EN · intro[1]**
ORIGINAL: White Box creates hand-painted custom murals for residential, hospitality, retail, and commercial interiors. Some murals are immersive and story-driven; others are graphic, ornamental, or pattern-based. Each one is developed in relation to the space, its scale, and the feeling it needs to create.
SUGGESTED: We hand-paint murals for homes, restaurants, shops, and hospitality spaces — anything from a full narrative scene (we once painted a Wild West take on the Last Supper) to a quiet repeating pattern. Each one is drawn for the specific wall and what it needs to do.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים ציורי קיר בעבודת יד לחללי מגורים, אירוח, קמעונאות ומסחר. יש ציורים סוחפים ומבוססי-סיפור, ואחרים גרפיים, עיטוריים או מבוססי-דוגמה. כל אחד מהם מפותח ביחס לחלל, לקנה המידה שלו ולתחושה שהוא צריך ליצור.
SUGGESTED: אנחנו מציירים ביד קירות לבתים, מסעדות, חנויות וחללי אירוח — מסצנה שלמה מבוססת-סיפור (פעם ציירנו "סעודה אחרונה" בנוסח המערב הפרוע) ועד דוגמה חוזרת ושקטה. כל ציור נרשם לקיר המסוים ולמה שהוא צריך לעשות.

---

# 09 · Decorative concrete / בטון דקורטיבי

**[ ] EN · intro[1]** *(also removes the 3rd "raw and refined" repeat in this section)*
ORIGINAL: White Box creates decorative concrete works and finishes by hand, from sculptural-functional objects (like our stone-textured candle holders) to flowing, drapery-like wall panels. It suits modern spaces — commercial and residential — that want something raw and refined at once.
SUGGESTED: We make decorative concrete by hand, from small functional objects — like our stone-textured candle holders — to wall panels that fall like draped fabric. It fits modern spaces, home or commercial, that want concrete to feel warm rather than industrial.

**[ ] HE · intro[1]**
ORIGINAL: בסטודיו White Box אנחנו יוצרים עבודות וגימורים בבטון דקורטיבי בעבודת יד, מאובייקטים פיסוליים-שימושיים (כמו מחזיקי נרות בטקסטורת אבן) ועד פאנלי קיר זורמים בסגנון בד. מתאים לחללים מודרניים — מסחריים ולמגורים — שמחפשים מגע גולמי ומעודן בו-זמנית.
SUGGESTED: אנחנו יוצרים בטון דקורטיבי בעבודת יד — מאובייקטים שימושיים קטנים, כמו מחזיקי הנרות שלנו בטקסטורת אבן, ועד פאנלי קיר שנופלים כמו בד. מתאים לחללים מודרניים, בבית או במסחר, שרוצים בטון שמרגיש חמים ולא תעשייתי.

---

# Left as-is (already human)
- **All 9 leads** (HE + EN) — e.g. "Not paint. Not wallpaper." / "ברזל. בלי הברזל." / "Gold, gypsum, and a little drama."
- **Every FAQ answer**, including the 2005 founding line.
- **Concrete intro[0]** ("Concrete doesn't have to be minimalist or cold…") and **iron intro[0]** — strong as written.
- **Display intro[0]** EN, **murals intro[0]** HE, most **band** CTAs.

# Sign-off
- [ ] I've reviewed all blocks above.
- [ ] Apply the approved (`[x]`) blocks to `services-data.mjs`, rebuild, and deploy.
