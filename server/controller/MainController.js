'use strict';


let MainController = {
  index: function(request, response, next) {
    response.render('index', { title: 'Ronaldo Marceneiro - Móveis planejados sob medida' });
  },
  apartment: function(request, response, next) {
    let data = {
      items: [
        { image: '/images/trabalhos/apartamento/armario-quarto-casal-2.jpg', name: 'Armário quarto de casal' },
        { image: '/images/trabalhos/apartamento/armario-quarto-casal.jpg', name: 'Armário quarto de casal' },
        { image: '/images/trabalhos/apartamento/banheiro.jpg', name: 'Armário planejado da pia do banheiro' },
        { image: '/images/trabalhos/apartamento/copa-americana.jpg', name: 'Copa Americana' },
        { image: '/images/trabalhos/apartamento/cozinha-2.jpg', name: 'Cozinha Planejada' },
        { image: '/images/trabalhos/apartamento/cozinha-3.jpg', name: 'Cozinha sob medida' },
        { image: '/images/trabalhos/apartamento/cozinha-4.jpg', name: 'Cozinha em madeira' },
        { image: '/images/trabalhos/apartamento/cozinha.jpg', name: 'Cozinha' },
        { image: '/images/trabalhos/apartamento/escritorio-2.jpg', name: 'Escritório' },
        { image: '/images/trabalhos/apartamento/escritorio.jpg', name: 'Estante de livros' },
        { image: '/images/trabalhos/apartamento/mesa-jantar-2.jpg', name: 'Mesa de Jantar' },
        { image: '/images/trabalhos/apartamento/mesa-jantar-3.jpg', name: 'Mesa de Jantar planejada' },
        { image: '/images/trabalhos/apartamento/mesa-jantar-4.jpg', name: 'Mesa de Jantar com baú' },
        { image: '/images/trabalhos/apartamento/mesa-jantar.jpg', name: 'Mesa de Jantar' },
        { image: '/images/trabalhos/apartamento/rack-tv-2.jpg', name: 'Rack de tv' },
        { image: '/images/trabalhos/apartamento/rack-tv.jpg', name: 'Rack de tv com painel' },
        { image: '/images/trabalhos/apartamento/sapateira-2.jpg', name: 'Sapateira' },
        { image: '/images/trabalhos/apartamento/sapateira-3.jpg', name: 'Sapateira' },
        { image: '/images/trabalhos/apartamento/sapateira.jpg', name: 'Sapateira' }
      ]
    };
    response.render('works', data);
  }
};

module.exports = MainController;

