import { reverseStr } from "./reverse.js";
import { capitlize } from "./capitalize.js";
import { Calculator } from "./calculator.js";
import { analyzeArray } from "./analyzeArray.js";
import { ceasarCipher } from "./caesarCipher.js";

test('Reverse String', () =>{
    expect(reverseStr('hello')).toBe('olleh')
})

test('capitalize', ()=>{
    expect(capitlize('hello')).toBe('Hello')
})

test('calculate', ()=>{
    const calculator = Calculator()
    expect(calculator.add(7, 3)).toBe(10)
    expect(calculator.subtract(7, 3)).toBe(4)
    expect(calculator.multiply(7, 3)).toBe(21)
    expect(calculator.divide(6, 3)).toBe(2)
})

test('analyze Array', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4, "min": 1, "max": 8, "length": 6})
})

test('ceasarCipher', ()=>{
    expect(ceasarCipher('xyz', 3)).toBe('abc')
})

test('ceasarCipher', ()=>{
    expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})