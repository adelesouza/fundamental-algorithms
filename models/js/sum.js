function submit() {
    const input_value = document.getElementById('input').value
    const answer_container = document.getElementById('answer-container')
    
    const numbersSet = input_value.split(',')
    const sum = sumFunction(numbersSet)

    console.log("The sum is: " + sum)
    
    answer_container.innerText = "A somatória é: " + sum
}

function sumFunction(numbersSet) {
    let sum = 0
    let number
    
    for (let i = 0; i < numbersSet.length; i++) {
        number = parseFloat(numbersSet[i])
        sum+=number
    }

    return sum
}

module.exports = sumFunction