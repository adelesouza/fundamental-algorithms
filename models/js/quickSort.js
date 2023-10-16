function submit() {
    const input_value = document.getElementById('input').value
const answer_container = document.getElementById('answer-container')

let arrayToOrdenate = input_value.split(',')

function quickSort(arrayToOrdenate) {
    let pivot = parseFloat(arrayToOrdenate[0])
    let leftArray = []
    let rightArray = []

    for (let i=0 ; i < arrayToOrdenate.length; i++) { 
        if (parseFloat(arrayToOrdenate[i]) < pivot) {
            leftArray.push(parseFloat(arrayToOrdenate[i]))
        } if (parseFloat(arrayToOrdenate[i]) > pivot) {
            rightArray.push(parseFloat(arrayToOrdenate[i]))
        }
    }

    if (arrayToOrdenate.length <= 1) {
        return arrayToOrdenate
    } else {
        //return quickSort(leftArray), quickSort(rigthArray)
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    }
}

console.log(quickSort(arrayToOrdenate))
answer_container.innerText = "Números ordenados: " + quickSort(arrayToOrdenate)
}