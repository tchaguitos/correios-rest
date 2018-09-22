const { makeRequest, checkIfKeysExists, mountErrorMessage } = require('../utils');

const calcPrazoRestricaoController = {};

calcPrazoRestricaoController.calcPrazoRestricao = async (req, res) => {

    const obj = req.body;
    
    const errors = await checkIfKeysExists(obj, ['nCdServico', 'sCepOrigem', 'sCepDestino', 'sDtCalculo']);

    if (errors) return res.json(mountErrorMessage(errors));
    
    const response = await makeRequest('http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrazoRestricao', 'POST', obj);

    return res.json(response);

};

module.exports = calcPrazoRestricaoController;

