const values = [56, 1.5, 2, 998.887, 13, 47.8, 39]
const N = values.length
let value
let counter = 0

for (let i = 0; i < N; i++) {
    value = values[i]
    if (Number.isInteger(value)) {
        counter++
    }
}

console.log("In this number set exists "+ counter + " integers numbers.")