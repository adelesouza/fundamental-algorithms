const numbersSet = [1, 2, 3, 4, 5, 6, 7]
let sum = 0
let number

for (let i = 0; i < numbersSet.length; i++) {
    number = numbersSet[i]
    sum+=number
}

console.log("The sum is: " + sum)