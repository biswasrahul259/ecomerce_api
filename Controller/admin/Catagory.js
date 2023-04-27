const Catagory = require("../../Model/Catagory")


exports.catagoryCreate = (req,res)=>{
    try {
        Catagory({
            categoryName:req.body.categoryName
        }).save().then((data)=>{
          console.log(data);
           return res.status(202).send({status:true,msg:"Catagory added succesfully", Catagory:data})
        })
    } catch (error) {
        res.status(404).send({error:error,msg:"catagory not added"})
    }
}

exports.viewAllCatagory = (req,res)=>{
  try {
    Catagory.find().then((data)=>{
     return res.status(202).send({status:true, msg:"All Catagory fretch succesfully", Catagory:data})
    })
  } catch (error) {
    res.status(404).send({error:error})
  }
}

exports.updateCatagory = (req,res)=>{
  try {
    Catagory.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then((data)=>{
      console.log(data);
    return  res.status(202).send({status:true, msg:"Catagory update succesfully", Catagory:data})
    })
  } catch (error) {
    res.status(404).send({error:error})
  }
}

exports.deleteCatgory = (req,res)=>{
  try {
    Catagory.findByIdAndDelete({_id:req.params.id}).then((data)=>{
    return res.status(202).send({status:true, msg:"Catagory deleted succesfully", Catagory:data})
    })
  } catch (error) {
    res.status(404).send({error:error})
  }
}