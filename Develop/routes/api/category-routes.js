const router = require('express').Router();
const { query } = require('express');
const { Model, QueryInterface, DataTypes } = require('sequelize/dist');
const { BOOLEAN } = require('sequelize/types');
const { Category, Product} = require('../../models');
const { findAll } = require('../../models/Product');

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

router.post('/',  (req, res) => {
  module.exports = {
    async up(queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.addColumn(
                'category_name',
                'games',
                {
                    type: Sequelize.STRING,
                },
                { transaction }
            );

            await queryInterface.addIndex(
                'category_name',
                {
                    fields: ['games'],
                    unique: true,
                },
                { transaction }
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }}
  
//   try{
//     await QueryInterface.addColumn('category_name','product', { type: DataTypes.STRING})
    
//    if( QueryInterface===null){
//     console.log('cant add')
//   }else{console.log(QueryInterface)
//     res.json(QueryInterface)}
//   }catch(err){
//     res.status(500)
//   }
//   // create a new category
// });

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
