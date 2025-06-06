const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String,require:true},
    isAdmin:{type:Boolean,default:false},
    createdAt:{type:Date, default:Date.now()}
})


const User  = mongoose.model("User", userSchema)


module.exports = User;