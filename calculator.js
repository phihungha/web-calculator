var _a, _b, _c, _d;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(a, b, op) {
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
    constructor() {
        this._display = "";
        this.firstOperand = 0;
        this.secondOperand = null;
        this.currentOp = null;
        this.display = "0";
    }
    get display() {
        return this._display;
    }
    set display(text) {
        this._display = text;
        document.querySelector(".display").textContent = this._display;
    }
    enterDisplay(digit) {
        if (digit === "." && this.display.includes("."))
            return;
        if (this.display === "0") {
            this.display = digit;
        }
        else {
            this.display += digit;
        }
    }
    backspaceDisplay() {
        if (this.currentOp === null && this.display.length === 1) {
            this.display = "0";
        }
        else {
            this.display = this.display.slice(0, -1);
        }
    }
    startOperation(op) {
        this.firstOperand = +this.display;
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
        }
        else {
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
        const btn = e.target;
        calculator.enterDisplay(btn.textContent);
    });
});
document.querySelectorAll(".pad-op-btn").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const btn = e.target;
        calculator.startOperation(btn.getAttribute("data-op"));
    });
});
(_a = document.querySelector(".pad-calc-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    calculator.calcResult();
});
(_b = document.querySelector(".clear-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    calculator.clear();
});
(_c = document.querySelector(".backspace-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    calculator.backspaceDisplay();
});
(_d = document.querySelector(".ac-btn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    calculator.reset();
});
