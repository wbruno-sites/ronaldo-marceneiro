/**
 * @file modal.js
 * @author William Bruno
 * @date 2013-05-25
 */
var modal = (function (window, document) {
  "use strict";
  /*jslint plusplus: true, browser: true */
  var module = {
    config : function (config) {
      module.$element = document.querySelector(config.content);
      module.$body = document.body;
      module.$btClose = module.$element.querySelectorAll('.close-modal');
      module.$btOpen = config.btOpen;
    },
    open: function(event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      var $element = module.$element.classList;
      $element.add('opened');
      $element.remove('closed');

      var image = this.getAttribute('href');
      var title = this.getAttribute('alt');

      module.tpl = module.$element.innerHTML;
      module.$element.innerHTML = eval('`' + module.tpl + '`');
    },
    close: function() {
      var $element = module.$element.classList;
      $element.remove('opened');
      $element.add('closed');

      module.$element.innerHTML = module.tpl;
    },
    events : function () {
      module.$btOpen.forEach(function($btn) {
        $btn.addEventListener('click', module.open, false);
      });
      module.$btClose.forEach(function($btn) {
        $btn.addEventListener('click', module.close, false);
      });

      module.$body.addEventListener('click', module.close, false);
      module.$element.addEventListener('click', function(event) {
        event.stopPropagation();
      });
      document.addEventListener('keydown', function() {
        if (27 === event.keyCode) {
          module.close();
        }
      }, false);
    },

    init: function(config) {
      module.config(config);
      module.events();
    }
  };

  return {
    init : module.init
  };
}(window, document));
