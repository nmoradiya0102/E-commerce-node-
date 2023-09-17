const express = require("express");
const validate = require("../middlewares/validate");
const { orderValidation } = require("../validation");
const { orderController } = require("../controllers");
const router = express.Router();

router.post(
    "/create-order",
    validate(orderValidation.create_Order),
    orderController.create_Order
)

router.get(
    "/list",
    orderController.get_Order_List
)

router.put(
    "/update-order/:orderId",
    validate(orderValidation.create_Order),
    orderController.update_Order
)

router.delete(
    "/delete-order/:orderId",
    orderController.delete_Order
    )

module.exports = router