const { userService } = require("../services");

/** create user */
const create_User = async (req, res) => {
  try {
    const reqBody = req.body;
  const user = await userService.create_User(reqBody);
    if (!user) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get user list */
const get_User_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    const getList = await userService.get_User_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList ,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user details by id */
const get_User_Details = async (req, res) => {
  try {
    const getDetails = await userService.get_User_By_Id(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** user details update by id */
const update_User = async (req, res) => {
  try {
    const reqBody = req.body;
    const user_Id = req.params.user_Id;
    const user_Exists = await userService.get_User_By_Id(user_Id);
    if (!user_Exists) {
      throw new Error("User not found!");
    }

    await userService.update_User(user_Id, reqBody);

    res.status(200)
      .json({ success: true, message: "User details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete user */
const delete_User = async (req, res) => {
  try {
    const user_Id = req.params.user_Id;
    const user_Exists = await userService.get_User_By_Id(user_Id);
    if (!user_Exists) {
      throw new Error("User not found!");
    }
    await userService.delete_User(user_Id);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Send mail to reqested email */
const send_Mail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong..!");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  create_User,
  get_User_List,
  get_User_Details,
  update_User,
  delete_User,
  send_Mail
};