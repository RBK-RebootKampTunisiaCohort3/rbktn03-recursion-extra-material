// Exercises
//------------------------- Basic Requirments -------------------------
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g

//  function sum(n) {
//  // TODO: your code here
//  }
//  sum(3); // => 3 + 2 + 1 + 0 => 6
//  sum(4); // => 4 + 3 + 2 + 1 + 0 => 10
//  sum(5); // => 5 + 4 + 3 + 2 + 1 + 0 => 15
// HINT: We can rephrase 'the sum of n' as 'n plus the sum of n - 1'.
function sum (n) {
	var sum=n;
	for (var i=1; i<n ; i++){
		sum+= i ;
	}
	return sum;
}

// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.

//  function factorial(n) {
//  // TODO: your code here
//  }
//  factorial(3); // => 3 * 2 * 1 => 6
//  factorial(4); // => 4 * 3 * 2 * 1 => 24
//  factorial(5); // => 5 * 4 * 3 * 2 * 1 => 120
// Implement the factorial function by observing that the 'factorial of n' can be rephrased as 'n times the factorial of n - 1'.
function factorial (n){
	if (n<1) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}

// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated, e.g.

//  function repeatString(str, count) {
//  // TODO: your code here
//  }
//  repeatString('dog', 0); // => ''
//  repeatString('dog', 1); // => 'dog'
//  repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
//  repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
// Your task is to implement the repeatString function using the observation that to repeat a string some count,
//  we can concatenate that string onto the result of repeating the string count - 1.
//  HINT: Observe that repeatString('dog', 0) should yield the empty string, ''.
//  What happens if you evaluate this: ' ' + 'dog'?
function repeatString (str,count) {
	if (count<1) {
		return "";
	}
	else {
		return str+repeatString(str,count-1);
	}
}

// 4.Compute the nth Fibonacci Number: The fibonacci numbers are represented by the following sequence:

//  // fib(n): 1 1 2 3 5 8 13 21
//  //         | | | | | |  |  |
//  //      n: 0 1 2 3 4 5  6  7
// That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
//  Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
//  with the exception of the first two: fib(0) and fib(1). More succinctly,
//  fib(0) is 1
//  fib(1) is 1
//  fib(n) is fib(n - 1) + fib(n - 2)
//  Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
function fibo (n){
	if (n>1) {
		return fibo(n-2) + fibo(n-1);
	}
	
	else { return 1;

	}
}

// 5.Write function that multiply the number by 10 n time

//  multiplyBy10(number, n)
//  multiplyBy10(4,3) => 4000
//  multiplyBy10(5,2) => 500
function multiply (number,n) {
for (var i=0; i<n;i++){
	number=number*10;
}
return number;
}

// ------------------------- More Practice -------------------------

// 1.Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.

//  function sum(start, end) {
//  // TODO: your code here
//  }
//  sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
//  sum(3, 5); // => 3 + 4 + 5 => 12
// What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.
function sum (a,b){
var x=b;
if (a<b){
for (var i=a; i<b;i++){
	x+=i;
}}
else {
	return sum(b,a);
}
return x ;
}

// 2.Write a function product that works like sum, except it should compute the product of the numbers from start to end.
// Refactor your sum function from earlier to be implemented in terms of product.

function product (a,b){
var x=b;
if (a<b){
for (var i=a; i<b;i++){
	x*=i;
}}
else {
	return sum(b,a);
}
return x ;
}


// 3.Let's pretend that JavaScript does not have the addition operator + -- instead, it comes with two functions called inc and dec that perform increment and decrement respectively:

//  // ignore the fact that inc makes use of +
//  function inc(x) {
//  return x + 1;
//  }
//  function dec(x) {
//  return x - 1;
//  }
// Your task is to write a function called add that takes two numbers as parameters, x and y, and adds them together.
//  The catch is that you can only use inc and dec to accomplish this.
function add ( x, y){
	while (y!==0){
		x =inc(x);
		y =dec(y);
	}
	return x;
	}
// 4.Write a function called isEven that, given a number n as a parameter, returns true if that number is even, and false otherwise; however, you need to do this without using the % operator
function isEven (n){
while (n>1){
	n= n-2;
}
return n===0 ? true : false ;
}

// 5.Write a function called multiply that accepts two numbers as parameters, and multiplies them together -- but without using the * operator; instead, you'll need to use repeated addition.
function multiply (x,y){
	var result = 0;
	for (var i=0;i<y;i++){
result = result + x;
	}
	return result ;
}
// 6.Write a JavaScript program to get the integers in range (x, y)

//  range(1,9)   => '2, 3, 4, 5, 6, 7, 8'
//  range(21,33) => '22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32'
// Read about Increment and Decrement operators in JS
function range (x,y){
	for (var i=x;i<y+1;i++){
		console.log(i);
	}
}
// ------------------------- Advanced -------------------------

// 1.By now you should have worked with the length property of strings, e.g. 'hello'.length. Your task is to write a function called stringLength that accepts a string as a parameter and computes the length of that string; however, as you may have guessed, you are not allowed to use the length property of the string! Instead, you'll need to make use of the string method called slice. To get an idea of how slice works, try the following at a console:

//  'hello'.slice(0);
//  'hello'.slice(1);
//  ''.slice(1);
// For our purposes, we can consider slice as taking one argument -- the index to begin slicing from,
//   and returns a new string starting from that index onwards.
//  Indices are positions of characters within strings, and they always begin counting from 0, e.g:
//  // 'h e l l o' (spaces added for clarity)
//  //  | | | | |
//  //  0 1 2 3 4
//  The 'h' character has index (position) 0 in the string 'hello', 'e' has index 1, 'l' has index 2, etc.
function stringLength (str) {
	var i=0;
	while (str.slice(i)!==""){
		i++;
	}
	return i ;
}

// 2.The 'modulo' operator (%) computes the remainder after dividing its left operand by its right one, e.g.

//  5 % 2; // => 1
//  8 % 10; // => 8
//  7 % 5; // => 2
// Write a function called modulo that works like the % operator, but without using it.
function modulo (x,y){
	while (x>y){
		x=x-y;
	}
	return x;
}

// 3.Write a function called countChars that accepts two parameters: a string and a character. This function should return a number representing the number of times that the character appears in string. To access the first element of a string, you can use the following syntax:

//  // access the element at index 0
//  'hello'[0]; // => 'h'
//  'dog'[0]; // => 'd'
// HINT: You'll also need to make use of the slice method as shown above in the exercise on computing the length of a string.
function countChars (str , c){
	var num = 0;
	for (var i=0; i < str.length ; i++){
		if (str[i]===c){
			num=num+1;
		}
	}
	return num;
}

// 4. Implement a function called indexOf that accepts two parameters: a string and a character, and returns the first index of character in the string. You'll need to make use of the techniques for accessing the first element of a string and the rest of the string (slice) as before.
function indexOf (str ,c){
	var found=false;
	var i=0;
	while ((found===false)&&(i<str.length)){
		if (str[i]==c) {
			return i;
		}
		else {i++;}
	}
	return "not found" ;
}
// 5.The power function in the lecture works, but can be made considerably faster through a method known as successive squaring. To get an idea of how this works, observe that:

// Modify the power function to take advantage of this technique.
function power (x,y){
	var result = 1 ;
	while (y!==0){
		result = result * x;
		y=y-1;
	}
	return result;
}

// 6.Write function called reverse that take a string and return the revers string

//  reverse( 'Fatima' ) => 'amitaF'
//  reverse( 'this could be an easy question ' ) =>
//  'noitseuq ysae na eb dluoc siht'.
function reverse(str){
	var x="";
	for (var i=str.length-1; i>=0;i--){
		x=x+str[i];
	}
	return x;
}

// 7.Find the greatest common divisor of two numbers.
function greatestCommon(x,y){
	
}


// 8.Find the lowest common multiple of two numbers. Assume that the two numbers are greater than or equal to 2.

// 9.There are N number of persons in a party, find the total number of handshake such that a person can handshake only once.
