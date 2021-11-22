const router = require('express').Router();
const { query } = require('express');
//const { Model, QueryInterface, DataTypes } = require('sequelize/dist');
// const { BOOLEAN } = require('sequelize/types');
const { Category, Product} = require('../../models');
const { findAll } = require('../../models/Product');
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(/* ... */);
// const queryInterface = sequelize.getQueryInterface();

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categories = await Category.findAll({
    include:[{Model:Category}]
  })
  res.send(categories)
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  console.log(req.params.id)
  const categorie = await Category.findByPk(req.params.id)
    if (categorie=== null){
      console.group('not found')
    } else{ 
      res.send(categorie)
      console.log (categorie)
    }
  } 
  
);

router.post('/',  async (req, res) => {
    try {
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err)
    }
 
   
 });
 
 router.put('/:id', (req, res) => {
    User.update(category_id)
   });
  

  

  // update a category by its `id` value


router.delete('/:id', (req, res) => {
   User.destroy({
    where:{
      category_id
    }
  })

  // delete a category by its `id` value
});

module.exports = router;
