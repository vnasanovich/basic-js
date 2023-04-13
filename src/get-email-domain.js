const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain;
  for (let i =0; i< email.length;i++) {
  if(email[i] === '@') {
   domain = email.slice(i+1);
      for (let j =0; j<domain.length; j++) {
     if(domain[j] === '@') {
         domain = domain.slice(j+1);
  }
}
}
  }
  return domain;
}

module.exports = {
  getEmailDomain
};
