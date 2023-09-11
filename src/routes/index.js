const express = require("express");
const categotyRoute = require("./categoty.route");
const productRoute = require("./product.route");
const userRoute = require("./user.route");
const sub_categoryRoute = require("./sub.category.route");

const router = express.Router();
router.use("/category" , categotyRoute);
router.use("/product" , productRoute);
router.use("/user" , userRoute);
router.use("/sub-category" , sub_categoryRoute);

module.exports = router;