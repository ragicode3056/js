
const isPalidrome = (str) => {
    let len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return "not a palindrome";
            
        }else{
            return "is a plindrome"
        }
    }
}

console.log(isPalidrome("tetsbjdb"));
