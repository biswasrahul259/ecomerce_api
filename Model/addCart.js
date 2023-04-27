const mongoose = require("mongoose")
const Schema = mongoose.Schema

const addCartSchema = Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "product",
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    productPrice: {
        type: Number,
        require: true
    },
    createOn: {
        type: Date,
        default: new Date()
    },
    updateOn: {
        type: Date,
        default: new Date()
    },
    isDeleted: {
        type: Boolean,
        default:false
    },

});


const addCartModel = mongoose.model("addCart", addCartSchema)
module.exports = addCartModel