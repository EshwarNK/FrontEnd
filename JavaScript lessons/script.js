4+3;

if(4+3 === 7){
	// alert("You're smart!");
	// if you dont want he alert to appear, you can use console.log
	console.log("Hellooooo");
}

console.log("Hellooooo1");
console.log("Hellooooo2");
console.log("Hellooooo3");
console.log("Hellooooo4");

//Normal functions
function sayHello(){
	console.log("Hello man");
}

sayHello();

// Anonymous functions
var su = function() {
	console.log("Hi dude");
}

su();

// Function with arguments
function singAny(song){
	console.log(song);
}

singAny("Laa didi daa");
// You can make this call either in the javascript console or in the script.js itself


// Returnign a value
function multiply(a, b){
	return a*b;
}

// Even if you add multiple return statments, the first return statement will be consdered
// Return is the final way to end a funtion

multiply(10, 20);
// The above statement would not print the output to the console but to print it "multiply(10, 20)" in the console

alert(multiply(10, 20));

//parameters: a, b are the parameters
//arguments: 10, 20 are the parameters

//Data structures

//Arrays
//It can hold homogeneous elements and funtions also

var list = ["tiger", "cat", "bear", "bird"]
console.log(list[0]);

var mixedList = ["apple", 3, undefined, true, function
apple(){
	console.log("apples");
}];
console.log(mixedList);

var list1 = [["tiger", "cat", "bear", "bird"]];
console.log(list1);
console.log(list.pop());	// Removes the last element in the array
console.log(list.push("animals"));
console.log(list.concat(["deer", "beer"]));		// It does not create a new list
console.log(list.sort());	

// Objects: Used to store key value pairs
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["abrakadabra", "boo"]
	
};

console.log(user.name);
console.log(user.age);

// For adding an element
user.favFood = "spinach";
user.isMarried = true;
console.log(user);

// an object can contain an array
// an array can contain an object

var lala = [
{
	username: "andy",
	password: "secrets"
},
{
	username:"jamjam",
	password:"1223"
}
]

console.log(user.shout);
console.log(lala);
console.log(lala[0].username);
console.log(user.spells[0]);

// Null
var emptyObj = {};
var nullObj = null;


// Loops in javascript

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

var todosImp = [
	"clean ",
	"brush ",
	"exercise",
	"study ",
	"eat "
];

for(var i=0; i<todos.length; i++){
	console.log(todos[i]);
	todos[i] = todos[i]+"!";
}

//The first parameter that for each takes is variable idicating
// the object, and the second parameter is the index
todos.forEach(function(abc, i){
	console.log("forEach "+abc, i);     
})

// Second way of using for each
function logTodos(todo, i){
	console.log(todo, i);
}
todos.forEach(logTodos);
todosImp.forEach(logTodos);

var todosLength = todos.length;
for(var i=0; i<todosLength; i++){
	console.log(todos.pop());
}

var counterOne = 10;
while(counterOne>0){
	console.log("while "+counterOne);
	counterOne--;
}

var counterTwo = 10;
do{
	console.log("do while "+counterTwo);
	counterTwo--;
}while(counterTwo>10);


// Root Scope
var fun = 5;
function funFunction(){
	// child scope
	var fun = "helloooo";
	console.log(1, fun); 
}

function funerFunction(){
	// child scope will ask root scope
	console.log(2, fun);
}

function funestFunction(){
	fun = "AHHHH";
	console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);

//Ternary operator
var age = 19;
var enter = age>18 ? "You are eligible" : "No you cant enter";
console.log(enter);

//Switch statement

function moveCommand(direction){
	var whatHappens;
	switch(direction){
		  case "forward":
		  	whatHappens = "You encounter a monster";
		  	break;
		  case "back":
		  	whatHappens = "You arrived Home";
		  	break;
		  case "right":
		  	whatHappens = "You found a river";
		  	break;
		  case "left":
		  	whatHappens = "please run into a troll";
		  	break;
		  default:
		  	whatHappens = "please enter a valid direction"
	}
	return whatHappens;
}
window.moveCommand("left");
moveCommand("right");

// Ecma script is the standardization of Javascript which will be used by all the browsers
// ALl the browsers agrees on the ecma standard
// ECMAScript === JavaScript

// ECMA script syntaxes

// "let" is another way of mentioning a variable
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if(experience>90){
	let wizardLevel = true;
	console.log("inside", wizardLevel);
}
console.log("outside", wizardLevel);
const = "bob"; //WIll throw error since we cannot change the const value after it is assigned

const obj ={
	player1: 'bobby',
	experience1: 100,
	wizardLevel1: false
}

const player2 = obj.player1;
const experience2 = obj.experience1;
let wizardLevel2 = obj.wizardLevel;

// const {player2, experience2} = obj;
// let {wizardLevel2} = obj; 

const name = "john";
const obj1 ={
	[1+2]: 'bobby',
	[name]: 100,
	// wizardLevel1: false
}

const a2 = "sally";
const age2 = "34";
const greeting1 = `Hello ${a2} you seem to be ${age2}.`

function greet(name='', age=30, pet='cat'){
	return `Hello ${name} you seem to be ${age=10}`
}


// Symbol type in javascript

var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
console.log(sym2===sym3); //false

// Short functions
// These are similar to lambda functions in java
const add2 = (a,b) => a+b;
// Above function same as below function
function add(a, b){
	return a+b;
}

const first = () => {
	const greet = "Hi";
	const second = () => {
		const name = "bobby";
		alert(greet);
	}
	return second;
}

const newFunct = first();
newFunct();

//closures: The child scope always has the access to the parent scope.
// Lets say a function ran, the function gets executed. Its never going to execute again.
// But its going to remember that there are references to those  variables.  
// The child scope always has the access to the parent scope.
// Here the first() does not know about name but second() can access greet.

const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
multiply(3, 4);
curriedMultiply(3)(4);

// Currying: sending one variable at a time. The process of converting a function that 
// takes multiple arguments at time to a function that takes only one argument at a time.
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
multiply(3, 4);
curriedMultiply(3)(4);
// Currying will be useful when you have hardcode one input parameter and want the user to enter the other parameter.
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(6);

// Compose: It is the act of putting two functions together to form a third function where
// the output of one function is the input to the other.
const compose = (f, g) => (a) => f(g(a));
/* Here, f is a first function and g is the second function  
*/
const sum = (num) => num+1;

compose(sum, sum)(5);

// Here, a is 5, both f and g are sum. So sum(g) is executed on 5 and then sum(f) is executed on output of sum(g) whihc is 6
// So final output is 7


// Advanced arrays:
const array = [1,2,3,4,5];
const double = [];
const newArray = array.forEach((num) => {
	double.push(num+2);
})
console.log(double);

// Advanced functions in arrays:
// map, filter, reduce
// map: for each element in the array, increase the value by 2
// Here brackets around num is optional when only one input parameter is present  
const mapArray = array.map((num) => {
	return num+2;
})
// in map, it will create a new array. And it will always return something
console.log('map', mapArray);

// Filter: it used to filter elements in an array based on some criteria
const filterArray = array.filter( num => num>3 );
// When there is only one line in the filter function, no {} needed
console.log('filter', filterArray);

// Reduce: 
// reduce is used to perform a function on all the elements of the array and convert it into one value
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 2);
// second parameter in the reduce function is the initialization value of accumulator
// if accumulator is 0, then output is 0+1+2+3+4+5
// if accumulator is 2, then output is 2+1+2+3+4+5
console.log(reduceArray);


// Reference type	// Same like java only
var object1 = {value:10};
var object2 = object1;
var object3 = {value:10}
object1 === object2 //true
object1 === object3 // false
object1.value = 15;
object2.value //15
object3.value //10 
[] === []; // true different arrays


// context vs scope
// scope
function ab(){
	let a = 10;
}
console.log(a);	//Error

// Context: it is something that tells you where you are in the object
// this -> What is the object environment that i am in.

function ab(){
	console.log(this);	// window
}

const object4 = {
	a: function ab(){
	console.log(this);	// object4
	}
}

// Instantiation of objects: using constructor
class Player {
	constructor(name, type){
		console.log("player", this);
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I am ${this.type}`);
	}
}

class Wizard extends Player{
	constructor(name, type){
		super(name, type);
		console.log("wizard", this);
	}
	play(){
		console.log(`I am a ${this.type}`);
	}
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Pass by reference vs pass by value

// pass by value

var a = 5;
var b = a;
b++;
console.log(a);	//5, here a and b holds the value 5
console.log(b);	//6

// pass by reference
let obj1 = {name: "YouYou", password: "123"};
let obj2 = obj1;
obj2.password = "easyeasy"	// here the obj1 and obj2 holds the reference of name and password only and not those values
console.log(obj1);	// easyeasy
console.log(obj2);	// easyeasy

// arrays are pass by reference
var c = [1,2,3,4,5];
var d = c;
d.push(1234);
console.log(d); //[1,2,3,4,1234]
console.log(c); //[1,2,3,4,1234]

// Type coersion
// Conversion of one type of object to other
// There is no place in reality in javascript where we use "==". We always use "===".

// Ecma scipt version 7
//.includes() in strings and arrays
"Helloo".includes("o");
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog'); // true
pets.includes("doggy");	//false

// exponential operator
const square = (x) => x**2;
console.log(square(4));	//16

// Ecma scipt version 8
// For adding padding
"Hello".padStart(10);	// "          Hello"
"Hello".padEnd(10);	//"Hello          "

const fun = (a,b,c,d) => {
	console.log(a);
}
fun(1,2,3,4);	//1

//Object.values
//Object.entries
//Object.keys

let obj5 = {
	username0: 'Santa',
	username1: 'Santa1',
	username2: 'Santa2',
}
Object.keys(obj5).forEach((key, index) => {
	console.log(key, obj5[key]);
})
Object.values(obj5).forEach(value => {
	console.log(value);
})

Object.entries(obj5).forEach(value => {
	console.log(value);
})

//Async Await

//ES10 features
// flat
const arry = [1,2,3,4, [2,3], [1,2,4]];
const array1 = [1,2,3,[1,2,[5]]];
arry.flat();	//[1, 2, 3, 4, 2, 3, 1, 2, 4]
array1.flat(); 	// [1,2,3,1,2,[5]]		// By default it will flatten only one by one layer
array1.flat(2); //[1,2,3,1,2,5]		// It will flatten 2 layers
array1.flat(3); //[1,2,3,1,2,5]		// It will flatten at max  the number of layers
const array2 = [1,2,,,,,,3,4];
array2.flat(); 	//[1,2,3,4];
const flatmaptest = array1.flatMap(num => num+1);	
flatmaptest(); 	//	[2, 3, 4, "1,2,51"]	// It will flatten and apply the function only the first layer

// trim
const userEmail1 = "        fdlsjfa@gmail.com";
const userEmail2 = "jjfldsjfla@gmail.com";
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());

//formentries
// To conver array to an object(hashMap)
userProfiles = [['commando', 23], ['commo', 25]];
Object.fromEntries(userProfiles);	//{commando: 23, commo: 25}

// Try catch block
try{
	bob+'hi'
}catch{
	console.log("Not proper language")
}

try{
	bob+'hi'
}catch(error){
	console.log("Not proper language"+error);
}

// Loops - 2 new types
const basket = ['apples', 'oranges', 'grapes']

//1
for(let i=0; i<basket.length; i++){
	console.log(basket[i]);
}

//2
basket.forEach(item => {
	console.log(item);
})

// for of
//Iterating: go through each item in the array one by one
for(item of basket){
	console.log(item);
}

for(item of 'basket'){
	console.log(item);
}

const detailedBasket = {
	apple: 5,
	oranges: 10,
	grapes: 1000
}

//for in - applied for objects - enumerating : go through the properties of each item
// It allows us to loop over through the properties of each item
for(item in detailedBasket){
	console.log(item);
}

// debugger   
const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator, array) => {
	debugger;
	return accumulator.concat(array);
}, []);

// Few FAQs
/*
What is a program?
That allocates a memory, 
parses and executes

Memory leak?
when you have unused memory, we dont use the initialized variable

Javascript is a single threaded language that is non-blocking
It will have single call/memory stack
There will be no deadlocks

// Stack overflow
function foo(){
	foo()
}

foo();


*/




































































