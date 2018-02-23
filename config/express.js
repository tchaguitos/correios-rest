const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app.set('port', (process.env.PORT || 3001));

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  consign({cwd: 'app'})
    .include('models')
    .include('controllers')
    .then('routes')

    .into(app);

  return app;
};

