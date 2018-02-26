const xml2js = require('xml2js');
const parser = new xml2js.Parser();

const replaceBrackets = require('./replaceBrackets');

let response;

const parseResponse = async (xml) => {
  await parser.parseString(xml, (err, result) => {

    if(err) return err;

    response = JSON.stringify(result);
  });

  response = JSON.parse(response);
  response = replaceBrackets(JSON.stringify(response.cResultado.Servicos[0].cServico[0]));

  return JSON.parse(response);  
}

module.exports = parseResponse;