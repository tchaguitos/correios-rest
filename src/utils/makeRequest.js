/* global fetch */

const request = async (url, method, body) => {
  const options = {
    method,
    body,
  };

  await fetch(url, options)
    .then(res => res)
    .catch(err => err);
};

module.exports = request;
