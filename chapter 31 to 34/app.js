// ------------CHAPTER 31 to 34--------------
// 1. Write a program that displays current date and time in your browser.
//------ANSWER------
// var today = new Date();
// document.write(today)



// 2. Write a program that alerts the current month in words. For example December.
//------ANSWER------
// var day = ["January", "February", "March", "April", "May", "June", "July", " August", "September", "October", "November", "December"];
// var today = new Date();
// var month = day[today.getMonth()];
// document.write("Current Month is " + month);



// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
//------ANSWER------
// var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var day = daysOfWeek[now.getDay()];
// alert(day);


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
//------ANSWER------
// var days =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var today = new Date();
// var dayIndex = today.getDay();
// var dayName = days[dayIndex]

// if(dayIndex === 6 || dayIndex  === 0){
//     alert(dayName +" It's Fun day");
// }else{
//     alert(dayName +" It's not Fun day");
// }



// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
//------ANSWER------
// var today = new Date();
// var date = today.getDate();
// if(date<16){
//     alert(date +" First fifteen days of the month");
// }else{
//     alert(date +" Last days of the month");
// }



// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
//------ANSWER------
// var now = new Date();
// var  date = new Date("January 1, 1970 00:00:00");
// var result = Math.floor((now - date) / (1000 * 60));
// document.write("Minutes since midnight, Jan. 1, 1970: " + result);



// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”
//------ANSWER------
// var today= new Date();
// var hour = today.getHours();
// if(hour < 12){
//     alert("It's AM")
// }else{
//     alert("It's PM");
// }



// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
//------ANSWER------
// var today = new Date();
// var lastDate = new Date("31 dec 2020");
// document.write(lastDate);



// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015:
//------ANSWER------
// var dateRamdan= new Date ("June 18, 2015")
// var today = new Date();
// var diff = today - dateRamdan;
// var day = Math.floor(diff/(1000 * 60* 60*24));
// document.write(day+ " days have passed since Ist Ramadan, 2015.");



// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
//------ANSWER------
// var today = new Date();
// var date = new Date("1 Jan,2015 00:00:00");
// var diff = today-date;
// var result = Math.floor(diff/1000);
// document.write("On reference date: " + today +"<br>" + result + " seconds had passed since beginning of 2015");



// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
//------ANSWER------
// var today = new Date();
// today.setHours(today.getHours() +1);
// document.write("Updated date and time (one hour ahead): " + today);



// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
//------ANSWER------
// var today = new Date();
// today.setFullYear(today.getFullYear()-100);
// alert("Date 100 years back: " + today);



// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
//------ANSWER------
// var age = prompt("Please enter your age:")
// var today = new Date();
// var birth = today.getFullYear()- age;
// document.write("Your birth year is: " + birth);



// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//------ANSWER------
// var  customerName = " Nausheen Nadeem";
// var today = new Date();
// var month = today.getMonth();
// monthList = ["January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var numUnits=410;
// var chargeUnit=16;
// var netAmount=numUnits*chargeUnit;
// var lastCharge=350;
// var afterDueDate=netAmount+lastCharge;
// document.write("<h1>"+"K-Electric Bill"+"</h1>")
// document.write("Customer Name: "+customerName+"<br>");
// document.write("Month: "+monthList[month]+"<br>");
// document.write("Number of units: "+numUnits+"<br>");
// document.write("Charges per unit: "+chargeUnit+"<br>");
// document.write("<br>")
// document.write("Net Amount Payabale (Within Due Date): "+netAmount+"<br>");
// document.write("Late payment surcharge: "+lastCharge+"<br>");
// document.write("Gross payment Payable(after Due Date): "+afterDueDate+"<br>");




// ------------CHAPTER 35 to 38--------------
// 1. Write a function that displays current date & time in your browser.
//------ANSWER------
// function date(){
//     var today= new Date();
// document.write(today);
// }date();



// 2. Write a function that takes first & last name and then it greets the user using his full name.
//------ANSWER------
// function greetUser(){
//     var First = prompt("Enter Your First Name");
//     var last = prompt("Enter Your Last Name");
//     document.write("Hi! " + First +" " +last)
// }greetUser();



// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
//------ANSWER------
// function sum(){
//     var FirstNo = +prompt("Enter First number");
//     var lastNo = +prompt("Enter  last number");
//  var result = FirstNo + lastNo 
//     document.write( "The sum of "+ FirstNo +" and " +lastNo+" is "+ result)
// }sum();




// 4. Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
//------ANSWER------

// function calculator() {
//     var num1 = +prompt("Enter First Number");
//     var num3 = prompt("Enter your operator(i.e;+,-,*,/)");
//     var num2 = +prompt("Enter Second Number");
//     var result;
//     if (num3 === "+") {
//         result = num1 + num2
//     } else if (num3 === "-") {
//         result = num1 - num2
//     }
//     else if (num3 === "*") {
//         result = num1 * num2
//     }
//     else if (num3 === "/") {
//         if (num2 !== 0) {
//             result = num1 / num2
//         } else {
//             result = "Error: Division by zero"
//         }
//     } else {
//         result = "enter a valid operator"
//     }
//     return num1 + num3 + num2 + " = " + result
// } alert(calculator());




// 5. Write a function that squares its argument.
//------ANSWER------
// function square(x){
//     return x * x; 
// }  
// var result = square(5);
// console.log(result);




// 6. Write a function that computes factorial of a number.
//------ANSWER------
// function factorial() {
//     var num = prompt("Enter a number:");
//     if (num < 0) {
//         alert("Error: Factorial is not defined for negative numbers");
//     } else {
//         var result = 1;
//         for (var i = 1; i <= num; i++) {
//             result *= i
//         }
//          alert("The factorial of " + num + " is " + result);
//     }
// }factorial();




// 7. Write a function that take start and end number as inputs & display counting in your browser.
//------ANSWER------


// 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2. Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare():
//------ANSWER------
// function calculateHypotenuse() {
//     function calculateSquare(x) {
//         return x * x;
//     }
//     var base = +prompt("Enter the base of a right angle triangle");
//     var perpendicular = +prompt("Enter the perpendicular of a right angle triangle");
//     var hypoteneuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     alert("The hypotenuse of right angle triangle with base " + base + " and perpendicular " + perpendicular + " is " + hypoteneuse);
// } console.log(Math.sqrt(50));
// calculateHypotenuse();




// 9. Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner: i. Arguments as value. ii. Arguments as variables:
//------ANSWER------


// 10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
//------ANSWER------


// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. EXAMPLE STRING : 'the quick brown fox'. EXPECTED OUTPUT : 'The Quick Brown Fox':
//------ANSWER------



// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial'. EXPECTED OUTPUT : 'Development':
//------ANSWER------



// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o':
//------ANSWER------



// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using
// the definitions here. Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".Circumference of circle = 2πr  Area of circle = πr2.
//------ANSWER------




























// ----------- Chapter 35-38 Functions ----------

// Task 1
// Write a function that displays current date & time in your browser.

// function tellTime(){
//     var today= new Date();
//     document.write(today);
// }
// tellTime()

// function greetUser(){
//    var firstName=prompt('C');
//    var secondName=prompt('Write your second name');
//    alert('Hello '+firstName+' '+secondName)
// }
// greetUser();


// Task 3
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(){
//     var firstNum=+prompt('Enter first number');
//     var secondNum=+prompt('Enter Second number');
//     var result=firstNum+secondNum;
//     alert('The sum of '+firstNum+' and '+secondNum+' is '+result)
// }
// sum();

// Task 4
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser

// function calculator(num1,opera,num2){
//     if(opera==='+'){
//         var result= num1+num2;
//         alert(result)
//     }
//     else if(opera==='-'){
//         var result= num1-num2;
//         alert(result)
//     }
//     else if(opera==='*'){
//         var result= num1*num2;
//         alert(result)
//     }
//     else if(opera==='/'){
//         var result= num1/num2;
//         alert(result)
//     }
//     else{
//         alert('Invalid Operator')
//     }
// }
// var firstNumber=+prompt('Enter first number');
// var operator=prompt('Enter operator');
// var secondNumber=+prompt('Enter Second number');
// calculator(firstNumber,operator,secondNumber);


// Task 5
// Write a function that squares its argument.

// function square(num){
//     var square=num**2;
//     alert(square)
// }
// var number=+prompt('Enter number to be square')
// square(number);

// Task 6
// Write a function that computes factorial of a number

// function factorial(){
// var n = +prompt('enter n')
// var fact = 1;
// if (n === 1 || n === 0) {
// }
// else {
//     for (var i = n; i >= 1; i--) {
//         fact = fact * i
//     }
// }
// document.write(fact)
// }
// factorial()

// Task 7
// Write a function that take start and end number as inputs & display counting in your browser.

// function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + '<br>');
//     }
// }
// var start = +prompt("Enter start number for counting:");
// var end = +prompt("Enter end number for counting:");
// counting(start,end);

// Task 8
// Write a nested function that computes hypotenuse of a right angle triangle.
// function calculateHypotenuse(base,perpendicular){


// function calculateHypotenuse(base, perpendicular) {
//     var base, perpendicular;

//     function calculateSquare(num) {
//         num = num * num;
//         return num;
//     }
//     base = calculateSquare(base);
//     perpendicular = calculateSquare(perpendicular);
//     var hyp = base + perpendicular;

//     return hyp;

// }

// var base = +prompt('Enter base of right angle triangle');
// var perpendicular = +prompt('Enter perpendicular of right angle triangle');
// var hyp = calculateHypotenuse(base, perpendicular)
// alert('The hypotenuse of right angle triangle is ' + hyp)


// Task 9
// Write a function that calculates the area of a rectangle.      A = width * height

// function areaCalculate(width,height){
//     var A=width*height;
//     return A;
// }
// var width=+prompt('Enter width of triangle');
// var height=+prompt('Enter height of triangle');
// var result=areaCalculate(width,height);
// document.write(result)

// Task 10
// Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindrome(string) {
//       var check = '';
//       for (var i = string.length - 1; i >= 0; i--) {
//             check += string[i]
//       }
//       if (string === check) {
//             alert(string + ' is a plindrome word')
//       }
//       else {
//             alert(string + ' is  not a plindrome word')

//       }
// }
// var str = prompt('Write any word')
// palindrome(str);

// Task 11
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function UpperCase(str) {
//     var arr = str.split(' ');
//     var newArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
//     return newArray.join(' ')

// }

// var str = 'the quick brown fox'
// var result = UpperCase(str)
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')


// Task 12
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.


// function longest(str) {
//     var split = str.split(' ');
//     var first = split[0].length;
//     for (var i = 0; i < split.length; i++) {
//         if (first < split[i].length) {
//             first = split[i]
//         }
//     }
//     return first;
// }
// var str = 'Web Development Tutorial ';
// var result = longest(str);
// document.write('EXAMPLE  SRING :' + str + '<br>')
// document.write('EXPECTED  SRING :' + result + '<br>')


// Task 13
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .

// function count(str, letter) {
//     var find=0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             find += 1;
//         }
//     }
//     return find
// }
// var str = 'JSResourceS.com';
// var letter = 'o'
// var result = count(str, letter);
// document.write('The occurence of o in this string is ' + result)

// Task 14
//14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(value){
//     var circumference=2*3.141*value;
//     return circumference
// }
//  function calcArea(value){
//      var area=3.141*(value*value);
//      return area
//  }
// var radius=+prompt('Enter radius of circle ');
// var circumference=calcCircumference(radius);
// var area=calcArea(radius);
// document.write('The Circumference of circle is '+circumference+'<br>')
// document.write('The Area of circle is '+area+'<br>')




