/*
TIME SERVER
 Exercise 10 of 13

Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"
*/

var net = require('net');
var port = process.argv[2];

function zeroFill(i){
  return (i < 10 ? '0' : '') + i;
}

function getTime(){
  var date = new Date();
  return date.getFullYear() + '-'
  + zeroFill(date.getMonth() + 1) + '-'
  + zeroFill(date.getDate()) + ' '
  + zeroFill(date.getHours()) + ':'
  + zeroFill(date.getMinutes())
}
// start server
var server = net.createServer(function(socket){
  // write data
  socket.end(getTime() + '\n');
});

server.listen(port);
