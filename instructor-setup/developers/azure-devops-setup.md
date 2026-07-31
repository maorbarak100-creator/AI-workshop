<div dir="rtl">

# יצירת Work Item ב-Azure DevOps

מטרה: ליצור את דרישת הפיצ'ר ב-Azure DevOps, כך שהמשתתפים ימשכו אותה בתרגיל 2 של פלייבוק המפתחים.
מקור התוכן: `feature-spec.md` (בתיקייה זו).

---

## אפשרות א' - ידנית דרך הפורטל (מומלץ, פשוט)

1. היכנסו ל-Azure DevOps → הפרויקט שלכם → **Boards** → **Work Items**.
2. **New Work Item** → בחרו סוג (Product Backlog Item / User Story).
3. מלאו מתוך `feature-spec.md`:
   - **Title:** הוספת סיכום חודשי של הכנסות מול הוצאות למסך החשבון
   - **Description:** העתיקו את סעיף "תיאור" מ-`feature-spec.md`.
   - **Acceptance Criteria:** העתיקו את סעיף "תנאי קבלה".
4. הגדירו **State = New / Approved** ושייכו ל-Iteration הנוכחי אם רלוונטי.
5. **Save**. שמרו את מספר ה-Work Item ואת הקישור אליו.

---

## אפשרות ב' - עם Azure CLI (`az`)

דרישה: מותקן `az` עם התוסף `azure-devops`, ומחוברים (`az login`).

```powershell
# הגדרות ברירת מחדל (שנו לפי הארגון שלכם)
az devops configure --defaults organization=https://dev.azure.com/<your-org> project=<your-project>

# יצירת ה-Work Item
az boards work-item create `
  --title "הוספת סיכום חודשי של הכנסות מול הוצאות למסך החשבון" `
  --type "User Story" `
  --description "בתור לקוח שמנהל את חשבונו ב-FinDash, אני רוצה לראות סיכום חודשי של הכנסות מול הוצאות עבור חשבון, כדי להבין את דפוסי ההוצאה שלי. יש להוסיף endpoint GET /api/accounts/:id/summary ותצוגה במסך החשבון. פירוט מלא ותנאי קבלה - ראו את מפרט הפיצ'ר."
```

להוספת תנאי קבלה כשדה נפרד (אם ה-process תומך):
```powershell
az boards work-item update --id <WORK_ITEM_ID> `
  --fields "Microsoft.VSTS.Common.AcceptanceCriteria=<הדביקו כאן את תנאי הקבלה מ-feature-spec.md>"
```

---

## חיבור אופציונלי: Azure DevOps ל-Cursor (MCP)

אם ברצונכם שהמשתתפים ימשכו את ה-Work Item ישירות מתוך Cursor (במקום העתקה ידנית), הגדירו MCP ל-Azure DevOps לפי הפלייבוק של המשתתפים. אם MCP חסום בארגון, העתקה ידנית של התיאור מספיקה.

---

## מה לשתף עם המשתתפים

- קישור ל-repo ב-GitHub (FinDash).
- קישור / מספר ה-Work Item ב-Azure DevOps.

</div>
