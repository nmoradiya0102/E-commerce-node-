const { Users } = require("../model");

// Create user
const create_User = async (reqBody) => {
  return Users.create(reqBody);
};

// Get user list
const get_User_List = async (filter, options) => {
  return Users.find({$or:[{is_active:false}]});
};

// Get user by email
const get_User_By_Email = async (email) => {
  return Users.findOne({ email });
};

// Get user details by id
const get_User_By_Id = async (user_Id) => {
  return Users.findById(user_Id);
};

// user details update by id
const update_User = async (user_Id, reqBody) => {
  return Users.findByIdAndUpdate(user_Id, { $set: reqBody });
};

// Delete user
const delete_User = async (user_Id) => {
  return Users.findByIdAndDelete(user_Id);
};

module.exports = {
  create_User,
  get_User_List,
  get_User_By_Id,
  update_User,
  get_User_By_Email,
  delete_User,
};