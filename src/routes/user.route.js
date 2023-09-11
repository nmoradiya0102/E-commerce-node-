const express = require("express");
const { userValidation } = require("../validation");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();
/** create user */
router.post(
    "/create-user",
    validate(userValidation.create_User),
    userController.create_User
);
/** Get user list */
router.get(
    "/list",
    userController.get_User_List
);
router.delete(
    "/delete-user/:userId",
    userController.delete_User
);
router.put(
    "/update-user/:userId",
    validate(userValidation.create_User),
    userController.update_User
)

module.exports = router;