const mdc = require('../models/js/mdc');

test("verifica se o numero retornado divide tanto A quanto B", () => {
    let A = 27
    let B = 81
    const divisor = mdc(A, B)

    expect(A%divisor).toBe(0)
    expect(B%divisor).toBe(0)
})

test("verifica se o numero retornado é um inteiro", () => {
    expect(Number.isInteger(mdc(9,3))).toBe(true)
})
