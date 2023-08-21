// alert("Hello Shivam")
console.log("Hello World")

/*

// 1:- Add Two Number 

const num1 = 10;
const num2 = 20;

const sum = num1 + num2; // add two number

console.log("Sum of two numbers = " + sum);




// 2:- Add two numbers Enterd by the User 

const num3 = parseInt(prompt('Enter the first Number'));  
// prompt() is used to take inputs from the user.
// parseInt() is used to convert the user input string to number.
const num4 = parseInt(prompt('Enter the second number'));

const sum1= num3 + num4;

// Display the sum
console.log(`The sum of ${num3} and ${num4} is ${sum1}`);




//  3:- Square root of a number

// const number = prompt('Enter the number: ');
   const number = 'hello'
   const number1 = -4;  // NaN (not a number)

const result = Math.sqrt(number);
const result1 = Math.sqrt(number1);
console.log(result1);
console.log(`The square root of ${number} is ${result}`);




// 4:- Calculate the area of triangle 

const baseValue = prompt('Enter the base of the triangle');
const heightValue = prompt('Enter the height of the Triangle');

// Calculate the area = (base * height ) /2
const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is  ${areaValue}`);





// 5:- swap of two Variables

let a = prompt('Enter the first Value');
let b = prompt('Enter the second Value');

// Create a temporary variable 
let temp;

// Swap variable   

//using destructuring assignment
//[a, b] = [b, a];


temp = a;
a = b;
b= temp;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping  ${b}`);






// Number of days in any month 

function getDaysInMonth(month) {
    if (month === 2) {
        return 28; // February has 28 days in a non-leap year
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30; // April, June, September, November have 30 days
    } else {
        return 31; // All other months have 31 days
    }
}

// Take input from the user
const inputMonth = parseInt(prompt());

// Check if the input is valid
if (inputMonth >= 1 && inputMonth <= 12) {
    const daysInMonth = getDaysInMonth(inputMonth);
    console.log(`Number of days in the entered month: ${daysInMonth}`);
} else {
    console.log("Invalid input. Please enter a valid month number.");
}







// Program that checks if the number is positive ,negative  or zero

const number = parseInt(prompt("Enter a number"));

if(number > 0 ){
    console.log("The number is Positive ");
}
else if(number == 0){
    confirm.log('Number is zero');
}
else {
    console.log('Number is Negative');
}







// Program to check if a number is prime or not 

const number = parseInt(prompt("enter a positive number"));
let isPrime = true;

// Check if number is equal to 1
if(number === 1){
    console.log("1 is neither prime nor composite number");
}


else if(number > 1){
    for(let i=2 ; i<number ; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(`${number} is a prime number `);

    }else {
        console.log(`${number} is not a prime number `);
    }
}

// check if number is less than 1 
else{
    console.log("The Number is not a prime number.");
}







// Program to generate fibonacci Series up to n terms 

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}





// Program to find the LCM of two integers 

const num1 = prompt(' Enter the first positive number ');
const num2 = prompt('Enter second positive number ');

// higher number among number1 and number2 is stored in min
let min = (num1> num2) ? num1 : num2;

// while loop

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}


*/