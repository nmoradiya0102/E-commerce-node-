const Joi = require("joi");

/** create user */
const create_User = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};

module.exports = {
  create_User
};