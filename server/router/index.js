'use strict';

let router = require('express').Router();
let MainController = require('../controller/MainController');

router.get('/', MainController.index);
router.get('/apartamento-planejado', MainController.apartment);

module.exports = router;
