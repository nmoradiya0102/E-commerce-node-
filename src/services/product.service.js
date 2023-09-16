const { Product } = require("../model");

// Create Product
const create_Product = async (reqBody) => {
  return Product.create(reqBody);
};

// Get Product list
const get_Product_List = async (filter, options) => {
  return Product.find().populate("category");
  // return Product.find({$or:[{is_active:false}]});
};

// Get product by name
const get_Product_By_Name = async(product_name) => {
    return Product.findOne({product_name});
}


// Get Product details by id
const get_Product_By_Id = async (product_Id) => {
  return Product.findById(productId);
};

// Delete Product
const delete_Product = async (product_Id) => {
  return Product.findByIdAndDelete(product_Id);
};

// Update Product
const update_Product = async (product_Id,reqBody) => {
  return Product.findByIdAndUpdate(product_Id,{$set:reqBody});
};
module.exports = {
    create_Product,
    get_Product_List,
    get_Product_By_Name,
    get_Product_By_Id,
    delete_Product,
    update_Product
};