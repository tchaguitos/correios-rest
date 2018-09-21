const calcPrecoPrazoController = require('../controllers/calcPrecoPrazo');

module.exports = (app) => {
    app.post('/v1/calc-preco-prazo/', calcPrecoPrazoController.calcPrecoPrazo);
};
