const { Order } = require("../model");

const create_Order = async(reqbody) => {
    return Order.create(reqbody);
}

const get_Order_By_User = async(user) => {
    return Order.findOne({user});
}

const get_Order_List = async() => {
    return Order.find().populate("Cart").populate("User");
}

const get_Order_By_Id = async(order_Id) => {
    return Order.findById(order_Id);
}

const update_Order = async(order_Id,reqbody) => {
    return Order.findByIdAndUpdate(order_Id,{$set:reqbody});
}

const delete_Order = async(order_Id) => {
    return Order.findByIdAndDelete(order_Id);
}

module.exports = {
    create_Order,
    get_Order_By_User,
    get_Order_List,
    get_Order_By_Id,
    update_Order,
    delete_Order
}