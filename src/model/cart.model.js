const mongoose = require("mongoose");

const cartSChema = new mongoose.Schema(
    {
        Mo_number : {
            type : Number,
            default : 0
        },
        total_items : {
            type : Number,
            default : 0
        },
        price : {
            type : Number,
            default : 0
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);
const cart = mongoose.model("Cart" , cartSChema)
module.exports = cart;