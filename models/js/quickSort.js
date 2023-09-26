let arrayToOrdenate = [2, 6, 9, 7, 5, 4, 3, 1, 8]

function quickSort(arrayToOrdenate) {
    let pivot = arrayToOrdenate[0]
    let leftArray = []
    let rightArray = []

    for (let i=0 ; i < arrayToOrdenate.length; i++) { 
        if (arrayToOrdenate[i] < pivot) {
            leftArray.push(arrayToOrdenate[i])
        } if (arrayToOrdenate[i] > pivot) {
            rightArray.push(arrayToOrdenate[i])
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