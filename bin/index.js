const app = require('../config/express')();

app.listen(app.get('port'), () => console.log(`Server running at http://localhost:${app.get('port')}`));