<div dir="rtl">

# תבנית מייל סטטוס בדיקות + מיפוי שדות ADO

קובץ זה משמש כ-Few-Shot Example בתרגיל 2. צרפו אותו ל-Agent יחד עם שם ה-MSP ושם ה-TestPlan שהמדריך ימסור.

**כלל בטיחות:** ליצור **טיוטה (Draft) בלבד**. אסור לשלוח את המייל. הנמענים מוזנים ידנית ע"י הבודק אחרי Review.

---

## 1. מבנה המייל (חובה)

### נושא (Subject)
```
[סטטוס בדיקות] {MSP} | {TestPlan} | {YYYY-MM-DD}
```

### גוף: סדר הסעיפים

1. **תקציר ניהולי** (3-5 שורות): מצב כללי, האם הסבב בסיכון, המלצה אחת ברורה.  
2. **דשבורד התקדמות סבב** (טבלה): Passed / Failed / Blocked / Not Run / Total + אחוז ביצוע.  
3. **באגים פתוחים לפי Severity** (טבלה): Critical / High / Medium / Low + סה"כ.  
4. **קריטיים שנפתחו / עודכנו היום** (רשימה קצרה עם מזהה WI + כותרת).  
5. **Blockers** (רשימה): מה חוסם, על מי, קישור.  
6. **סיכונים והמשך** (bullets): מה מתוכנן ליום/יומיים הבאים.  
7. **קישורים**: Test Plan, Query באגים פתוחים, Board (אם רלוונטי).  
8. **חתימה**: שם הבודק / צוות QA (placeholder).

---

## 2. מיפוי שדות מ-Azure DevOps (מה לשלוף)

| בלוק במייל | מקור ב-ADO | שדות / פילטר |
|------------|------------|--------------|
| התקדמות סבב | Test Plan / Test Suite run results של `{TestPlan}` תחת `{MSP}` | Passed, Failed, Blocked, Not Run, Total |
| באגים פתוחים | Work Items מסוג `Bug` | State לא Closed/Done/Removed; Severity; Title; Assigned To; Created Date; ID |
| קריטיים היום | Bugs | Severity = `1 - Critical` (או המקבילה בארגון); Changed Date = היום |
| Blockers | Bugs או Issues | Tag `Blocker` **או** Severity Critical + State Active |
| קישורים | URLs | קישור ל-Test Plan; קישור ל-Query באגים פתוחים |

אם כלי ה-MCP לא מחזיר ספירות Test Run ישירות: שלוף את מה שזמין, ציין במפורש במייל מה חסר, ואל תמציא מספרים.

---

## 3. כללי עיצוב ואיכות

- עברית בגוף המייל; מזהים טכניים (WI IDs, שמות TestPlan) נשארים כמו במערכת.  
- טבלאות קצרות; בלי קירות טקסט.  
- Severity בסדר יורד: Critical קודם.  
- אם יש Blocker: התקציר הניהולי **חייב** להזכיר אותו במשפט הראשון או השני.  
- אסור לכלול סיסמאות, PAT, או נתוני לקוח אמיתיים מעבר למה שב-ADO של סביבת ההדרכה.

---

## 4. דוגמת איכות מלאה (Few-Shot)

**נושא:**  
`[סטטוס בדיקות] MSP-FinDash-Q3 | TP-LowBalance-Alert | 2026-07-30`

**גוף:**

שלום,

תקציר: סבב הבדיקות ל-Low Balance Alert מתקדם ל-~62% ביצוע. יש **Blocker אחד** על כשל שמירת סף (BUG 1842) שעוצר בדיקות הגדרות. ללא תיקון היום, לא נסגור את חבילת ה-Settings עד סוף השבוע.

### התקדמות סבב

| סטטוס | כמות |
|--------|------|
| Passed | 28 |
| Failed | 6 |
| Blocked | 4 |
| Not Run | 14 |
| **סה״כ** | **52** |
| % ביצוע (Passed+Failed+Blocked / Total) | 73% |

### באגים פתוחים לפי Severity

| Severity | פתוחים |
|----------|--------|
| 1 - Critical | 2 |
| 2 - High | 3 |
| 3 - Medium | 5 |
| 4 - Low | 1 |
| **סה״כ** | **11** |

### קריטיים היום
- **BUG 1842**: שמירת threshold נכשלת עם 500 ב-PUT alert-settings (Assigned: Dana R.)
- **BUG 1847**: באנר מוצג גם כש-balance API מחזיר 503 (Assigned: unassigned)

### Blockers
- **BUG 1842** (Tag: Blocker): חוסם את AC-01/AC-02/AC-06. נדרש תיקון + build חדש לבדיקה חוזרת.

### סיכונים והמשך
- אחרי תיקון 1842: ריצת regression קצרה על Settings + Banner.
- מחר: כיסוי מייל יומי (AC-09/AC-10) וסבב הרשאות viewer/owner.
- סיכון: 14 Not Run כוללים תרחישי Edge; בלי Buffer ביומיים הקרובים לא נעמוד ביעד הסבב.

### קישורים
- Test Plan: `https://dev.azure.com/EXAMPLE/FinDash/_testPlans/execute?planId=120`
- באגים פתוחים: `https://dev.azure.com/EXAMPLE/FinDash/_queries/query/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee/`

בברכה,  
צוות QA, FinDash

---

## 5. Checklist לפני אישור הטיוטה

- [ ] נושא תואם לתבנית Subject.  
- [ ] המספרים תואמים למה שחזר מ-ADO (או מסומן כחסר).  
- [ ] Blockers ו-Critical היום מופיעים ומודגשים.  
- [ ] אין שליחה; רק Draft / העתקה ידנית.  
- [ ] נמענים עדיין ריקים / יוזנו ידנית אחרי Review.

</div>
