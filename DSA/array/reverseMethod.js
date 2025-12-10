
const reverseNumber = (number) => {
    return Number(number.toString().split("").reverse().join(""))
    // return parseInt(number.toString().split("").reverse().join(""))
}

console.log(reverseNumber(456700)) // 7654

console.log(reverseNumber(873542)) // 245378