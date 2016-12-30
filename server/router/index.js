'use strict';

let router = require('express').Router();
let MainController = require('../controller/MainController');

router.get('/', MainController.index);
router.get('/apartamento-planejado', MainController.apartment);
router.get('/armario-suspenso-cozinha', MainController.kitchen);
router.get('/moveis-sob-medida', MainController.underMeasure);
router.get('/moveis-planejados-do-quarto', MainController.bedroom);
router.get('/sacada-e-sala', MainController.room);


module.exports = router;
