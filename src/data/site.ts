export const site = {
  name: "SportTherapy · Tom Kushlin",
  url: "https://sporttherapy.netlify.app",
  whatsappNumber: "972503032316",
  whatsappDisplay: "+972 50-303-2316",
  email: "tom@kushlinsporttherapy.co.il",
  ga4Id: "G-XXXXXXXXXX",
  hours: [
    { day: "ראשון", label: "תל אביב · Nana Home", hours: "09:00–15:00" },
    { day: "שני", label: "", hours: "10:00–18:00" },
    { day: "שלישי", label: "", hours: "09:00–12:00" },
    { day: "רביעי", label: "", hours: "09:00–18:00" },
    { day: "חמישי", label: "", hours: "09:00–19:00" },
    { day: "שישי + שבת", label: "", hours: "סגור" },
  ],
  addresses: [
    {
      title: "הקליניקה הראשית",
      street: "ארניה 6",
      city: "רמת גן",
    },
    {
      title: "סטודיו תל אביב",
      street: "Nana Home",
      city: "תל אביב",
      note: "[כתובת מדויקת תינתן]",
    },
  ],
};

export const whatsappLink = (text?: string) => {
  const message =
    text || "היי טום, הגעתי דרך האתר ואני מעוניין לקבוע טיפול";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
};

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "עמוד הבית" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/process", label: "תהליך הטיפול" },
  { href: "/articles", label: "מאמרים" },
  { href: "/testimonials", label: "המלצות" },
  { href: "/contact", label: "צור קשר" },
];
