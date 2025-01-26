const userStore = {
    "Ada": {
        firstName: "Ada",
        lastName: "Lovelace",
        email: "adalovelace@mail.com",
        profession: "Computer programmer",
        password: "12345Ada"
    },
    "Yemi": {
        firstName: "Yemi",
        lastName: "Adebisi",
        email: "yemi_adebisi@gmail.com",
        profession: "Software Engineer",
        password: "12345Yemi"
    },
}


function displayuserDetails(){
    //Enter Username
    let userName = prompt("Enter your username")
    // console.log(validateuserName(userName))

    while ((validateuserName(userName)) == false){
        
    userName = prompt("Username not valid. Please enter a valid username")
    }

    if (userName == null){
        return
    }

    // Enter Password

    let password = prompt("Enter password")
    // console.log(validatePassword(password))

    while ((validatePassword(password)) == false){
        password = prompt("Password must be greater than 6 characters. Please enter password again")
    }

    if (password == null){
        return
    }

    // User need to confirm password
    let passwordConfirm = prompt("Enter password again")

    while (passwordConfirm !== password){
        passwordConfirm = prompt("Your password is incorrect. Please try again!")
    }

    if (passwordConfirm == null){
        return
    }

    // Check if the user database contains the username
    const user = userStore[userName]

    if (user == undefined){
        alert("User not found! Please register.")
        return
    }

    console.log(user)
    console.log(`Your detail are:
         username: ${user.firstName} 
         email: ${user.email}
         professiuon: ${user.profession}`)
    // alert("You successfully validated")
}
displayuserDetails()
alert("You have come to the end of these program! Goodbye")

function validateuserName(userName){
    if (userName == null){
        return 
    }
   if  (userName.length > 10){
            return false
   }else{
    return true
   }
}

function validatePassword(password){
    if (password == null){
        return true
    }
    if (password.length < 6){
        return false
    }else {
        return true
    }
}





// alert("Welcome!")
// getUserDetails()
// alert("Ok, Goodbye")


// /**
//  * A function to display a user details
//  */
// function getUserDetails() {

//     let username = prompt("Enter your username")

//     while (!validateUsername(username)) {
//         if (username === null) return
//         username = prompt("Enter your username. Username must be less than 10")
//     }


//     let password = prompt("Enter your password")

//     while (!validatePassword(password)) {
//         if (password === null) return
//         password = prompt("Enter your password.")
//     }

//     let passwordAgain = prompt(`Enter your password again`)

//     while (password !== passwordAgain) {
//         if (passwordAgain === null) return
//         passwordAgain = prompt("Password do not match! Confirm your password again.")
//     }

//     const userDetails = userStore[username]

//     if (!userDetails) {
//         alert(`User ${username} does not exist. Please register`)
//         return
//     }

//     if (userDetails.password !== password) {
//         alert(`Password is incorrect. Please try again`)
//         return
//     }

//     alert(`Showing details for ${username}: \n
//     First Name: ${userDetails.firstName} \n
//     Last Name: ${userDetails.lastName} \n
//     Email: ${userDetails.email} \n
//     profession: ${userDetails.profession}
//     `)
// }

// /**
//  * A function to validate the username
//  * @param {string} username 
//  * @returns boolean
//  */
// function validateUsername(username) {
//     if (!username) return false
//     if (username.length > 10) return false
//     return true
// }

// /**
//  * A function to validate the password
//  * @param {string} password 
//  * @returns boolean
//  */
// function validatePassword(password) {
//     if (!password) return false
//     if (password.length < 6) return false
//     if (password.length > 15) return false
//     return true

// }

// /**
//  * A user store object
//  * @type {object}
//  * */



