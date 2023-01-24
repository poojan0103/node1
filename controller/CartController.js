const CartSchema = require("../model/CartSchema");

module.exports.addTOCart = (req, res) => {
    const cart = new CartSchema(req.body);
    cart.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error"
            });
        }
        else {
            res.status(200).json({
                message: "Product added to cart",
                data: data,
            });
        }
    });
};
module.exports.getCartData = (req, res) => {
    
    CartSchema.find().populate("product").populate("employee").exec((err,data)=>{
        
        if (err){
            res.status(500).json({
                message : "Error"
            });
        }
        else{
            res.status(200).json({
                message : "cart data found",
                data : data
            });
        };
    });

}

exports.demo = (req,res)=>{
    CartSchema.find({product:req.params.id}).populate('employee').populate('product').exec((err,data)=>{

        if(err){
            res.status(400).json({
                message:"error"
            })
        }
        else{
            res.status(200).json({
                data:data
            })
        }
    })
}
//else res.status(200) .find({product:req.params.id}).own ("120").popuate("product")