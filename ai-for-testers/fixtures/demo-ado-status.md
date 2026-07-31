<div dir="rtl">

# Offline Demo: צילום מצב ADO לתרגיל 2

השתמשו בקובץ זה כשאין MCP ל-ADO, או כשהחיבור נכשל בשיעור.

**איך:** צרפו את הקובץ ל-Agent (`@fixtures/demo-ado-status.md`) יחד עם `fixtures/email-template.md`, והריצו את פרומפט המייל מהפלייבוק עם:

- MSP: `MSP-FinDash-Q3`
- TestPlan: `TP-LowBalance-Alert`

בקשו במפורש: "השתמש רק בנתונים מקובץ הדמו; אל תמציא מספרים נוספים."

תאריך ייחוס לדמו: `2026-07-30`

---

## מזהים

| שדה | ערך |
|-----|-----|
| Organization (דוגמה) | `YOUR_ADO_ORG` (לא נדרש ב-offline) |
| Project | `FinDash-QA-Workshop` |
| MSP | `MSP-FinDash-Q3` |
| Test Plan | `TP-LowBalance-Alert` |
| Suite | `Low Balance Alert - Core` |

---

## דשבורד התקדמות סבב

| סטטוס | כמות |
|--------|------|
| Passed | 28 |
| Failed | 6 |
| Blocked | 4 |
| Not Run | 14 |
| **סה״כ** | **52** |

אחוז ביצוע (Passed+Failed+Blocked / Total) = 73%

---

## באגים פתוחים לפי Severity

| Severity | פתוחים |
|----------|--------|
| 1 - Critical | 2 |
| 2 - High | 3 |
| 3 - Medium | 5 |
| 4 - Low | 1 |
| **סה״כ פתוחים** | **11** |

נסגרו מאז תחילת הסבב (לידיעה / טבלת closed אופציונלית): **4**

---

## קריטיים שהשתנו היום (2026-07-30)

| ID | Title | State | Assigned To | Tags |
|----|-------|-------|-------------|------|
| 1842 | שמירת threshold נכשלת עם 500 ב-PUT alert-settings | Active | Dana R. | Blocker, MSP-FinDash-Q3 |
| 1847 | באנר מוצג גם כש-balance API מחזיר 503 | Active | unassigned | MSP-FinDash-Q3 |

---

## Blockers

| ID | Title | Why blocking |
|----|-------|--------------|
| 1842 | שמירת threshold נכשלת עם 500 ב-PUT alert-settings | חוסם AC-01 / AC-02 / AC-06 (הגדרות התראה) |

---

## באגים פתוחים נוספים (לפי Severity)

### High
| ID | Title |
|----|-------|
| 1851 | טקסט באנר חתוך במובייל |
| 1852 | מייל התראה נשלח פעמיים באותו יום |
| 1853 | סף ברירת מחדל לא 500 בחשבון חדש |

### Medium
| ID | Title |
|----|-------|
| 1854 | הודעת ולידציה לא ברורה לסף שלילי |
| 1855 | באנר לא נעלם אחרי סגירה עד רענון |
| 1856 | פורמט מטבע חסר בבאנר |
| 1857 | לינק להגדרות מהבאנר חסר |
| 1858 | טולטיפ ארוך מדי בהגדרות |

### Low
| ID | Title |
|----|-------|
| 1859 | אייקון באנר לא נגיש ל-screen reader |

---

## קישורים לדוגמה (לא חיים)

- Test Plan: `https://dev.azure.com/YOUR_ADO_ORG/FinDash-QA-Workshop/_testPlans/execute?planId=120`
- Query באגים פתוחים: `https://dev.azure.com/YOUR_ADO_ORG/FinDash-QA-Workshop/_queries/query/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee/`

---

## הערת סיכון להדבקה בתקציר הניהולי

בלי תיקון ל-BUG 1842 היום, לא נסגור את חבילת ה-Settings עד סוף השבוע. מחר מתוכננים regression קצר אחרי build + כיסוי מייל יומי והרשאות viewer/owner.

</div>
