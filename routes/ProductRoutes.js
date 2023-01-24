const express = require("express");
var router = express.Router();
const productController = require("../controller/ProductController");
const productValidation = require("../util/ProductSchemaValidation");
const zodMiddleware = require("../middleware/ZodeMiddleware");
router.post('/addproduct',zodMiddleware.validate(productValidation),productController.addProduct);
router.get('/getproduct',productController.getAllProduct);
router.delete('/deleteproduct/:id',productController.deleteProduct);
router.put('/updateproduct/:id',productController.updateProduct);
router.get('/getbyid/:id',productController.getProductByID);

module.exports = router;
