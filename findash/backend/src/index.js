// index.js
// נקודת הכניסה: מרים את שרת ה-HTTP.

const { createApp } = require('./app');

const PORT = process.env.PORT || 3000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`FinDash backend listening on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/api/accounts`);
});
