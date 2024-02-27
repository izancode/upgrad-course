'use strict';
var pi = 3.1412;
console.log("The value of PI is "+pi);
var numOfEpisodes =22;
var costOfMilkShake = 12.60;
var distanceToTheMoon = 384400;
var distanceToTheSun = 149_600_000;
var massOfSun = 1.989e30;
// var cal1 = 10 ** 30;
// var cal2 = Math.pow(10, 30);
// var cal3 = 1989 * 10 ** 5;
console.log(distanceToTheSun);
console.log(typeof distanceToTheSun);


var costOfMilkShake = 12.60;
var discount = 0.5;
var tax = 0.8;
var quantity = 3;
var total = (costOfMilkShake + tax - discount) * quantity;
console.log("Total Payable: $" + total);


var numOfEpisodes =22;
var perSeason = 22 / 2;
console.log("Episodes per Season: " + perSeason);
console.log(2 ** 6 + 'bits');
console.log(20%6);
console.log(+true);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER + 3);
console.log(Number.MIN_SAFE_INTEGER);
var bigIntNum = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntNum + 9n)
var aLargeNumber = 19_007_199_254_740_990n;
console.log(aLargeNumber + 3n)

