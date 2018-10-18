const app = require('../config/express')();

app.listen(app.get('port'), () => `Server running at http://localhost:${app.get('port')}`);
