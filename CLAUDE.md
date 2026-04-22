# SportTherapy – Tom Kushlin | Website Build Brief

> This is the authoritative build brief for Claude Code. Read it top-to-bottom before writing any code. When in doubt, bias toward the MEDINA reference aesthetic (editorial, refined, confident) and the Johns Hopkins / Cleveland Clinic level of medical credibility.

---

## 1. Project overview

Build a production-grade, editorial, multi-page website for **Tom Kushlin (TOM KUSHLIN) – SportTherapy**, an Israeli sport therapist treating acute and chronic pain through dry needling, medical massage, personalized exercise, and sports rehabilitation.

- **Primary language:** Hebrew (RTL), with selective Latin/English medical terminology inline (Trigger Points, Fascia, Psoas, etc.).
- **Audience:** men and women age 30–retirement, plus younger athletes, dealing with pain, overload, or sports injuries.
- **Goal:** establish authority → build trust → convert to a booked appointment (Plannie) or WhatsApp message.
- **Tone:** clinical, refined, quietly confident. Not "wellness spa." Not "fitness bro." Think: **sports-medicine-meets-editorial-magazine**.

### Inspiration / reference
The layout logic and editorial feeling of the MEDINA site (reference screenshot provided by the user): full-bleed hero image behind a thin top navigation bar, generous whitespace, serif display type, a discreet horizontal nav with many items, and a minimalist content structure where the home page itself is mostly atmospheric.

**Critical**: do NOT build a "scroll-through-everything" single-page landing. The home is **hero + short story + sub-hint to explore** only. Every other section is its own page, reachable via the top nav.

---

## 2. Tech stack (non-negotiable)

- **Framework:** Astro 4.x (static output, ideal for RTL + content collections + easy GitHub edits)
- **Styling:** Tailwind CSS (via `@astrojs/tailwind`)
- **Content:** Astro Content Collections (Markdown for articles)
- **Forms:** Netlify Forms (no backend)
- **Deploy target:** Netlify (connect via GitHub)
- **Analytics:** Google Analytics 4 (free), loaded async, minimal footprint
- **Fonts:** Google Fonts (see Design System)
- **Icons:** Lucide (via `lucide-astro` or inline SVG)
- **Images:** Astro's built-in `<Image />` component for optimization

**Why Astro?** Each page is a single `.astro` file. Each article is a single `.md` file. Editing content in GitHub is trivial — the user opens a file on GitHub.com, hits edit, commits, and Netlify auto-deploys. No CMS required.

---

## 3. Brand & design system

### 3.1 Color palette
```
--ink            : #0F1419   /* near-black, main text & dark surfaces */
--ink-soft       : #2A3139   /* secondary text on light */
--cream          : #F7F3EC   /* warm off-white, main page background */
--paper          : #FFFFFF   /* pure white for cards */
--teal           : #3FCBC5   /* brand teal, FROM LOGO — primary accent */
--teal-deep      : #0F9E98   /* hover / pressed state, readable on white */
--teal-wash      : #E8F7F6   /* tinted wash for subtle backgrounds */
--hairline       : #E6E1D7   /* dividers, borders on cream */
--hairline-ink   : rgba(255,255,255,0.2)  /* dividers over hero image */
```

**Usage rule:**
- Default page background: `--cream`. Cards: `--paper`. Dark sections (footer, occasional hero overlays): `--ink`.
- Teal is an **accent**, not a fill. Use it for: one word in the logotype, link hovers, the single word that carries emotional weight in a headline, icon strokes, thin dividers under active nav items.
- **Never** use teal as a huge button fill or big flat block. It should feel precious.

### 3.2 Typography

- **Display / headlines (Hebrew):** `Frank Ruhl Libre` — a beautiful Hebrew serif that pairs perfectly with Latin serifs. Weights: 500, 700, 900.
- **Display / headlines (Latin – "SportTherapy", "TOM KUSHLIN", "Trigger Points", etc.):** `Fraunces` — editorial, characterful serif with a contemporary feel. Weights: 300, 400, 600. Use optical size if possible.
- **Body (Hebrew + Latin):** `Assistant` — clean, modern Hebrew sans that also supports Latin. Weights: 300, 400, 600.
- **Micro / labels (eyebrow text above headings, navigation):** `Fraunces` at small size in uppercase with generous tracking, OR `Assistant` 400 uppercase tracked at `0.2em`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500;700;900&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=Assistant:wght@300;400;600&display=swap" rel="stylesheet">
```

**Type scale (desktop):**
- Hero headline: 72–96px, Frank Ruhl Libre 700, line-height 1.05, letter-spacing -0.02em
- Section heading: 40–56px, Frank Ruhl Libre 700
- Sub-heading: 22–26px, Assistant 400
- Body: 18px, Assistant 400, line-height 1.7
- Eyebrow label: 13px, Fraunces 400 uppercase, letter-spacing 0.25em

Mobile: scale everything ~70%.

### 3.3 Aesthetic principles

- **More white space than feels comfortable.** When in doubt, add more padding.
- **Hairline over heavy.** 1px borders, not shadows. When shadows are needed: `0 1px 2px rgba(15,20,25,0.04), 0 8px 24px rgba(15,20,25,0.04)`.
- **Grid with restraint.** 12-col grid, max content width 1280px. Hero is full-bleed.
- **No rounded corners over 4px** on structural elements. Cards: 2–4px. Buttons: 2px or pill. Never `rounded-2xl` everywhere.
- **Images are hero characters.** Tom's photos should be full-bleed or at least 50% of the viewport on relevant sections. Never crop his face oddly; respect the composition.
- **Motion:** subtle only. Hero image: soft `ken-burns` on load (6s, ease-out, 1.00 → 1.04 scale). Section entries: fade-up 24px, 600ms, ease-out, triggered at 30% viewport. Nav items: underline grows from right-to-left on hover (RTL). Buttons: background shifts on hover, no lift.

### 3.4 RTL rules
- `<html dir="rtl" lang="he">` on every page.
- Tailwind: use logical properties (`ps-`, `pe-`, `ms-`, `me-`) everywhere. Enable `dir-variant` or use `[dir="rtl"]:` prefixes if needed.
- Icons that imply direction (arrows, chevrons) must be mirrored in RTL. In a "קרא עוד ←" link the arrow points LEFT on RTL (away from the text), which reads as "forward."
- Latin words inside Hebrew text (e.g. "Trigger Points") keep their LTR direction inside `<span dir="ltr">`.
- Numbers that are phone numbers / times stay LTR: wrap in `<span dir="ltr">`.

### 3.5 Responsive design (mobile-first — non-negotiable)

**This is a mobile-first site.** Most users discovering a therapist come from mobile (Instagram, Google search, WhatsApp shares). Build for mobile first, then progressively enhance for desktop. Every page must feel as intentional on a 375px iPhone SE as on a 1440px desktop monitor. A desktop-looking site that "sort of works" on mobile is a failed build.

**Breakpoints — use Tailwind defaults exactly:**
```
sm : 640px   (larger phones, small tablets in portrait)
md : 768px   (tablets)
lg : 1024px  (small laptops)
xl : 1280px  (desktop — primary design target)
2xl: 1536px  (large monitors)
```

**Test at minimum on these viewport widths:** 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px.

#### Mobile-specific behaviors (per region)

**Hero on `/`:**
- Full-bleed image fills viewport using `100svh` (small viewport height) — **not** `100vh`. This prevents content being hidden behind the iOS Safari address bar.
- Headline uses fluid type: `font-size: clamp(2.5rem, 6vw + 1rem, 6rem)`. On a 375px screen that gives ~44px; on a 1440px screen ~96px.
- Text block spans full width with 24px gutters (not right-aligned with a narrow max-width as on desktop). Pinned to bottom with 14vh bottom padding to leave thumb-reach area.
- The overlay gradient becomes **vertical** on mobile (dark at bottom → transparent at top), not horizontal-right as on desktop, because text is now full-width.
- CTA buttons stack vertically, each 100% width minus gutter, 56px tall (comfortable thumb tap). Primary on top, ghost below.

**Top nav:**
- Below `lg` (1024px): inline nav items hide, replaced by a hamburger icon on the far-right visual edge (RTL).
- Tap → full-screen overlay in `--ink`, nav items centered vertically in Frank Ruhl Libre 36–40px, staggered fade-in (0ms, 80ms, 160ms, ...).
- **Keep the "קבע טיפול" CTA visible in the mobile nav bar itself** (compact, teal outline, small) — do NOT hide it inside the hamburger. Conversion matters, and the primary action should be one tap away.
- Logo on mobile: show only the short monochrome wordmark, not the full illustrated logo — to keep the bar compact.

**Typography — fluid via `clamp()`:**
```css
.hero-headline { font-size: clamp(2.5rem,  6vw + 1rem, 6rem);     }
.section-h2    { font-size: clamp(1.875rem, 3vw + 1rem, 3.5rem);  }
.section-h3    { font-size: clamp(1.375rem, 1.5vw + 0.75rem, 1.75rem); }
.body-prose    { font-size: clamp(1rem,    0.3vw + 0.95rem, 1.125rem); line-height: 1.7; }
.eyebrow-label { font-size: clamp(0.75rem, 0.2vw + 0.7rem, 0.8125rem); }
```

#### Layout changes mobile ↔ desktop

- **Every `grid-cols-2` desktop becomes `grid-cols-1` below `md`**.
- **About page** two-col (text + image): stacks to image on top, text below.
- **Contact page** two-col: stacks to contact details → form → map.
- **Services page** cards: desktop 2×2, mobile single column full-width.
- **Process page** steps: on desktop the numeric marker is large (96px) and beside the step; on mobile the marker sits above the step title, smaller (56–64px).
- **Articles**: prose column is max-width 680px on desktop, full-width minus 24px gutter on mobile. Reading time + tag move from inline-with-title to stacked-above-title on mobile.
- **Footer**: 3-col desktop → single-col stacked on mobile. Logo+tagline first, hours second, contact third, copyright strip centered at bottom.

#### Integration-specific mobile rules

**Plannie iframe (`/booking`):**
- Desktop: max-width 900px, centered, min-height 820px.
- Mobile: full-width edge-to-edge (no horizontal gutter), min-height 700px. Plannie has its own internal padding; wrapping it in a narrow mobile column wastes valuable tap area.
- Add `scrolling="yes"` and verify no horizontal scroll is introduced.

**Google Maps (`/contact`):**
- Desktop: 480px tall.
- Mobile: 320px tall, full-width edge-to-edge. Verify pins are tappable with a finger (Google's default pin size is already fine).

**Contact form (Netlify Forms):**
- All inputs `font-size: 16px` minimum on mobile — **critical**. Otherwise iOS Safari zooms in on focus, which is disorienting.
- Inputs full-width, 48px tall, labels above (never placeholder-only).
- Submit button full-width on mobile.

#### Images & performance

- Use Astro's `<Image />` or `<Picture />` for every raster image. Auto-generates `srcset` for multiple densities.
- Hero image: `sizes="100vw"`, let Astro generate widths `640, 960, 1280, 1920, 2560`.
- Serve WebP with JPG fallback. Astro handles this automatically.
- **LCP on mobile must be <2.5s.** Preload the home hero image with `<link rel="preload" as="image" href="..." fetchpriority="high">` — but only on the home page, not everywhere.
- Every image below the fold: `loading="lazy"`.
- `tom-hero.jpg` and `tom-about.jpg` should be exported at max 2560px wide, 80% JPG quality before adding to the repo. Claude Code should NOT re-export them — trust the source file and let Astro optimize.

#### Touch & interaction

- **Minimum 44×44px tappable area** (Apple HIG) on mobile for every interactive element. Add `py-3 px-5` minimum even if it looks "too big" in a desktop mockup.
- Body-prose links are **always underlined on mobile** — don't rely on hover, which doesn't exist on touch.
- `-webkit-tap-highlight-color: transparent` on all buttons/links to remove the blue iOS flash.
- Every focusable element needs a visible focus ring (2px teal outline, 2px offset) — not just `:hover`.

#### Animation rules on mobile

- Respect `prefers-reduced-motion: reduce` — disable all non-essential animations under this media query.
- Ken-burns on hero: capped at `scale(1.02)` on mobile (vs 1.04 desktop), 8s duration.
- Fade-up on scroll: 12px distance on mobile (vs 24px desktop), same 600ms duration.
- No parallax effects on mobile — they janky on low-end devices and drain battery.

#### iOS / Safari quirks to handle explicitly

- `input` and `textarea` must have `font-size: 16px` minimum — else auto-zoom on focus.
- Use `100svh` (small viewport height) instead of `100vh` for full-viewport sections — handles the dynamic browser chrome correctly.
- `position: sticky` on top nav: verify no judder on Safari iOS. If it judders, fall back to `position: fixed` + offset `padding-top` on `<main>`.
- `overflow-x: hidden` on `<body>` to prevent accidental horizontal scroll from a misbehaving wide element.
- On iOS, fixed background images (if you add any) are buggy — avoid `background-attachment: fixed`. Use a separate positioned `<div>` with the image instead.

#### Dev testing checklist (must run before each phase commit)

- [ ] Chrome DevTools device mode: iPhone SE (375px), iPhone 14 Pro (390px), iPad Mini (768px), iPad Pro (1024px).
- [ ] Physical test on a real iPhone (Safari) and real Android (Chrome) — emulators miss real-world quirks like Safari bounce-scroll and Chrome pull-to-refresh.
- [ ] Tap every button/link — verify touch target ≥44px.
- [ ] Open mobile hamburger — verify it opens, closes, traps keyboard focus, and closes on route change.
- [ ] Verify Plannie iframe is usable on mobile without horizontal scroll.
- [ ] Verify Google Maps pins are tappable and info windows are readable on mobile.
- [ ] Run Lighthouse on **Mobile** profile (not desktop) — target ≥90 Performance, ≥95 Accessibility / Best Practices / SEO.
- [ ] Verify `prefers-reduced-motion` disables ken-burns and fade-ups (test via DevTools Rendering tab).

---

## 4. Site architecture

### 4.1 Pages
```
/                    → Home (hero + 2-sentence story + subtle "explore" hint)
/about               → אודות – personal story, approach, differentiation
/services            → שירותים – 4 service cards (Dry Needling, Medical Massage, Sports Rehab, Personalized Exercise)
/process             → תהליך הטיפול – how the diagnosis + treatment flow works (4 steps)
/testimonials        → המלצות – client quotes, grid
/articles            → מאמרים – index page with 3 cards linking to full articles
/articles/[slug]     → individual article pages (3 total)
/booking             → קביעת תור – Plannie iframe embed + business hours + address
/contact             → צור קשר – WhatsApp CTA, email form (Netlify Forms), Google Maps with 2 pins, hours
```

### 4.2 Top navigation (fixed)
Right-to-left order (as it appears visually from the viewer's right edge → left):

```
[Logo left edge]  עמוד הבית · אודות · שירותים · תהליך הטיפול · מאמרים · המלצות · צור קשר   [קבע טיפול CTA on the far left]
```

- Nav is fixed top. On the home page it's **transparent over the hero** with white text, hairline under each active item. On scroll (>60px) or on any interior page, it becomes **cream background with ink text**, 1px bottom border.
- The "קבע טיפול" CTA on the far left is a small text-button with a thin teal underline — **not** a big filled button. It gets a filled background only on `:hover`.
- Active page indicator: 1px teal underline under the nav item, animating in from right.
- Mobile: hamburger → full-screen overlay in `--ink`, large serif links stacked, right-aligned.

### 4.3 Footer
Minimal. Three columns (RTL):
1. **Right:** Logo + short tagline ("ספורטתרפיה מתקדמת · רמת גן & תל אביב")
2. **Middle:** Hours (compact list, LTR for times)
3. **Left:** Contact — WhatsApp link (ltr phone format `+972 50-303-2316` but `tel:+972503032316`), email link, two addresses.

Bottom strip: `© ${new Date().getFullYear()} Tom Kushlin SportTherapy · כל הזכויות שמורות` — small, in `--ink-soft`.

---

## 5. Contact & integrations (EXACT VALUES — use verbatim)

- **WhatsApp number:** `+972503032316`
  - Display format in UI: `+972 50-303-2316`
  - Link format: `https://wa.me/972503032316?text=${encodeURIComponent('היי טום, הגעתי דרך האתר ואני מעוניין לקבוע טיפול')}`
- **Plannie booking iframe:** `https://plannieapp.com/?name=tomkushsporttherapy`
  - Embed as `<iframe>` with `loading="lazy"`, min-height 800px, width 100%, border 0, inside a container with max-width 900px.
- **Email:** Leave placeholder `tom@kushlinsporttherapy.co.il` in the contact form destination — the user will confirm and swap.
- **Contact form:** use Netlify Forms. Add `data-netlify="true" name="contact"` to the form. Include honeypot field `name="bot-field"`. Fields: name, phone, email (optional), message. RTL layout, fields labeled above.
- **Business hours:**
  - ראשון (תל אביב – Nana Home): 09:00–15:00
  - שני: 10:00–18:00
  - שלישי: 09:00–12:00
  - רביעי: 09:00–18:00
  - חמישי: 09:00–19:00
  - שישי + שבת: סגור
- **Addresses:**
  - הקליניקה הראשית: ארניה 6, רמת גן
  - סטודיו תל אביב: Nana Home, תל אביב (user will provide exact address — use placeholder `[כתובת מדויקת תינתן]` for now)

### Google Maps embed
Use Google Maps iframe embed (no API key required) with 2 pins on the contact page. For now, center the map between Ramat Gan and Tel Aviv and drop standard iframe embed for "ארניה 6 רמת גן". Second pin can be added manually after Nana Home's exact address is confirmed — include a code comment flagging this.

---

## 6. Assets provided

Place the following files in `public/images/`:
```
public/
  images/
    tom-hero.jpg        ← full-body photo, arms crossed, looking at camera (for home hero + about hero)
    tom-about.jpg       ← profile photo, looking up, thoughtful (for about page secondary image)
    logo-sporttherapy.png  ← the black-background logo with teal accents
```

The user will drop these files into `public/images/` before running the build. Reference them in `.astro` files as `/images/tom-hero.jpg` etc.

**Logo usage:** The logo is white-line torso + "SportTherapy / TOM KUSHLIN" wordmark on pure black. Use it:
- In the top nav on dark/transparent state: full logo on transparent, scaled to ~44px height.
- In the top nav on light state: show only a **compact monochrome mark** — replace with just the word mark "SportTherapy TOM KUSHLIN" set in Fraunces serif, with "Therapy" and "KUSHLIN" in teal. Create this as a text element (don't rasterize); fall back to the PNG only if time-pressured.
- In the footer: full logo, 56px tall.

---

## 7. Page-by-page specs

### 7.1 `/` — Home

**The entire first viewport is the hero.** Full-bleed image of Tom (`tom-hero.jpg`) covering 100vh. Thin top nav floats over it (transparent state).

Overlay composition on the hero:
- Dark vertical gradient on the **right** side (RTL: text side) from `rgba(15,20,25,0.55)` at the right edge fading to transparent at 55% across.
- Text block positioned bottom-right, max-width 560px, bottom padding ~10vh, right padding ~8vw.

Hero text block:
```
[eyebrow, Fraunces uppercase tracked, teal 0.8 opacity]
SPORT THERAPY · TOM KUSHLIN

[H1, Frank Ruhl Libre 700, ~84px, white]
הכאב לא חייב
להיות חלק מהחיים

[sub, Assistant 400, ~20px, white/85]
אבחון מדויק של מקור הכאב — לא רק של הסימפטום.
טיפול בגישה ייחודית המשלבת מגע, נשימה ותנועה.

[CTA row, small gap]
(primary, teal fill, ink text, small padding, thin)  להיפטר מהכאב עכשיו ←
(ghost, 1px white border, white text)  שליחת הודעה בוואטסאפ
```

**Below the hero** (one more scroll, then that's it for the home page):
- A single narrow section, cream background, max-width 720px centered, generous padding 160px top/bottom.
- Eyebrow: `גישה` in Fraunces teal uppercase tracked
- H2: `הגוף מדבר בשפה שלו. אני מתרגם.` — Frank Ruhl Libre, ~48px.
- Two short paragraphs (see content below).
- At the very bottom, a thin horizontal rule + tiny row of 4 service names in `Fraunces` small caps: `Dry Needling · Medical Massage · Sports Rehab · Movement` — each linking to `/services#[slug]`.

**Home copy (exact Hebrew):**

> **H2:** הגוף מדבר בשפה שלו. אני מתרגם.
>
> מטפל אחד מחפש איפה כואב. אחר מחפש למה. אני עובד בשיטה השנייה.
>
> אחרי חמש שנים של עבודה עם מאות מטופלים — ספורטאים, רצים, יושבים מול מחשב, אמהות, אנשים שלא מפסיקים לזוז ואנשים שלא זוכרים מתי בפעם האחרונה הם כן זזו — הבנתי דבר אחד: כאב שלא עובר הוא לא באשמת הגוף. הוא סימן שלא הקשיבו לגוף מספיק עמוק.
>
> [קרא את הסיפור המלא ←] (links to /about)

**That's it.** No testimonials, no services grid, no articles teaser. The home is a statement, not a brochure.

---

### 7.2 `/about` — אודות

Two-column hero (RTL: text right, image left): short eyebrow + H1 `על טום` + lead paragraph; left column `tom-about.jpg` (the profile looking-up shot).

Then a single long column, max-width 640px, prose layout:
- **למה אני עושה את זה** – personal story (write a 2-paragraph authentic-sounding piece based on the CONTEXT provided in this brief; do not fabricate specific biographical facts not given).
- **הגישה** – 3 short paragraphs on the diagnostic-first approach.
- **הבידול** – one paragraph on what makes the practice different: deep diagnosis, root-cause focus, integration of touch + breath + movement.

End with a centered CTA: `לקביעת טיפול ←` linking to `/booking`.

**Suggested about copy (use as starting point — refine language but keep voice):**

> **Eyebrow:** על המטפל
> **H1:** טום קושלין · ספורטתרפיסט
>
> **Lead:** חמש שנים של עבודה עם גוף האדם לימדו אותי שרוב הכאבים הכרוניים הם שאלה שלא שאלו. אני שואל אותה.
>
> **למה אני עושה את זה**
> נכנסתי לתחום בגלל פציעה משלי שאף אחד לא הצליח לפתור. עברתי בין מטפלים, שיטות, הבטחות — וכל אחד התעקש על הטכניקה שלו במקום על הגוף שלי. בסופו של דבר מצאתי מטפל אחד שלא שאל "איפה כואב" אלא "מתי זה התחיל, איך אתה יושב, איך אתה נושם." תוך שבועיים הכאב נעלם. הבנתי שזה מה שאני רוצה לעשות.
>
> **הגישה**
> כאב הוא סימפטום. הוא אף פעם לא הבעיה עצמה.
> כאב גב תחתון יכול להגיע מהסרעפת, ממכופפי הירך, ממתח רגשי שנאגר בכתפיים במשך שנים. כאב כתף יכול להתחיל מצלקת ניתוחית ישנה בבטן. כאב ברך יכול לנבוע ממוביליות קרסול שנעלמה בלי שהרגשת.
> העבודה שלי היא למפות את שרשרת הסיבות — לא להסתפק בתוצאה שלה.
>
> **הבידול**
> אני לא מחליף טכניקה בטכניקה. אני משלב שלושה כלים — דיקור יבש לשחרור נקודות טריגר עמוקות, עבודת מגע ישירה על הפאשיה והשרירים, ותרגול ממוקד שנבנה אישית — ומתאים את שלושתם לכל מטופל לפי מה שהגוף שלו צריך באותו רגע.
>
> [קבע טיפול ←]

---

### 7.3 `/services` — שירותים

Grid of 4 cards (2×2 on desktop, 1-col on mobile). Each card:
- Eyebrow in `Fraunces` small caps
- H3 in Frank Ruhl Libre
- 2-line description in Assistant
- Small "קרא עוד על השיטה" link at the bottom (can anchor to articles that describe the method)

Card layouts are NOT identical — give each card slight variety:
- Card 1: full card with a thin teal top border.
- Card 2: image on the right half of the card (can use placeholder — annotate with a code comment).
- Card 3: simple text-only card.
- Card 4: with a large numerical "04" in Fraunces extra-light behind the heading.

Vary, don't standardize. This is editorial.

**Services copy:**

1. **Dry Needling · דיקור יבש**
   > שחרור עמוק של נקודות טריגר מיופסיאליות באמצעות מחט דקה מאוד. שיטה מבוססת-מחקר שפותחה בידי ד"ר ג'נט טראוול, ומשתמשת כיום על ידי פיזיותרפיסטים ברחבי העולם להפחתת כאב כרוני ושחזור טווחי תנועה. לא אקופונקטורה — רפואה מערבית ממוקדת.

2. **Medical Massage · עיסוי רפואי**
   > לא עיסוי מפנק. עבודה ממוקדת על פאשיה, הידבקויות של רקמת חיבור, ומתחים כרוניים במערכת מיופסיאלית. המטרה אחת: להחזיר לרקמות את היכולת להחליק אחת על השנייה, ולגוף את הטווחים שהיו לו פעם.

3. **Sports Rehabilitation · שיקום ספורט**
   > שיקום פציעות ספורט — מעבר מדוד מהטיפול החד בפציעה חזרה לפעילות המלאה. מותאם לסוג הענף, לרמת המאמן, וללוח הזמנים שלך. ספורטאים חובבנים ומקצועיים כאחד.

4. **Personalized Exercise · תרגול מותאם אישית**
   > תרגול הוא לא נספח לטיפול. הוא חצי מהטיפול. אחרי כל מפגש אתה יוצא עם 3–5 תרגילים ממוקדים, מצולמים, ברורים — שבונים את מה שהמפגש פתח.

---

### 7.4 `/process` — תהליך הטיפול

Four steps, vertical layout with generous spacing. Each step:
- Big numeric marker (`01`, `02`, etc.) in Fraunces 200, 96px, teal, right-aligned
- H3 in Frank Ruhl Libre
- Paragraph in Assistant

**Steps:**
1. **אבחון ראשוני** – "המפגש הראשון לא מתחיל ממגע. הוא מתחיל משאלות. מתי זה התחיל, מה השתנה בחיים שלך באותו זמן, איך אתה ישן, איך אתה נושם, איפה אתה מרגיש את זה הכי חזק. רק אחרי זה עוברים למגע."
2. **מיפוי השרשרת** – "הכאב שאתה מרגיש זה לא בהכרח המקום שמייצר אותו. אני ממפה את שרשרת הקשרים בין המקור לסימפטום — שרירים, פאשיה, נשימה, תבניות תנועה."
3. **טיפול ממוקד** – "שילוב של דיקור יבש, עבודת מגע על הפאשיה, ונשימה מודרכת. כל מפגש נבנה על המצב שאתה מגיע אליו באותו יום — לא על תבנית קבועה."
4. **תרגול וחידוש התנועה** – "כל מפגש נגמר עם 3–5 תרגילים שצולמו בזמן הטיפול, עם הסברים ברורים. התרגול הוא מה שמקבע את השינוי."

---

### 7.5 `/testimonials` — המלצות

Simple grid of quote cards (2-col desktop, 1-col mobile). Each card:
- Decorative quote mark (small, teal, top-right)
- Quote in Frank Ruhl Libre 500, 20px
- Name + one-line descriptor in Assistant, smaller
- Small row of 5 teal star glyphs at top-right

Use the 4 testimonials from the user's reference (Lovable screenshot) — include them verbatim:

1. **דני מ.** – רץ חובבני – 5★
   > "אחרי חודשים של כאבי גב שאף אחד לא הצליח לפתור, Tom מצא שהבעיה מגיעה מהסרעפת. תוך שלושה טיפולים הרגשתי שיפור דרמטי."

2. **מיכל ש.** – מתאמנת בחדר כושר – 5★
   > "הגישה של Tom שונה לחלוטין ממה שהכרתי. הוא לא רק מטפל — הוא מלמד אותך להבין את הגוף שלך ונותן כלים להמשך."

3. **אורי כ.** – שחקן כדורגל – 5★
   > "נפצעתי באימון ופחדתי שלא אוכל לחזור לספורט. Tom בנה לי תוכנית שיקום מדויקת וחזרתי לאימונים תוך חודשיים."

4. **רונית ל.** – עובדת מחשב – 5★
   > "סבלתי מכאבי צוואר כרוניים שנים. השילוב של דיקור יבש ותרגילים ש-Tom נתן לי שינה את החיים שלי."

---

### 7.6 `/articles` — מאמרים (index)

Eyebrow `ידע מקצועי` + H1 `מאמרים`. Short intro line: "הבנה של הגוף היא חצי מהדרך להחלמה. שלושה כתבים על מה שקורה מתחת לפני השטח."

Grid of 3 cards. Each card:
- Eyebrow tag (category)
- H3 serif
- 2-line teaser
- `קרא ←` link

**Cards:**
1. **Tag:** גב תחתון · **Title:** "כאבי גב תחתון? אולי הבעיה לא שם" · **Teaser:** "למה חלק גדול מכאבי הגב התחתון מקורם במכופפי הירך — ואיך לזהות את זה." → `/articles/hip-flexors-lower-back-pain`
2. **Tag:** דיקור יבש · **Title:** "Trigger Points — הקשר בין שריר לכאב שלא עובר" · **Teaser:** "מה קורה בשריר כשנוצרת נקודת טריגר, ואיך דיקור יבש עובד על המערכת העצבית." → `/articles/dry-needling-trigger-points`
3. **Tag:** ידע מקצועי · **Title:** "Fascia — הרשת שמחברת הכל" · **Teaser:** "על רקמת החיבור שעוטפת את הגוף, ולמה היא אולי החוליה החסרה בטיפולים שלא עבדו." → `/articles/fascia-connective-network`

---

### 7.7 Articles – full Hebrew content

Each article as its own `.md` file in `src/content/articles/`, using Astro Content Collections. Each article uses a dedicated article template that renders:
- Thin top nav (as always)
- Breadcrumb: `מאמרים / [שם המאמר]`
- Tag label (small eyebrow)
- H1 in Frank Ruhl Libre
- Reading time estimate (`3 דק׳ קריאה`)
- Body prose in Assistant 18px, max-width 680px
- At the end: "רוצה לבדוק אם זה מה שקורה אצלך?" + CTA buttons (WhatsApp + Plannie)
- At the very end: `הערה רפואית: מאמר זה נועד להרחבת ידע בלבד ואינו מהווה ייעוץ רפואי. לאבחון ולטיפול יש לפנות למטפל מוסמך.`

---

#### Article 1 — `hip-flexors-lower-back-pain.md`

```markdown
---
title: "כאבי גב תחתון? אולי הבעיה לא שם"
tag: "גב תחתון"
readingTime: "4 דק׳ קריאה"
excerpt: "למה חלק גדול מכאבי הגב התחתון מקורם במכופפי הירך — ואיך לזהות את זה."
publishedAt: "2026-04-01"
---

## למה זה חשוב

כאב גב תחתון הוא אחת התלונות השכיחות בעולם — מחקרים מעריכים שכ-80% מהאנשים יחוו אותו בשלב כלשהו בחיים. למרות זאת, רוב האנשים שיפנו לטיפול ישמעו את אותה האבחנה: "מתח שרירי בגב התחתון." ואכן — שם כואב. אבל המקור של הכאב הוא לא תמיד במקום שבו מרגישים אותו.

## מה זה מכופפי הירך

מכופפי הירך (Hip Flexors) הם קבוצת שרירים בחלק הקדמי של האגן. החשוב שבהם נקרא **איליופסואס** (iliopsoas) — הוא מורכב משני שרירים, הפסואס מייג'ור (Psoas Major) והאיליאקוס, שמתמזגים לשריר אחד שמתחבר מלמעלה לחוליות הגב התחתון (T12–L4) ומלמטה לחלק הקדמי של עצם הירך.

שים לב למה שזה אומר: השריר הזה **מחבר פיזית את הגב התחתון לרגל**.

## איך הישיבה הורסת את זה

כשאתה יושב, הפסואס נמצא במצב מקוצר. אם אתה יושב שמונה שעות ביום — מול מחשב, בפקקים, בישיבות זום — הגוף שלך מסיק מסקנה הגיונית: "זה אורך השריר החדש שלי." זה נקרא **הסתגלות אורכית** (adaptive shortening). השריר פשוט שוכח איך להתארך.

כשאתה קם ללכת או לרוץ, מכופפי הירך המקוצרים מושכים את האגן קדימה (anterior pelvic tilt) ואת חוליות הגב התחתון פנימה — ויוצרים עקמת יתר בעמוד השדרה המותני. התוצאה: לחץ יתר על המפרקים, השרירים והדיסקים של הגב התחתון. כאב.

## למה זה לא תמיד גלוי

המחקר על הקשר בין מכופפי ירך מקוצרים לכאב גב תחתון הוא מורכב. חלק מהמחקרים מצאו קורלציה ברורה — מחקר שבוצע על שחיינים מצא שאלה עם מכופפי ירך מקוצרים חוו יותר כאבי גב, בהשערה שההיעדר של יישור מלא של הירך גרם לעקמת פיצוי בגב. מחקרים אחרים לא מצאו קשר ישיר.

המסקנה הקלינית: **מכופפי ירך מקוצרים הם לא הגורם היחיד לכאב גב תחתון, אבל הם אחד הגורמים המוזנחים ביותר**. רבים עוברים טיפולים ישירים על הגב במשך חודשים בלי תוצאה, פשוט כי איש לא בדק את החלק הקדמי של האגן.

## איך לבדוק

הבדיקה הקלאסית נקראת **Modified Thomas Test** — שכב על שולחן כשהאגן בקצה, משוך ברך אחת חזק לחזה, ותן לרגל השנייה ליפול אלי השולחן. אם היא לא מגיעה ליישור מלא אופקי — סביר להניח שמכופפי הירך מקוצרים.

יש גם סימנים אחרים: כאב שמחמיר אחרי ישיבה ממושכת ומשתפר בהליכה; תחושת "קושי לקום מהכיסא"; בטן שבולטת קדימה ("בטן שקרית").

## מה עושים

לא מותחים. מתיחה של שריר שמקוצר באופן כרוני לא פותרת את הבעיה — היא רק מעמיסה את המערכת. מה שעובד הוא שילוב של:

1. **שחרור הרקמה עצמה** — דיקור יבש של נקודות טריגר בפסואס ובאיליאקוס, עבודת מגע על הפאשיה שעוטפת אותם.
2. **חיזוק האנטגוניסטים** — הגלוטאוס והשרירים האחוריים שהתרפו בגלל חוסר שימוש (Lower Crossed Syndrome).
3. **תרגול אינטגרטיבי** — תנועות שמחזירות לגוף את היכולת להאריך את הירך בזמן הליכה, עמידה וריצה.

## למה זה חשוב לדעת

לא כל כאב גב תחתון מקורו במכופפי הירך. אבל אם עברת טיפולים ישירים על הגב וזה לא עבד — שווה לבדוק את החלק הקדמי של האגן. לפעמים המקור של הכאב הוא בדיוק במקום שאף אחד לא חיפש.

---

*בהפקת המאמר נעזרנו במקורות מחקריים הכוללים פרסומים של NCBI/PubMed, Journal of Orthopaedic & Sports Physical Therapy, ומחקרים עכשוויים על הקשר בין Hip Flexor Tightness ל-Low Back Pain.*
```

---

#### Article 2 — `dry-needling-trigger-points.md`

```markdown
---
title: "Trigger Points — הקשר בין שריר לכאב שלא עובר"
tag: "דיקור יבש"
readingTime: "5 דק׳ קריאה"
excerpt: "מה קורה בשריר כשנוצרת נקודת טריגר, ואיך דיקור יבש עובד על המערכת העצבית."
publishedAt: "2026-04-01"
---

## מה זה נקודת טריגר

נקודת טריגר מיופסיאלית (Myofascial Trigger Point) היא נקודה רגישה במיוחד בתוך רצועה מתוחה של סיבי שריר — נקודה שאפשר למשש, שכואבת בלחיצה, ולעיתים משדרת כאב למקום אחר בגוף לגמרי.

היא נחקרה לראשונה בצורה שיטתית בשנות ה-40 על ידי **ד"ר ג'נט טראוול**, רופאה אמריקאית ששירתה בהמשך כרופאה של הנשיא קנדי. טראוול מיפתה את הנקודות האלה לאורך עשרות שרירים ופרסמה, יחד עם ד"ר דיוויד סיימונס, את הטקסט הקנוני בתחום — "Myofascial Pain and Dysfunction: The Trigger Point Manual".

## מה קורה שם בפנים

ברמת הרקמה, באזור נקודת הטריגר קורים כמה דברים בו-זמנית:

- **קיצור כרוני של סרקומרים** (יחידות ההתכווצות של השריר). הם נשארים במצב מכווץ גם כשהשריר אמור להיות רפוי.
- **ירידה מקומית במחזור הדם** — האזור הופך היפוקסי (חסר חמצן).
- **הצטברות של חומרים כימיים** כמו יוני מימן, פרוסטגלנדינים, ברדיקינין ו-CGRP — חומרים שמגבירים רגישות של סיבי עצב לכאב.

התוצאה: השריר לא מצליח להירגע, האזור הופך רגיש יותר לכל גירוי, והכאב מתחיל להיות **כאב מופנה** (referred pain) — כלומר מורגש במקום אחר מאיפה שהבעיה באמת. נקודה בשריר הטרפזיוס יכולה לייצר כאב ראש. נקודה בגלוטאוס מדיוס יכולה להרגיש ככאב בברך.

## מאיפה זה מגיע

נקודות טריגר לא צצות במקרה. הן נוצרות בעקבות:

- **עומס חוזר** — שימוש ממושך באותם שרירים באותו אופן (עבודת משרד, ריצה ללא וריאציה).
- **מיקרו-טראומה** — נזקים קטנים שהצטברו, לדוגמה תנועה שגויה שחזרה על עצמה.
- **סטרס כרוני** — מתח מתמיד במערכת העצבים שמתבטא ככיווץ שרירי.
- **פציעה ישנה** — שריר שפגע פעם ולא חזר לטווח תנועה מלא.

## למה עיסוי רגיל לא תמיד עוזר

הבעיה בעיסוי רגיל של נקודת טריגר היא השכבה. הנקודה הזו נמצאת לעתים **עמוק** בתוך השריר, מתחת לשכבות רקמה, ולחץ חיצוני — אפילו חזק — מגיע אליה מומס. בנוסף, לעיתים יש צורך "לשבור" את התבנית העצבית של הנקודה, לא רק להרפות את הסיב הפיזי.

## איך דיקור יבש עובד

דיקור יבש (Dry Needling) הוא החדרה של מחט פילימנטית דקה מאוד (דקה יותר ממחט של זריקה) ישירות לנקודת הטריגר. המילה "יבש" פירושה שאין שום חומר מוזרק — המחט לבדה היא הכלי.

**זה לא אקופונקטורה.** אקופונקטורה מבוססת על מפה של מרידיאני אנרגיה ברפואה סינית מסורתית. דיקור יבש מבוסס על אנטומיה מערבית ועל המיפוי המדויק של נקודות טריגר בשרירים ספציפיים.

כשהמחט מגיעה לנקודה, מתרחשות מספר תופעות:

1. **Local Twitch Response** — התכווצות רפלקסיבית מהירה של רצועת השריר המתוחה. התכווצות זו היא סימן קליני שהמחט פגעה בנקודה הנכונה, וההשערה היא שהיא מאפסת את התבנית העצבית של השריר.
2. **שינוי כימי מקומי** — המיקרו-פגיעה של המחט מעוררת זרימת דם מוגברת לאזור, מפחיתה את ריכוז החומרים המגרים ומנקה את הסביבה הביוכימית.
3. **עיבוד מחדש של אות הכאב** — סיבי עצב באזור משנים את האופן שבו הם משדרים מידע לעמוד השדרה ולמוח, מה שמפחית את "ההגברה" של הכאב.

## מה אומר המחקר

סקירה שיטתית מטה-אנליטית שפורסמה ב-Journal of Orthopaedic & Sports Physical Therapy (2017) מצאה שדיקור יבש על ידי פיזיותרפיסט יעיל יותר מאי-טיפול, מטיפול דמה ומטיפולים אחרים להפחתת כאב ולשיפור סף כאב — בטווח הזמן המיידי עד 12 שבועות. סקירה עדכנית יותר (2020) הראתה ממצאים דומים עבור כאבי צוואר.

חשוב לציין: היעילות בטווח הארוך (מעבר ל-3 חודשים) עדיין נחקרת, ודיקור יבש הוא חלק מתוכנית טיפול רחבה יותר — לא פתרון קסם עצמאי.

## מתי זה לא מתאים

דיקור יבש אינו מתאים לכל אחד. אינו מומלץ במצבי דימום כבד, חולים בטיפולי אנטיקואגולציה ללא התאמה, נשים בהריון בשלבים מסוימים (תלוי באזור הטיפול), ופוביה ממחטים חמורה. מטפל מוסמך יברר את כל האזהרות הרפואיות לפני התחלת הטיפול.

## בשורה התחתונה

נקודת טריגר היא לא "קשר פשוט" שצריך לשחרר — היא תופעה נוירומוסקולרית מורכבת שמערבת את השריר, את הפאשיה, ואת מערכת העצבים. דיקור יבש עובד בדיוק על הצומת הזה — הוא אחד הכלים הישירים ביותר שיש לנו להשפיע עליה.

---

*המאמר מבוסס על סקירות שפורסמו ב-Journal of Orthopaedic & Sports Physical Therapy, International Journal of Sports Physical Therapy, Physiopedia, ועל עבודתם המחקרית של Travell, Simons, Dommerholt ו-Fernández-de-las-Peñas.*
```

---

#### Article 3 — `fascia-connective-network.md`

```markdown
---
title: "Fascia — הרשת שמחברת הכל"
tag: "ידע מקצועי"
readingTime: "4 דק׳ קריאה"
excerpt: "על רקמת החיבור שעוטפת את הגוף, ולמה היא אולי החוליה החסרה בטיפולים שלא עבדו."
publishedAt: "2026-04-01"
---

## הרקמה שהתעלמנו ממנה

במשך מאה שנה, כשסטודנט לרפואה קיבל גופה ללמוד עליה אנטומיה, הדבר הראשון שלימדו אותו לעשות הוא **לנקות את הפאשיה**. לחתוך אותה, להזיז אותה הצידה, כדי להגיע לשרירים, לעצמות, ל"דברים החשובים."

התברר שהדברים החשובים היו בדיוק מה שנזרק.

פאשיה (Fascia) היא רקמת חיבור — רצועות דקות של קולגן שעוטפות **כל שריר, כל עצם, כל עצב, כל איבר פנימי, וכל כלי דם בגוף**. היא לא אברים נפרדים. היא רשת אחת רציפה שמאגדת את הגוף יחד.

הגדרה פורמלית (FORCE 2013): "מערכת הפאשיה היא רצף תלת-ממדי של רקמות חיבור עשירות בקולגן, שחוצות את הגוף ומאחדות כל מבנה פנימי לרשת פונקציונלית אחת."

## למה לא שמעת על זה

עד לפני כעשרים שנה, הפאשיה נחשבה לרקמה "פסיבית" — כמו ניילון נצמד שעוטף בשר. בשנות ה-2000 התחילו מחקרים שהראו שהרקמה הזו היא:

- **עצבית מאוד** — דחוסה בסיבי עצב חופשיים, יותר מהשריר עצמו. הפאשיה יכולה להרגיש כאב, לחץ, תנועה.
- **פעילה מכנית** — מכילה פיברובלסטים שיכולים להתכווץ ולהשפיע על המתח ברקמה.
- **מוליכה תנועה** — מחקרים של גופות הראו שהפאשיה מעבירה כוחות בין קבוצות שרירים מרוחקות, כך שהתכווצות של שריר באגן יכולה להשפיע על הכתף.

זה שינה את כללי המשחק בפיזיותרפיה המודרנית.

## שכבות שמחליקות

במצב תקין, שכבות הפאשיה מחליקות זו על זו. ביניהן יש חומר סיכה טבעי — חומצה היאלורונית (hyaluronan) — שמאפשר לשכבות לנוע בלי חיכוך. זה מה שמאפשר לך להסתובב, להתכופף, להגיע ולהושיט יד.

מה קורה כשהפאשיה מתקשה:

- **דלקת כרונית** משנה את חומצה היאלורונית — היא נעשית צמיגה יותר, מאבדת יכולת סיכה.
- **פיברובלסטים הופכים למיופיברובלסטים** — תאים שיש להם יכולת התכווצות, והם מקצרים את הרקמה ומגבירים את המתח בה.
- **שכבות שהיו אמורות להחליק — נדבקות**. נוצרות הידבקויות שמגבילות את תנועת השכבות אחת ביחס לשנייה.

מחקר משנת 2011 הראה במדויק את התופעה הזו: סריקות על-קול של אנשים עם כאבי גב תחתון כרוניים הראו **פחות תנועה גזירתית** (shear motion) בין שכבות הפאשיה התורקולומברית לעומת אנשים ללא כאב. אצלם, הרקמה באמת נדבקה.

## פרופריוצפציה — תחושת הגוף

מעבר לתפקיד המכני, לפאשיה יש תפקיד חושי שרק עכשיו מתחילים להבין. היא מלאה בקולטני פרופריוצפציה (Ruffini, Golgi, Pacini) — קולטנים שמעבירים למוח מידע על איפה נמצא הגוף שלך במרחב, איך הוא זז, כמה מתח יש ברקמות.

כשהפאשיה דבוקה או דלקתית, המידע הזה מעוות. המוח מקבל תמונה לא מדויקת של מצב הגוף — מה שיכול להתבטא ב:

- תחושת "נוקשות" שלא עוברת.
- קושי בקואורדינציה של תנועות מורכבות.
- כאב שלא נלכד לשריר או מפרק ספציפי.
- תחושת ניתוק מחלקים מסוימים של הגוף.

## איך זה קשור לכאב שלך

הנה התסריט הקליני: מישהו נפצע בקרסול לפני עשר שנים. הקרסול התרפא, אבל הפאשיה באזור — הרצועה הרחבה שמחברת את הקרסול לשוק ולברך — לא חזרה לאלסטיות המלאה שלה. תבנית ההליכה השתנתה מעט. במשך עשר שנים הגוף מפצה — המותן עובד קצת יותר, האגן מתקבע קצת אחרת. היום הוא סובל מכאבי גב תחתון כרוניים.

רופא יבדוק את הגב. פיזיותרפיסט יעסה את הגב. אבל הבעיה לא בגב — היא בקרסול שאף אחד כבר לא זוכר.

**זו הסיבה שעבודה על פאשיה כל כך חשובה**: היא מאפשרת לאתר חיבורים שהמטפל הממוצע לא מחפש.

## איך עובדים על זה

אין טכניקת קסם אחת. מה שעובד הוא שילוב של:

- **מגע ממוקד על שכבות הפאשיה** — לא עיסוי שרירי, אלא עבודה איטית על ההידבקויות עצמן.
- **דיקור יבש** — במקרים של נקודות טריגר שיוצבו בתוך הפאשיה ולא רק בשריר.
- **תנועה** — תרגול שמחייב את שכבות הפאשיה לנוע אחת ביחס לשנייה, לשחזר את יכולת הגזירה שלהן.
- **זמן** — פאשיה מתעצבת מחדש לאט. שינויים משמעותיים לוקחים שבועות ולא ימים.

## בשורה התחתונה

אם עברת הרבה טיפולים על אותו כאב, וכלום לא עזר לאורך זמן — שווה לשאול אם מישהו הסתכל על הרקמה הזו שמחברת הכל. לפעמים הכאב לא נמצא במקום שבו הוא מורגש. לפעמים הוא נמצא במקום שבו הרשת נדבקה.

---

*המאמר מבוסס על פרסומים של NCBI Bookshelf (StatPearls), Johns Hopkins Medicine, Cleveland Clinic, PMC, Physiopedia, ו-Fascia Research Society.*
```

---

### 7.8 `/booking` — קביעת תור

Simple page. H1, one-line intro, then the Plannie iframe centered.

```html
<iframe
  src="https://plannieapp.com/?name=tomkushsporttherapy"
  style="width:100%; max-width:900px; min-height:820px; border:0;"
  loading="lazy"
  title="קביעת תור - SportTherapy"
></iframe>
```

Below the iframe: small fallback row — "לא עובד לך? שלח הודעה בוואטסאפ ←" linking to WhatsApp.
Below that: the business hours list (short, LTR times).

---

### 7.9 `/contact` — צור קשר

Two-column layout (RTL):
- **Right column:** contact details
  - Big serif H2: "בוא נדבר"
  - Paragraph: invitation to reach out.
  - WhatsApp card — big CTA button.
  - Email: small text with mailto.
  - Hours block.
  - Two address blocks (ר"ג + ת"א).
- **Left column:** contact form (Netlify Forms) + below it the Google Maps embed.

---

## 8. SEO & metadata

Every page needs:
- `<title>` in Hebrew: `[Page] · SportTherapy · Tom Kushlin`
- `<meta name="description">` in Hebrew, ~155 chars.
- Open Graph: `og:title`, `og:description`, `og:image` (use `tom-hero.jpg`), `og:type=website`, `og:locale=he_IL`.
- Canonical URL.
- `<html lang="he" dir="rtl">`

**Schema.org** on every page (in `<head>`), LocalBusiness:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "SportTherapy - Tom Kushlin",
  "image": "https://[site].netlify.app/images/tom-hero.jpg",
  "telephone": "+972503032316",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "ארניה 6",
      "addressLocality": "רמת גן",
      "addressCountry": "IL"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Nana Home",
      "addressLocality": "תל אביב",
      "addressCountry": "IL"
    }
  ],
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday",    "opens": "09:00", "closes": "15:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": "Monday",    "opens": "10:00", "closes": "18:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday",   "opens": "09:00", "closes": "12:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "18:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday",  "opens": "09:00", "closes": "19:00"}
  ],
  "priceRange": "$$",
  "url": "https://[site].netlify.app"
}
```

Also add `sitemap.xml` via `@astrojs/sitemap` integration, and a `robots.txt` (allow all, reference sitemap).

---

## 9. Analytics

Add GA4 to the site via a single async script in the root layout `<head>`. Wrap in an env variable check so it only runs in production:

```astro
{import.meta.env.PROD && (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script is:inline>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
    </script>
  </>
)}
```

Leave `G-XXXXXXXXXX` as-is — the user will replace with their real measurement ID.

---

## 10. Accessibility

- All images with meaningful content have `alt` attributes in Hebrew.
- Decorative images (hero backgrounds, etc.) have `alt=""`.
- All buttons and links have clear text (not "click here").
- Color contrast: body text on cream must be at least 7:1 (use `--ink` on `--cream`). Teal on white only for icons/strokes, never for body text.
- Focus states visible: 2px teal outline with 2px offset on all interactive elements.
- Skip-to-content link at the top of the body (hidden until focused).
- Form fields have associated `<label>`s, not placeholder-only labels.

---

## 11. File structure

```
sporttherapy-site/
├── public/
│   ├── images/
│   │   ├── tom-hero.jpg
│   │   ├── tom-about.jpg
│   │   └── logo-sporttherapy.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── TopNav.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── WhatsAppCTA.astro
│   │   ├── ServiceCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── ArticleCard.astro
│   │   ├── ProcessStep.astro
│   │   └── SchemaOrg.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro        ← base HTML shell, fonts, SEO, schema
│   │   └── ArticleLayout.astro     ← for markdown articles
│   ├── pages/
│   │   ├── index.astro             ← Home
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── process.astro
│   │   ├── testimonials.astro
│   │   ├── articles/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── booking.astro
│   │   └── contact.astro
│   ├── content/
│   │   ├── config.ts               ← content collection schema
│   │   └── articles/
│   │       ├── hip-flexors-lower-back-pain.md
│   │       ├── dry-needling-trigger-points.md
│   │       └── fascia-connective-network.md
│   ├── styles/
│   │   └── global.css              ← CSS variables, base typography
│   └── data/
│       ├── services.ts
│       ├── testimonials.ts
│       └── process-steps.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── netlify.toml
└── README.md
```

---

## 12. `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 13. Execution plan — phases

**Execute in this order. After each phase, run `npm run dev` and verify visually before moving to the next phase.**

### Phase 0 — Setup
1. `npm create astro@latest sporttherapy-site -- --template minimal --typescript strict --install --no-git`
2. Install: `@astrojs/tailwind @astrojs/sitemap @astrojs/mdx`
3. Add Tailwind, configure `tailwind.config.mjs` with custom color tokens from section 3.1.
4. Add Google Fonts link in base layout.
5. Create `src/styles/global.css` with CSS custom properties.
6. Create folder structure per section 11.
7. Add `netlify.toml`.

### Phase 1 — Base layout & navigation
1. Build `BaseLayout.astro` — HTML shell, `<html dir="rtl" lang="he">`, font links, GA4 snippet, SEO block, Schema.org block.
2. Build `TopNav.astro` — fixed, transparent-over-hero state + solid-on-scroll state (use Intersection Observer to detect hero vs interior). Mobile hamburger menu.
3. Build `Footer.astro`.
4. Verify nav behavior on an empty `/` route.

### Phase 2 — Home page
1. Build the hero with `tom-hero.jpg` full-bleed, gradient overlay, text block bottom-right.
2. Add the single post-hero section.
3. Verify responsiveness mobile/tablet/desktop.

### Phase 3 — Interior pages scaffolding
1. Build `/about`, `/services`, `/process`, `/testimonials` — one at a time, with final copy from section 7.
2. Build reusable `ServiceCard`, `ProcessStep`, `TestimonialCard` components.
3. Verify each page.

### Phase 4 — Articles
1. Configure Content Collection in `src/content/config.ts`.
2. Create the 3 markdown files with the exact content from section 7.7.
3. Build `ArticleLayout.astro`.
4. Build `/articles/index.astro` (cards grid).
5. Build `/articles/[...slug].astro` (dynamic route).
6. Verify all 3 articles render correctly with proper typography and RTL.

### Phase 5 — Booking & contact
1. Build `/booking` with Plannie iframe.
2. Build `/contact` with Netlify form + Google Maps embed + address blocks.
3. Verify form submission works after first Netlify deploy.

### Phase 6 — Polish
1. Add fade-up scroll animations (IntersectionObserver + CSS transitions).
2. Add ken-burns on the home hero image (subtle, 6s, `transform: scale(1.04)`; capped at 1.02 on mobile).
3. Wrap all animations in a `@media (prefers-reduced-motion: reduce)` disable block.
4. Audit accessibility — tab through every page, verify focus states visible.
5. **Mobile audit — mandatory before moving on:**
   - Chrome DevTools device mode at 375px, 390px, 414px, 768px, 1024px.
   - Real-device test: open the Netlify deploy preview on an iPhone and an Android, navigate every page, tap every button.
   - Verify no horizontal scroll on any page at any width.
   - Verify Plannie iframe, Google Maps, and the contact form all work on mobile.
   - Verify the mobile hamburger opens/closes/traps focus.
6. Run Lighthouse on **mobile** profile — target ≥90 Performance, ≥95 on the other three.
7. Fix image optimization, add preconnect hints, verify lazy-loading.
8. Verify Schema.org validates at https://search.google.com/test/rich-results.

### Phase 7 — Ship
1. Create GitHub repo, push.
2. Connect Netlify to the repo, verify first deploy.
3. Set up custom domain (placeholder — user will provide later).
4. Verify GA4 receives pageviews.
5. Verify Netlify form submissions come through.

---

## 14. Writing style reminders for any new copy

- **Short sentences.** Hebrew written in long compound sentences feels academic and cold.
- **Concrete over abstract.** "עומד 8 שעות מול המחשב" beats "אורח חיים יושבני."
- **The reader is smart.** Don't over-explain. Introduce medical terms, then move on.
- **Never use superlatives.** Not "הכי טוב," not "המוביל בישראל." It weakens authority.
- **Latin terms inline when they add precision.** "מכופפי הירך (Hip Flexors)" on first mention, then just "מכופפי הירך" afterward.
- **Every page ends with an action.** Not necessarily a big CTA button — sometimes just a quiet link to the next logical page.

---

## 15. Known unknowns — flag for user confirmation after build

At the end of the build, produce a short `TODO-for-tom.md` that lists items the user still needs to provide:
1. Exact address of Nana Home (Tel Aviv studio).
2. Real email address (currently placeholder).
3. GA4 measurement ID.
4. Custom domain (if any).
5. Final review of article content — confirm medical accuracy.
6. Confirm favicon design (or request one be generated from the logo).

---

*End of brief. Begin with Phase 0.*
