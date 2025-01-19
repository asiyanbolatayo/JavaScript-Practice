// function sumOf() {
//     let result = 20 + 30
//     console.log(`The result is: ${result}`)
// }
// sumOf()

let count = 0

//function without parameters
// function addToCount() {
//     let localCount = 1

//     count = count + 1
//     localCount = localCount + 1

//     console.log("Count is: ", count)
//     console.log("Local Count is: ", localCount)

// }

// addToCount()




// //function with parameter
// function displayName(firstName, lastName="", age=18) {
//     // alert(firstName + " " + lastName + " " + age)
//     console.log(`Your name and age is: ${firstName} ${lastName} ${age}`)
// }

// displayName("John", "Doe", 19)
// displayName("Ade", "Johnson")




// //function with returns
// function getFullName(firstName="", lastName="") {
//     const fullName = firstName + " " + lastName
//     return fullName
// }

// let fullname = getFullName("John", "Doe")
// // alert(fullname)
// console.log(fullname)

//FUNCTION WITH IF-ELSE STATEMENT

// function performMathOperation(num1, num2, operationType) {
//     if (operationType == "add") {
//         const result = num1 + num2
//         return result
//     }else if (operationType == "sub") {
//         const result = num1 - num2
//         return result
//     }else {
//         return console.log("Operation is not supported!")
//     }
// }
// const sumResult = performMathOperation(20, 30, "add")
// console.log(sumResult)
// const diffResult = performMathOperation(30, 10, "sub")
// console.log(diffResult)
// const Invalid = performMathOperation(30, 10, "multiply")


// // //function expression
// const sayHello = function () {
//     console.log("Hello World")
// }

// sayHello()





// //callback functions
// function displayUser(displayType, showFullName, showUserName) {
//     if (displayType == "full") {
//         showFullName()
//     } else {
//         showUserName()
//     }
// }

// function showFullName() { 
//     alert("John Doe") }

// function showUserName() {
//      alert("JohnDoe234") }

// displayUser("none", showFullName, showUserName)



//Arrow functions
let sum = (a, b) => a + b;
let sayHelloWorld = () => alert("Hello World!");

console.log(sum(10,20))