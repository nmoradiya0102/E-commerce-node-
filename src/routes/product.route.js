const express = require("express");
const { productValidation } = require("../validation");
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  validate(productValidation.create_Product),
  productController.create_Product
);

/** product list */
router.get(
  "/list",
  productController.get_Product_List
)

router.delete(
  "/delete/:productId",
  productController.delete_Product
)

router.put(
  "/update-product/:productId",
  productController.update_Product
)

module.exports = router;