const express = require("express");
const path = require("path");

const productsController = require('../controllers/product');
const { title } = require("process");
const router = express.Router();



// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product",productsController.postAddProduct);

module.exports = router;
