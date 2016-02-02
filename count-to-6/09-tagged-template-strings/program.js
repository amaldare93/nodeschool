/*
  TAGGED TEMPLATE STRINGS
  Exercise 9 of 9

  You will be given two arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (namely ', ", <, >, and &). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

  For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output:

      <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

  As before, you could start doing this using simple ES5 constructs. But the goal is for you to write a function that you can use as a tag in a tagged template string, that will do any escaping automatically.
*/

var username = process.argv[2];
var comment = process.argv[3];

console.log(html`<b>${username} says</b>: \"${comment}\"`);

function html(stringArr, ...vars){
  var replaced = vars.map(string => {
    return string
      .replace(/&/g, '&amp;')
      .replace(/'/g, '&apos;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    });

  var result = '';
  for (var i = 0; i < replaced.length; i++) {
    result += stringArr[i] + replaced[i];
  }
  return result + stringArr[stringArr.length-1];
}
