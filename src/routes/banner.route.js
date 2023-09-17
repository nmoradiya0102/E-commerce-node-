const express = require("express");
const { upload } = require("../middlewares/upload");
const validate = require("../middlewares/validate");
const { bannerValidation } = require("../validations");
const { bannerController } = require("../controllers");
const auth = require("../middlewares/auth");

const router = express.Router();

/** Create product banner */
router.post(
  "/create",
  auth(),
  upload.single("product_image"),
  validate(bannerValidation.create_Banner),
  bannerController.create_Banner
);

// get banner list
router.get(
  "/list",
  validate(bannerValidation.get_List),
  bannerController.get_Banner_List
);

module.exports = router;
