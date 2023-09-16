const { sub_category_Service } = require("../services");

/* Create sub category */
const create_sub_category = async (req, res) => {
    try {
      const reqBody = req.body;
      const sub_category_Exist = await sub_category_Service.get_Sub_Category_By_Name(reqBody.sub_category_name);
      if(sub_category_Exist){
        throw new Error("Something went wrong ..!");
      }
      const sub_category = await sub_category_Service.create_sub_category(reqBody);
      if(!sub_category){
        throw new Error("Something went wrong..!");
      }
      res.status(200).json({
        success: true,
        message: "Sub-category create successfully..!",
        data: sub_category,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* Get Sub category list*/
const sub_category_list = async (req,res) => {
    try {
        const sub_categorylist = await sub_category_Service.get_Sub_Category_List();
        if(!sub_categorylist){
          throw new Error("Sub-Category list not found");
        }
        res.status(200).json({
          success: true,
          message: "Sub-category list found successfully",
          data: sub_categorylist
        });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* Delete sub category */
const delete_sub_category = async(req,res) => {
  try {
    const sub_category_Id = req.params.sub_categoryId;
    const sub_category_Exist = await sub_category_Service.get_Sub_Category_By_Id(sub_category_Id);
    if(!sub_category_Exist){
      throw new Error("Sub-category not found");
    }
    await sub_category_Service.delete_sub_category(sub_category_Id);
    res.status(200).json({
      success: true,
      message: "Sub-category deleted successfully ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/* Update sub category */
const update_sub_category = async(req,res) => {
  try {
    const reqbody = req.body;
    const sub_category_Id = req.params.sub_categoryId;
    const sub_category_Exist = await sub_category_Service.get_Sub_Category_By_Id(sub_category_Id);
    if(!sub_category_Exist){
      throw new Error("Sub-category not found..!");
    }
    await sub_category_Service.update_sub_category(sub_category_Id,reqbody);
    res.status(200).json({
      success: true,
      message: "Sub-category updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
    create_sub_category,
    sub_category_list,
    delete_sub_category,
    update_sub_category
}