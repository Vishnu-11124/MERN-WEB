// Date & Time
const now = new Date();
console.log(now.toString()); // Current date and time

// Specific date -( year, month (0-11), day, hours, minutes, seconds, milliseconds )
const specificDate1 = new Date(2023, 0, 1, 10, 0, 0); // January 1, 2023, 10:00 AM
console.log(specificDate1.toString());

const specificDate = new Date('2023-01-01T10:00:00');
console.log(specificDate.toString()); // January 1, 2023, 10:00 AM


// Date components
console.log('Year:', now.getFullYear());
console.log('Month:', now.getMonth() + 1); // Months are 0-indexed
console.log('Date:', now.getDate());
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());

// Date to string
console.log('ISO String:', now.toISOString());
console.log('Locale String:', now.toLocaleString());
console.log('Date String:', now.toDateString());
console.log('Time String:', now.toTimeString());

// Modify date
now.setFullYear(2024);
now.setMonth(11);
now.setDate(25);
now.setHours(15);
now.setMinutes(30);
now.setSeconds(0);
console.log('Modified Date:', now.toString());