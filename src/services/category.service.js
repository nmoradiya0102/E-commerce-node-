const { Category } = require("../model");

// category
const create_Category = async (reqBody) => {
  return Category.create(reqBody);
};

// Get category list
const get_Category_List = async (filter,options) => {
    return Category.find({$or:[{is_active:false}]});
};

// Get Category by name
const get_Category_By_Name = async (category_name) => {
  return Category.findOne({ category_name });
};

// Get Category details by id
const get_Category_By_Id = async (category_Id) => {
  return Category.findById(category_Id);
};

// update Category
const update_Category = async (category_Id, reqBody) => {
  return Category.findByIdAndUpdate(category_Id, { $set: reqBody });
};

// Delete user
const delete_Category = async (category_Id) => {
  return Category.findByIdAndDelete(category_Id);
};

module.exports = {
    create_Category,
    get_Category_List,
    get_Category_By_Name,
    get_Category_By_Id,
    update_Category,
    delete_Category
}