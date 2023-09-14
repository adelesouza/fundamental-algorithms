const n = 15
let nIsPrime = null

for (let i = 0; i <= n; i++) {
    if (n%i == 0) {
        if (i == 1 || i == n) {
            nIsPrime = true;
        } else {
            nIsPrime = false
            break
        } 
    } else {
        nIsPrime = false
    }
}

console.log("Is N prime? " + nIsPrime)