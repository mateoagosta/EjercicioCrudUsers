const express = require('express');
const dotenv = require('dotenv');

const routes = require('./v1/routes');
dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/v1', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
})