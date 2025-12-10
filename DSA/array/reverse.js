const reverseString = (str) => {
    return str.split("").reverse().join("");
}

console.log(reverseString('apple')) // 'elppa'

console.log(reverseString('Hello, Boby!')) // '!yboB ,olleH'