const getDeadlineWithDateController = require('../controllers/getDeadlineWithDate');

module.exports = (app) => {
  app.post('/v1/deadline-with-date/', getDeadlineWithDateController.getDeadlineWithDate);
};
