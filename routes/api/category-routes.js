const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then((categories) => {
    res.json(categories)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((categories) => {
    res.json(categories)
  })

});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((category) => {
    res.status(200).json(category)
  })
})

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({category_name: req.body.category_name});
})

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router
