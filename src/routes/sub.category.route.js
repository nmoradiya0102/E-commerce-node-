const express = require("express");
const { sub_categoryValidation } = require("../validations");
const { sub_categoryController } = require("../controllers");
const validate = require("../middlewares/validate")

const router = express.Router()
router.get(
    "/list",
    sub_categoryController.sub_category_list
)
router.post(
    "/create-sub-category",
    validate(sub_categoryValidation.create_Sub_Category),
    sub_categoryController.create_sub_category
)
router.delete(
    "/delete-sub-category/:sub_categoryId",
    sub_categoryController.delete_sub_category
)
router.put(
    "/update-sub-category/:sub_categoryId",
    validate(sub_categoryValidation.create_Sub_Category),
    sub_categoryController.update_sub_category
)
module.exports = router;