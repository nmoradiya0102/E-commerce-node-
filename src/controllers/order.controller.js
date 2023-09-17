const { orderService,userService } = require("../services");

//  create order
const create_Order = async(req,res) => {
    try {
        const reqbody = req.body;
        const user_Exist = await userService.get_User_By_Id(reqbody.user);
        if(!user_Exist){
            throw new Error("User does not exist...!");
        }
        const order_Exist = await orderService.get_Order_By_User(reqbody.user);
        if(order_Exist){
            throw new Error("Order already exist for this user..!");
        }
        const order = await orderService.create_Order(reqbody);
        if(!order){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success:true,
            message:"Order created successfully..!",
            data:order
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}


//  order update
const update_Order = async(req,res) => {
    try {
        const order_Exist = await orderService.get_order_by_id(req.params.orderId);
        if(!order_Exist){
            throw new Error("order does not exist..!");
        }
        const updated = await orderService.update_Order(req.params.orderId,req.body);
        if(!updated){
            throw new Error("Something went wrong..");
        }
        res.status(200).json({
            success:true,
            message:"Order updated successfully..!",
            data:req.body
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}


//  get order list
const get_Order_List = async(req,res) => {
    try {
        const order_List = await orderService.get_Order_List();
        if(!order_List){
            throw new Error("Order list does not exist..!");
        }
        res.status(200).json({
            success:true,
            message:"Order list dispatch successfully..! ",
            data:order_List
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}


//  delete order
const delete_Order = async(req,res) => {
    try {
        const order_Exist = await orderService.get_User_By_Id(req.params.orderId)
        if(!order_Exist){
            throw new Error("Order does not exist..!");
        }
        const order = await orderService.delete_Order(req.params.orderId)
        if(!order){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success:true,
            message:"Order deleted successfully..!",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}


module.exports = {
    create_Order,
    update_Order,
    get_Order_List,
    delete_Order
}