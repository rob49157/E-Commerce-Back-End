const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  console.log('tags')
  const categories = await Tag.findAll({
    // include:[{ model:Category}]
    
  })
  res.send(categories)
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  onsole.log(req.params.id)
  const categories = await Tag.findByPk(req.params.id)
    if (categories=== null){
      console.group('not found')
    } else{ 
      res.send(categories)
      console.log (categories)
    }
  } 
  // find a single tag by its `id`
  // be sure to include its associated Product data
);

router.post('/', (req, res) => {
  try {
    const categories = await Tag.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err)
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  const categories=  await Tag.update({
    tag_name: req.body.tag_name
   },
   { where:{
    ID: req.params.id
   }

   })
   return res.json(categories)
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  const categories= Tag.destroy({
    where: {
      ID: req.params.id
    },
  })
    return res.json(categories)
  // delete on tag by its `id` value
});

module.exports = router;
