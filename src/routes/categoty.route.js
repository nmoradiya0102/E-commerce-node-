const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  validate(categoryValidation.create_Category),
  categoryController.create_Category
);

/** category list */
router.get(
  "/list",
  categoryController.get_Category_List
)

/** delete category */
router.delete(
  "/delete/:categoryId",
  categoryController.delete_Category
)

/** update category */
router.put(
  "/update-category/:categoryId",
  categoryController.update_Category
)

module.exports = router;