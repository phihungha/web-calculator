type operator = "add" | "subtract" | "multiply" | "divide";

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

function operate(a: number, b: number, op: operator) {
  switch (op) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
}

class Calculator {
  display = "";
  lastOperand = 0;
  currentOp: operator | null = null;

  startOperation(op: operator) {
    this.lastOperand = +this.display;
    this.currentOp = op;
  }

  calcResult() {
    if (this.currentOp != null) {
      const currentOperand = +this.display;
      const result = operate(this.lastOperand, currentOperand, this.currentOp);
      this.display = result.toString();
    }
  }

  clear() {
    this.display = "";
  }
}
