const one = (operator) => (operator ? operator(1) : 1);
const two = (operator) => (operator ? operator(2) : 2);
const three = (operator) => (operator ? operator(3) : 3);
const four = (operator) => (operator ? operator(4) : 4);
const five = (operator) => (operator ? operator(5) : 5);
const six = (operator) => (operator ? operator(6) : 6);
const seven = (operator) => (operator ? operator(7) : 7);
const eight = (operator) => (operator ? operator(8) : 8);
const nine = (operator) => (operator ? operator(9) : 9);
const zero = (operator) => (operator ? operator(0) : 0);

function plus(operandR) {
  return (operandL) => {
    return operandL + operandR;
  };
}

function minus(operandR) {
  return (operandL) => {
    return operandL - operandR;
  };
}

function times(operandR) {
  return (operandL) => {
    return operandL * operandR;
  };
}

function dividedBy(operandR) {
  return (operandL) => {
    return Math.floor(operandL / operandR);
  };
}

console.log(one(plus(two())));
console.log(eight(minus(three())));
