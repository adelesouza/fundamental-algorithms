function submit() {
    const input_value = document.getElementById('input').value
    const answer_container = document.getElementById('answer-container')
    
    const fibonacci = [0, 1]
    const N = input_value//numero de elementos que a sequencia deverá ter  
    let nextNumber
        
    for (let i=2; i < N; i++) {
        nextNumber = fibonacci[i-1] + fibonacci[i-2]
        fibonacci.push(nextNumber)
    }
        
    console.log("The sequence of fibonnaci with " + N + " numbers is: " + fibonacci)
        
    answer_container.innerText = "A sequencia é: " + fibonacci
}
