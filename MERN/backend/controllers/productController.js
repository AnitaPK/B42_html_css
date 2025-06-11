const Product = require('../models/productModel')
const Category = require('../models/categoryModel')

createProduct =async(req,res) =>{
    const {name,description,price,category_id,Quantity} = req.body;

    const image = req.file ? req.file.filename : null
    const createdBy = req.user._id; 
    const updatedBy = req.user._id;
    try {
        const newProd = new Product({name,description,price,category_id,image,Quantity,createdBy,updatedBy})
        // console.log(newProd)
        await newProd.save();
        res.status(200).send({message:"Product added successfully", success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }
}


getAllProducts = async(req,res) =>{
    try {
        const products = await Product.find();
      const modifiedProducts = products.map((product) => ({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category_id: product.category_id,   
            Quantity: product.Quantity,
            image: product.image ? `http://localhost:8000/uploads/${product.image}` : null,
        }));
        res.status(200).send({products:modifiedProducts,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }
}



getProductByID =async(req,res) =>{
   try {
    const id = req.params.id

    const product = await Product.findById(id)
    console.log(product);
    if(!product){
        return res.status(400).send({message:"Product not found", success:false})
    }
    const category_name = await Category.findOne({_id:product.category_id},{name:1}),

    modifiedProduct = {
        id:product._id,
        name:product.name,
        description:product.description,
        price:product.price,
        category_name:category_name.name,
        Quantity:product.Quantity,
        InStock:product.Quantity > 0 ? true : false,
        image:`http://localhost:3000/uploads/${product.image}`
    }
    res.status(200).send({product:modifiedProduct,success:true})
   } catch (error) {
    res.status(500).send({error:error}) 
   }
}


updateProduct =async(req,res) =>{
    try {
        const id = req.params.id

        const product = await Product.findById(id)
        if(!product){
            return res.status(400).send({message:"Product not found", success:false})
        }
        product.name = req.body.name || product.name
        product.description= req.body.description || product.description
           product.price= req.body.price || product.price
            product.category_id= req.body.category_id || product.category_id   
            product.Quantity= req.body.Quantity || product.Quantity
            product.image= req.file.filename || product.image
        await product.save();
        res.status(200).send({message:"Product updated successfully", success:true, product})
    } catch (error) {
        
    }
}


deleteProduct =async(req,res) =>{
     try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(400).send({message:"Product not found", success:false})
        }
        res.status(200).send({message:"Product deleted successfully", success:true})
    } catch (error) {
        console.log("Error deleting product:", error);
    }
}


const getProductsByCategory =async(req,res)=>{
    const cat_id = req.body.category_id
    try{
        c_id = await Category.findById(cat_id)
        if(!c_id){
            return res.status(400).send({message:"Category not found", success:false})
        }
        productsCat = await Product.find({category_id:cat_id})
        
        res.status(200).send({message:"Product By Category", success:true,productsCat:productsCat})

    } catch (error) {
        console.log("Error deleting product:", error);
    }
}

const getProductsByQuery = async(req,res)=>{
        try{
        res.status(200).send({message:"Product By Query", success:true})

    } catch (error) {
        console.log("Error deleting product:", error);
    }
}

module.exports = {
    createProduct,
getAllProducts,
getProductByID,
updateProduct,
deleteProduct,
getProductsByCategory,
getProductsByQuery
}
