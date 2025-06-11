const brands = require('../data/brands')


function addBrand(req,res){

bName = req.body.brand_name;
const brand_i = brands.findIndex(b=>b.brand_name == bName)

if(brand_i == -1){
    const newBrand = {
        brand_ID:Date.now(),
        brand_name:req.body.brand_name
    }
    brands.push(newBrand)
    res.status(200).send({message:"Brand added successfully"})
}else{
    res.status(200).status({message:"Brand already exist"})
}
}
function getAllBrand (req,res){
    res.status(200).send({brands:brands})
}
function getProductsByBrandID (req,res){}
function updateBrand(req,res){}
function deleteBrand(req,res){}


module.exports = {
    addBrand,
    getAllBrand,
    getProductsByBrandID,
    updateBrand,
   deleteBrand}