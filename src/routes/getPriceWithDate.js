const getPriceWithDateController = require('../controllers/getPriceWithDate');

module.exports = (app) => {
  app.post('/v1/price-with-date/', getPriceWithDateController.getPriceWithDate);
};
