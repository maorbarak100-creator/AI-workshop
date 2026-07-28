<div dir="rtl">

# FinDash - Backend

שרת API לדשבורד חשבונות פיננסי (אפליקציית הדגמה להדרכה).
בנוי ב-Node.js + Express, עם נתוני הדגמה בקבצי JSON (`data/`).

## הרצה

```bash
npm install
npm start        # http://localhost:3000
# או עם ריענון אוטומטי:
npm run dev
```

## טסטים

```bash
npm test
```

## מבנה

```
src/
  index.js                  נקודת כניסה (מרים את השרת)
  app.js                    הגדרת Express ו-routes
  repository.js             גישה לנתונים (טעינה מ-JSON)
  services/
    balanceService.js       חישוב יתרת חשבון
data/
  accounts.json             חשבונות
  transactions.json         תנועות
```

## API

| Method | Endpoint | תיאור |
|--------|----------|-------|
| GET | `/api/health` | בדיקת חיות |
| GET | `/api/accounts` | כל החשבונות |
| GET | `/api/accounts/:id` | חשבון בודד |
| GET | `/api/accounts/:id/transactions` | תנועות החשבון (מהחדש לישן) |
| GET | `/api/accounts/:id/balance` | יתרת החשבון |
| POST | `/api/accounts/:id/transactions` | הוספת תנועה (`type`, `amount`, `category`, `description`) |

### דוגמה

```bash
curl http://localhost:3000/api/accounts
curl http://localhost:3000/api/accounts/acc-1001/balance
```

</div>
