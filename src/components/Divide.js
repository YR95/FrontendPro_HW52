import Calculator from './Calculator.js';

class Divide extends Calculator {
  constructor(x, y) {
    super(x, y);
  }

  divide() {
    return this.x / this.y;
  }
}

export default Divide;