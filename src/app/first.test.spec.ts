import { Calculator } from "./first.calculator"

describe('first test calculator', () => {
    it('should add 2 numbers', () => {
        const calculator = new Calculator();
        expect(calculator.add(1, 2)).toBe(3);
    })
    it('should subtract 2 numbers', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(1, 2)).toBe(-1);
    })
    it('should multiply 2 numbers', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(1, 2)).toBe(2);
    })
})