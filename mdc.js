const a = 45
const b = 27
let mdc

let theGreatestNumber 

if (a > b) {
    theGreatestNumber = a
} if (a < b) {
    theGreatestNumber = b
}

for (let i = theGreatestNumber; i > 0; i--) {
    if ((a % i == 0) && (b%i == 0)) {
        mdc = i
        break
    }
}

console.log("MDC is " + mdc)