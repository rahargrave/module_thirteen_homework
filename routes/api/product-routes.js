const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

//Pulls all product data
router.get('/', async (req, res) => {
  try {
    const ProductData = await Product.findAll();
    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single card
router.get('/:id', async (req, res) => {
  try {
    const ProductData = await Product.findByPk(req.params.id, {
    });

    if (!ProductData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const ProductData = await Product.create(req.body);
    res.status(200).json(ProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
// Product.create(req.body)
//   .then((product) => {
//     // if there's product tags, we need to create pairings to bulk create in the ProductTag model
//     if (req.body.tagIds && req.body.tagIds.length) {
//       const productTagIdArr = req.body.tagIds.map((tag_id) => {
//         return {
//           product_id: product.id,
//           tag_id,
//         };
//       });
//       return ProductTag.bulkCreate(productTagIdArr);
//     }
//     // if no product tags, just respond
//     res.status(200).json(product);
//   })
//   .then((productTagIds) => {
//     // after creating product tags, respond with newly created product
//     res.status(200).json(productTagIds);
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(400).json(err);
//   });

//Updates a Product
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const ProductData = await Product.findOne({ where: { id: id } });
      return res.status(200).json(ProductData);
    }
    throw new Error('No product found with this id!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// // update product
// router.put('/:id', (req, res) => {
//   // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       // find all associated tags from ProductTag
//       return ProductTag.findAll({ where: { product_id: req.params.id } });
//     })
//     .then((productTags) => {
//       // get list of current tag_ids
//       const productTagIds = productTags.map(({ tag_id }) => tag_id);
//       // create filtered list of new tag_ids
//       const newProductTags = req.body.tagIds
//         .filter((tag_id) => !productTagIds.includes(tag_id))
//         .map((tag_id) => {
//           return {
//             product_id: req.params.id,
//             tag_id,
//           };
//         });
//       // figure out which ones to remove
//       const productTagsToRemove = productTags
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
//     .then((updatedProductTags) => res.json(updatedProductTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

router.delete('/:id', async (req, res) => {
  try {
    const ProductData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!ProductData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
