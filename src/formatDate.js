'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const oldSeparator = fromFormat[fromFormat.length - 1];
  const newSeparator = toFormat[toFormat.length - 1];

  const dateArray = date.split(oldSeparator);
  const dateObject = {};

  const newFormat = toFormat.slice(0, -1);
  const oldFormat = fromFormat.slice(0, -1);

  for (let i = 0; i <= dateArray.length; i++) {
    const key = dateArray[i];
    const value = oldFormat[i];

    dateObject[value] = key;

    if (value === 'YY') {
      const yearNum = Number(key);

      dateObject['YYYY'] = yearNum < 30 ? '20' + key : '19' + key;
    }

    if (value === 'YYYY') {
      dateObject['YY'] = key.slice(-2);
    }
  }

  const newDate = newFormat.map((value) => dateObject[value]);

  return newDate.join(newSeparator);
}

module.exports = formatDate;
