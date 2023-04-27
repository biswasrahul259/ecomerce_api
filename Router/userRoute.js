const Router = require("express").Router()
const CatagoryController = require("../Controller/user/viewCatagory")
const subCatagoryController = require("../Controller/user/viewSubCatagory")
const productController = require("../Controller/user/viewProduct")
const CartController = require("../Controller/user/addCart")

Router.get("/viewCatagory",CatagoryController.viewCategory)
Router.get("/viewSubCat",subCatagoryController.SubViewAll )
Router.get("/viewProduct",productController.viewAllProduct)

//add to cart
Router.post("/adCart",CartController.addCreateCart)
Router.get("/viewCart", CartController.ViewAddcart)
//Router.delete("/delele/:id", CartController.delete)

module.exports = Router ;