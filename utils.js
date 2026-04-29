/**
 * Utility helpers for string formatting and date parsing.
 */

/**
 * Capitalizes the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Parses an ISO date string and returns a localized date string.
 * Falls back gracefully when timezone offset is missing.
 * @param {string} isoString
 * @returns {string}
 */
function parseDate(isoString) {
  if (!isoString) return 'Unknown date';
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return 'Invalid date';
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}



/**
 * Truncates a string to a given length, appending ellipsis if needed.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
function truncate(str, maxLength = 100) {
  if (!str || str.length <= maxLength) return str || '';
  return str.slice(0, maxLength - 3) + '...';
}

// v1.6.0: add formatCurrency helper

/**
 * Formats a number as a currency string.
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
function formatCurrency(amount, currency = 'EUR') {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(amount);
}

module.exports = { capitalize, parseDate, truncate, formatCurrency };
