//array methods 
//push
let fruits = ["apple", "banana"];
fruits.push("cherry", "date");

console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]   

//pop
let colors = ["red", "blue", "green"];
let removedColor = colors.pop();

console.log(colors); // Output: ["red", "blue"]
console.log(removedColor); // Output: "green"

//tostring
let numbers = [1, 2, 3, 4];
let str = numbers.toString();

console.log(str); // Output: "1,2,3,4"


//concatination
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);

console.log(combined); // Output: [1, 2, 3, 4]
console.log(arr1); // Output: [1, 2] (original array unchanged)





//un shift 
let animals = ["dog", "cat"];
var result = animals.unshift("rabbit", "hamster");
console.log(result); // Output: 4
console.log(animals); // Output: ["rabbit", "hamster", "dog", "cat"]


//shift 
let cities = ["New York", "London", "Paris"];
let removedCity = cities.shift();

console.log(cities); // Output: ["London", "Paris"]
console.log(removedCity); // Output: "New York"




//slice
let Numbers = [10, 20, 30, 40, 50];
let sliced = Numbers.slice(1, 4); //slice(start,end)
// Extracts from index 1 to 3 (4 is excluded).

console.log(sliced); // Output: [20, 30, 40]
console.log(Numbers); // Output: [10, 20, 30, 40, 50] (original array unchanged)


//splice

let Fruits = ["apple", "banana", "cherry"];
let removed = Fruits.splice(1, 1); // Remove 1 element at index 1.  splice(target,delete count,filler)

console.log(Fruits); // Output: ["apple", "cherry"]
console.log(removed); // Output: ["banana"]





// String Methods in JavaScript
// Strings in JavaScript come with several inbuilt methods to manipulate and analyze them. Here's an explanation of the methods with examples:

let sample = " JavaScript is Fun! ";

console.log(sample.toUpperCase()); // " JAVASCRIPT IS FUN! "
console.log(sample.toLowerCase()); // " javascript is fun! "
console.log(sample.trim()); // "JavaScript is Fun!"
console.log(sample.slice(1, 10)); // "JavaScrip"
console.log(sample.concat(" Let's Learn.")); // " JavaScript is Fun!  Let's Learn."
console.log(sample.replace("Fun", "Awesome")); // " JavaScript is Awesome! "
console.log(sample.charAt(5)); // "S"
