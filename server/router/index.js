'use strict';

let router = require('express').Router();
let MainController = require('../controller/MainController');

router.use('/', MainController.index);

module.exports = router;
