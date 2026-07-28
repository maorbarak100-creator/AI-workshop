// balanceService.js
// לוגיקת חישוב יתרת חשבון על בסיס היתרה הפתיחה והתנועות.

const repository = require('../repository');

/**
 * מחשב את היתרה הנוכחית של חשבון.
 * היתרה = יתרת פתיחה + סך ההפקדות - סך המשיכות.
 *
 * @param {string} accountId
 * @returns {{ accountId: string, currency: string, balance: number, transactionCount: number }}
 */
function calculateBalance(accountId) {
  const account = repository.getAccountById(accountId);
  if (!account) {
    return null;
  }

  const transactions = repository.getTransactionsByAccount(accountId);

  let balance = account.openingBalance;
  for (const txn of transactions) {
    // מוסיפים את סכום התנועה ליתרה
    balance += txn.amount;
  }

  return {
    accountId: account.id,
    currency: account.currency,
    balance,
    transactionCount: transactions.length,
  };
}

module.exports = { calculateBalance };
