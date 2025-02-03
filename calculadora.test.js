const { suma, resta, multiplicacion, division, raizCuadrada } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('Multiplicacion 2 * 5 y devuelve 10', () => {
    expect(multiplicacion(2, 5)).toBe(10);
});

test('Resta 20 / 10 y devuelve 2', () => {
    expect(division(20, 10)).toBe(2);
});

test('Raiz cuadrada de 9 y devuelve 3', () => {
    expect(raizCuadrada(9)).toBe(3);
});