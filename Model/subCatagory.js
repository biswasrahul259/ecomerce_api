const mongoose = require("mongoose")

const subCatagorySchema = mongoose.Schema({
   
    subCatagoryName:{
        type:String,
        require:true
    },
    CatagoryId:{
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

const subCatagory = mongoose.model("subCatagory",subCatagorySchema)
module.exports = subCatagory ;