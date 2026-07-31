<div dir="rtl">

# ערכת הדרכה לבודקים: AI Agents ב-Cursor

זהו ה-repo להתחלה לבודקים ידניים. פתחו את התיקייה ב-Cursor, ופתחו את `playbook.html` בדפדפן.

כל התרגילים בערכת זו רצים **באותו יום**: קודם תרגיל 1 (תסריטים מאפיון), אחר כך תרגיל 2 (מייל סטטוס מ-ADO).

---

## מבנה הערכה (למשתתפים)

| קובץ / תיקייה | תיאור |
|---------------|-------|
| `playbook.html` | מדריך התרגילים המלא. פתחו בדפדפן. |
| `fixtures/technical-spec.md` | אפיון "התראת יתרה נמוכה" לתרגיל 1 |
| `fixtures/email-template.md` | תבנית מייל סטטוס + מיפוי שדות ADO לתרגיל 2 |
| `fixtures/ado-import-template.csv` | דוגמת עמודות לייבוא Test Cases ל-ADO |
| `fixtures/demo-ado-status.md` | צילום מצב דמו לתרגיל 2 בלי MCP חי |

הכנת מדריך (ADO חי, checklist): ראו `../instructor-setup/testers/` (לא חלק מערכת המשתתף).

---

## איך מתחילים

1. פתחו את תיקיית `ai-for-testers` ב-Cursor (**Open Folder**).
2. פתחו את `playbook.html` בדפדפן ועקבו אחרי **תרגיל 1** (רק קבצי `fixtures/`, בלי ADO).
3. ל**תרגיל 2**: השתמשו בערכי הדמו למטה (או בערכים שהמדריך כתב על הלוח). Offline: צרפו `fixtures/demo-ado-status.md`.

---

## מה אומרים "Org / MSP / TestPlan"? (לא אפליקציה)

אין צורך לבנות אפליקציית דמו לבודקים. אלה מזהים ב-**Azure DevOps**:

| פרמטר | משמעות | ערך דמו מוכן לשיעור |
|-------|---------|---------------------|
| `YOUR_ADO_ORG` | שם הארגון ב-`dev.azure.com/<שם>` | מהמדריך (אם Live MCP) |
| פרויקט | Project ב-ADO | `FinDash-QA-Workshop` |
| MSP | שם חבילת העבודה / הסבב בפרומפט | `MSP-FinDash-Q3` |
| TestPlan | שם תוכנית הבדיקות | `TP-LowBalance-Alert` |
| MCP | חיבור כלים ב-Cursor (לא "ערך למלא") | מוגדר בפלייבוק; אם נחסם → Offline |

**מצב offline (מומלץ כגיבוי):** צרפו ל-Agent את `fixtures/demo-ado-status.md` במקום ADO חי, עם אותם MSP/TestPlan.

Outlook MCP: אופציונלי. אם לא מאושר בארגון, ה-agent מייצר גוף מייל בצ'אט (Draft ידני).

---

## מסר מרכזי

Agents עוזרים בעבודת QA היומיומית דרך **context**, **משוב מכלים (MCP)**, ו-**Review אנושי**. לא טייס אוטומטי. מייל סטטוס נעצר ב-Draft בלבד.

בהצלחה!

</div>
