const addCartModel = require("../../Model/addCart")

const addCreateCart = (req, res) => {
    const addCartData = {
        productId: req.body.productId,
        quantity: req.body.quantity,
        productPrice: req.body.productPrice
    }

    const addCreateCartData = new addCartModel(addCartData)

    addCreateCartData.save().then((data) => {
        return res.status(200).json({
            status: true,
            msg: "Product Add SucessFully",
            result: data
        })
    }).catch((err) => {
        return res.status(500).json({
            status: true,
            msg: "server error"
        })
    })
}


const ViewAddcart = (req, res) => {
  return addCartModel.aggregate([
    {
        $lookup:{
            from:"products",
            pipeline:[
                {
                    $project:{
                        productName:1,
                        productPrice:1,
                        _id: 1,
                    }
                }
            ],
            localField:"productId",
            foreignField: "_id",
            as: "ProductInfo"
        }
    },
    {
        $sort: {
            createdOn: -1
        }
    }
  ]).then((data)=>{
    return res.status(200).json({
        status: true,
        message: "Get All Cart Product",
        data: data,
    });
})
.catch((error) => {
    return res.status(200).json({
        status: false,
        message: "Server error. Please try again.",
        // error: error,
    });
  })
}

const deleteCart=(req,res)=>{
    addCartModel.findByIdAndDelete({_id:req.params.id}).then((data)=>{
        return res.status(200).json({
            status: true,
            msg: "cart delete successfully",
            result: data
        })
    }).catch((err)=>{
        return res.status(500).json({
            status:false,
            msg:"Server Error"
        })
    })
}


module.exports = {
    addCreateCart,
    ViewAddcart,
    deleteCart
}