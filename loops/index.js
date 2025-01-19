// //while loop
// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//     console.log(i);
//     i++;
// }


// //do while
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 3)


// //for loop
// for (let i = 3; i <= 10; i++) {
//     console.log("i is now ", i)
// }


 //for..of
 const iterable = [10, 20, 30, 40, 50];

 for (const value of iterable) {
     console.log(value)
 }
 const firstName = "Johnson"
 for (const x of firstName) {
    console.log(x)
 }

 //for ... in

 const userDetails = { name: "John", age: 20, city: "Lagos" };

 for (const key in userDetails) {
    // console.log(key)
     console.log(`The key is: ${key} and the value is: ${userDetails[key]}`)
 }
