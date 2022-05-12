// Write your code below
function hasUniqueChars(word) {
    let checker = {};

    for (let i = 0; i < word.length; i++) {
        if (checker[word[i]] === undefined) {
            checker[word[i]] = 1;
        } else {
            return false;
        }
    }

    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));