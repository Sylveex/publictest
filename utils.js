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

module.exports = { capitalize, parseDate };
