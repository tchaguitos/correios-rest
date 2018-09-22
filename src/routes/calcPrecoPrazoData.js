const calcPrecoPrazoDataController = require('../controllers/calcPrecoPrazoData');

module.exports = (app) => {
    app.post('/v1/calc-preco-prazo-data/', calcPrecoPrazoDataController.calcPrecoPrazoData);
};
