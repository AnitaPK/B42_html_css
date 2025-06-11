const express = require('express')
const brandController = require('../controllers/brandController')

const router = express.Router()


router.post('/addBrand', brandController.addBrand)

router.get('/getAllBrand',brandController.getAllBrand)
// router.get('/getProductsByBrandID/:ID',)
// router.put('/updateBrand',)
// router.delete('/deleteBrand',)


module.exports = router;