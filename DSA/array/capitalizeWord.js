const capitalizeWord = (str) => {
   return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

let result = capitalizeWord("Hello bobby, how are you?")
console.log(`Capitalized word: ${result}`)