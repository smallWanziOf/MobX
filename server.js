/*var express = require('express');
var server = express();
server.use(express.static(__dirname+'/dist/'));
server.listen(3000);*/

var koa = require('koa');
var app = new koa();
var KeyGrip = require("keygrip");

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  console.log('x-response-time2')
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// response
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
app.use(function *(){
  this.cookies.set('name', 'tobi', { signed: true });
  console.log("response")
  this.body = 'Hello World';
});

app.listen(3000);