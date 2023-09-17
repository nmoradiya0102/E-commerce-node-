const express = require("express");
const categotyRoute = require("./categoty.route");
const productRoute = require("./product.route");
const userRoute = require("./user.route");
const sub_categoryRoute = require("./sub.category.route");
const cartRoute = require("./cart.route");
const tokenRoute = require("./token.route");
const orderRoute = require("./order.route");

const router = express.Router();
router.use("/category" , categotyRoute);
router.use("/product" , productRoute);
router.use("/user" , userRoute);
router.use("/sub-category" , sub_categoryRoute);
router.use("/cart" , cartRoute);
router.use("/token" , tokenRoute);
route.use("/order" , orderRoute);

module.exports = router;