const express = require('express');
const router = express.Router();

const {getallProducts,
       getMyProducts,
       getMyProductById,
       addProduct,
       updateProduct,
       deleteProduct,
       toggleLikeProduct,
       getwishlistProducts
}      = require('../controllers/productController');

const {protectAuth} = require('../middleware/auth');

router.get('/',getallProducts);
router.get('/my',protectAuth,getMyProducts);
router.get('/wishlist',protectAuth,getwishlistProducts);
router.get('/:id',protectAuth,getMyProductById);
router.post('/',protectAuth,addProduct);
router.patch('/:id',protectAuth,updateProduct);
router.delete('/:id',protectAuth,deleteProduct);
router.post('/:id/like',protectAuth,toggleLikeProduct);

module.exports = router;