const productSchema = require("../model/ProductSchema")

exports.addProduct = (req,res)=>{

    var product = new productSchema(req.body);
    console.log(product);
    product.save((err,data)=>{
        if(err){

                res.status(501).json({
                    message:"error occured",
                })
        }
        else{
            res.status(201).json({
                message:"product added",
                data:data
            })
        }


    })

}
exports.getAllProduct = (req,res)=>{
    productSchema.find((err,data)=>{
        if(err){
            res.status(501).json({
                message:"error occured",
            })
        }
        else{
            res.status(200).json({
                message:"product found",
                data:data
            })
        }


    })
}
exports.deleteProduct = (req,res)=>{
    let id = req.params.id
    productSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message :"error",

            });

        }else {
            if (data != null){
                res.status(200).json({
                    message : "product delete",
                    data :data,
                });
            }else {
                res.status(404).json({
                    message: "product not found"
                })
            }
        }
    });
};

module.exports.updateProduct = (req,res) => {
    let id = req.params.id;
    productSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(500).json({
                message : "error",

            });
        }else {
            res.status(200).json({
                message : "product update",
                data : data,
            });
        }
    });
};
module.exports.getProductByID = (req,res)=>{

    let id = req.params.id;
    productSchema.findById(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error"
            })
        }
        else{
            res.status(200).json({
                message: "product found",
                data:data
            })
        }
    })
}
