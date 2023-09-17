const fs = require("fs");
const { bannerService } = require("../services");

/** Create Banner */
const create_Banner = async (req, res) => {
  try {
    const reqbody = req.body;

    if (req.file) {
      reqbody.product_image = req.file.filename;
    } else {
      throw new Error("Banner image is required..!");
    }

    const banner = await bannerService.create_Banner(reqbody);

    res.status(200).json({
      success: true,
      message: "Banner create successfully..!",
      data: banner,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong..!",
    });
  }
};

/** Get Banner list */
const get_Banner_List = async (req, res) => {
  try {
    const banner_List = await bannerService.get_Banner_List();

    res.status(200).json({
      success: true,
      message: "Banner data found successfully..!",
      data: banner_List,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong..!",
    });
  }
};


module.exports = {
  create_Banner,
  get_Banner_List,
}