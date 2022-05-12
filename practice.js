// EX 1
// function addUp(num) {
// 	let current = 0
// 	for(let i = 1; i <= num; i++) {
// 		current += i
// 	}
//   return current
// }

// addUp(4)


// EX 2
// Bitwise Operations
// function bitwiseAND(n1, n2) {
// 	let result = n1 & n2
//   return result
// }

// function bitwiseOR(n1, n2) {
// 	let result = n1 | n2
//   return result
// }

// function bitwiseXOR(n1, n2) {
// 	let result = n1 ^ n2
// 	return result
// }

// EX 3
// Which Function Returns the Larger Number?
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
// function whichIsLarger(f, g) {
// 	if(f > g) {
// 		console.log("f")
// 		return("f")
// 	}
// 	else if(f < g) {
// 		console.log("g")
// 		return("g")
// 	} else {
// 		console.log("neither")
// 		return("neither")
// 	}
// }
// whichIsLarger(5, 10)
// whichIsLarger(10, 5)
// whichIsLarger(25, 25)
// whichIsLarger(100, 10)
// whichIsLarger(5, 20)





// EX 4
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// function timeForMilkAndCookies(date) {
//   if(date.getDate() === 24 && date.getMonth() === 11) {
//     return true
//   } else {
//     return false
//   }
// }

// timeForMilkAndCookies(new Date(2013, 11, 24))
// timeForMilkAndCookies(new Date(3000, 11, 24))
// timeForMilkAndCookies(new Date(2154, 11, 11))
// timeForMilkAndCookies(new Date(2010, 11, 2))
// timeForMilkAndCookies(new Date(1980, 9, 24))


// EX 5
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 1 house  = 6 sticks
// function matchHouses(step) {
//   const oneHouse = 6
//   const nextHouse = 5

// 	if(step === 0 ) {
//     return 0
//   } else if (step === 1) {
//     // console.log(oneHouse)
//     return oneHouse
//   } else if (step > 0 ) {
//     console.log(nextHouse * (step -1) + oneHouse)
//     return nextHouse * (step -1) + oneHouse
//   } else {
//     return false
//   }
// }

// matchHouses(1)
// matchHouses(4)
// matchHouses(87) 



// EX 6
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// function myFunction(a) {
//   // 1. split the string in half - take the length, divide it by 2 and then use it in the slice method
//   let strLength = a.length / 2
//   let result = a.slice(0, strLength)

//   return result
// }

// myFunction('abcdefgh')
// myFunction('1234')
// myFunction('gedcba')