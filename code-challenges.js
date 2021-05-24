// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"


//Create a function that takes in an input
//I need an if statement 
//Input: I need to check if my input is below 212
//Output: I need to return id above boilling point or not 
//I am so EXCITED I did this with out looking anything up anything! I only rememberd what we did in class!


var temp1 = 35
var temp2 = 350
var temp3 = 212

const checkTemperature = (num) =>{
    let boilingNum = " "
     if(num === 212){
         return "212 is at boiling point"
     }
     else if(num < 212){
        return "35 is below boiling point"
    }
    else if(num > 212){
        return "350 is above boiling point"
    }

}

console.log(checkTemperature(35))
console.log(checkTemperature(350))
console.log(checkTemperature(212))





// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

//Declare a function
//Input: takes in an array of numbers this is going to be a list
//I need a loop beacuse it will loop through every number 
//I need to intializ and empty array
//I need to return the new array
//Output: [3, 7, 0, 6, -9] * 5
// var myNumbers1 = [3, 7, 0, 6, -9]

// const  multipliedByFive = (number) => {
//     let myNumber = []
//     for(let i = 0; i<number.length; i++){
//         myNumber.push(number[i] * 5)
//     }
//     return myNumber
// }
// console.log(multipliedByFive(myNumbers1))
//Done



// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

// var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]
//Declare a function
//Input: takes in a list or an array of numbers
//Output: returns only the odd list of the array  => [-7, 9, 13]
//I need to loop throught the array and check if the number is odd or even
//If odd then print in my new array list
//If divisbale my 0, then do not print
//call the function

// const oddNumFunction = (num) =>{
//     let arrayNum = []
//     for(let i = 0; i<num.length; i++){
//         if(num[i] % 2 !== 0){
//             arrayNum.push(num[i])
//         }
//     }
//     return arrayNum
// }
// console.log(oddNumFunction(myNumbers2))
//Done



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"

// //Create a function
// //That removes all the vowels from a string
// //make the strings into an array using stringWithVowels1.split
// //then put it back together into a sting 

// const takeOutVowels = (strings) =>{

//     let myNewString = ""
//     for(let i = 0; i<strings.length; i++){
//     //  console.log(strings[i])
//     //If aeiou take it out
//     let lowerCase = strings[i].toLowerCase()
//     if(lowerCase !== "a" && lowerCase  !== "e"  && lowerCase  !== "i"  && strings[i] !== "o"  && strings[i] !== "u"){
//         myNewString+=strings[i]
//     }
//     // else if(strings[i] !== "e"){
//     //     myNewString+=strings[i]
//     // }
//     // else if(strings[i] !== "i"){
//     //     myNewString+=strings[i]
//     // }
//     // else if(strings[i] !== "o"){
//     //     myNewString+=strings[i]
//     // }
//     // else if(strings[i] !== "u"){
//     //     myNewString+=strings[i]
//     // }
//   }
// return  myNewString
// }
// console.log(takeOutVowels(stringWithVowels1))
// console.log(takeOutVowels(stringWithVowels2 ))



// const takeOutVowels = (strings) =>{
//     let myNewString = ""
//     for(let i = 0; i<strings.length; i++){
//     //  console.log(strings[i])
//     //If aeiou take it out
//     if(strings[i] !== "a" && strings[i] !== "e"  && strings[i] !== "i"  && strings[i] !== "o"  && strings[i] !== "u"){
//         myNewString+=strings[i]
//     }
//   }
// return  myNewString
// }
// console.log(takeOutVowels(stringWithVowels2))




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

//This seconf part of the function I need to check if any of these are typed, then I need to return the messege 

// var refactorTester1 = true
// var refactorTester2 = 42
// var refactorTester3 = "IAmACodingMaster"


// const takeOutVowels = (strings) =>{

//     let myNewString = ""
//     for(let i = 0; i<strings.length; i++){
//     //  console.log(strings[i])
//     //If aeiou take it out
//     let lowerCase = strings[i].toLowerCase()
//     if(lowerCase !== "a" && lowerCase  !== "e"  && lowerCase  !== "i"  && strings[i] !== "o"  && strings[i] !== "u"){
//         myNewString+=strings[i]
//     }
//      else if(lowerCase === refactorTester1){
//         console.log("true is not a string")
//      }
    
//      else if(lowerCase === refactorTester2){
//         console.log("42 is not a string" )
//      }
    
//      else if(lowerCase === refactorTester3){
//         console.log("mCdngMstr")
//      }
//    console.log(refactorTester3)
//   }
// return  myNewString
// }
// console.log(takeOutVowels(stringWithVowels1))
// console.log(takeOutVowels(stringWithVowels2 ))

