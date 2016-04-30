/*
  TEMPLATING
  Exercise 10 of 11

  Create a koa server that listens on a port passed from the command line and replies with HTML, which is processed ejs template file when an HTTP GET request is sent to /.

  The workshop will execute requests against the server and verify the output.
 */
'use strict'
var koa = require('koa')
var views = require('co-views')
var ejs = require('ejs')
var app = koa()
var port = process.argv[2]

var render = views(__dirname + '/views', {
  ext: 'ejs'
})

var user = {
  name: {
    first: 'Tobi',
    last: 'Halowaychuk'
  },
  species: 'ferret',
  age: 3
}

app.use(function* () {
  if (this.path === '/' && this.method === 'GET') {
    this.body = yield render('user', { user: user })
  }
})

app.listen(port)
