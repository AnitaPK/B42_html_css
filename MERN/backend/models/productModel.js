const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String},
    price:{type:Number},
    category_id:{type:mongoose.Schema.Types.ObjectId},
    Quantity:{type:Number},
    image:{type:String},
    createdAt:{type:Date, default:Date.now()},
    createdBy:{type:mongoose.Schema.Types.ObjectId, require:true},
    updatedAt:{type:Date, default:Date.now()},
    updatedBy:{type:mongoose.Schema.Types.ObjectId, require:true}

})




const Product = mongoose.model('product', productSchema)

module.exports = Product