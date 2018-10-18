const mountSearchParams = obj => Object.getOwnPropertyNames(obj).map(key => `${key}=${obj[key]}`).join('&');

module.exports = mountSearchParams;
