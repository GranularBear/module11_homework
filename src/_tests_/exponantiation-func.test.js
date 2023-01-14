import {powNum} from './math_functions/exponantiation-func';


describe('test powNum func', () => {
    it('0 to the power of 0 equals 1', () => {
        expect(powNum (0, 0)).toBe(1);
    }),
    it('253 to the power of 2 equals 64009', () => {
        expect(powNum(253, 2)).toBe(64009);
    }),
    it('4 to the power of "a" equals NaN', () => {
        expect(powNum(4, "a")).toBe(NaN);
    }),
    it('2 to the power of 9999999 equals Infinity (the 2nd value is too large)', () => {
        expect(powNum(2, 9999999)).toBe(Infinity);
    })
});