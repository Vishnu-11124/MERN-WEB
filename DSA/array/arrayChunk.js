
const arrayChunk = (array, size) => {
    const newArr = []
    for (let i = 0; i < array.length; i += size){
        newArr.push(array.slice(i, i+size))
    }
    
    return newArr
    
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = arrayChunk(array, 2)

console.log('After array modification:', result)