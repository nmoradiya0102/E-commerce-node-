const Joi = require("joi");

/** Create Banner */
const create_Banner = {
  body: Joi.object({
    banner_name: Joi.string().required().trim(),
    banner_description: Joi.string().optional(),
    product_image: Joi.string().allow(""),
    product: Joi.string().required(),
  }),
};

/** Get Banner list */
const get_List = {
    query: Joi.object({
      search: Joi.string().trim().allow(""),
      sortBy: Joi.string().trim().allow(""),
      limit: Joi.number().integer().allow(""),
      page: Joi.number().integer().allow(""),
    }),
  };

/** Get Banner details */
/**const get_Details = {
  params: Joi.object({
    productId: Joi.string().required().trim(),
  }),
};*/



/** Update Banner details */
/**const update_Banner = {
  params: Joi.object({
    bannerId: Joi.string().required().trim(),
  }),
  body: Joi.object({
    banner_name: Joi.string().trim().optional(),
    banner_description: Joi.string().optional(),
    banner_image: Joi.string().optional(),
    product: Joi.string().optional(),
  }),
};*/

module.exports = {
  create_Banner,
  get_List,
//   get_Details,
//   update_Banner,
};