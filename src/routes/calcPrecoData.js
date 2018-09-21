const calcPrecoDataController = require('../controllers/calcPrecoData');

module.exports = (app) => {
    app.post('/v1/calc-preco-data/', calcPrecoDataController.calcPrecoData);
};
