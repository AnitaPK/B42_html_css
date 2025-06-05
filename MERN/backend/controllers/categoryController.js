const Category = require('../models/categoryModel')

const createCategory = async (req, res) => {
    const { name } = req.body;
    const image = req.file ? req.file.filename : null;

    // console.log("Request Body:", req.body); 
    // console.log("Uploaded File:", req.file); 

    try {
        if (!req.user.IsAdmin) {
            return res.status(401).send({ message: "Not authorized" });
        }

        const existingCategory = await Category.findOne({ where: { name } });
        if (existingCategory) {
            return res.status(400).send({ message: "Category already exists", success: false });
        }

        const newCategory = await Category.create({ name, image });
        res.status(200).send({ message: "Category created successfully", success: true });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).send({ error: error });
    }
};
const getAllCategories =async (req,res)=>{
    try {
       const categories = await Category.findAll()
   const modifiedCategories = categories.map((category)=>({
            id:category.id,
            name:category.name,
            image:`http://localhost:3000/uploads/${category.image}`
        }))
        res.status(200).send({categories:modifiedCategories, success:true})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}

const getCategoryByID = async(req,res)=>{
    try {
        const id = req.params.ID 

        const category = await Category.findByPk(id)

        if(!category){
            res.status(400).send({message:"Category not found", success:false})
        }
        modifiedCategory = {
            id:category.id,
            name:category.name,
            image:`http://localhost:3000/uploads/${category.image}`
        }

        res.status(200).send({category:category,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }
}
const updateCategory =async(req,res)=>{
    try {
        if(!req.user.IsAdmin){
            res.status(401).send({message:"Not authorized"})
        } 

    const category = await Category.findByPk(id)
    if(!category){
        res.status(400).send({message:"Category not found", success:false})
    }
    await category.update(req.body)
    res.status(200).send({message:"Category updated successfully", success:true,category})
   } catch (error) {
    res.status(500).send({error:error})
   }
}
const deleteCategory = async(req,res)=>{
        const id = req.params.ID

    try {
        if (!req.user.IsAdmin) {
            return res.status(401).send({ message: "Not authorized" });
        }
        const category = await Category.findByPk(id)
        if(!category){
            res.status(400).send({message:"Category not found", success:false})
        }
        await category.destroy()
        res.status(200).send({message:"Category deleted successfully", success:true,category})
    } catch (error) {
        res.status(500).send({error:error})
    }
}

module.exports = {
createCategory,
getAllCategories,
getCategoryByID,
updateCategory,
deleteCategory
}