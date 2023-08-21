import Calculator from './Calculator.js';

class Multiply extends Calculator {
  constructor(x, y) {
    super(x, y);
  }

  multiply() {
    return this.x * this.y;
  }
}

export default Multiply;