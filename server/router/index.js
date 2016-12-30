'use strict';

let router = require('express').Router();
let MainController = require('../controller/MainController');

router.get('/', MainController.index);

module.exports = router;
