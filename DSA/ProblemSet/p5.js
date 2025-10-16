// Check if a year is a leap year 
// A year is a leap year if it is divisible by 4 but not by 100,
// except if it is also divisible by 400.


let isLeapYear = (year) => {
    ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? console.log('Leap year.') : console.log('Not a leap year.');
}

isLeapYear(2020);  // Output: Leap year.
isLeapYear(1900);  // Output: Not a leap year.