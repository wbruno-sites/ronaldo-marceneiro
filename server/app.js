'use strict';

global.APP_ROOT = require('path').join(__dirname + '/../');

let express     = require('express'),
    compression = require('compression'),
    nunjucks    = require('nunjucks'),
    bodyParser  = require('body-parser'),
    debug       = require('debug')('ronaldo:app'),
    app         = express();

let AppController = require('./controller/AppController');


app.locals = {
  canonical: 'http://www.ronaldomarceneiro.com.br'
};

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  tags: ''
});

app.set('json replacer', null);
app.set('json spaces', false);
app.set('port', process.env.PORT || 3000);

app.disable('etag');
app.disable('x-powered-by');


app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(compression());

app.use(express.static(APP_ROOT + '/public/'));
app.use(require('./router'));


app.use(AppController.notFound);
app.use(AppController.errorHandler);


debug('env:', process.env.NODE_ENV || 'development');
module.exports = app;
