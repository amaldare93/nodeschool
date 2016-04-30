/*
  COOKIE
  Exercise 8 of 11

  Create an app that use cookie to store user's view times.

  * cookie's key is `view`, you need store the view times in this cookie.
  * every time request the server, respond must be `{time} views`.
  * cookie need be `signed`

  visit /:
  =>
  respond body: 1 views
  set-cookie: view=1

  visit / again:
  =>
  respond body: 2 views
  set-cookie: view=2
 */
'use strict'
var koa = require('koa')
var app = koa()
var port = process.argv[2]

app.keys = ['secret', 'keys']
app.use(function* () {
  var n = Number(this.cookies.get('view', { signed: true })) + 1 || 1
  this.cookies.set('view', n, { signed: true })
  this.body = n + ' views'
})

app.listen(port)
