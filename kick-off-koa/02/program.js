/*
  ROUTING
  Exercise 2 of 11

  Create a koa server that listen on a port passed from the command line, and returns the following responses from the following routes:

  /    - hello koa
  /404 - page not found
  /500 - internal server error
 */

var koa = require('koa')
var app = koa()
var port = process.argv[2]

app.use(function* (next) {
  if (this.path === '/') {
    this.body = 'hello koa'
  } else {
    return yield next
  }
})

app.use(function* (next) {
  if (this.path === '/404') {
    this.body = 'page not found'
  } else {
    return yield next
  }
})

app.use(function* (next) {
  if (this.path === '/500') {
    this.body = 'internal server error'
  } else {
    return yield next
  }
})

app.listen(port)
