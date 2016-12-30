#!/usr/bin/env node

'use strict';


let debug = require('debug')('ronaldo:bin:www'),
    app   = require('../app');

let server = app.listen(app.get('port') || 8080, function() {
  let host = server.address().address;
  let port = server.address().port;

  debug(`app listening at http://${host}:${port}, ${app.get('env')}`);
});
