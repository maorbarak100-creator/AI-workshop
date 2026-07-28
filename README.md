<div dir="rtl">

# חומרי משתתפים: AI for Developers

תיקייה זו מכילה **שני repos נפרדים** לשיתוף עם המשתתפים.

| תיקייה | Repo | תוכן |
|--------|------|------|
| `findash/` | אפליקציית FinDash | `backend/`, `frontend/`, `AGENTS.md`, rules אופציונליים |
| `ai-for-developers-learners/` | חומרי הדרכה | `playbook.html`, `sample-code/` |

## מה לא נכלל (נשאר אצל המדריך)

- `setup/` : הקמת GitHub, Azure DevOps, פתרונות
- `INSTRUCTOR-NOTES.md`
- `.cursor/rules/core-training.mdc` ו-skills של המדריך

## דחיפה ל-GitHub

לכל תיקייה יש `git init` מקומי. לדחיפה:

```powershell
# FinDash
cd findash
gh repo create findash --private --source=. --remote=origin --push

# חומרי משתתפים
cd ..\ai-for-developers-learners
gh repo create ai-for-developers-learners --private --source=. --remote=origin --push
```

</div>
