<div dir="rtl">

# מדריך מדריך: מה למלא לפני השיעור + הקמת דמו ADO

קובץ זה **למדריך בלבד**. המשתתפים עובדים מ-`playbook.html`.

---

## 1. מה בכלל אומרים ה"ריקים" האלה?

אין כאן אפליקציית דמו שצריך לבנות בקוד. אלה מזהים בסביבת **Azure DevOps** הארגונית (או בסביבת הדרכה אישית), כדי שתרגיל 2 יוכל למשוך נתונים חיים דרך MCP.

| מה כתוב בפלייבוק | מה זה באמת | דוגמת ערך לדמו |
|------------------|------------|----------------|
| `YOUR_ADO_ORG` | שם הארגון בכתובת `https://dev.azure.com/XXXX` (רק ה-XXXX) | למשל `pwc-ai-workshop` או הארגון שלכם |
| פרויקט ADO | Project בתוך הארגון | `FinDash-QA-Workshop` |
| MSP / חבילת עבודה | שם לוגי לסבב / Area / Iteration שאתם מלמדים את המשתתפים להזין בפרומפט | `MSP-FinDash-Q3` |
| TestPlan | שם (או ID) של Test Plan בסבב | `TP-LowBalance-Alert` |

**MCP** אינו ערך למלא בטבלה. MCP הוא חיבור כלים ב-Cursor (Azure DevOps, ואופציונלית Outlook). בפלייבוק יש הוראות הגדרה; כאן אתם רק מוודאים שהארגון והפרויקט קיימים ושיש למשתתפים גישה.

### מתי לא חובה ADO חי?

אם אין ארגון מוכן לשיעור: הריצו את תרגיל 2 במצב **Offline Demo** עם הקובץ  
`ai-for-testers/fixtures/demo-ado-status.md` (מצורף ל-Agent במקום MCP). זה מספיק להדגמת הפרומפט, התבנית, והטיוב. Outlook MCP עדיין אופציונלי (Fallback: גוף מייל בצ'אט).

---

## 2. ערכי דמו קנוניים לשיעור (העתיקו כמו שהם)

השתמשו בשמות האלה בכל החומרים, כדי שהפרומפטים בפלייבוק ובדוגמאות יתאימו:

```
Organization:  <הארגון שלכם>     → מחליף YOUR_ADO_ORG
Project:       FinDash-QA-Workshop
MSP:           MSP-FinDash-Q3
Test Plan:     TP-LowBalance-Alert
```

בפרומפט של המשתתפים:

```
שם חבילת העבודה (MSP): MSP-FinDash-Q3
שם תוכנית הבדיקות (TestPlan): TP-LowBalance-Alert
```

---

## 3. הקמת סביבת דמו ב-ADO (כ-20-30 דקות, פעם אחת)

### 3.1 ארגון ופרויקט

1. היכנסו ל-[Azure DevOps](https://dev.azure.com) עם חשבון שיש לו הרשאת יצירה.
2. צרו **Organization** חדש להדרכה (או השתמשו בקיים). רשמו את שם הארגון = `YOUR_ADO_ORG`.
3. **New Project** → Name: `FinDash-QA-Workshop` → Visibility לפי מדיניות (מומלץ Private + הזמנת משתתפים).
4. ודאו ש-**Test Plans** זמין ב-project (בחלק מהתהליכים צריך להפעיל את ההרחבה / לקנות Basic + Test Plans; אם Test Plans חסום, ראו סעיף 3.4).

### 3.2 Area / Iteration (ייצוג ל-MSP)

1. Project Settings → **Teams** / **Project configuration** → Areas.
2. צרו Area (או Iteration) בשם `MSP-FinDash-Q3` (או תייגו Work Items ב-Tag `MSP-FinDash-Q3`).
3. ספרו למשתתפים: "כשאתם כותבים MSP בפרומפט, זה השם."

### 3.3 Test Plan

1. **Test Plans** → New Test Plan.
2. Name: `TP-LowBalance-Alert`.
3. הוסיפו Suite אחת, למשל `Low Balance Alert - Core`.
4. אופציונלי: ייבאו חלק מהשורות מ-`ai-for-testers/fixtures/ado-import-template.csv`, או צרו 5-10 Test Cases ידניים.
5. סמנו חלק Passed / Failed / Blocked / Not Run כך שהמספרים יהיו מעניינים למייל (ראו יעדי ספירה בסעיף 4).

### 3.4 באגים לדמו (חובה למייל סטטוס)

צרו Work Items מסוג **Bug** בפרויקט. מומלץ להעתיק את הרשימה הזו (תואמת ל-`ai-for-testers/fixtures/demo-ado-status.md` ולדוגמה ב-`ai-for-testers/fixtures/email-template.md`):

| Title | Severity | State | Tags | Assigned To |
|-------|----------|-------|------|-------------|
| שמירת threshold נכשלת עם 500 ב-PUT alert-settings | 1 - Critical | Active | `Blocker`, `MSP-FinDash-Q3` | מישהו מהצוות / אתם |
| באנר מוצג גם כש-balance API מחזיר 503 | 1 - Critical | Active | `MSP-FinDash-Q3` | Unassigned |
| טקסט באנר חתוך במובייל | 2 - High | Active | `MSP-FinDash-Q3` | |
| מייל התראה נשלח פעמיים באותו יום | 2 - High | Active | `MSP-FinDash-Q3` | |
| סף ברירת מחדל לא 500 בחשבון חדש | 2 - High | Active | `MSP-FinDash-Q3` | |
| הודעת ולידציה לא ברורה לסף שלילי | 3 - Medium | Active | `MSP-FinDash-Q3` | |
| באנר לא נעלם אחרי סגירה עד רענון | 3 - Medium | Active | `MSP-FinDash-Q3` | |
| פורמט מטבע חסר בבאנר | 3 - Medium | Active | `MSP-FinDash-Q3` | |
| לינק להגדרות מהבאנר חסר | 3 - Medium | Active | `MSP-FinDash-Q3` | |
| טולטיפ ארוך מדי בהגדרות | 3 - Medium | Active | `MSP-FinDash-Q3` | |
| אייקון באנר לא נגיש ל-screen reader | 4 - Low | Active | `MSP-FinDash-Q3` | |
| באג ישן שנסגר | 3 - Medium | Closed | `MSP-FinDash-Q3` | (לספירת "נסגרו") |

עדכנו היום את שני ה-Critical (Changed Date = היום) כדי ש"קריטיים היום" יעבוד יפה.

### 3.5 אם אין Test Plans בארגון

- צרו Query בשם `QA-Open-Bugs-MSP-FinDash-Q3` לבאגים הפתוחים.
- בתרגיל: המשתתפים ישלפו באגים דרך MCP/Query, ואת ספירות Passed/Failed יזינו מהקובץ `ai-for-testers/fixtures/demo-ado-status.md` (או ידנית מהמדריך).
- ציינו זאת בפתיחת תרגיל 2.

---

## 4. יעדי ספירה מומלצים (שתואמים לדמו)

כדי שהמייל יצא דומה ל-Few-Shot:

| מדד | יעד |
|-----|-----|
| Passed | 28 |
| Failed | 6 |
| Blocked | 4 |
| Not Run | 14 |
| Total | 52 |
| Critical פתוחים | 2 |
| High | 3 |
| Medium | 5 |
| Low | 1 |
| Blockers | 1 (הבאג של threshold) |

אין חובה לדיוק של יחידה אחת. העיקר: יש Blocker, יש Critical מהיום, ויש תמהיל Severity.

---

## 5. מה לשתף עם המשתתפים בתחילת תרגיל 2

כתבו על הלוח / שלחו בצ'אט:

```
ADO Org:     _______________
Project:     FinDash-QA-Workshop
MSP:         MSP-FinDash-Q3
Test Plan:   TP-LowBalance-Alert
Outlook MCP: כן / לא  (אם לא: Fallback בפלייבוק)
מצב:         Live MCP  או  Offline (demo-ado-status.md)
```

---

## 6. Checklist מדריך לפני השיעור

- [ ] ארגון + פרויקט קיימים, משתתפים הוזמנו (או Offline מוכן)
- [ ] Test Plan `TP-LowBalance-Alert` קיים **או** הוגדר מצב ללא Test Plans
- [ ] באגים לפי הטבלה (או קרוב), כולל Tag `Blocker` על Critical אחד
- [ ] נבדק MCP ADO על מחשב מדריך אחד (ירוק ב-Cursor)
- [ ] הוחלט: Outlook MCP כן/לא
- [ ] `ai-for-testers/fixtures/demo-ado-status.md` זמין כ-Fallback לכולם
- [ ] ערכי Org / MSP / TestPlan נכתבו למשתתפים

---

## 7. תרגיל 1: אין צורך ב-ADO חי

תרגיל 1 רץ על `ai-for-testers/fixtures/technical-spec.md` בלבד. ייבוא ל-ADO הוא בונוס; Dry-run מול `ai-for-testers/fixtures/ado-import-template.csv` מספיק.

אין צורך באפליקציית FinDash לבודקים. האפיון הוא מסמך עצמאי.

</div>
