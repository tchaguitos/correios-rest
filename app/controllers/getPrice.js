const form = require('form-urlencoded');
const request = require('request-promise');

const parseResponse = require('../utils/parseResponse');
const replaceBrackets = require('../utils/replaceBrackets');

let getPriceController = {};

getPriceController.getPrice = (req, res) => {
  
  let obj = {
    nCdEmpresa: req.body.nCdEmpresa,
    sDsSenha: req.body.sDsSenha,
    nCdServico: req.body.nCdServico,
    sCepOrigem: req.body.sCepOrigem,
    sCepDestino: req.body.sCepDestino,
    nVlPeso: req.body.nVlPeso,
    nCdFormato: req.body.nCdFormato,
    nVlComprimento: req.body.nVlComprimento,
    nVlAltura: req.body.nVlAltura,
    nVlLargura: req.body.nVlLargura,
    nVlDiametro: req.body.nVlDiametro,
    sCdMaoPropria: req.body.sCdMaoPropria,
    nVlValorDeclarado: req.body.nVlValorDeclarado,
    sCdAvisoRecebimento: req.body.sCdAvisoRecebimento
  };

  const options = {
    url: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPreco',
    form: form(obj)
  };  

  request.post(options)
    .then(response => parseResponse(response))
    .then(response => res.json(response))
    .catch(err => err);
}

module.exports = getPriceController;