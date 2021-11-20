const express = require('express');
const routes = require('./routes');
import { sequelize } from './models/Product';
import * as Sequelize from '/config/connection.js';

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  await sequelize.sync({force: true})
  console.log(`App listening on port ${PORT}!`);
});
