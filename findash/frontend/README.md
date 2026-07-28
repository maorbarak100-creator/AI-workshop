<div dir="rtl">

# FinDash - Frontend

ממשק משתמש לדשבורד החשבונות, בנוי ב-Angular 17 (Standalone Components).

## הרצה

ודאו שה-Backend רץ (פורט 3000), ואז:

```bash
npm install
npm start        # http://localhost:4200
```

## מבנה

```
src/app/
  app.component.*            מעטפת (header + footer + router-outlet)
  app.routes.ts             ניתוב
  api.service.ts            תקשורת עם ה-Backend
  models.ts                 טיפוסים
  accounts-list/            מסך רשימת חשבונות
  account-detail/           מסך פרטי חשבון (יתרה + תנועות)
```

## מסכים

- **רשימת חשבונות** (`/`) - כל החשבונות ככרטיסים.
- **פרטי חשבון** (`/accounts/:id`) - יתרה נוכחית וטבלת תנועות.

## הערה
כתובת ה-Backend מוגדרת ב-`src/app/api.service.ts` (`baseUrl`).

</div>
