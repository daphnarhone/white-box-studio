# White Box Studio — Deploy Checklist

**Purpose:** Site-wide deploy discipline for `white-box.co.il`. Kept separate from the brand voice doc because this is about deploy mechanics, not copy or voice.

**Companion docs:**
- `brand-voice/The-White-Box-Studio-Brand-Voice-Positioning-v1.1.md` — what to say and how
- This doc — how to ship changes cleanly

---

## Cache-bust discipline

The site links `styles.css` and `script.js` with a version query string (currently `?v=20260721b` on the homepage). This forces browsers to re-fetch after a CSS or JS change instead of serving a stale cached copy.

### The rule

When `styles.css` or `script.js` changes, bump the cache-bust value **on every HTML page in the repo**, not just on `index.html`.

The site has **14 HTML pages** that reference these files:

- `index.html` — homepage (bilingual, JS language toggle)
- `services/*.html` — 10 Hebrew service pages
- `en/services/*.html` — 10 English service pages
- `faq.html`, `en/faq.html`
- `accessibility.html`

### Why this matters

If only the homepage is bumped, returning visitors who land on a service page will serve the cached older CSS/JS until they visit the homepage. This is silent — nothing breaks visibly — which makes it easy to miss. It also means A/B testing new styles is unreliable: the sample gets split between users who happen to land on the freshly-bumped page and users who don't.

**Current state (23 July 2026):** homepage is on `?v=20260721b`, all other pages are on `?v=20260721a`. The two files are byte-identical right now, so no visible impact — but the next CSS or JS change will expose the drift.

### Naming convention

`?v=YYYYMMDD[a–z]`

- Same day: increment the letter (`20260721a` → `20260721b` → `20260721c`)
- New day: reset to `a` with the new date (`20260721c` → `20260722a`)

### Workflow

1. Change the CSS or JS file.
2. Global find-replace the old cache-bust string with the new one across **all** `.html` files in the repo.
3. Verify with `grep -r "v=OLDVALUE" .` before committing — the result should be empty (or only reference the current in-use value).
4. Commit the asset change and the cache-bust bump in the **same commit** so history stays coherent.
5. After push, open a private/incognito window and hard-refresh a service page (not just the homepage) to confirm new styles apply.

### PowerShell one-liner for the bump

```powershell
cd C:\Users\User\Documents\Claude\white-box-studio
$old = "v=20260721a"
$new = "v=20260722a"
Get-ChildItem -Recurse -Include *.html | ForEach-Object {
  (Get-Content $_.FullName -Raw) -replace [regex]::Escape($old), $new | Set-Content $_.FullName -NoNewline
}
# Also bump the homepage if it's on a different letter suffix — check first with:
# Select-String -Path "index.html" -Pattern "v=20260721"
```

---

## Commit message discipline

Use conventional prefixes so `git log` stays scannable:

| Prefix | For |
|---|---|
| `docs(brand-voice):` | Updates to the brand voice document |
| `docs(deploy):` | Updates to this file |
| `content:` | Copy changes on the live site (site strings, headlines, service descriptions) |
| `feat:` | New pages, sections, or features |
| `fix:` | Bug fixes (broken links, layout issues, JS errors) |
| `style:` | CSS-only changes with no copy impact |
| `chore:` | Cache-bust bumps, dependency updates, config |
| `seo:` | Meta tag changes, JSON-LD, sitemap, hreflang |

For substantive changes, use multi-line messages: one summary line, blank line, bullet list of specifics. Example:

```
content: refine bilingual metadata + address per CSV review

- og:description tightened to material-first phrasing
- address standardized to "Tsvi Leibowits St 7, Rishon LeZion"
- Hebrew transliteration: "וויט בוקס סטודיו" (double-vav)
- Hebrew og:description: "עלי זהב" (plural) per CSV
```

---

## Pre-deploy checklist

Run through this before every push that changes user-facing content:

- [ ] Live site has been read in the last 24 hours (either via browser or `curl -sL https://white-box.co.il/`)
- [ ] If copy changed, brand voice doc rules were checked (no banned words: "live your dreams", "stunning", "luxurious", "jaw-dropping")
- [ ] If service list changed, all 10 service names are consistent across nav, mega-menu, work cards, and JSON-LD
- [ ] If Hebrew changed, "עבודת יד" phrasing is preserved (this is the core live Hebrew tagline)
- [ ] If phone changed, it's in international format: `+972 54 521 6416`
- [ ] Cache-bust bumped on all 14 HTML pages (not just homepage) if CSS or JS touched
- [ ] Commit message uses the right prefix
- [ ] After push, verified in incognito that changes render on both homepage AND a service page

---

## Broken link audit

Last full audit: 23 July 2026. Result: **zero broken user-facing links.** See session artifacts for the full report.

Re-audit trigger: any commit that adds, removes, or renames a service page, or restructures the nav.

Quick re-audit command (from the repo root, requires `curl`):

```bash
BASE="https://white-box.co.il"
for path in / accessibility faq \
  services/capitals-ornaments services/coffee-tables services/concrete-judaica \
  services/custom-sculpture services/decorative-concrete services/display-accessories \
  services/gypsum-panels services/iron-look-coating services/plaster-walls services/wall-murals \
  en/faq \
  en/services/capitals-ornaments en/services/coffee-tables en/services/concrete-judaica \
  en/services/custom-sculpture en/services/decorative-concrete en/services/display-accessories \
  en/services/gypsum-panels en/services/iron-look-coating en/services/plaster-walls en/services/wall-murals; do
  code=$(curl -sL -o /dev/null -w "%{http_code}" "$BASE/$path")
  echo "$code  /$path"
done
```

All 24 lines should return `200`.

---

**End of document.**

*Update this file when deploy discipline evolves. Keep it short — checklists that get long stop being used.*
