const integersCounter = require('../models/js/integersCounter');

test("testa se o contador está funcionando corretamente", () => {
    let values = [10, 2, 5.6, 9, 7.2, 6.9, 8]
    expect(integersCounter(values)).toBe(4)
})

test("testa se o contador conta numeros negativos", () => {
    let values = [-10, -2, 5.6, 9, 7.2, 6.9, 8]
    expect(integersCounter(values)).toBe(4)
})
