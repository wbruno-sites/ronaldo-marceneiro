'use strict';


let MainController = {
  index: function(request, response, next) {
    response.render('index', { title: 'Ronaldo Marceneiro - Móveis planejados sob medida' });
  }
};

module.exports = MainController;

