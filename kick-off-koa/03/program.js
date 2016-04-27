/*
  REQUEST_BODY
  Exercise 3 of 11

  Create a koa server which parse the post data, Convert the name field to
  upper case and respond to client.

  If you get this:
    POST / with { name: 'koa' }
  Respond with:
    KOA
 */
'use strict'
var koa = require('koa')
var parse = require('co-body')
var app = koa()
var port = process.argv[2]

// parse body
// app.use(function* () {
//   var body = yield parse(this)
//   this.body = body.name.toUpperCase()
// })

// improved
app.use(function* (next) {
  if (this.method === 'POST') {
    let body = yield parse(this, { limit: '1kb' })
    if (body.name) {
      this.body = body.name.toUpperCase()
    } else {
      this.throw(400, '.name required')
    }
  } else {
    return yield next
  }
})

app.listen(port)
