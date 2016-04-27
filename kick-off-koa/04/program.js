/*
  RESPONSE_BODY
  Exercise 4 of 11

  Create an app that returns a stream when the client requests /stream and a JSON body when the client requests /json.

  When /json is requested, the output should be
    { foo: 'bar' }
  When /stream is requested, the server should respond with the content in file process.argv[3]. Use fs.createReadStream:
    fs.createReadStream(process.argv[3]);
 */
'use strict'
var koa = require('koa')
var fs = require('fs')
var app = koa()
var port = process.argv[2]

app.use(function* (next) {
  if (this.path === '/stream') {
    this.body = fs.createReadStream(process.argv[3])
  } else {
    return yield next
  }
})

app.use(function* (next) {
  if (this.path === '/json') {
    this.body = { foo: 'bar' }
  } else {
    return yield next
  }
})

app.listen(port)
