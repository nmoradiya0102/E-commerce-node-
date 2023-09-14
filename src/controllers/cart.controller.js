const { cartService } = require("../services");

//  Create cart
const create_Cart = async( req , res ) => {
    try{
        const reqbody = req.body;
        const CartExists = await cartService.get_Cart_By_Number(reqbody.get_Cart_By_Number);
        if(!CartExists){
            throw new Error("Cart by this number already created..!");
        };
        const cart = await cartService.create_Cart(reqbody);
        if(!cart){
            throw new Error("something went wrong , please try again leter..!");
        }
        res.status(200).json({
            success : true,
            message : "Create Cart Successfully..!",
            data : cart
        });
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};

// get cart list
const get_Cart_List = async( req , res ) => {
    try{
        const cartList = await cartService.get_Cart_List();
        if(!cartList) {
            throw new Error("this cart data not fonud..!");
        }
        res.status(200).json({
            success : true,
            message : "cart list found successfully..!",
            data : cartList
        });
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};

// update cart
const  update_Cart = async ( req , res ) => {
    try{
        const CartExists = await cartService.get_Cart_By_Id(req.params.cartId);
        if(!CartExists){
            throw new Error("Cart not found..!");
        }
        await cartService.update_Cart(req.params.cartId,req.body);
        res.status(200).json({
            success : true,
            message : "Cart update successfully..!",
            data : req.body
        });
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};

// Delete cart
const delete_Cart = async ( req , res ) => {
    try{
        const CartExists = await cartService.get_Cart_By_Id(req.params.cartId)
        if(!CartExists){
            throw new Error("Cart not found..!");
        }
        const cartDelete = await cartService.delete_Cart(req.params.cartId);
        if(!cartDelete){
            throw new Error("Cart not found.....")
        }
        res.status(200).json({
            success:true,
            message:"Cart deleted successfully",
        });
      } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

module.exports = {
    create_Cart,
    get_Cart_List,
    update_Cart,
    delete_Cart
}