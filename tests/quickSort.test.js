const quickSort = require('../models/js/quickSort');

test("verifica se os numeros estao sendo retornados ordenados", () => {
    let list = [2, 8, 7, 5, 1, 6, 3, 4]
    expect(quickSort(list)).toStrictEqual([1,2,3,4,5,6,7,8])
})

test("verifica se o tipo de objeto retornado é uma array", () => {
    let list = [2, 8, 7, 5, 1, 6, 3, 4]
    expect(Array.isArray(quickSort(list))).toBe(true)
})
