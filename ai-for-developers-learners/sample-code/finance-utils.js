// finance-utils.js
// אוסף פונקציות עזר פיננסיות לתרגול. חלקן שלמות - אחת מהן מכילה באג (תרגיל 4).

/**
 * מעצב סכום כמטבע שקלי.
 * @param {number} amount
 * @returns {string}
 */
function formatILS(amount) {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
  }).format(amount);
}

/**
 * מחשב ריבית פשוטה.
 * @param {number} principal - קרן
 * @param {number} annualRate - ריבית שנתית באחוזים (למשל 5 עבור 5%)
 * @param {number} years - מספר שנים
 * @returns {number}
 */
function simpleInterest(principal, annualRate, years) {
  return principal * (annualRate / 100) * years;
}

/**
 * מחשב את הממוצע של רשימת סכומים.
 * שימו לב: פונקציה זו מכילה באג (תרגיל 4).
 * @param {number[]} amounts
 * @returns {number}
 */
function average(amounts) {
  let sum = 0;
  for (let i = 0; i <= amounts.length; i++) {
    sum += amounts[i];
  }
  return sum / amounts.length;
}

/**
 * מסנן תנועות מעל סכום מסוים.
 * @param {{amount:number}[]} transactions
 * @param {number} threshold
 * @returns {object[]}
 */
function transactionsAbove(transactions, threshold) {
  return transactions.filter((t) => t.amount > threshold);
}

module.exports = { formatILS, simpleInterest, average, transactionsAbove };
