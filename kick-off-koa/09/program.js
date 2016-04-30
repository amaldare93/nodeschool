/*
  SESSION
  Exercise 9 of 11

  In the previous exercise, we learned how to use cookies to store the user's
  view times.  But in this exercise, we will try to use sessions to do the same
  thing.

  visit /:
  =>
  respond body: 1 views
  set-cookie: koa:sess=…

  visit / again:
  =>
  respond body: 2 views
  set-cookie: koa:sess=…
 */
'use strict'
var koa = require('koa')
var session = require('koa-session')
var app = koa()
var port = process.argv[2]

app.keys = ['secret', 'keys']
app.use(session(app))

app.use(function* () {
  var n = this.session.views || 0
  this.session.views = ++n
  this.body = n + ' views'
})

app.listen(port)
