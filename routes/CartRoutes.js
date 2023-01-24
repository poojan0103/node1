const express = require("express");
const { route } = require("./ProductRoutes");
const router = express.Router();
const cartController = require("../controller/CartController");

router.post('/addtocart',cartController.addTOCart);
router.get('/getcartdata',cartController.getCartData);
router.get('/product/:id',cartController.demo)

module.exports = router;