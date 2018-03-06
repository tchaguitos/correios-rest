const fetch = require('node-fetch');

const request = async (url, method, body) => {
  const options = {
    url,
    method,
    body,
  };

  await fetch(options)
    .then(res => res)
    .catch(err => err);
};

module.exports = request;
