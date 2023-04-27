const subCategoryModel=require("../../Model/subCatagory")


exports.SubViewAll=(req,res)=>{
    subCategoryModel.aggregate([
        {
            $lookup:{
                from: "catagories",
                localField: "categoryId",
                foreignField: "_id",
                as: "category_details",
               
            },
        },
        {
            $project:{
                subCatagoryName:1,
            
            }
        }

    ]).then((result)=>{
        // console.log("dataResult",result);
        res.send({
            status:true,
            data:result,
            msg:"All data fatch"
        })
    }).catch((err)=>{
        res.send({
            status:false,
            msg:"All Data not fatch",
            err:err
        })
    })
}

