const ProductModel = require("../../Model/product");

exports.createProduct = (req, res) => {
  try {
    ProductModel({
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productDescription: req.body.productDescription,
      subCategoryId: req.body.subCategoryId,
      categoryId: req.body.categoryId,
    })
      .save()
      .then((data) => {
        return res.status(202).send({
          status: true,
          msg: "product added succesfully",
          product: data,
        });
      });
  } catch (error) {
    return res.status(404).send({ error: error });
  }
};

exports.viewAllProduct = (req, res) => {
  try {
    ProductModel.aggregate([
      {
        $lookup: {
          from: "catagories",
          localField: "categoryId",
          foreignField: "_id",
          as: "catagory",
        },
      },
      {
        $lookup: {
          from: "subcatagories",
          localField: "subCategoryId",
          foreignField: "_id",
          as: "Subcategory details",
          pipeline: [
            {
              $lookup: {
                from: "catagories",
                localField: "categoryId",
                foreignField: "_id",
                as: "catagory",
              },
            },
          ],
        },
      },
    ]).then((data) => {
      return res.status(202).send({
        status: true,
        msg: "product fatch succesfully",
        product: data,
      });
    });
  } catch (error) {
    return res.status(404).send({ error: error });
  }
};

exports.updateProduct = (req, res) => {
  try {
    ProductModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).then((data) => {
      return res.status(202).send({
        status: true,
        msg: "product updated succesfully",
        product: data,
      });
    });
  } catch (error) {
    return res.status(404).send({ error: error });
  }
};

exports.deleteProduct = (req, res) => {
 try {
    ProductModel.findByIdAndDelete({ _id: req.params.id }).then((data) => {
        return res.status(202).send({
          status: true,
          msg: "product deleted succesfully",
          product: data,
        });
      });
 } catch (error) {
    return res.status(404).send({ error: error });
 }
};
