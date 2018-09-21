const calcPrecoPrazoRestricaoController = require('../controllers/calcPrecoPrazoRestricao');

module.exports = (app) => {
    app.post('/v1/calc-preco-prazo-restricao/', calcPrecoPrazoRestricaoController.calcPrecoPrazoRestricao);
};
