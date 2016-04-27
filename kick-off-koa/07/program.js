/*
  ERROR_HANDLING
  Exercise 7 of 11

  Add an error handler middleware for the koa application below.
  The errorHandler middlware should catch all the downstream errors,
  then responds to the client with internal server error and status 500.
 */
'use strict'
var koa = require('koa')
var app = koa()
var port = process.argv[2]

app.use(errorHandler())

app.use(function* () {
  if (this.path === '/error') throw new Error('oops')
  this.body = 'OK'
})

function errorHandler () {
  return function* (next) {
    try {
      yield next
    } catch (error) {
      this.status = 500
      this.body = 'internal server error'
      // this.app.emit('error', error, this)
    }
  }
}

app.listen(port)
