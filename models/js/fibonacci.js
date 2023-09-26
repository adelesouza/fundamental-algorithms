const fibonacci = [0, 1]
const N = 13 //numero de elementos que a sequencia deverá ter  
let nextNumber

for (let i=2; i < N; i++) {
    nextNumber = fibonacci[i-1] + fibonacci[i-2]
    fibonacci.push(nextNumber)
}

console.log("The sequence of fibonnaci with " + N + " numbers is: " + fibonacci)
