const express = require('express');
const router = express.Router();
const {getOlives} = require('../controllers/olivesController')

router.get('/',getOlives);

module.exports = router;