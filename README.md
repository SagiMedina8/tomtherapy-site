# SportTherapy · Tom Kushlin

אתר האסטרו הרשמי של Tom Kushlin SportTherapy — עברית RTL, סטטי, נפרס ל-Netlify.

## Stack

- **Framework:** Astro 4 (static output)
- **Styling:** Tailwind CSS + CSS variables
- **Content:** Astro Content Collections (Markdown)
- **Forms:** Netlify Forms
- **Fonts:** Google Fonts (Frank Ruhl Libre · Fraunces · Assistant)
- **Sitemap:** custom endpoint at `src/pages/sitemap.xml.ts`

## Requirements

- Node.js 20+ (tested on 24)
- npm 10+

## Local dev

```bash
npm install
npm run dev
```

האתר עולה ב-`http://localhost:4321`.

## Build

```bash
npm run build
```

הפלט ב-`dist/` (11 דפים + sitemap.xml).

```bash
npm run preview    # מריץ preview מקומי של ה-build
```

## מבנה

```
src/
├── components/        # Wordmark, TopNav, Footer, ServiceCard, ProcessStep,
│                      # TestimonialCard, ArticleCard, PageHeader, SchemaOrg
├── layouts/
│   ├── BaseLayout.astro
│   └── ArticleLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── services.astro
│   ├── process.astro
│   ├── testimonials.astro
│   ├── booking.astro
│   ├── contact.astro
│   ├── sitemap.xml.ts
│   └── articles/
│       ├── index.astro
│       └── [...slug].astro
├── content/
│   ├── config.ts
│   └── articles/*.md  # 3 מאמרים
├── data/              # services, testimonials, process-steps, site config
└── styles/global.css
public/
├── images/            # tom-hero.jpg, tom-about.jpg, logo-sporttherapy.jpg
├── favicon.svg
├── robots.txt
└── __forms.html       # טופס סטטי ל-Netlify Forms detection
```

## עריכת תוכן

כל המאמרים הם קבצי `.md` תחת `src/content/articles/`. לערוך ישירות ב-GitHub:

1. פותחים את הקובץ ב-github.com
2. לוחצים על עיפרון (Edit)
3. Commit → Netlify מפרסם אוטומטית

לעריכת נתוני האתר (שעות, כתובות, טלפון) — `src/data/site.ts`.
לעריכת שירותים/המלצות/שלבי התהליך — הקבצים ב-`src/data/`.

## פריסה ל-Netlify

### פעם ראשונה

1. Push ל-GitHub (למשל: `git remote add origin https://github.com/<you>/tomtherapy-site && git push -u origin main`).
2. ב-Netlify: **Add new site → Import from Git → GitHub**.
3. בחר את הריפו; Netlify יזהה את `netlify.toml` ויגדיר:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. Deploy. התחום הראשוני יהיה `*.netlify.app`.
5. לחבר תחום מותאם: **Domain settings → Add custom domain**.

### Netlify Forms

הטופס ב-`/contact` משתמש ב-Netlify Forms. הקובץ `public/__forms.html` הוא טופס סטטי ש-Netlify מזהה בזמן ה-build ורושם את השדות. הגדרות נוספות:

- **התראות:** Netlify → Forms → contact → Settings → Form notifications → Email.
- **Spam filtering:** כבר מופעל דרך ה-honeypot field (`bot-field`).
- ה-submissions יופיעו ב-Netlify UI תחת Forms → contact.

### משתני סביבה ו-GA4

`src/data/site.ts` מחזיק את `ga4Id` כ-placeholder (`G-XXXXXXXXXX`). להחליף ל-ID אמיתי לפני production. הקוד רץ רק ב-`import.meta.env.PROD` — כלומר לא ירוץ ב-`npm run dev`.

### תחום מותאם

1. Domain settings → Add custom domain → <your-domain>
2. DNS: או ב-Netlify DNS (מומלץ) או ברשם התחום עם CNAME/ALIAS ל-`<site>.netlify.app`
3. HTTPS יונפק אוטומטית (Let's Encrypt).
4. לעדכן את `site` ב-`astro.config.mjs` ואת `url` ב-`src/data/site.ts` לתחום החדש — זה חשוב ל-sitemap, canonical URLs, ו-Schema.org.

## בדיקות לפני deploy

- [ ] `npm run build` עובר בלי errors.
- [ ] `npm run preview` מראה את האתר כמצופה.
- [ ] בדיקה מובייל: Chrome DevTools device mode ב-375px, 390px, 414px, 768px.
- [ ] בדיקת רספונסיב של ה-iframe של Plannie — ללא scroll אופקי במובייל.
- [ ] בדיקה שהטופס נרשם ב-Netlify Forms אחרי הדיפלוי הראשון.
- [ ] Lighthouse mobile: Performance ≥90, Accessibility/Best Practices/SEO ≥95.
- [ ] Schema.org validation ב-https://search.google.com/test/rich-results.

## נקודות לתשומת לב

- **תמונות**: תמונות הגיבור ב-`public/images/` הן גדולות (2+MB). Astro לא מעבד קבצי `public/` — אם Lighthouse מתלונן, שקול להעביר אותן ל-`src/assets/` ולשמש ב-`<Image />`.
- **@astrojs/sitemap**: הוסר בגלל bug בגרסה 3.2.1 עם Astro 4.16. הוחלף ב-endpoint מותאם ב-`src/pages/sitemap.xml.ts` (פשוט יותר, פחות תלויות).
- **הלוגו**: כרגע JPG עם רקע שחור. המלצה לבקש PNG עם שקיפות — ראה `TODO-for-tom.md`.

## סקריפטים

| פקודה | תיאור |
|-------|---------|
| `npm run dev` | dev server ב-4321 |
| `npm run build` | build לפרודקשן ל-`dist/` |
| `npm run preview` | הרצה של ה-build המבונה |
| `npm run astro check` | type-check כל קבצי Astro |
