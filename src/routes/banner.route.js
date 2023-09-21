<<<<<<< HEAD
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

/** Get product details */
// router.get(
//   "/details/:productId",
//   validate(productValidation.getDetails),
//   productController.getDetails
// );

/** Get production list */
router.get(
  "/list",
  validate(bannerValidation.getList),
  bannerController.getBannerList
);

/** Update product details */
// router.put(
//   "/update/:productId",
//   auth(),
//   upload.single("product_image"),
//   validate(productValidation.updateProduct),
//   productController.updateProduct
// );

/** Manage product status */
// router.put(
//   "/manage-status/:productId",
//   auth(),
//   validate(productValidation.getDetails),
//   productController.manageProductStatus
// );

/** Delete product */
// router.delete(
//   "/delete/:productId",
//   auth(),
//   validate(productValidation.getDetails),
//   productController.deleteProduct
// );

module.exports = router;
=======
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
>>>>>>> 69955820bed14a3ddb654024b4fbc1df7ea60c2b
