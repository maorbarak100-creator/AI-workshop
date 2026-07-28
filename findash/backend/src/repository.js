// repository.js
// שכבת גישה לנתונים. טוען את נתוני ההדגמה מקבצי JSON ומחזיק אותם בזיכרון.
// באפליקציה אמיתית כאן היה חיבור לבסיס נתונים.

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

function loadJson(fileName) {
  const fullPath = path.join(dataDir, fileName);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(raw);
}

// נטען פעם אחת בעליית השרת
const accounts = loadJson('accounts.json');
const transactions = loadJson('transactions.json');

function getAccounts() {
  return accounts;
}

function getAccountById(accountId) {
  return accounts.find((a) => a.id === accountId) || null;
}

function getTransactionsByAccount(accountId) {
  return transactions.filter((t) => t.accountId === accountId);
}

function addTransaction(transaction) {
  transactions.push(transaction);
  return transaction;
}

module.exports = {
  getAccounts,
  getAccountById,
  getTransactionsByAccount,
  addTransaction,
};
