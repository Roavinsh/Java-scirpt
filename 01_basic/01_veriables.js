const accountId = 14444553
let accountEmail ="ravinshh.@gmail.com"
var accountPassword = "12345"
accountCity = "kanpur"
let accountState;
//accountId = 2 //not allowed

accountEmail = "rravinshh.m@gmail.com"
accountPassword = "Aureni"
accountCity = "ayakpur"

console.log(accountId);


 /*
 prefer not to not use var because of issue in block scope and functional scope 
 */
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
