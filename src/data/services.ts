export type Service = {
  slug: string;
  eyebrow: string;
  titleHe: string;
  titleEn: string;
  description: string;
  linkText: string;
  linkHref: string;
};

export const services: Service[] = [
  {
    slug: "dry-needling",
    eyebrow: "Dry Needling",
    titleHe: "דיקור יבש",
    titleEn: "Dry Needling",
    description:
      "שחרור עמוק של נקודות טריגר מיופסיאליות באמצעות מחט דקה מאוד. שיטה מבוססת-מחקר שפותחה בידי ד\"ר ג'נט טראוול, ומשתמשת כיום על ידי פיזיותרפיסטים ברחבי העולם להפחתת כאב כרוני ושחזור טווחי תנועה. לא אקופונקטורה — רפואה מערבית ממוקדת.",
    linkText: "קרא עוד על השיטה",
    linkHref: "/articles/dry-needling-trigger-points",
  },
  {
    slug: "medical-massage",
    eyebrow: "Medical Massage",
    titleHe: "עיסוי רפואי",
    titleEn: "Medical Massage",
    description:
      "לא עיסוי מפנק. עבודה ממוקדת על פאשיה, הידבקויות של רקמת חיבור, ומתחים כרוניים במערכת מיופסיאלית. המטרה אחת: להחזיר לרקמות את היכולת להחליק אחת על השנייה, ולגוף את הטווחים שהיו לו פעם.",
    linkText: "קרא עוד על השיטה",
    linkHref: "/articles/fascia-connective-network",
  },
  {
    slug: "sports-rehabilitation",
    eyebrow: "Sports Rehabilitation",
    titleHe: "שיקום ספורט",
    titleEn: "Sports Rehabilitation",
    description:
      "שיקום פציעות ספורט — מעבר מדוד מהטיפול החד בפציעה חזרה לפעילות המלאה. מותאם לסוג הענף, לרמת המאמן, וללוח הזמנים שלך. ספורטאים חובבנים ומקצועיים כאחד.",
    linkText: "קבע אבחון",
    linkHref: "/booking",
  },
  {
    slug: "personalized-exercise",
    eyebrow: "Personalized Exercise",
    titleHe: "תרגול מותאם אישית",
    titleEn: "Personalized Exercise",
    description:
      "תרגול הוא לא נספח לטיפול. הוא חצי מהטיפול. אחרי כל מפגש אתה יוצא עם 3–5 תרגילים ממוקדים, מצולמים, ברורים — שבונים את מה שהמפגש פתח.",
    linkText: "קרא על תהליך הטיפול",
    linkHref: "/process",
  },
];
