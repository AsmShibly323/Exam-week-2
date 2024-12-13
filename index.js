//1) Write a function named calculateDifference 
//that takes two arguments and returns the difference 
//between the first and second arguments.

/*
function calculateDifference(arg1, arg2) {
 
     
    return arg1 - arg2;
}


const result = calculateDifference(10, 3);
console.log(`The difference is: ${result}`);*/


//2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

/*function isOdd(num) {
   
    return num % 2 !== 0;
}

const oddCheck = isOdd(5);
console.log(`Is the number odd? ${oddCheck}`);*/

//3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

/*function findMin(numbers) {

    return Math.min(...numbers);
}


const minNumber = findMin([3, 1, 4, 1, 5, 9]);
console.log(`The smallest number is: ${minNumber}`);*/

//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.



/*
function filterEvenNumbers(numbers) {
   
    
    return numbers.filter(num => num % 2 === 0);
}


const evenNumbers = filterEvenNumbers([3, 1, 4, 1, 5, 9]);
console.log(`The even numbers are: ${evenNumbers}`);*/

//5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
/*
function sortArrayDescending(numbers) {
    
    
    return [...numbers].sort((a, b) => b - a);
}


const sortedArray = sortArrayDescending([3, 1, 4, 1, 5, 9]);
console.log(`The sorted array in descending order is: ${sortedArray}`);*/

//6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
/*
function lowercaseFirstLetter(str) {
  
    if (!str) return str; 
    return str.charAt(0).toLowerCase() + str.slice(1);
}


const lowercasedString = lowercaseFirstLetter("Hello World");
console.log(`The string with the first letter lowercased is: ${lowercasedString}`);*/

//7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

/*
function findAverage(numbers) {
   
    if (numbers.length === 0) return 0; 
    const sum = numbers.reduce((acc, num) => acc + num, 0); 
    return sum / numbers.length; 
}


const average = findAverage([3, 1, 4, 1, 5, 9]);
console.log(`The average is: ${average}`); */

//8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
/*
function isLeapYear(year) {
  
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0; 
        }
        return true; 
    }
    return false;
}


const leapYearCheck = isLeapYear(2024);
console.log(`Is the year a leap year? ${leapYearCheck}`); */ 