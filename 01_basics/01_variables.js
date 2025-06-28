const accountId = 14453
let accountEmail = "abhinav@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountstate;

// accountId = 2   not allowed

accountEmail =" abhi@123"
accountPassword ="9931"
accountCity =" Bengaluru"
console.log(accountId);

/*
prefer not to use var
because of issues in block scope and funtional scope
*/

console.table([ accountEmail, accountPassword, accountId, accountCity , accountstate])
console.log(accountstate)