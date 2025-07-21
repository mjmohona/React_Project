// let name = "Mohona";
// const age = 25;
// var isLovingCode = true;

// console.log("Hello, " + name + "! You are " + age + " years old.");
//  console.log(typeof name); // string
//  console.log(typeof age); // <number
// console.log(typeof isLovingCode); // boolean

// let age = 25;
// if(age >=18){
//     console.log("You are an adult.");
// }
// else{
//     console.log("you are too young to vote.");
// }



// Switch case statement

// let day = "Sunday";
// switch(day){
//     case "monday":
//         console.log("It's Monday, start of the week!");
//         break;
//         case "tuesday":
//             console.log("It's Tuesday, second day of the week!");
//         break;
//     case "thursday":
//         console.log("It's thursday, day before weekend!");
//         break;
//     case "friday":
//         console.log("It's Friday, the weekend!");
//         break;
//         default: 
//         console.log("It's just another day of the week.");
//         break;
// }


// If Else statement

// let number = 10;
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
// }
// else if (number % 3 ===0){
//     console.log("Fizz");
// }
// else if (number % 5 === 0) {
//     console.log("Buzz");
// }
// else{
//     console.log(number);
// }


// Print even numbers between 10 and 30 using a while loop.
// let number = 10;
// while(number <= 30){
//     if( number % 2 == 0){
//         console.log(number + " is even.");
//     }
//     number++;
// }


// Iterate over an array of your 3 favorite colors using for...of.
// let colors = ["Red", "Blue", "Green"];
// for( let color of colors){
//     console.log("My favorite color is " + color + ".");
// }


// Create an object book with keys: title, author, pages, and print all properties using for...in.
// let book ={
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     pages: 180,
// };
// for(let key in book){
//     console.log(key, ": ", book[key]);
// }


// Write a function that greets you by name.
// function greet(name){
//     console.log("Hello", name);
// }
// greet("Mohona");


// Write a function that returns the square of a number.
// function squreNum(num){
//     return num * num;
// }
// console.log(squreNum(5));


// Write a function that takes 2 numbers and returns the bigger one.
// const greaterNumbers = (a, b) => {
//     if(a>b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// console.log(greaterNumbers(51,85));


// Create a global variable site = "kaajer.com".
// let site = "kaajer.com";
// function showSite(){
//     console.log("Website domain is " + site);
// }
// showSite();


// Inside a function, declare a local variable user = "Mohona" and print both.
// function declareName(){
//     let name = "Mohona";
//     console.log("My name is " + name);
// }
// declareName();


// Inside a block (if block), declare status = "active" using let and try printing it inside and outside the block.
// if(true){
//     let status = "active";
//     console.log("Status is " + status);
// }
// console.log("Status is " + status); // This will throw an error because 'status' is not defined outside the block.


// Create an array of your favorite 5 movies or songs.
// let movies = ["Ratsasan", "PK", "3 Idiots", "Inception", "Interstellar"];
// let addMovies = movies.push("Triangle");
// let removeMovies = movies.pop();
// for (let i = 0; i < movies.length; i++) {
//     console.log("Movie Name" + ": " + movies[i]);
// }


// Use map() to convert an array of numbers to their squares.
// let numbers =[1,2,3];
// let squreNumbers = numbers.map ((num) => {
//     return num * num;
// });
// console.log(squreNumbers);


// Use filter() to return all numbers greater than 10 from an array.
// let numbers = [5, 10, 13, 41, 56];
// let findGreaterNumbers = numbers.filter ((num) => {
//     return num > 10 
// });
// console.log(findGreaterNumbers); // Output: [13, 41, 56]


// Add a method start() that prints "Car started".
// Add a method start() that prints "Car started".
// Add a nested object owner with name and age.
// Use a loop to print all properties of the car object.

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
//   start: function () {
//     console.log("Car started");
//   },
//   owner: {
//     name: "Mohona",
//     age: 25
//   }
// };

// for (let key in car) {
//   if (typeof car[key] !== "function") {
//     console.log(key + ":", car[key]);
//   }
// }


// Destructure this array: ["HTML", "CSS", "JavaScript"] into 3 variables.
// let languages = ["HTML", "CSS", "JavaScript"];
// let [first, second, third] = languages;
// console.log("First language:", first);
// console.log("Second language:", second);
// console.log("Third language:", third);

// Destructure this object: {brand: "Toyota", year: 2022} into variables brand and year.
// let car = {
//    brand: "Toyota",
//     year: 2022,
// }
// let { brand, year } = car;      
// console.log("Car brand:", brand);
// console.log("Car year:", year);

// let car = {
//    brand: "Toyota",
//     year: 2022,
//     owner: {
//         name: "Mohona",
//         age: 25
//     }
// };
// let {
//     owner: {name, age} 
// } = car;
// console.log("Owner's name:", name);
// console.log("Owner's age:", age);



// Create a variable with your name, and another with your favorite color. Use template literals to print:
// let name = "Mohona";
// let favouriteColor = "Blue";
// console.log(`Hello I'm ${name} and my favourite color is ${favouriteColor}!`);


// Write a multi-line string describing your day, using backticks.
// let myDay = `Today is a beautiful day!
// I am learning JavaScript and enjoying it!`;
// console.log(`my day went like ${myDay}`);


// Create a function greet(name) that returns: "Hi, [name]! How are you today?" using template literals.
// function greet(name){
//     console.log(`Hello, ${name} How are you today?`);
// }
// greet("Mohona"); 



// let arr1 = ["HTML", "CSS"];
// let arr2 = [...arr1, "JavaScript", "React"];
// console.log(arr2); // Output: [HTML, CSS, JavaScript, React]


// Use the rest operator in a function to return the sum of all numbers passed.
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);  
// }
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Write a welcome() function that greets a user. If no name is given, default to "User"
// function welcome(name = "User") {
//     console.log(`Hello, ${name}!`);
// }
// welcome(); // Output: Hello, User!
// welcome("Mohona"); // Output: Hello, Mohona!


// Create a discount(price, rate = 0.1) function to apply 10% discount by default.
function discount(price, rate = 0.1) {
    return price - (price * rate);
}
console.log(discount(100)); // Output: 90
// console.log(discount(100, 0.2)); // Output: 80