'use strict';

let debug = require('debug')('ronaldo:controller:app');

let AppController = {
  notFound: function(request, response, next) {
    let err = new Error('Não encontrado');
    err.status = 404;
    next(err);
  },
  errorHandler: function(err, request, response, next) {
    let result = { title: err.message, message: err.message, errors: err.errors };

    response
      .status(err.status || 500)
      .render('error', result);

    debug(err.message);
  }
};

module.exports = AppController;
