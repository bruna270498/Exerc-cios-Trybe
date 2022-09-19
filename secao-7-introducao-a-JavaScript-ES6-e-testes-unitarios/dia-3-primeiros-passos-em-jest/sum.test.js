const {sum} = require('./sum')
describe('testando as somas', () => {
    test('Testando a soma de 4 e 5 da 9', () => {
        expect(sum(4,5)).toBe(9)
    })
    test('Testando a soma de 0 e 0 da 0', () => {
        expect(sum(0,0)).toBe(0)
    })
    test('Testando se  4 e 5 da string 5', () => {
        expect(() => sum(4,'5')).toThrow()
    })
    test('Testando se  4 e 5 da messagem erro', () => {
        expect(() => sum(4,'5')).toThrow('parameters must be numbers')
    })
})