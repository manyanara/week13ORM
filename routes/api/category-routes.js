const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// get request to display all categories
router.get('/', async (req, res) => 
  {
    try {
      const categoryData = await Category.findAll({
        include: [{model: Product}]
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// get request by specific category id
router.get('/:id', async (req, res) =>  {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if (!categoryData){
      res.status(404).json({ message: 'No location found with this id!' });
      return
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// post request to create new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
  .then((newCategory)=>{
    res.json(newCategory);
  })
  .catch((err)=>{
    res.json(err);
  });
});
// put request to update a category given id
router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id,
    },
  })
  .then((updatedBook)=>{
    res.json(updatedBook);
  })
  .catch((err)=>{
    res.json(err);
  })
});
// delete request by category id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedBook)=>{
    res.json(deletedBook);
  })
  .catch((err)=>{
    res.json(err)
  });
});

module.exports = router;
