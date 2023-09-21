const Joi = require("joi");

/** create Product */
const create_Product = {
  body: Joi.object().keys({
    Product_name: Joi.string().required().trim(),
    product_description: Joi.string().required().trim(),
    product_price: Joi.number().integer().required(),
    category: Joi.string().required(),
    sub_category : Joi.string().required().trim(),
  }),
};

module.exports = {
    create_Product
}