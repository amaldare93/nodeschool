/*
  ARROW FUNCTIONS AND THIS
  Exercise 4 of 9

  Starting with the original code example below, replace the anonymous function passed to setImmediate with an arrow function.

  var foot = {
      kick: function () {
          this.yelp = "Ouch!";
          setImmediate(function () {
              console.log(this.yelp);
          });
      }
  };
  foot.kick();
*/

var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(() => {
      console.log(this.yelp);
    });
  }
};
foot.kick();
