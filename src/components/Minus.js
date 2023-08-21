import Calculator from './Calculator.js';

class Minus extends Calculator {
  constructor(x, y) {
    super(x, y);
  }

  minus() {
    return this.x - this.y;
  }
}

export default Minus;