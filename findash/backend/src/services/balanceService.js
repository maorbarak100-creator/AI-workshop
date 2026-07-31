// balanceService.js
// לוגיקת חישוב יתרת חשבון על בסיס היתרה הפתיחה והתנועות.

const repository = require('../repository');

// מטמון בזיכרון לתוצאות חישוב יתרה (למניעת חישוב חוזר בבקשות עוקבות).
const balanceCache = new Map();

/**
 * מנקה את מטמון היתרה לחשבון מסוים (או את כולו אם לא הועבר מזהה).
 * @param {string} [accountId]
 */
function invalidateBalanceCache(accountId) {
  if (accountId) {
    balanceCache.delete(accountId);
  } else {
    balanceCache.clear();
  }
}

/**
 * מחשב את היתרה הנוכחית של חשבון.
 * היתרה = יתרת פתיחה + סך ההפקדות - סך המשיכות.
 *
 * @param {string} accountId
 * @returns {{ accountId: string, currency: string, balance: number, transactionCount: number }}
 */
function calculateBalance(accountId) {
  if (balanceCache.has(accountId)) {
    return balanceCache.get(accountId);
  }

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

  const result = {
    accountId: account.id,
    currency: account.currency,
    balance,
    transactionCount: transactions.length,
  };

  balanceCache.set(accountId, result);
  return result;
}

module.exports = { calculateBalance, invalidateBalanceCache };
