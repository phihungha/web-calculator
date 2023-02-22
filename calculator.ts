type operator = "+" | "-" | "*" | "/";
type digit = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | ".";

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
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

class Calculator {
  _display = "";
  lastOperand: number | null = null;
  currentOp: operator | null = null;

  constructor() {
    this.display = "0";
  }

  get display() {
    return this._display;
  }

  set display(text) {
    this._display = text;
    (document.querySelector(".display") as HTMLParagraphElement).textContent = this._display;
  }

  enterDisplay(digit: digit) {
    if (digit === "." && this.display.includes(".")) return;
    if (this.display === "0") {
      this.display = digit;
    } else {
      this.display += digit;
    }
  }

  startOperation(op: operator) {
    this.lastOperand = +this.display;
    this.currentOp = op;
    this.clear();
  }

  calcResult() {
    if (this.currentOp !== null && this.lastOperand !== null) {
      const currentOperand = +this._display;
      const result = operate(this.lastOperand, currentOperand, this.currentOp);
      this.display = result.toString();
    }
  }

  clear() {
    if (this.lastOperand !== null) {
      this.display = "";
    } else {
      this.display = "0";
    }
  }
}

const calculator = new Calculator();

document.querySelectorAll(".pad-num-btn").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const btn = e.target as HTMLButtonElement;
    calculator.enterDisplay(btn.textContent as digit);
  });
});

document.querySelectorAll(".pad-op-btn").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const btn = e.target as HTMLButtonElement;
    calculator.startOperation(btn.getAttribute("data-op") as operator);
  });
});

document.querySelector(".pad-calc-btn")?.addEventListener("click", () => {
  calculator.calcResult();
});

document.querySelector(".clear-btn")?.addEventListener("click", () => {
  calculator.clear();
});
