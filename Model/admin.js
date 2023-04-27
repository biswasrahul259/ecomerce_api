const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
 adminName:{
    type:String,
    require:true
 },
 adminPhone:{
    type:String,
    require:true
 },
 adminEmail:{
    type:String,
    require:true
 },
 token: {
    type: String,
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

const admin = mongoose.model("admin",AdminSchema)
module.export = admin ;