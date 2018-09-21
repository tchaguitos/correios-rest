const calcPrazoDataController = require('../controllers/calcPrazoData');

module.exports = (app) => {
  app.post('/v1/calc-prazo-data/', calcPrazoDataController.getDeadlineWithDate);
};
