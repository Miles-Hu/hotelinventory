import { TestBed } from "@angular/core/testing";
import { Calculator } from "./first.calculator"

describe('first test calculator', () => {

    let calculator: Calculator;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      calculator = TestBed.inject(Calculator);
    });

    it('should add 2 numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
    })
    it('should subtract 2 numbers', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    })
    it('should multiply 2 numbers', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    })
})