const { categoryService } = require("../services");

/** create category */
const create_Category = async (req, res) => {
  try {
    const reqBody = req.body;
    const category = await categoryService.create_Category(reqBody);
    if (!category) {
      throw new Error("Something went wrong ..!");
    }
    res.status(200).json({
      success: true,
      message: "Category create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};


/** Get category list */
const get_Category_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Category_name: { $regex: search, $options: "i" } },
        { category_description : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await categoryService.get_Category_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get category list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Delete category */
const delete_Category = async (req, res) => {
  try {
    const category_Id = req.params.category_Id;
    const category_Exists = await categoryService.get_Category_By_Id(category_Id);
    if (!category_Exists) {
      throw new Error("Category not found!");
    }
    await categoryService.delete_Category(category_Id);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update category */
const update_Category = async (req, res) => {
  try {
    const reqBody = req.body;
    const category_Id = req.params.category_Id;
    const category_Exists = await categoryService.get_Category_By_Id(category_Id);
    if (!category_Exists) {
      throw new Error("Category not found!");
    }
    await categoryService.update_Category(category_Id,reqBody);

    res.status(200).json({
      success: true,
      message: "Category update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_Category,
  get_Category_List,
  delete_Category,
  update_Category
};