const getPriceController = require('../controllers/getPrice');

module.exports = (app) => {
  app.post('/v1/price/', getPriceController.getPrice);
};
