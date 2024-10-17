// Date and Time in JS

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myNewDate = new Date(2024, 0, 27)
let myNewDate2 = new Date("01-05-2024")
console.log(myNewDate.toDateString());
console.log(myNewDate2.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myNewDate.getTime());
