const app = require('./app');
const databaseConnect = require('./config/database')

databaseConnect();
app.listen(8000);