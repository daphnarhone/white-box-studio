# Landing Page Critique — white-box.co.il

Date: 2026-07-19 · Scope: `index.html` (bilingual homepage), `styles.css`, `script.js` i18n dictionaries.
Frameworks: April Dunford positioning extraction (marketing-strategy-pmm) + hero conversion audit (landing-page-generator).
Requested lens: Israeli small art-studio owners and interior designers.

> Note on sources: there is no `en/index.html` — the homepage is a single file whose copy is swapped
> at runtime from the EN/HE dictionaries in `script.js` (lines 20–312). The HE/EN comparison below is
> based on those dictionaries plus the static English fallback baked into `index.html`.

---

## Bottom Line

The site has a clear, coherent artisan-atelier positioning ("everything by hand, made and installed
by our own team, since 2005"), but the hero spends its most valuable pixels saying the category name
three times and defers every trust signal and low-friction contact path below the fold. For interior
designers — the audience the site itself names — the biggest wins are: (1) stop repeating
"art & architectural finishes" and make the headline carry a benefit, (2) put proof above the fold,
(3) lower CTA friction with the WhatsApp path the rest of the page already relies on.

---

## Part 1 — Current Positioning (extracted)

### Positioning statement (as implied by the page) 🟢 verified from on-page copy

- **FOR** architects, interior designers, and their end clients in Israel
  (hero sub: "alongside architects, designers, and their clients"; studio section: "for architects,
  interior designers, and anyone after a look no one else has")
- **WHO** want one-off, handmade surfaces and objects that paint, wallpaper, or catalog products can't deliver
- **THE** White Box Studio **IS AN** artist's atelier of art & architectural finishes
- **THAT** co-designs with the design team and executes on site with its own installation crew,
  across 10 disciplines grouped into 3 families (Walls & surfaces / Sculpture & objects / Ornament & detail)
- **UNLIKE** paint, wallpaper, and mass-produced finishes ("Not paint. Not wallpaper.")
- **OUR STUDIO** makes everything by hand, in-house, since 2005, exclusively in Israel

### Category choice 🟢
Niche play: not competing head-to-head with painters/contractors, but owning the "artisan
atelier" category. The three-family regroup (2026-07) is a sensible sub-category architecture —
it lets one studio credibly span walls, sculpture, and ornament without reading as a general contractor.

### Key differentiators the page claims 🟢
1. Everything designed **and** installed by the studio's own team (no subcontractors) — the strongest
   claim for a designer audience, currently buried in the Studio section.
2. Two decades of operation (since 2005).
3. Breadth: 10 disciplines under one roof.
4. Co-design workflow with architects/designers, with a stated preference for early-stage involvement.
5. Israel-only focus (framed as commitment, not limitation).

### Positioning gaps 🟡 medium confidence
- **No proof layer anywhere on the homepage**: no client names, project locations, testimonials,
  press, or project counts. The Dunford model's "evidence" layer is entirely missing — the claims
  are made but never substantiated.
- **The economic argument is absent**: nothing addresses budget range, timeline, or process risk —
  the three questions a designer specifying for a client must answer before recommending a vendor.
- **Audience note for this critique**: interior designers are an explicitly named audience;
  *small art-studio owners* are not addressed anywhere on the page 🔴 assumed gap — if they are a
  real target segment (e.g., for display accessories, event props, or studio fit-outs), nothing in
  the copy speaks to them.

---

## Part 2 — Top 3 Hero Improvements for Conversion

### 1. The hero says the category name three times and the benefit zero times 🟢

Above the fold, a visitor reads:

1. Logo tagline: "art & architectural finishes"
2. Eyebrow: "Atelier of art and architectural finishes · since 2005"
3. H1: "Art and **architectural** finishes, by hand."

Three consecutive lines of identical category naming, and the sub-headline is a material list.
Nothing states an outcome. An interior designer scanning for 5 seconds learns *what you are* but not
*why to bring you into their project*.

**How to act:**
- Keep the category in **one** place (the eyebrow is the right home for "Atelier … since 2005").
- Rework the H1 to carry the differentiated benefit, e.g. (PAS/BAB direction):
  - EN: "Surfaces no one else has. Made and installed by one studio."
  - HE: "משטחים שאין לאף אחד אחר. מעוצבים ומותקנים על ידי סטודיו אחד."
- Move the strongest claim on the whole site — *installation by the studio's own team* — from the
  Studio section into the hero sub, where designers (who carry the client-relationship risk of every
  subcontractor) will actually see it.

### 2. Zero trust signals above the fold 🟢

"Since 2005" hides at 13px in the eyebrow. Everything else — own-team installation, "every piece
designed, made, and installed by us," the Instagram feed — sits one or more screens down. For a
designer about to stake a client relationship on a vendor, the hero offers a beautiful image and an
unverified claim.

**How to act:**
- Add a one-line proof strip under the CTAs (the layout has room: `.hero-cta` has 44px top margin):
  "Since 2005 · 10 disciplines · every piece installed by our own team" — with the HE equivalent.
- Stronger version if assets exist: 2–3 recognizable project names/locations ("as seen in [hotel /
  restaurant]") or a one-line designer testimonial. Even one named reference outperforms any
  self-description for this audience.
- The hero image (three horse heads) is striking but reads as *sculpture studio*; consider testing an
  image that shows a finish **in a finished interior**, which is the context designers buy for. 🟡

### 3. CTA friction is too high, and the low-friction path is hidden 🟢

The primary CTA "Start a project" asks for commitment on first contact, and both hero CTAs lead
either to a form or a scroll. Meanwhile the site itself knows its market: WhatsApp is the featured
contact card, the sticky CTA is WhatsApp, the form has a "Send via WhatsApp" button — because in the
Israeli market WhatsApp *is* the conversion channel. But it only appears after scrolling.

The contact section even makes a great low-friction promise — "We'll get back to you right away with
an initial direction" — that the hero never mentions.

**How to act:**
- Make the hero's primary or secondary CTA a WhatsApp deep link (the `wa.me` prefill logic already
  exists in `script.js`), with copy that lowers the bar and surfaces the promise:
  - EN: "Send us a photo of your wall — get an initial direction today"
  - HE: "שלחו לנו תמונה של הקיר — ותקבלו כיוון ראשוני עוד היום"
- Check the 375px viewport: the hero stacks logo block (with 64px bottom margin) + eyebrow + a
  `clamp(54px…)` headline + sub before the CTAs — the buttons are almost certainly below the fold on
  mobile 🟡 (verify in devtools). Tightening the logo block on mobile or trimming the repetition from
  fix #1 solves this for free.

---

## Part 3 — Hebrew / English Inconsistencies

1. **Inverted visual emphasis in the H1** 🟢 — In EN, the light-weight word is "architectural"
   (so "Art and … finishes, by hand." carries the weight). In HE, the light-weight phrase is
   **בעבודת יד** ("by hand") — the *opposite* emphasis: Hebrew de-emphasizes the key differentiator
   that English emphasizes. Worth flipping the HE spans so בעבודת יד gets the bold weight.

2. **Static HTML fallback is out of sync with the i18n dictionary** 🟢 — The English baked into
   `index.html` is an older draft of what `script.js` injects:
   - `studio_philosophy` in HTML ends at "…one-off pieces and finishes." — the dictionary adds
     "for architects, interior designers, and anyone after a look no one else has."
   - `studio_howwework_body` in HTML is missing the final sentence about preferring early-stage
     collaboration.
   Users with JS get the full text, but crawlers/no-JS visitors (and the page's SEO snapshot) see
   the truncated version. Sync the static HTML to the dictionary.

3. **Typo in HE section 09** 🟢 — `sec_09_body`: "מבטון דקורטיב" should be "מבטון דקורטיבי"
   (script.js:261). The same HE sentence also adds "בטקסטורת אבן" (stone texture) that the EN
   version doesn't have — harmless, but a content divergence.

4. **Judaica headline meaning drift** 🟡 — EN "Ritual you can hold." vs HE "מנהג שאפשר להחזיק ביד"
   — מנהג means "custom/tradition," which lands softer than "ritual." Something like
   "קדושה שאפשר להחזיק ביד" would match the EN register more closely (subjective — verify with a
   native copy pass).

5. **`<title>` and meta description are English-only** 🟢 — Language is switched client-side, but
   the document title, `meta description`, and OG tags stay English even for Hebrew visitors — and
   Google indexes the single URL with English metadata despite most searchers being Hebrew-speaking.
   A structural fix (separate HE/EN URLs or at least JS-swapped titles) is worth considering; note
   the `en/` service pages already follow a two-URL convention that the homepage doesn't.

6. **Minor divergences** 🟢 (cosmetic):
   - `contact_body` HE says "תמונת השראה" (one inspiration image), EN says "any reference images."
   - HE pullquote uses a hyphen ("המבט פוגש ביצירה - הנשימה נעתקת") where EN uses a comma — given
     the recent repo-wide em-dash cleanup, confirm the hyphen is intentional.
   - EN eyebrow "05 / Sculpture Commission" is the only title-cased item in an otherwise
     sentence-case list ("05 / Sculpture commission" would match).

---

## Suggested priority

| # | Change | Effort | Expected impact |
|---|--------|--------|-----------------|
| 1 | Benefit-led H1 + move own-team-install claim into hero | Copy only | High |
| 2 | Hero WhatsApp CTA with "initial direction" promise | Small (logic exists) | High |
| 3 | Proof strip under hero CTAs | Copy + minor CSS | Medium–High |
| 4 | Sync static HTML with i18n dictionary; fix HE typo | Trivial | Low (SEO hygiene) |
| 5 | Flip HE H1 emphasis spans | Trivial | Low–Medium |
| 6 | Mobile above-the-fold CTA check at 375px | Verify first | Medium |

Legend: 🟢 verified against the code/copy · 🟡 medium confidence, verify · 🔴 assumption, needs your input.
