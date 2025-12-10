
const twoSum = (num, target) => {
    for(let i = 0; i < num.length; i++){
        const secondVal = target - num[i]

        if(num.includes(secondVal) && num.indexOf(secondVal) != i){
           return `f: ${num[i]} at index: ${i}, s: ${secondVal} at index: ${num.indexOf(secondVal)}`
        }
    }
    return `No two sum found!!`
}


const num = [5, 7, 4, 8, 2]

const result = twoSum(num, 15)

console.log(result)