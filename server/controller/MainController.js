'use strict';


let MainController = {
  index: function(request, response, next) {
    response.render('index', {});
  }
};

module.exports = MainController;

