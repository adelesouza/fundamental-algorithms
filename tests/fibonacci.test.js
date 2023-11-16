const fibonacci = require('../models/js/fibonacci');

test("testa se a quantidade de elementos retornados é igual ao valor passado pelo usuario", () => {
    expect(fibonacci(10).length).toBe(10)
})

test("testa se N < 1 retorna algum valor", () => {
    expect(fibonacci(0)).toBe("valor não aceito.")
})
