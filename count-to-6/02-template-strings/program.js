/*
  TEMPLATE STRINGS
  Exercise 2 of 9

  You will be given a name as the first argument to your program (process.argv[2]). You should output a two-line message, first greeting that person, and then telling them their name in lowercase. For example, if the name was "Domenic", you would output:

    Hello, Domenic!
    Your name lowercased is "domenic".

  You can start by doing this using ES5 constructs if you like, but the correct solution should use a single ES6 template string, and not use the + operator.
*/

var name = process.argv[2];

var greeting = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;

console.log(greeting);
