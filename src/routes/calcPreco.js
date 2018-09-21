const calcPrecoController = require('../controllers/calcPreco');

module.exports = (app) => {
  app.post('/v1/calc-preco/', calcPrecoController.getPrice);
};
