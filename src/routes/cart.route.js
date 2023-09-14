const express = require("express");
const validate = require("../middlewares/validate");
const { cartValidation } = require("../validation");
const { cartController } = require("../controllers");

const router = express.Router();

router.post(
    "/create-cart",
    validate(cartValidation.create_Cart),
    cartController.create_Cart
)

router.get(
    "/list",
    cartController.get_Cart_List
)

router.put(
    "/update-cart/:cartId",
    validate(cartValidation.create_Cart),
    cartController.update_Cart
)

router.delete(
    "/delete-cart/:cartId",
    cartController.delete_Cart
)

module.exports = router