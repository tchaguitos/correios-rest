const calcPrazoRestricaoController = require('../controllers/calcPrazoRestricao');

module.exports = (app) => {
    app.post('/v1/calc-prazo-restricao/', calcPrazoRestricaoController.calcPrazoRestricao);
};
