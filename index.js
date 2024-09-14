
//1. Difference Between The First and Second Argument.
function calculateDifference(a, b){
    return a - b;
}
console.log(calculateDifference(45, 25));



//2. Is Number Odd
function isOdd(num){
    return num % 2 !== 0;
}
console.log(isOdd(100));



//3. Smallest Number in the Array
function findMin(small){
    return Math.min(...small);
}
console.log(findMin([10, 18, 3, 9]));



//4. Filter Even Number
function filterEvenNumbers(even){
    return even.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([4, 7, 6, 3, 11, 18, 34]));



//5. Array Sorted in Descending
function sortArrayDescending(descend){
    return descend.slice().sort((a, b) => b - a);
}
console.log(sortArrayDescending([4, 7, 6, 3, 11, 18, 34]));



//6. First Letter Lowercased
function lowercaseFirstLetter(low){
    if(!low) return low;
    return low.charAt(0).toLowerCase() + low.slice(1);
}
console.log(lowercaseFirstLetter("Ostad"))



//7. Vowel Counter
function countVowels(countV){
    let vowel = "aeiouAEIOU";
    return countV.split("").filter(char => vowel.includes(char)).length;
}
console.log(countVowels("Ostad is The Best Platform for Tech Learning"));



//8. Array of Numbers Count Average

function findAverage(average){
    if(average.length === 0) return 0;
    let sum = average.reduce((total, num) => total + num, 0);
    return Math.floor(sum / average.length);
}

console.log(findAverage([10, 4, 3, 16, 11, 20]))

