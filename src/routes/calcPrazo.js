const calcPrazoController = require('../controllers/calcPrazo');

module.exports = (app) => {
  app.post('/v1/calc-prazo/', calcPrazoController.getDeadline);
};
