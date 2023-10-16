function submit() {
    const input_value = document.getElementById('input').value
    const answer_container = document.getElementById('answer-container')
    
    const numbersSet = input_value.split(',')
    let sum = 0
    let number
    
    for (let i = 0; i < numbersSet.length; i++) {
        number = parseFloat(numbersSet[i])
        sum+=number
    }
    
    console.log("The sum is: " + sum)
    
    answer_container.innerText = "A somatória é: " + sum
}
