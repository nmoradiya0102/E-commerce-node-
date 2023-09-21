const express = require("express");
const auth = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");
const validate = require("../middlewares/validate");
const { productValidation, bannerValidation } = require("../validations");
const { bannerController } = require("../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create",
  // auth(),
  upload.single("product_image"),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);

/** Get production list */
router.get(
  "/list",
  validate(bannerValidation.getList),
  bannerController.getBannerList
);

module.exports = router;
