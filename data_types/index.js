//Numbers
let size_in_meters = 20
let size_in_inches = 2.1024
let maxSize = Infinity  //Postive Infinity
let minSize = -Infinity
let not_a_number = NaN   //Not a number


let sum = 20 + 23.1; let difference = 20 - 10;
let multiplication_result = 20 * 10; let division_result = 20 / 2;



//BigInt
let very_big_number = 872765678901234567890123567890134567890n;
let another_big_number = BigInt(872765678901234567890123567890134567890)


//Strings
let name = "Ayodeji Falz"
let name2 = 'Ayodeji Remi'
let name3 = `Ayodeji Azeez`

let firstName = 'Ayodeji'
let lastName = 'Azeez'
let fullName = `Mr ${firstName} ${lastName}`  // Back ticks are use when you are trying to embed a variable

let message = "Hello my friends\n My name is Johnson\n I am a software engineer"
console.log(message.toLowerCase())
// 'HELLO MY FRIENDS\n MY NAME IS JOHNSON\n I AM A SOFTWARE ENGINEER'
console.log(message.startsWith("Hello"))
// true
console.log(message.indexOf("name"))
// 21
console.log("👽")


//Boolean
let isBigSize = true //Yes, the size is big
let sizeIsSmall = false //No, the size is not small

//Null type
let size = null
let num = null

//undefined type
let weight; //The variable size is undefined by default
let age = undefined //This can be done explicitly as well (Not recommended)


//Objects
let user1 = {}
let user2 = new Object()
user1["name"] = "Azeez"
user1["age"] = 20
user1["username"] = "azeez123"
user1["email_verified"] = true
user1["profile_settings"] = {theme: "dark", font_size: 20, show_my_profile_picture: true }

console.log(user1)
console.log(user1.profile_settings.font_size)

let user3 = {
    name: "John Doe",
    age: 20,
    weight: 20.3,
    "verified User": true
}
console.log(user3["verified User"])  //using square bracket cause of the var name spacing

let user = {
    name: "John Doe",
    age: 20,
    weight: 20.3,
    "verifiedUser": true
}
console.log(user["name"])
console.log(user.age)
console.log(user.weight)

//Deleting a key
delete user.weight
console.log(user)
//update user name
user3["name"] = "Asiyanbola Muhammed"

// Printing details
console.log(user3)
console.log(Object.values(user3))
console.log(Object.keys(user3))
