const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Pulls all category data
router.get('/', async (req, res) => {
  try {
    const CategoryData = await Category.findAll();
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single card
router.get('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a card
router.post('/', async (req, res) => {
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Updates a Category
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Category.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const CategoryData = await Category.findOne({ where: { id: id } });
      return res.status(200).json(CategoryData);
    }
    throw new Error('No category found with this id!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// DELETE a Category
router.delete('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
