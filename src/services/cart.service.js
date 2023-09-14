const { Cart } = require("../model");

const get_Cart_By_Number = async(number) => {
    return Cart.findOne({number});
}

const get_Cart_By_Id = async(cartId) => {
    return Cart.findById(cartId);
}

const create_Cart = async(reqbody) => {
    return Cart.create(reqbody);
}

const get_Cart_List = async() => {
    return Cart.find();
}

const delete_Cart = async(cartId) => {
    return Cart.findByIdAndDelete(cartId);
}

const update_Cart = async(cartId,reqbody) => {
    return Cart.findByIdAndUpdate(cartId,{$set:reqbody});
}

module.exports = {
    get_Cart_By_Number,
    get_Cart_By_Id,
    create_Cart,
    get_Cart_List,
    delete_Cart,
    update_Cart
}