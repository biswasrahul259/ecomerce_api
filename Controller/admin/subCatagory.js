const SubCatagory = require("../../Model/subCatagory")

exports.SubCatagoryCreate = (req,res)=>{
    try {
        SubCatagory({
            subCatagoryName:req.body.subCatagoryName,
            CatagoryId : req.body.CatagoryId
        }).save().then((data)=>{
          console.log(data);
           return res.status(202).send({status:true,msg:"SubCatagory added succesfully", SubCatagory:data})
        })
    } catch (error) {
        res.status(404).send({error:error,msg:"catagory not added"})
    }
}

exports.viewAllSubCat = (req,res)=>{
    try {
        SubCatagory.aggregate([
            {
                $lookup : {
                    from : "catagories",
                    localField:"CatagoryId",
                    foreignField:"_id",
                    as: "Catagory details"
                }
            }
        ]).then((data)=>{
            return res.status(202).send({status:true,msg:"SubCatagory fatch succesfully", Catagory:data})
        })
    } catch (error) {
        res.status(404).send({error:error,msg:"SubCatagory not added"})
    }
}

exports.updateSubCat = (req,res)=>{
    try {
        SubCatagory.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then((data)=>{
            return res.status(202).send({status:true,msg:"SubCatagory update succesfully", data:data})
        })
    } catch (error) {
        res.status(404).send({error:error,msg:"catagory not updated"})
    }
}

exports.deleteSubcat = (req,res)=>{
    try {
        SubCatagory.findByIdAndDelete({_id:req.params.id}).then((data)=>{
            return res.status(202).send({status:true, msg:"subcategory delete succesfully", deleted_data:data })
        })
    } catch (error) {
        res.status(404).send({error:error,msg:"catagory not delete"})
    }
}