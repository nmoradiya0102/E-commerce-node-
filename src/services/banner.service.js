const { Banner } = require("../model");

/* Get Banner details*/
const get_Banner_By_Id = async (productId) => {
  return Banner.findOne({ _id: productId }).populate({
    path: "category",
    select: ["category_name"],
  });
};

/* Get Banner list */
const get_List = async () => {
  return Banner.find().populate("product")
};

/* Create product*/
const create_Banner = async (reqBody) => {
  return Banner.create(reqBody);
};

/* Update Banner details*/
const update_Banner = async (productId, reqBody) => {
  return Banner.findOneAndUpdate(
    { _id: productId },
    { $set: reqBody },
    { new: true }
  );
};

/* Manage product status*/
const manage_Banner_Status = async (productId) => {
  const productExists = await getProductById(productId);
  if (!productExists) {
    throw new Error("Banner not found!");
  }

  return Banner.findOneAndUpdate(
    { _id: productId },
    {
      $set: {
        is_active: !productExists.is_active,
      },
    },
    { new: true }
  );
};

/* Delete product */
const delete_Banner = async (productId) => {
  return Banner.findOneAndDelete({ _id: productId });
};

module.exports = {
    get_Banner_By_Id,
    get_List,
    create_Banner,
    update_Banner,
    manage_Banner_Status,
    delete_Banner,
};
