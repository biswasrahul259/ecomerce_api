const categoryModel=require("../../Model/Catagory")

exports.viewCategory=(req,res)=>{
    categoryModel.aggregate([
        {
            $project:{
                categoryName:1,
            }
        },
        {
            $sort:{
                _id:-1
            }
        }

    ]).then((data)=>{
        return res.status(200).json({
            status:true,
            result:data,
            msg:"All data Fatch Sucessfully"
        })
    }).catch((err)=>{
        return res.status(404).json({
            status:false,
            result:err,
            msg:"Data Not fatch"
            })
    })
}


