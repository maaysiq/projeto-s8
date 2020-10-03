const express = require('express');
const router = express.Router();
const controller = require('../controller/seriesController');

router.get('/series', controller.getaAll);
router.get("/", controller.getaAll);
router.get('/series/:id', controller.getById);

module.exports = router