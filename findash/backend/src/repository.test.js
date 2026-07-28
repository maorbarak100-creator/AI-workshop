// repository.test.js
// טסטים בסיסיים לשכבת הנתונים (רצים עם: npm test).
// שימו לב: אין כאן כיסוי לחישוב היתרה - נקודה למחשבה בזמן ה-review.

const { test } = require('node:test');
const assert = require('node:assert');
const repository = require('./repository');

test('getAccounts returns all seeded accounts', () => {
  const accounts = repository.getAccounts();
  assert.strictEqual(accounts.length, 3);
});

test('getAccountById returns the correct account', () => {
  const account = repository.getAccountById('acc-1001');
  assert.ok(account);
  assert.strictEqual(account.ownerName, 'דנה כהן');
});

test('getAccountById returns null for unknown id', () => {
  assert.strictEqual(repository.getAccountById('nope'), null);
});

test('getTransactionsByAccount filters by account', () => {
  const txns = repository.getTransactionsByAccount('acc-1002');
  assert.strictEqual(txns.length, 4);
  assert.ok(txns.every((t) => t.accountId === 'acc-1002'));
});
