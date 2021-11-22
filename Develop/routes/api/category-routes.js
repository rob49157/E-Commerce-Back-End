const router = require('express').Router();
const { Model, QueryInterface, DataTypes } = require('sequelize/dist');
const { Category, Product} = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categories = await Category.findAll()
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
  // be sure to include its associated Products
);

router.post('/', (req, res) => {
  QueryInterface.addColumn('category','product', { type: DataTypes.STRING})
  // create a new category
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
