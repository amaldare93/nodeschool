/*
  CONTENT_HEADERS
  Exercise 5 of 11

  Create an app that checks the Content-Type of the request. If it's application/json, return {message: 'hi!'} with appropriate content headers. Otherwise, return ok as a string.
 */
'use strict'
var koa = require('koa')
var app = koa()
var port = process.argv[2]

app.use(function* (next) {
  if (this.request.is('application/json')) {
    this.body = { message: 'hi!' }
  } else {
    this.body = 'ok'
  }
})


app.listen(port)
