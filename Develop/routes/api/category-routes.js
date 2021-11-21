const router = require('express').Router();
const { Model, QueryInterface, DataTypes } = require('sequelize/dist');
const { Category, Product} = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  const findall =  await Category.findAll()
  req.send(findall)
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  const findpk=  await findpk.findbypk(category_id)
    if (findpk=== null){
      console.group('not found')
    } else{ 
      console.log (findpk)
    }
  } 
  // be sure to include its associated Products
);

router.post('/', (req, res) => {
  QueryInterface.addColumn('category','product', { type: DataTypes.STRING})
  // create a new category
});

router.put('/:id', (req, res) => {
  await User.update(category_id)
  });

  // update a category by its `id` value


router.delete('/:id', (req, res) => {
  await User.destroy({
    where:{
      category_id
    }
  })

  // delete a category by its `id` value
});

module.exports = router;
