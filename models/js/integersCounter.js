function submit() {
    const input_value = document.getElementById('input').value
    const answer_container = document.getElementById('answer-container')

    const values =  input_value.split(',')
    const counter = integersCounterFunction(values)

    console.log("In this number set exists "+ counter + " integers numbers.")
    answer_container.innerText = "Nesse conjunto de dados existem " + counter + " inteiros."
}

function integersCounterFunction(values) {
    const N = values.length
    let value
    let counter = 0

    for (let i = 0; i < N; i++) {
        value = parseFloat(values[i])
        if (Number.isInteger(value)) {
            counter++
        }
    }

    return counter
}

module.exports = integersCounterFunction