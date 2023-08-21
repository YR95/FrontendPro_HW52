import Sum from './components/Sum.js';
import Minus from './components/Minus.js';
import Divide from './components/Divide.js';
import Multiply from './components/Multiply.js';


const calculatorSum = new Sum(10, 29);
const calculatorMinus = new Minus(10, 29);
const calculatorDiv = new Divide(10, 29);
const calculatorMult = new Multiply(10, 29);
console.log(
    `sum: ${calculatorSum.sum()}, minus:${calculatorMinus.minus()}, divide: ${calculatorDiv.divide()}, multiply: ${calculatorMult.multiply()}`);