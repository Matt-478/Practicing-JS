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



// EX 7
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// function myFunction(a, b){
//   if(a.hasOwnProperty(b)) {
//     console.log("IS A YEA")
//   } else {
//     console.log("IS A NOAOAOANOANA")
//   }
// }
//   myFunction({a:1,b:2,c:3},'b')
//   myFunction({x:'a',y:'b',z:'c'},'a')
//   myFunction({x:'a',y:'b',z:'c'},'z')



// EX 8
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// function myFunction(a, n){
//   let newStr = a.slice(n-1, n)
//   return newStr
// }

// myFunction('abcd',1)
// myFunction('zyxbwpl',5)



// EX 9
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
// function myFunction (a, b){
//   const obj = {
//     key: b
//   }

//   obj[a] = obj.key
//   delete obj.key 
//   // console.log(obj)

//   return  obj
//   // better solution    return { [a]: b };
// }
// myFunction('a','b')
// // Expected {a:'b'}
// myFunction('z','x')
// // Expected {z:'x'}
// myFunction('b','w')


// EX 10
// Write a function that takes an array (a) as argument
// Return the number of elements in a
// function myFunction(a){
//   return a.length
// }
// myFunction([1,2,2,4])
// // Expected 4
// myFunction([9,9,9])
// // Expected 3
// myFunction([4,3,2,1,0])
// Expected 5



// EX 11
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// function myFunction (a, b){
//   if(a === b) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// myFunction(2, 3)
// // Expected false 
// myFunction(3, 3)
// // Expected true 
// myFunction(1, '1')
// // Expected false 
// myFunction('10', '10')



// EX 12
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
// function myFunction(a){
//   return a.slice(0, 3)
// }

// myFunction('abcdefg')
// // Expected 'abc'
// myFunction('1234')
// // Expected '123'
// myFunction('fgedcba')


// EX 13
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
// function myFunction(str){
//   let result = str.slice(str.length - 3)
//   return result
// alternative : return str.slice(-3)
// }

// myFunction('abcdefg')
// // Expected 'efg'
// myFunction('1234')
// // Expected '234'
// myFunction('fgedcba')
// // Expected 'cba'





// EX 14
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
// function myFunction(a){
//   return obj = { key: a }
// }
// myFunction('a')
// // Expected {key:'a'}
// myFunction('z')
// // Expected {key:'z'}
// myFunction('b')
// // Expected {key:'b'}



// EX 15
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
// function myFunction(a){
//   return a.slice(0, 3)
// }

// myFunction([1,2,3,4])
// // Expected [1,2,3]
// myFunction([5,4,3,2,1,0])
// // Expected [5,4,3]
// myFunction([99,1,1])
// Expected [99,1,1]