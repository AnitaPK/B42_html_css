
const products = [{id:1, name:"iPhone15", category:"Electronics",price:200000,inStock:true},
    {id:2, name:"iPhone16 Pro", category:"",price:300200,inStock:true},
]

addProduct = (req,res)=>{
    console.log("*****", req.body,"********");
    const newProd = {id:Date.now(), 
        name:req.body.name, 
        category:req.body.category,
        price:req.body.price,
        inStock:true
    }
    products.push(newProd);
    res.send({message:"Product added successfully",success:true})

}


function getAllProducts(req,res){
    res.status(200).send({products:products, success:true})
}


function getProductByID(req,res){
    const ID = req.params.ID;
    index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    // const prod = products.filter(p=> p.id == id)
    const prod = products[index];
    res.status(200).send({product:prod, success:true})
}


function updateProduct(req,res){
    const ID = req.params.ID
    index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    products[index].price = req.body.price
    res.status(200).send({message:"product updated", success:true})
    
    }


function deleteProduct(req,res){
    const ID = req.params.ID
    index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    products.splice(index,1)
    res.status(200).send({message:"product deleted", success:true})
}

module.exports = {
    addProduct,
    getAllProducts, 
    getProductByID, 
    updateProduct, 
    deleteProduct
}