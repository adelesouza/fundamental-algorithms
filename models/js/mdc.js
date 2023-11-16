function submit() {
    const input1_value = document.getElementById('input1').value
    const input2_value = document.getElementById('input2').value
    const answer_container = document.getElementById('answer-container')
    
    const a = input1_value
    const b = input2_value

    const mdc = mdcFunction(a,b)
    
    console.log("MDC is " + mdc)
    answer_container.innerText = "O MDC é: " + mdc
}

function mdcFunction(a, b) {
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

    return mdc
}

module.exports = mdcFunction