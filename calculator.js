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
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.display = "";
        this.lastOperand = 0;
        this.currentOp = null;
    }
    Calculator.prototype.startOperation = function (op) {
        this.lastOperand = +this.display;
        this.currentOp = op;
    };
    Calculator.prototype.calcResult = function () {
        if (this.currentOp != null) {
            var currentOperand = +this.display;
            var result = operate(this.lastOperand, currentOperand, this.currentOp);
            this.display = result.toString();
        }
    };
    Calculator.prototype.clear = function () {
        this.display = "";
    };
    return Calculator;
}());
