const mountSearchParams = require('./request/mountSearchParams');
const makeRequest = require('./request/makeRequest');
const parseResponse = require('./response/parseResponse');
const replaceBrackets = require('./string/replaceBrackets');
const checkIfKeysExists = require('./error/checkIfKeysExists');
const mountErrorMessage = require('./error/mountErrorMessage');

module.exports = {
    checkIfKeysExists,
    mountErrorMessage,
    mountSearchParams,
    replaceBrackets,
    parseResponse,
    makeRequest,
};

