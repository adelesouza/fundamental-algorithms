function submit() {
    const input_value = document.getElementById('input').value
    const answer_container = document.getElementById('answer-container')
    
    const n = input_value
    const nIsPrime = primeNumberFunction(n)
    
    console.log("Is N prime? " + nIsPrime)
    
    if (nIsPrime) {
        answer_container.innerText = "O valor é primo."
    } else {
        answer_container.innerText = "O valor NÃO é primo."
    }
}

function primeNumberFunction(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "valor não aceito."
    }
    
    let nIsPrime = null
    
    for (let i = 1; i <= n; i++) {
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

    return nIsPrime
}

module.exports = primeNumberFunction