
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const{ log } = require("console");


//  upload image using disk storage

const storage = multer.diskStorage({
    destination : function( req , file , cb ){
        if(file.fieldname == "Product_Image"){
            console.log(__dirname , '__dirname');
            fs.mkdirSync(path.json(__dirname , "../public/product_images"),{
                recursive : true,
            });
            cb(null , path.json(__dirname, "../public/product_images"));
        }
    },
    filename : function ( req , file , cb ){
        const ext = path.extname(file.originalname);
        if(ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg"){
            cb("Only .png .jpg and .jpeg formate are allowed..!");
        }
        cb(null , new Date().getTime() + ext);
    },
});

const upload = multer({
    storage : storage,
});

module.exports = { upload }