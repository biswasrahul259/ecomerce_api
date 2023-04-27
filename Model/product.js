const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    productPrice:{
        type:Number,
        require:true
    },
    productDescription:{
        type:String,
        require:true
    },
    wishlist:{
        type: Boolean,
        default: false,
    },
    subCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subCatagory"
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"catagory"
    },
    status: {
        type: Boolean,
        default: false,
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    createOn:{
        type: Date,
        default:new Date()
    },
    updateOn:{
        type: Date,
        default:new Date()
    }
})

const product = mongoose.model("product",ProductSchema)
module.exports = product ;