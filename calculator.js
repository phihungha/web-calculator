var _a, _b;
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
        this.lastOperand = null;
        this.currentOp = null;
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
    startOperation(op) {
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
        }
        else {
            this.display = "0";
        }
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
