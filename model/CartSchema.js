const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = Schema({
    product:[{
        type:Schema.Types.ObjectId,
        ref:'product'
    }],
    employee:{
        type:Schema.Types.ObjectId,
        ref:'Employee1'
    }
})
module.exports = mongoose.model('Cart',cartSchema);
