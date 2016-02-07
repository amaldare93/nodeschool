/*
  Basic: Every Some
  Exercise 5 of 18

  Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

  You only need to check that the ids match.
*/

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers){
    return submittedUsers.every(function isUserGood(user){
      return goodUsers.some(function(goodUser){
        return user.id === goodUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;
