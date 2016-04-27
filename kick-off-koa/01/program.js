/*
  HELLO_KOA
  Exercise 1 of 11

  Create a koa server that listens on a port passed from the command line and replies with "hello koa" when an HTTP GET request is sent to /.

  The workshop will execute requests against the server and verify the output.
 */

var koa = require('koa')
var app = koa()
var port = process.argv[2]

app.use(function *() {
  this.body = 'hello koa'
})

app.listen(port)
