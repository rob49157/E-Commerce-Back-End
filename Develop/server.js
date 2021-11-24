const express = require('express');
const routes = require('./routes');
const { Sequelize } = require('sequelize');
const Category= require('./models/Category');
const Product = require('./models/Product');
const ProductTag = require('./models/ProductTag');
const Tag = require('./models/Tag')


// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize('ecommerce_db', 'root', 'dal123456789+', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});