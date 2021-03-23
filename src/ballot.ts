export interface PartyBallot {
  initials: string;
  footer: string;
}

const partyBallots: PartyBallot[] = [
  {
    initials: 'אמת',
    footer: 'מפלגת העבודה בראשות מירב מיכאלי',
  },
  {
    initials: 'ב',
    footer: 'ימינה בראשות נפתלי בנט',
  },
  {
    initials: 'ג',
    footer: 'יהדות התורה והשבת אגודת ישראל - דגל התורה',
  },
  {
    initials: 'ודעם',
    footer: 'הרשימה המשותפת (חד"ש, תע"ל, בל"ד)',
  },
  {
    initials: 'ז',
    footer: 'הישראלים',
  },
  {
    initials: 'זץ',
    footer: 'צומת - עצמאים, חקלאים, כפרים',
  },
  {
    initials: 'ט',
    footer: "הציונות הדתית בראשות בצלאל סמוטריץ'",
  },
  {
    initials: 'י',
    footer: 'המפץ החברתי - גמלאים',
  },
  {
    initials: 'יז',
    footer: 'הכלכלית החדשה - בראשות ירון זליכה',
  },
  {
    initials: 'ינ',
    footer: 'ברית השותפות לאיחוד לאומי בהנהגת רב חובל ב. שליאן',
  },
  {
    initials: 'יף',
    footer: 'כבוד האדם, בראשות עו"ד ארקדי פונץ',
  },
  {
    initials: 'יק',
    footer: 'מפלגת הגוש התנכי',
  },
  {
    initials: 'יר',
    footer: 'מנהיגות חברתית',
  },
  {
    initials: 'כ',
    footer: 'הלב היהודי בראשות אלי יוסף',
  },
  {
    initials: 'כך',
    footer: 'אני ואתה - מפלגת העם הישראלי',
  },
  {
    initials: 'כן',
    footer: 'כחול לבן בראשות בני גנץ',
  },
  {
    initials: 'ל',
    footer: 'ישראל ביתנו בראשות אביגדור ליברמן',
  },
  {
    initials: 'מחל',
    footer: 'הליכוד בהנהגת בנימין נתניהו לראשות הממשלה',
  },
  {
    initials: 'מרצ',
    footer: 'מרצ - השמאל של ישראל',
  },
  {
    initials: 'נ',
    footer: 'קמ"ה - קידום מעמד הפרט',
  },
  {
    initials: 'ני',
    footer: 'עולם חדש בראשות יורם אדרי',
  },
  {
    initials: 'נר',
    footer: '"אנחנו" - בראשות עו"ד מוש חוגה',
  },
  {
    initials: 'עם',
    footer: 'הרשימה הערבית המאוחדת',
  },
  {
    initials: 'פה',
    footer: 'יש עתיד בראשות יאיר לפיד',
  },
  {
    initials: 'ףז',
    footer: 'הפיראטים',
  },
  {
    initials: 'צי',
    footer: 'עצמנו עצמאים וליברלים',
  },
  {
    initials: 'צכ',
    footer: 'מען (יחד) לעידן חדש',
  },
  {
    initials: 'צף',
    footer: 'חץ',
  },
  {
    initials: 'ץ',
    footer: 'דעם - כלכלה ירוקה מדינה אחת',
  },
  {
    initials: 'ק',
    footer: 'נועם קולמן, לירון עופרי וסולי וולף הבלתי אפשרי, אפשרי',
  },
  {
    initials: 'קי',
    footer: 'מפלגת שמע בראשות נפתלי גולדמן',
  },
  {
    initials: 'קך',
    footer: 'סדר חדש לשינוי שיטת הבחירות והממשל בישראל בראשות עו"ד אביטל אופק',
  },
  {
    initials: 'ר',
    footer: 'רפא - רק בריאות בראשות דוקטור אריה אבני',
  },
  {
    initials: 'רנ',
    footer: 'התקווה לשינוי',
  },
  {
    initials: 'רף',
    footer: 'מפלגת עם שלם - בראשות הרב חיים אמסלם',
  },
  {
    initials: 'רק',
    footer: 'דמוקרטית - חירות, שוויון וערבות הדדית',
  },
  {
    initials: 'שס',
    footer: 'התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל',
  },
  {
    initials: 'ת',
    footer: 'תקווה חדשה בהנהגת גדעון סער לראשות הממשלה',
  },
];

export const generateRandomPartyBallot = () => {
  const randomIndex = Math.floor(Math.random() * partyBallots.length);
  return partyBallots[randomIndex];
};
