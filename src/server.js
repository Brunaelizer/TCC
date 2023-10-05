const app = require('./app');
const client = require('./models/db_connect')

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));

client.connect();



