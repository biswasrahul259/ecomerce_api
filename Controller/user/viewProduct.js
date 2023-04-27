const productModel = require("../../Model/product")

exports.viewAllProduct = (req, res) => {
    try {
      productModel.aggregate([
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