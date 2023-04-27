const Router = require("express").Router();
const CatagoryController = require("../Controller/admin/Catagory");
const subCatagoryController = require("../Controller/admin/subCatagory")
const productContoller = require("../Controller/admin/productController")


//Catagory routes//
Router.post("/createCatagory",CatagoryController.catagoryCreate);
Router.get("/getAllCat",CatagoryController.viewAllCatagory)
Router.post("/updateCat/:id",CatagoryController.updateCatagory)
Router.delete("/deleteCat/:id", CatagoryController.deleteCatgory)

//SubCatagory //
Router.post("/subcategorycreate",subCatagoryController.SubCatagoryCreate)
Router.get("/allSubcat",subCatagoryController.viewAllSubCat)
Router.post("/updateSubcat/:id",subCatagoryController.updateSubCat)
Router.delete("/deleteSubCat/:id",subCatagoryController.deleteSubcat)

//Product //
Router.post("/createProduct",productContoller.createProduct)
Router.get("/allProduct",productContoller.viewAllProduct)
Router.post("/updateProduct/:id",productContoller.updateProduct)
Router.delete("/deleteProduct/:id",productContoller.deleteProduct)

module.exports = Router;
