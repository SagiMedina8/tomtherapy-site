# TODO — מה שנדרש ממך לפני deploy

האתר בנוי וה-build עובר. הפריטים הבאים צריכים התייחסות שלך לפני שעולים לאוויר:

## 1. נכסים / תוכן

- [ ] **לוגו PNG עם שקיפות** — כרגע יש רק JPG עם רקע שחור (`public/images/logo-sporttherapy.jpg`). הוא משמש בפוטר (שם הרקע כהה ולכן זה מתאים), כ-apple-touch-icon וכ-og:image. גרסת PNG תאפשר שימוש נוסף באזורים בהירים (למשל: לצד headings).
- [x] ~~**הכתובת המדויקת של סטודיו Nana Home בתל אביב**~~ — ✅ הוגדרה: Nana Home · בורוכוב 1, תל אביב יפו.
- [x] ~~**פין שני במפת Google**~~ — ✅ נוסף. עמוד `/contact` מציג כעת שני iframes של Google Maps זה מתחת לזה (רמת גן + תל אביב), כל אחד בגובה 260px.
- [ ] **אימות תוכן המאמרים** — המאמרים הרפואיים נכתבו על בסיס התדרוך שלך. שווה ביקורת שלך / רופא על דיוק עובדתי לפני פרסום.
- [ ] **אימות תוכן ה-bodyMap (14 אזורי גוף)** — התוכן של המפה האינטראקטיבית בעמוד הבית נכתב על בסיס התדרוך. שווה לעבור על 14 האזורים ב-`src/content/site/bodyMap.json` ולוודא שהניסוחים (בעיות נפוצות + "הגישה הטיפולית") תואמים את הגישה המקצועית שלך.

## 2. חשבונות / מפתחות

- [ ] **GA4 Measurement ID** — `src/content/site/brand.json`: `"ga4Id": "G-XXXXXXXXXX"`. להחליף ל-ID האמיתי. קוד ה-tracking רץ רק ב-production (`import.meta.env.PROD`), אז לא יפגע ב-dev.
- [x] ~~**אימייל אמיתי**~~ — ✅ הוגדר: `tom.kush123@gmail.com` ב-`src/content/site/brand.json`.
- [ ] **תחום מותאם** — ב-`astro.config.mjs` וב-`src/content/site/brand.json` מוגדר `https://sporttherapy.netlify.app`. לעדכן לתחום הקבוע (למשל `kushlinsporttherapy.co.il`) ברגע שהוא מוכן — זה משפיע על sitemap, canonical URLs, Schema.org, og:image.

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

## 6. עריכת תוכן עתידית

- כל הטקסטים באתר מנוהלים דרך קבצי JSON ב-`src/content/site/`. ראה `EDIT-CONTENT.md` בשורש הפרויקט למדריך מלא.
- תוכן המאמרים עצמם נערך בנפרד — `src/content/articles/*.md`.
