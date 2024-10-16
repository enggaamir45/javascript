const mySon = "Hamza"
console.log(mySon.length);

const myMobile = "Honor"
const myNum = 9893

//old way of adding string
console.log("I am current using ", mySon, " and my number is " , myNum);


// Modern way of adding strings
console.log(`I am current using ${myMobile} mobile and my mobile number is ${myNum}`); // We will always use modern ways

// Now we will explore string in details

const myUpiApp = new String("Phonepe")
console.log(myUpiApp);
console.log(myUpiApp.length);

console.log(myUpiApp.indexOf('o'));
console.log(myUpiApp.charAt(4));

console.log(myUpiApp.slice(0, 4));
console.log(myUpiApp.toUpperCase());
console.log(myUpiApp.substring(1,5));
console.log(myUpiApp.slice(0,2));
console.log(myUpiApp.slice(1));
console.log(myUpiApp);


const myFamily = new String("Amir Rahela Maisha Hamza")
console.log(myFamily.split(" "));

const myFamily2 = new String("Amir-Rahela Maisha Hamza")
console.log(myFamily2.split("-"));

console.log(myUpiApp.slice(-7,-2)); // - will start slicing from the end