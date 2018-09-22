const { makeRequest } = require('../utils');

const calcPrazoController = {};

calcPrazoController.calcPrazo = async (req, res) => {

    const obj = {
        nCdServico: req.body.nCdServico,
        sCepOrigem: req.body.sCepOrigem,
        sCepDestino: req.body.sCepDestino,
    };
    
    const response = await makeRequest('http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrazo', 'POST', obj);
    
    res.json(response);

};

module.exports = calcPrazoController;

