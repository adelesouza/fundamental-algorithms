const sum = require('../models/js/sum')

test("verifica se o valor retornado é um numero", () => {
    let numbersSet = [56, 1.5, 2, 998.887, 13, 47.8, 39]
    let sumResult = sum(numbersSet)

    expect(sumResult).not.toBeNaN()
})

test("verifica se o numero retornado é maior ou igual que os que foram somados", () => {
    let numbersSet = [56, 1.5, 2, 998.887, 13, 47.8, 39]
    let sumResult = sum(numbersSet)

    for (let i = 0; i < numbersSet.length; i++) {
        expect(numbersSet[i]).toBeLessThanOrEqual(sumResult)
    }
})
