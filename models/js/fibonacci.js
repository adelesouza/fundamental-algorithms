function submit() {
    const input_value = document.getElementById('input').value
    const answer_container = document.getElementById('answer-container')
    const N = input_value //numero de elementos que a sequencia deverá ter  

    let fibonacci = fibonacciFunction(N)
        
    console.log("The sequence of fibonnaci with " + N + " numbers is: " + fibonacci)
        
    answer_container.innerText = "A sequência é: " + fibonacci
}

function fibonacciFunction(N) {
    if (N < 1) {
        return "valor não aceito."
    }

    const fibonacci = [0, 1]
    let nextNumber
        
    for (let i=2; i < N; i++) {
        nextNumber = fibonacci[i-1] + fibonacci[i-2]
        fibonacci.push(nextNumber)
    }

    return fibonacci
}

module.exports = fibonacciFunction