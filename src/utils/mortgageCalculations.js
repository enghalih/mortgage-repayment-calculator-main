/**
 * Mortgage calculation utilities.
 * M = P * [r(1+r)^n] / [(1+r)^n - 1]
 * P = principal, r = monthly rate (annual/12), n = months (term years * 12)
 */

/**
 * Monthly payment for repayment mortgage (principal + interest).
 * @param {number} principal - Mortgage amount (£)
 * @param {number} annualRatePercent - Annual interest rate (e.g. 5 for 5%)
 * @param {number} termYears - Term in years
 * @returns {number} Monthly payment in £
 */
export function monthlyPaymentRepayment(principal, annualRatePercent, termYears) {
  if (principal <= 0 || termYears <= 0) return 0;
  const r = (annualRatePercent / 100) / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  const factor = Math.pow(1 + r, n);
  return (principal * r * factor) / (factor - 1);
}

/**
 * Monthly payment for interest-only mortgage (interest only).
 * @param {number} principal - Mortgage amount (£)
 * @param {number} annualRatePercent - Annual interest rate (e.g. 5 for 5%)
 * @returns {number} Monthly interest payment in £
 */
export function monthlyPaymentInterestOnly(principal, annualRatePercent) {
  if (principal <= 0) return 0;
  const r = (annualRatePercent / 100) / 12;
  return principal * r;
}

/**
 * Total amount repaid over the term.
 * Repayment: monthly * n. Interest-only: monthly * n + principal (principal repaid at end).
 */
export function totalRepay(monthlyPayment, termYears, isInterestOnly, principal = 0) {
  const n = termYears * 12;
  if (isInterestOnly) return monthlyPayment * n + principal;
  return monthlyPayment * n;
}

/**
 * Format number as British Pounds with thousands separator.
 */
export const formatPounds = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
