# TODO — מה שנדרש ממך לפני deploy

האתר בנוי וה-build עובר. הפריטים הבאים צריכים התייחסות שלך לפני שעולים לאוויר:

## 1. נכסים / תוכן

- [ ] **לוגו PNG עם שקיפות** — כרגע יש רק JPG עם רקע שחור (`public/images/logo-sporttherapy.jpg`). הוא משמש בפוטר (שם הרקע כהה ולכן זה מתאים), כ-apple-touch-icon וכ-og:image. גרסת PNG תאפשר שימוש נוסף באזורים בהירים (למשל: לצד headings).
- [ ] **הכתובת המדויקת של סטודיו Nana Home בתל אביב** — כרגע `[כתובת מדויקת תינתן]`. מופיע ב-`src/data/site.ts` וב-`src/components/SchemaOrg.astro` וב-Footer.
- [ ] **פין שני במפת Google** (`src/pages/contact.astro`) — המפה כרגע מציגה רק את ארניה 6 רמת גן. הוספת הפין השני תלויה בכתובת Nana Home. ב-Google Maps אפשר להשתמש ב-Directions API או בשני iframes.
- [ ] **תמונות לשירותים (אופציונלי)** — ה-ServiceCard מספר 2 משתמש כרגע ב-`tom-about.jpg` כרקע זמני לחצי מהכרטיס. שווה לצלם/לבחור תמונה ייעודית (Dry Needling, Medical Massage, וכו').
- [ ] **אימות תוכן המאמרים** — המאמרים הרפואיים נכתבו על בסיס התדרוך שלך. שווה ביקורת שלך / רופא על דיוק עובדתי לפני פרסום.

## 2. חשבונות / מפתחות

- [ ] **GA4 Measurement ID** — `src/data/site.ts`: `ga4Id: "G-XXXXXXXXXX"`. להחליף ל-ID האמיתי. קוד ה-tracking רץ רק ב-production (`import.meta.env.PROD`), אז לא יפגע ב-dev.
- [ ] **אימייל אמיתי** — `src/data/site.ts`: `email: "tom@kushlinsporttherapy.co.il"`. זה placeholder. אם זה האימייל האמיתי — להשאיר; אחרת להחליף.
- [ ] **תחום מותאם** — ב-`astro.config.mjs` ו-`src/data/site.ts` מוגדר `https://sporttherapy.netlify.app`. לעדכן לתחום הקבוע (למשל `kushlinsporttherapy.co.il`) ברגע שהוא מוכן — זה משפיע על sitemap, canonical URLs, Schema.org, og:image.

## 3. פריסה

- [ ] **GitHub repo** — push לריפו פרטי/ציבורי.
- [ ] **חיבור ל-Netlify** — Import from Git, Netlify יקרא את `netlify.toml` אוטומטית.
- [ ] **אימות Netlify Forms** — לוודא שהטופס ב-`/contact` נרשם ומגיע. להפעיל התראות מייל ב-Netlify UI: Forms → contact → Settings → Notifications.
- [ ] **אימות Schema.org** — אחרי deploy ראשון, להריץ ב-https://search.google.com/test/rich-results על ה-URL של האתר.
- [ ] **Google Search Console** — להגיש את ה-sitemap (`/sitemap.xml`).

## 4. בדיקות מובייל (חובה — רוב המשתמשים במובייל)

- [ ] בדיקה פיזית על אייפון (Safari) ואנדרואיד (Chrome) — לא אמולטורים.
- [ ] לוודא שאין scroll אופקי בשום דף.
- [ ] לוודא שה-hamburger נפתח/נסגר.
- [ ] לוודא ש-Plannie iframe ניתן לשימוש במובייל.
- [ ] Lighthouse mobile: יעד Performance ≥90, Accessibility/Best Practices/SEO ≥95.

## 5. תוכן נוסף מומלץ (לא חוסם deploy)

- [ ] תמונה שנייה של טום למקטעים שכרגע משתמשים ב-`tom-about.jpg` מחדש.
- [ ] favicon מותאם אישית (כרגע SVG מינימליסטי עם S טורקיז). אם רוצה אייקון מהלוגו, שווה ליצור גרסת PNG מרובעת.
- [ ] וידאו קצר ב-hero (אופציונלי, לא חוסם) — יכול להחליף את תמונת ה-hero הסטטית.
