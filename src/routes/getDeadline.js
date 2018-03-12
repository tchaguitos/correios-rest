const getDeadlineController = require('../controllers/getDeadline');

module.exports = (app) => {
  app.post('/v1/deadline/', getDeadlineController.getDeadline);
};
