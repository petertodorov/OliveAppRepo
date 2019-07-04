const express  = require('express');
const router = express.Router();
const {createJar,editJar} = require('../controllers/jarsController')

router.post('/create',createJar)
router.get('/edit/:id',editJar)
module.exports = router;