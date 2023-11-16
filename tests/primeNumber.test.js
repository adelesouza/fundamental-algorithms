const primeNumber = require('../models/js/primeNumber');

test("verifica se numeros não inteiros são aceitos", () => {
    expect(primeNumber(3.5)).toBe("valor não aceito.")
})

test("verifica se numeros não positivos são aceitos", () => {
    expect(primeNumber(-3)).toBe("valor não aceito.")
})

