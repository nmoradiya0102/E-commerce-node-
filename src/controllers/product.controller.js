const { productService } = require("../services");

/** create Product */
const create_Product = async (req, res) => {
  try {
    const reqBody = req.body;
    const product = await productService.create_Product(reqBody);
    if (!product) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get product list */
const get_Product_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Product_name: { $regex: search, $options: "i" } },
        { product_description : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await productService.get_Product_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Product list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete product */
const delete_Product = async (req, res) => {
  try {
    const product_Id = req.params.product_Id;
    const product_Exists = await productService.get_Product_By_Id(product_Id);
    if (!product_Exists) {
      throw new Error("Product not found!");
    }
    await productService.delete_Product(product_Id);

    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update product */
const update_Product = async (req, res) => {
  try {
    const reqBody = req.body;
    const product_Id = req.params.product_Id;
    const product_Exists = await productService.get_Product_By_Id(product_Id);
    if (!product_Exists) {
      throw new Error("Product not found!");
    }
    await productService.update_Product(product_Id,reqBody);

    res.status(200).json({
      success: true,
      message: "Product update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_Product,
  get_Product_List,
  delete_Product,
  update_Product
};