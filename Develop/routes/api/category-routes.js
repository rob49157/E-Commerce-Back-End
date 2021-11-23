const router = require('express').Router();
const { query } = require('express');
//const { Model, QueryInterface, DataTypes } = require('sequelize/dist');
// const { BOOLEAN } = require('sequelize/types');
const { Category, Product} = require('../../models');
const { findAll } = require('../../models/Product');
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(/* ... */);
// const queryInterface = sequelize.getQueryInterface();


// find all categories

router.get('/', async (req, res) => {
  console.log('asdfasdfasdf')
  const categories = await Category.findAll({
    // include:[{ model:Category}]
    
  })
  res.send(categories)
  
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  
  console.log(req.params.id)
  const categories = await Category.findByPk(req.params.id)
    if (categories=== null){
      console.group('not found')
    } else{ 
      res.send(categories)
      console.log (categories)
    }
  } 
  
);

router.post('/',  async (req, res) => {
    try {
      const categories = await Category.create(req.body);
      res.status(200).json(categories);
    } catch (err) {
      res.status(400).json(err)
    }
 
   
 });
 
 // update a category by its `id` value
 router.put('/:id', async (req, res) => {
   const categories=  await Category.update({
    category_name: req.body.category_name
   },
   { where:{
    ID: req.params.id
   }

   })
   return res.json(categories)
 })
  
// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  const categories= Category.destroy({
    where: {
      ID: req.params.id
    },
  })
    return res.json(categories)
});
   

module.exports = router;
