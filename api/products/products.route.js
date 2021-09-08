const { getProducts, createProduct, getProductById, updateProduct } = require('./products.controller');
const router = require('express').Router();

router.get('', getProducts);
router.post('', createProduct);
router.post('/update', updateProduct);
router.get('/:id', getProductById);

module.exports = router;