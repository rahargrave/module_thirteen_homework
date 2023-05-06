const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Pulls all Tag data
router.get('/', async (req, res) => {
  try {
    const TagData = await Tag.findAll();
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single card
router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
    });

    if (!TagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a card
router.post('/', async (req, res) => {
  try {
    const TagData = await Tag.create(req.body);
    res.status(200).json(TagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Updates a Tag
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Tag.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const TagData = await Tag.findOne({ where: { id: id } });
      return res.status(200).json(TagData);
    }
    throw new Error('No Tag found with this id!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// DELETE a Tag
router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!TagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
