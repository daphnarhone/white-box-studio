# Email Migration Plan — cPanel → Google Workspace

**Goal:** move `info@white-box.co.il` and `daphna@white-box.co.il` off the flaky cPanel mail server and onto Google Workspace, without losing a single email.

**Why this matters more than it looks.** A reverse lookup of the mail server `148.251.82.238` returns **`cp57.box.co.il`** — the mail host is **BOX**, the provider you already left because it was terrible. The websites moved; the email never followed. This migration isn't a new decision, it's finishing one you already made.

**Written for:** someone who has never edited a DNS record. Every step says exactly what to type.

**Time:** about 2 hours of actual work, spread over 2–3 weeks of waiting.

**Risk level:** low, if you follow the order. The dangerous part is one specific mistake — see [Four mistakes that break email](#four-mistakes-that-break-email) before you start.

---

## First, the reassuring part

**Your website will not change at all.** Not one line. Your domain stays `white-box.co.il`, your addresses stay exactly the same, and the 7 places `info@white-box.co.il` appears in `index.html` and `script.js` stay exactly as they are. This migration touches only where your *mail* is delivered.

**Your contact form does not send through the cPanel mail server**, so nothing you do below can break the form itself. The form posts to a service called Web3Forms, and as of 1 September 2026 its only configured recipient is **`daphna.rhone@gmail.com`** — not `info@` or `daphna@`. That means form notifications do not follow your MX record at all and are completely unaffected by this migration. Step 7 still has you submit the form once, but treat it as a general health check rather than a test of the mail cutover.

> **If you later add `info@` or `daphna@` as Web3Forms recipients, do it *after* the migration is finished and those mailboxes are confirmed receiving.** Web3Forms suppresses an address that bounces and then silently stops delivering to it, so adding an address that is mid-cutover can quietly break notifications to it for good.

---

## Plain-English glossary

You need to understand five terms. That's genuinely all.

| Term | What it actually means |
|---|---|
| **DNS** | The phone book of the internet. It translates `white-box.co.il` into the address of an actual computer. Yours is managed at **Netlify**. |
| **MX record** | The line in the phone book that says *"send this domain's email to this server."* **This is the switch you're flipping.** |
| **SPF** | A public note saying *"only these servers are allowed to send email as me."* Stops others forging your address, and stops your mail landing in spam. |
| **DKIM** | An invisible signature on every email you send, proving it really came from you and wasn't tampered with. |
| **DMARC** | Your instruction to other mail servers about what to do when an email *fails* the SPF/DKIM checks. |
| **TTL** | "Time To Live" — how long the world is allowed to remember an old answer before asking again. Lower = your changes take effect faster. |

---

## Where you'll be clicking

Two websites, and it's worth being clear which is which, because it's easy to get lost:

- **Netlify** (app.netlify.com) → **Domains** → `white-box.co.il` → **DNS records**. This is where *all* DNS changes below happen. Your DNS lives here even though your email doesn't.
- **Google Admin** (admin.google.com) → where you create mailboxes and get your DKIM key.

You will never log into cPanel again except to check old mail and, at the very end, to cancel.

---

## Your DNS records: before and after

This is the whole migration in one table. Everything else in this document is just how to do it safely.

| Record | Right now | After migration |
|---|---|---|
| **MX** | `mail.white-box.co.il`, priority `0` | `smtp.google.com`, priority `1` |
| **SPF** (a TXT record) | `v=spf1 +a +mx +ip4:148.251.82.238 ~all` | `v=spf1 include:_spf.google.com ~all` |
| **DKIM** (TXT, name `google._domainkey`) | *doesn't exist* | a long key Google gives you |
| **DMARC** (TXT, name `_dmarc`) | *doesn't exist* | `v=DMARC1; p=none; rua=mailto:daphna@white-box.co.il` |

> The `148.251.82.238` in your current SPF is the Hetzner server cPanel runs on. That's the thing you're leaving behind.

---

## The order of operations

**Read this list before doing anything.** The order is the entire safety mechanism — it means your old mail is already copied across *before* new mail starts arriving anywhere new.

1. Lower the TTL (a day ahead — makes the switch fast)
2. Sign up for Google Workspace and verify you own the domain
3. Create your mailboxes
4. **Copy all your old mail across** — while email is still flowing to cPanel
5. Flip the MX record — this is the actual switch
6. Fix the SPF record
7. Test thoroughly
8. Run the mail copy one final time (catches anything from the gap)
9. Add DKIM and DMARC
10. Wait two weeks, then cancel cPanel

---

## Step 1 — Lower the TTL (do this the day before)

**Why:** TTL is how long the internet caches the old answer. Yours is probably 1 hour. If you lower it to 5 minutes *first*, then tomorrow's switch takes effect in 5 minutes instead of an hour. It's a small step that removes a lot of anxiety later.

1. Netlify → Domains → `white-box.co.il` → DNS records
2. Find the **MX** record pointing at `mail.white-box.co.il`
3. Edit it, change **TTL** to `300` (that's 300 seconds = 5 minutes)
4. Save. **Change nothing else.**

Then wait a day before Step 5. You can do Steps 2–4 during that wait.

---

## Step 2 — Sign up and verify the domain

Go to workspace.google.com and sign up for **Business Starter**.

- When it asks for your domain, enter `white-box.co.il`
- Make your first account `daphna@white-box.co.il` (your personal one — see Step 3 for why)

Google then asks you to prove you own the domain, usually by adding a TXT record.

**Possible shortcut:** your site already has a Google Search Console verification tag in `index.html`. Google sometimes recognises this and skips the verification step entirely. If it offers, take it.

If you do need to add the TXT record:

1. Netlify → DNS records → **Add new record**
2. **Type:** TXT
3. **Name:** leave empty (Netlify may show this as `@` or as the bare domain — all mean "the domain itself")
4. **Value:** paste exactly what Google gives you (starts with `google-site-verification=`)
5. Save, then click verify in Google. Usually works within minutes.

> ⚠️ **You now have two TXT records on the domain** — your existing SPF, and this new verification one. **That is correct and expected.** Do not delete the SPF one to "make room." Multiple TXT records are normal.

---

## Step 3 — Create your mailboxes (and save money)

You have two addresses, but you probably only need **one paid account**.

In Google Admin (admin.google.com):

- `daphna@white-box.co.il` — your real user account (this is the one you pay for)
- `info@white-box.co.il` — add this as an **alias** on that same account

An alias is free. Mail sent to `info@` lands in the same inbox, and you can still *send* as `info@` when you want to look like the studio rather than yourself. That's ~₪27/month total instead of ~₪54.

**Set this up:** Admin → Directory → Users → click your account → **User information** → **Email aliases** → add `info`.

> Only make `info@` a separate paid account if someone *other than you* needs their own private login for it.

---

## Step 4 — Copy your old mail across (the important one)

**Do this while email is still being delivered to cPanel.** You are copying, not moving — nothing is deleted from cPanel, so there's no way to lose anything here.

Google Admin → **Data migration** (search "data migration" in the admin search bar if you can't find it).

Settings to use:

- **Migration source:** Other IMAP server (or "IMAP" / "Generic IMAP")
- **Server:** `mail.white-box.co.il`
- **Port:** `993`, with SSL enabled
- **Username / password:** your existing cPanel mailbox credentials

Run it for both `info@` and `daphna@` if they're separate mailboxes on cPanel today.

Depending on how many years of mail you have, this can take anywhere from minutes to several hours. Let it finish. Then **open Gmail and actually look** — check that old messages are really there and that folders came across, before you go anywhere near Step 5.

> I verified that port 993 is open and reachable on your mail server, so this connection should work.

---

## Step 5 — Flip the MX record (the actual switch)

This is the moment new mail starts going to Google. With TTL at 300, it takes about 5 minutes.

1. Netlify → DNS records
2. **Delete** the existing MX record (`mail.white-box.co.il`, priority `0`)
3. **Add new record:**
   - **Type:** MX
   - **Name:** leave empty (the domain itself)
   - **Value / hostname:** `smtp.google.com`
   - **Priority:** `1`
   - **TTL:** `300` for now
4. Save

That single record is all Google needs — they simplified this in 2023. If you find an older guide listing five `ASPMX.L.GOOGLE.COM` records, that's the legacy setup. It still works, but you don't need it.

**Do this on a weekday morning**, not a Friday afternoon — so if something looks wrong, you have the day to sort it out.

---

## Step 6 — Fix the SPF record

Right after the MX change, update SPF. If you skip this, mail you send from Gmail may land in recipients' spam folders.

1. Netlify → DNS records → find the TXT record whose value starts with `v=spf1`
2. **Edit it** (do not add a second one — see the warnings below)
3. Replace the value with:

```
v=spf1 include:_spf.google.com ip4:148.251.82.238 ~all
```

This temporarily authorises **both** Google and your old server, which is the safe choice while both still exist.

**Later**, once cPanel is cancelled (Step 10), simplify it to:

```
v=spf1 include:_spf.google.com ~all
```

---

## Step 7 — Test

Don't skip this, and don't test only in one direction.

- [ ] Send an email **from** Gmail **to** your personal Gmail/other address — it arrives, and is **not** in spam
- [ ] Send an email **from** that outside address **to** `info@white-box.co.il` — it arrives in Gmail
- [ ] Repeat the incoming test for `daphna@white-box.co.il`
- [ ] Submit the contact form on white-box.co.il and confirm the notification reaches `daphna.rhone@gmail.com` (this is a general health check, not a test of the mail cutover — the form does not use your MX record)
- [ ] Reply to a message and confirm the reply sends

You can check the DNS side at **mxtoolbox.com** — enter `white-box.co.il`, and MX should show `smtp.google.com`. Or just ask me and I'll verify the records from here.

---

## Step 8 — Run the migration once more

Between your Step 4 copy and the Step 5 switch, a few emails may have landed on cPanel. Re-run the same Data Migration from Step 4 — it skips anything already copied and picks up only the stragglers.

---

## Step 9 — Add DKIM and DMARC

These aren't strictly required for mail to work, but they're what keeps you out of spam folders long-term. Do them a few days after everything else is stable.

### DKIM

1. Google Admin → **Apps** → **Google Workspace** → **Gmail** → **Authenticate email**
2. Click **Generate new record** (use 2048-bit)
3. Google shows you a **name** (`google._domainkey`) and a very long **value**
4. In Netlify: Add new record → **Type:** TXT → **Name:** `google._domainkey` → **Value:** the long string, pasted exactly
5. Wait ~15 minutes, go back to Google, click **Start authentication**

> Copy that long value carefully — a single missing character breaks it silently.

### DMARC

Add one more TXT record in Netlify:

- **Name:** `_dmarc`
- **Value:** `v=DMARC1; p=none; rua=mailto:daphna@white-box.co.il`

`p=none` means **"monitor only, don't block anything."** This is deliberate. It gives you reports without any risk of legitimate mail being rejected. Only consider tightening it to `p=quarantine` after months of clean reports — and there's no urgency.

> ⚠️ Never start with `p=reject`. It can silently destroy real email.

---

## Step 10 — Cancel cPanel

**Wait a full two weeks after Step 7 passes.** Not two days. You want to be certain nothing was missed — including monthly senders like invoices or suppliers who only email you occasionally.

Once you're confident:

1. Do one last check of the cPanel webmail for anything unexpected
2. Simplify SPF to `v=spf1 include:_spf.google.com ~all` (drop the old server's IP)
3. Raise TTLs back to `3600` — no longer need fast changes
4. Cancel the cPanel account

**And the bonus:** those "AutoSSL reduced coverage" warning emails stop forever. That whole problem existed only because the cPanel server was trying to manage certificates for a website it doesn't host. Once mail leaves, the account has no reason to exist.

---

## Four mistakes that break email

Worth reading twice.

1. **Two SPF records.** You must have **exactly one** TXT record starting with `v=spf1`. Two is worse than none — mail servers see the conflict and fail the check entirely. In Step 6, **edit** the existing record; never add a second.

2. **Deleting the wrong TXT record.** After Step 2 you'll have several TXT records on the domain (SPF, Google verification, later DKIM and DMARC). They coexist happily. Deleting one to "tidy up" breaks whatever depended on it.

3. **Switching MX before copying mail.** If you flip MX first, mail arrives at an empty Google mailbox while your history sits stranded on a server you're about to cancel. Copy first. Always.

4. **Cancelling cPanel too early.** It costs a few more weeks of hosting fees to keep it. That is *nothing* compared to discovering in October that a client's email from September went to a server that no longer exists.

---

## If something goes wrong

**You can always undo the switch.** Nothing here is permanent until you cancel cPanel in Step 10, and that's why Step 10 is last.

To roll back: in Netlify, delete the `smtp.google.com` MX record and re-create the original one — `mail.white-box.co.il`, priority `0`. With TTL at 300, mail flows back to cPanel within about 5 minutes, exactly as before.

Keep this written down somewhere you can reach without this file:

> **Rollback MX:** hostname `mail.white-box.co.il`, priority `0`

---

## Quick reference card

Print this, or keep it open in a tab while you work.

```
NETLIFY DNS — final state
─────────────────────────────────────────────────────────────
MX     (name empty)          smtp.google.com          priority 1
TXT    (name empty)          v=spf1 include:_spf.google.com ~all
TXT    google._domainkey     v=DKIM1; k=rsa; p=...(from Google)
TXT    _dmarc                v=DMARC1; p=none; rua=mailto:daphna@white-box.co.il

ROLLBACK (if needed)
─────────────────────────────────────────────────────────────
MX     (name empty)          mail.white-box.co.il     priority 0

OLD SERVER (leaving behind)
─────────────────────────────────────────────────────────────
Hetzner / cPanel             148.251.82.238
IMAP for migration           mail.white-box.co.il:993 (SSL)
```

---

*Values in this document were read from live DNS on 11 August 2026. Google's single-MX recommendation (`smtp.google.com`, priority 1) confirmed against Google's current documentation the same day.*
