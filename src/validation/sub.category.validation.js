const Joi = require("joi");

const create_Sub_Category = {
    body: Joi.object().keys({
        sub_category_name: Joi.string().required().trim(),
        sub_category_description: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
    })
}

module.exports = {
    create_Sub_Category,
}