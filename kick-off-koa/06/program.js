/*
  MIDDLEWARE
  Exercise 6 of 11

  Complete the Koa application below, finish two middlewares:

  * responseTime: record each request's response time(ms), set the response header `X-Response-Time`.
  * upperCase: convert response body to upper case.
 */
'use strict'
var koa = require('koa')
var app = koa()
var port = process.argv[2]

app.use(responseTime())
app.use(upperCase())

app.use(function* () {
  this.body = 'hello koa'
})

function responseTime () {
  return function* (next) {
    var start, total
    // record start time
    start = new Date
    yield next
    // set X-Response-Time header
    total = new Date - start
    this.set('X-Response-Time', total + 'ms')
  }
}

function upperCase () {
  return function* (next) {
    // do nothing
    yield next
    // convert this.body to upper case
    this.body = this.body.toUpperCase()
  }
}

app.listen(port)
