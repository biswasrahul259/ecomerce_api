const mongoose = require("mongoose")

const ProductCatagorySchema = mongoose.Schema({
   
    categoryName:{
        type:String,
        require:true
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

const catagory = mongoose.model("catagory",ProductCatagorySchema)
module.exports = catagory ;