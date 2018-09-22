const axios = require('axios');
const mountSearchParams = require('./mountSearchParams');
const parseResponse = require('../response/parseResponse');

const makeRequest = async (url, method, obj) => {

    const data = mountSearchParams(obj);
    const options = {
        url,
        method,
        data,
    };
    
    const response = await axios(options)
        .then(res => parseResponse(res.data))
        .then(res => res)
        .catch(err => err);
        
    return response;

};

module.exports = makeRequest;
