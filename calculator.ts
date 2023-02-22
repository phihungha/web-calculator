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
  firstOperand = 0;
  secondOperand: number | null = null;
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

  backspaceDisplay() {
    if (this.currentOp === null && this.display.length === 1) {
      this.display = "0";
    } else {
      this.display = this.display.slice(0, -1);
    }
  }

  startOperation(op: operator) {
    if (this.currentOp === null) {
      this.firstOperand = +this.display;
    }
    this.secondOperand = null;
    this.currentOp = op;
    this.clear();
  }

  calcResult() {
    if (this.currentOp === null || this.display === "")
      return;

    if (this.secondOperand === null) {
      this.secondOperand = +this._display;
    }

    const result = operate(this.firstOperand, this.secondOperand, this.currentOp);
    this.display = result.toString();
    this.firstOperand = result;
  }

  clear() {
    if (this.currentOp !== null) {
      this.display = "";
    } else {
      this.display = "0";
    }
  }

  reset() {
    this.display = "0";
    this.firstOperand = 0;
    this.secondOperand = null;
    this.currentOp = null;
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

document.querySelector(".backspace-btn")?.addEventListener("click", () => {
  calculator.backspaceDisplay();
})

document.querySelector(".ac-btn")?.addEventListener("click", () => {
  calculator.reset();
});