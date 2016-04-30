/*
  AUTHENTICATION
  Exercise 11 of 11

  In previous exercies, we learned route, body-parser and session. In this exercise, we will try to combine them all to create a very simple app with login and logout features. Let's define the following routes:

  * `/` - If the user is logged in, they should see `hello world`. Otherwise, they should see a `401` error because they aren't logged in.
  * `/login` - if the method is `GET`, a form should be returned. If the method is `POST`, it should validate the request body and attempt to login the user, if login successful redirected to `/`.
  * `/logout` - it should logout the user and redirected to `/login`.

  We're not actually going to create users in this example. The only acceptable authentication is:
    username = username
    password = password
  other authentication all should get 400 error.
 */
'use strict'
var koa = require('koa')
var parse = require('co-body')
var session = require('koa-session')

var form = `
  <form action="/login" method="POST">
    <input type="text" name="username" value="username">
    <input type="password" name="password" placeholder="The password is 'password'">
    <button type="submit">Submit</button>
  </form>
`
var app = koa()
var port = process.argv[2]

// cookie / session stuff
app.keys = ['secret1', 'secret2', 'secret3']
app.use(session(app))
/*
  / (home)
  if 'this.session.authenticated' exists, user will see 'hello world'
  else user will get '401' error because they are not logged in
 */
app.use(function* home (next) {
  if (this.request.path === '/') {
    if (this.session.authenticated) {
      this.body = 'hello world'
    } else {
      this.throw(401, 'not logged in')
    }
  } else {
    return yield next
  }
})


/*
  /login
  if successful, the logged in user should be redirected to '/'
 */
app.use(function* login (next) {
  if (this.request.path === '/login') {
    if (this.request.method === 'GET') {
      return this.body = form
    }
    if (this.request.method === 'POST') {
      var body = yield parse(this)
      if (body.username === 'username' && body.password === 'password') {
        this.session.authenticated = true
        this.redirect('/')
      } else {
        this.throw(400, 'incorrect username and password')
      }
    }
  } else {
    return yield next
  }
})

/*
  /logout
  redirect to '/login' after every response
 */
app.use(function* logout (next) {
  if (this.request.path === '/logout') {
    this.session.authenticated = false
    this.redirect('/login')
  } else {
    return yield next
  }
})


app.listen(port)
