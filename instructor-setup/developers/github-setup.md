<div dir="rtl">

# הקמת Repo ב-GitHub ודחיפת FinDash

מטרה: להעלות את תוכן `exercises/findash/` ל-repo ב-GitHub, כך שהמשתתפים יוכלו למשוך אותו בתרגיל 2.

> חשוב: דוחפים **רק את `findash/`** - לא את `instructor-setup/` ולא את ערכת הלומדים (כדי שהמשתתפים לא יראו הערות מדריך ופתרונות).

קישור ציבורי נוכחי (אם כבר קיים): `https://github.com/maorbarak100-creator/findash`

---

## אפשרות א' - עם GitHub CLI (`gh`) - הכי מהיר

דרישה: מותקן `gh` ומחוברים (`gh auth login`).

```powershell
# מתוך exercises/findash
cd "..\..\findash"

git init
git add .
git commit -m "FinDash - initial commit"
git branch -M main

# יצירת repo מרוחק ודחיפה (שנו את השם/הארגון לפי הצורך)
gh repo create findash --private --source=. --remote=origin --push
```

בסיום, הכתובת של ה-repo תוצג. שמרו אותה לשיתוף עם המשתתפים.

---

## אפשרות ב' - ידנית דרך אתר GitHub

1. היכנסו ל-GitHub וצרו repo חדש בשם `findash` (ריק, בלי README), או השתמשו בקיים.
2. מתוך תיקיית `findash`:

```powershell
cd "..\..\findash"
git init
git add .
git commit -m "FinDash - initial commit"
git branch -M main
git remote add origin https://github.com/<org>/findash.git
git push -u origin main
```

---

## אפשרות ג' - סקריפט העזר

יש בתיקייה זו סקריפט `push-to-github.ps1` שמבצע את הצעדים. ראו הוראות בתוך הקובץ.

```powershell
# מתוך exercises/instructor-setup/developers
.\push-to-github.ps1 -RepoName "findash" -Owner "my-org" -Private
```

---

## בדיקת תקינות אחרי הדחיפה

- ודאו שב-repo מופיעים `backend/` ו-`frontend/`, וקובצי README.
- ודאו ש-`node_modules/` **לא** נדחף (ה-`.gitignore` מטפל בזה).
- ודאו ש-`instructor-setup/` ו-`ai-for-developers-learners/` **לא** שם - רק תוכן FinDash.

## דבר אחרון

העתיקו את כתובת ה-repo. תצטרכו אותה ל-`azure-devops-setup.md` ולשיתוף עם המשתתפים (קישור בפלייבוק / על הלוח).

</div>
