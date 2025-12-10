const checkPalindrome = (str) => {
    let result = str.split("").reverse().join("")
    if(result === str){
        return `The "${str}" is a palindrome.`
    }else{
        return `The "${str}" is not a palindrome.`
    }
}

console.log(checkPalindrome("hello"))

console.log(checkPalindrome("malayalam"))

