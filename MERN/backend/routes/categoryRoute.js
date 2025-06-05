const express = require('express')
const CategoryController = require('../controllers/categoryController')
const authMiddleware = require('../middleware/auth')
const multerMiddleware = require('../middleware/multer')

const router = express.Router();


router.post('/create',authMiddleware.auth,multerMiddleware.single('image'), CategoryController.createCategory)
router.get('/gelAllCategories', CategoryController.getAllCategories)
router.get('/getCategoryByID/:id', CategoryController.getCategoryByID)
router.put('/updateCategory/:id',authMiddleware.auth, CategoryController.updateCategory)
router.delete('/deleteCategory/:id',authMiddleware.auth, CategoryController.deleteCategory)


module.exports = router;
