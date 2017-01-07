'use strict';


let MainController = {
  index: function(request, response, next) {
    response.render('index', { title: 'Ronaldo Marceneiro - Móveis planejados sob medida' });
  },
  apartment: function(request, response, next) {
    let data = {
      title: 'Apartamento Planejado - Ronaldo Marceneiro',
      path: '/images/trabalhos/apartamento',

      items: [
        { image: 'armario-quarto-casal-2.jpg', name: 'Armário quarto de casal' },
        { image: 'armario-quarto-casal.jpg', name: 'Armário quarto de casal' },
        { image: 'banheiro.jpg', name: 'Armário planejado da pia do banheiro' },
        { image: 'copa-americana.jpg', name: 'Copa Americana' },
        { image: 'cozinha-3.jpg', name: 'Cozinha sob medida' },
        { image: 'cozinha-4.jpg', name: 'Cozinha em madeira' },
        { image: 'cozinha-5.jpg', name: 'Armário suspenso' },
        { image: 'cozinha.jpg', name: 'Cozinha' },
        { image: 'mesa-jantar-2.jpg', name: 'Mesa de Jantar' },
        { image: 'mesa-jantar-3.jpg', name: 'Mesa de Jantar planejada' },
        { image: 'mesa-jantar-4.jpg', name: 'Mesa de Jantar com baú' },
        { image: 'rack-tv-2.jpg', name: 'Rack de tv' },
        { image: 'rack-tv.jpg', name: 'Rack de tv com painel' },
        { image: 'sapateira-2.jpg', name: 'Sapateira' },
        { image: 'sapateira-3.jpg', name: 'Sapateira' }
      ]
    };
    response.render('works', data);
  },
  kitchen: function(request, response, next) {
    let data = {
      title: 'Armário suspenso da cozinha - Ronaldo Marceneiro',
      path: '/images/trabalhos/cozinha',

      items: [
        { image: 'cozinha-1.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'cozinha-2.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'cozinha-3.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'cozinha-4.jpg', name: 'Armário suspenso da cozinha' },
      ]
    };
    response.render('works', data);
  },
  underMeasure: function(request, response, next) {
    let data = {
      title: 'Móveis sob medida - Ronaldo Marceneiro',
      path: '/images/trabalhos/diversos',

      items: [
        { image: 'area-de-servico-1.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'armario-cozinha-1.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'armario-suspenso-1.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'banheiro-1.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'guarda-roupa-1.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'pia-1.jpg', name: 'Armário suspenso da cozinha' },
        { image: 'pia-2.jpg', name: 'Armário suspenso da cozinha' }
      ]
    };
    response.render('works', data);
  },
  bedroom: function(request, response, next) {
    let data = {
      title: 'Móveis planejados para quarto - Ronaldo Marceneiro',
      path: '/images/trabalhos/quarto',

      items: [
        { image: 'quarto-1.jpg', name: 'Quarto' },
        { image: 'quarto-2.jpg', name: 'Quarto' },
        { image: 'quarto-3.jpg', name: 'Quarto' },
        { image: 'quarto-4.jpg', name: 'Quarto' }
      ]
    };
    response.render('works', data);
  },
  room: function(request, response, next) {
    let data = {
      title: 'Móveis para sacada e sala - Ronaldo Marceneiro',
      path: '/images/trabalhos/sacada-e-sala',

      items: [
        { image: 'frigobar-1.jpg', name: 'Sacada e sala' },
        { image: 'frigobar-2.jpg', name: 'Sacada e sala' },
        { image: 'sacada-1.jpg', name: 'Sacada e sala' },
        { image: 'sacada-2.jpg', name: 'Sacada e sala' },
        { image: 'sala-1.jpg', name: 'Sacada e sala' },
        { image: 'sala-2.jpg', name: 'Sacada e sala' },
        { image: 'sala-3.jpg', name: 'Sacada e sala' }
      ]
    };
    response.render('works', data);
  }


};

module.exports = MainController;

