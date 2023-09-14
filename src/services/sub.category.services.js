<<<<<<< HEAD
const { Sub_category } = require("../model");

const create_SubCategory = async (reqbody) => {
  return Sub_category.create(reqbody);
};

const get_Sub_Category_List = async () => {
    return Sub_category.find().populate("category");
};

const get_Sub_Category_By_Name = async(Sub_Category_Name)=>{
  return Sub_category.findOne({Sub_Category_Name})
}

const get_Sub_Category_By_Id = async(Sub_Category_Id) => {
  return Sub_category.findById(Sub_Category_Id);
}

const delete_Sub_Category = async(Sub_Category_Id) => {
  return Sub_category.findByIdAndDelete(Sub_Category_Id);
}

const update_Sub_Category = async(Sub_Category_Id,reqbody) => {
  return Sub_category.findByIdAndUpdate(Sub_Category_Id,{$set:reqbody});
}

module.exports = {
    create_SubCategory,
    get_Sub_Category_List,
    get_Sub_Category_By_Name,
    get_Sub_Category_By_Id,
    delete_Sub_Category,
    update_Sub_Category
=======
const { Sub_category } = require("../model");

const create_SubCategory = async (reqbody) => {
  return Sub_category.create(reqbody);
};

const get_Sub_Category_List = async () => {
    return Sub_category.find().populate("category");
};

const get_Sub_Category_By_Name = async(Sub_Category_Name)=>{
  return Sub_category.findOne({Sub_Category_Name})
}

const get_Sub_Category_By_Id = async(Sub_Category_Id) => {
  return Sub_category.findById(Sub_Category_Id);
}

const delete_Sub_Category = async(Sub_Category_Id) => {
  return Sub_category.findByIdAndDelete(Sub_Category_Id);
}

const update_Sub_Category = async(Sub_Category_Id,reqbody) => {
  return Sub_category.findByIdAndUpdate(Sub_Category_Id,{$set:reqbody});
}

module.exports = {
    create_SubCategory,
    get_Sub_Category_List,
    get_Sub_Category_By_Name,
    get_Sub_Category_By_Id,
    delete_Sub_Category,
    update_Sub_Category
>>>>>>> 5361fb8e29c1759140bf54d0a34c2cef29d7ff37
}