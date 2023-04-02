import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  return emails.reduce((acc, email) => {

    let pochta = email.split('@')[1];

    if (freeEmailDomains.indexOf(pochta) != -1) {

      if (acc[pochta]) {
        acc[pochta] += 1;
      } else {
        acc[pochta] = 1;
      }
    }

    return acc;
  }, {})
}


export default getFreeDomainsCount;
// END